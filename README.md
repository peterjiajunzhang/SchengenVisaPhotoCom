# SchengenVisaPhotoCom — marketing site

Live site: **https://schengen.visaphoto1tap.com/**

| Path | Purpose |
|------|---------|
| `index.html` | Landing with live iPhone App Store download |
| `privacy.html` | Privacy policy (linked from App Store Connect) |
| `france-visa-photo/`, `germany-visa-photo/`, `spain-visa-photo/` and the same under `zh-hans/` | Country landing pages (English + Simplified Chinese, hreflang pairs, x-default = English). Each page cites the official page checked on 2026-11-17; re-check before editing facts. |
| `sitemap.xml` / `robots.txt` | SEO |
| `demos/` | Real export examples (5 diverse people, JPEG results) shown in the landing page's "Real exports" wall |
| `screenshots/` | Real device screenshots (473×1024) — `01-home`, `02-checklist`, `04-paywall`, `05-exported`, `06-saved-photos`, `07-languages` |
| `VisaPhotoApps/Marketing/Schengen/xiaohongshu/` | Xiaohongshu post previews & export scripts |
| `VisaPhotoApps/Marketing/Schengen/appstore/` | App Store screenshot campaign (7-slide, 1284×2778) previews & export scripts |


**iOS app repo:** [VisaPhotoApps](https://github.com/peterjiajunzhang/VisaPhotoApps) — scheme `SchengenVisaPhoto`.

Clone on a new machine:

```bash
git clone https://github.com/peterjiajunzhang/SchengenVisaPhotoCom.git
git clone https://github.com/peterjiajunzhang/VisaPhotoApps.git
```

Open **`VisaPhotoApps/README.md`** for full workstation setup.

## Static CSS, icons and images

The homepage and privacy policy no longer load Tailwind or Lucide at runtime. The only third-party script left is the Cloudflare Web Analytics beacon.

- **CSS**: `assets/tailwind.css` is prebuilt with Tailwind CSS v3.4.17 from `index.html`, `privacy.html` and the country pages, using `tailwind.config.cjs` (the theme that used to be inline in the page) and `assets/tailwind.input.css`. After changing any class in `index.html` or `privacy.html`, rebuild it and commit the output:

  ```bash
  npx tailwindcss@3.4.17 -c tailwind.config.cjs -i assets/tailwind.input.css -o assets/tailwind.css --minify
  ```

- **Icons**: Lucide icons are inline `<svg>` in `index.html`. Licence: `assets/licenses/lucide.txt` (ISC).
- **App icons**: `assets/icons/*.webp` are resized copies of each app's `AppIcon.png`, the same files the US site uses; see `assets/icons/provenance.json`. `AppIcon.png` stays as the favicon and social image.
- **Images**: PNG or JPG files over about 300 kB have a WebP copy next to them, and the page uses the WebP. The originals stay in the repo. Images below the fold use `loading="lazy"` and have their real `width`/`height`.

## 2026-11-17 website update

The homepage now describes the app’s actual checks and background replacement. It identifies the European Commission’s 29 Schengen members separately from the app’s additional Cyprus destination and generic preset. France, Germany and Spain keep their English and Simplified Chinese counterparts and share the same iPhone campaign as the homepage. The previous copy used compliant and conflated destination counts. Source: European Commission membership page and the app repository’s Schengen matrix.

The iPhone download buttons share the App Store Connect campaign `schengen-website-20261117` with the matching Visa Photo 1-Tap links. The provider token is the one issued for this developer account. The structured app listing URL remains clean.
