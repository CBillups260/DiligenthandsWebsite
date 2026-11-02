#!/usr/bin/env python3
"""
Optimize images in public/images for the web.

Run from the repo root after adding new photos:

    python3 scripts/optimize-images.py public/images/team/newbarber.jpg

With no arguments it re-optimizes every source image it can find.
Output is WebP next to the source, with a lowercase-hyphenated name.

IMPORTANT: phone cameras store rotation in an EXIF tag rather than
rotating the pixels. Browsers honour that tag on JPEG, but the tag does
not survive re-encoding, so the pixels must be rotated at conversion
time. That is what exif_transpose() below does. Leaving it out makes
portrait photos render sideways on the site -- this happened once with
Scotty's gallery.
"""
import os
import re
import sys
import unicodedata

from PIL import Image, ImageOps

BASE = "public/images"
SOURCE_EXT = (".png", ".jpg", ".jpeg")


def slug(name):
    """lowercase-hyphenated, no spaces or narrow no-break spaces in URLs."""
    stem, _ = os.path.splitext(name)
    stem = unicodedata.normalize("NFKD", stem)
    stem = stem.replace(" ", " ").replace(" ", " ")
    stem = re.sub(r"[^A-Za-z0-9]+", "-", stem).strip("-").lower()
    return re.sub(r"-+", "-", stem)


def policy(rel):
    """(max long edge, quality) by how the image is used on the site."""
    r = rel.lower()
    if "team/" in r and "/tyrone/" not in r:
        return 800, 82           # headshots
    if "hero" in r or "herbg" in r:
        return 2048, 80          # full-bleed backgrounds
    if "og-image" in r:
        return 1200, 85          # link preview
    if "barbershop" in r or "view" in r:
        return 1800, 80          # section backgrounds
    return 1400, 80              # galleries and lightbox


def optimize(src):
    rel = os.path.relpath(src, BASE)
    d, n = os.path.split(rel)
    out_rel = (slug(d) + "/" if d else "") + slug(n) + ".webp"
    dst = os.path.join(BASE, re.sub(r"/+", "/", out_rel))
    os.makedirs(os.path.dirname(dst), exist_ok=True)

    im = Image.open(src)
    im = ImageOps.exif_transpose(im)   # rotate pixels per EXIF -- do not remove
    im = im.convert("RGB")

    max_edge, quality = policy(rel)
    w, h = im.size
    scale = min(1.0, float(max_edge) / max(w, h))
    if scale < 1.0:
        im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

    im.save(dst, "WEBP", quality=quality, method=6)
    return dst, os.path.getsize(src), os.path.getsize(dst)


def main():
    targets = sys.argv[1:]
    if not targets:
        for root, _, files in os.walk(BASE):
            for f in files:
                if f.lower().endswith(SOURCE_EXT):
                    targets.append(os.path.join(root, f))

    before = after = 0
    for src in sorted(targets):
        dst, b, a = optimize(src)
        before += b
        after += a
        print("  %-52s %6.0f KB -> %5.0f KB" % (os.path.relpath(dst, BASE), b / 1024.0, a / 1024.0))

    if before:
        print("\n%d images: %.1f MB -> %.1f MB (%.0f%% smaller)"
              % (len(targets), before / 1048576.0, after / 1048576.0,
                 100 * (1 - after / float(before))))


if __name__ == "__main__":
    main()
