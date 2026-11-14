# SchengenVisaPhotoCom — marketing site

Live site: **https://schengen.visaphoto1tap.com/**

| Path | Purpose |
|------|---------|
| `index.html` | Landing; App Store CTA is a **"Coming soon"** badge — swap in the App Store link once Connect assigns an Apple ID |
| `privacy.html` | Privacy policy (linked from App Store Connect) |
| `sitemap.xml` / `robots.txt` | SEO |
| `demos/` | Real export examples (5 diverse people, JPEG results) shown in the landing page's "Real exports" wall |
| `screenshots/` | Real device screenshots (473×1024) — `01-home`, `02-checklist`, `04-paywall`, `05-exported`, `06-saved-photos`, `07-languages` |
| `VisaPhotoApps/Marketing/Schengen/xiaohongshu/` | Xiaohongshu post previews & export scripts |
| `VisaPhotoApps/Marketing/Schengen/appstore/` | App Store screenshot campaign (7-slide, 1284×2778) previews & export scripts |

**Status:** the iOS app has not shipped yet (no Apple ID). Landing page, App Store campaign, and screenshots are complete with real device captures. Only the App Store link itself is a placeholder.

## Before submitting to App Store Connect

1. Once `SchengenVisaPhoto/Info.plist`'s `AppStoreAppleID` is filled in (after Connect creates the record), update the hero/footer CTA in `index.html` from the "Coming soon" badge to a real `https://apps.apple.com/app/id<id>` link (same pattern as `ChinaVisaPhotoCom/index.html`).
2. If the app UI changes before launch, recapture screenshots into `screenshots/` (same 6 filenames) and re-run `cd VisaPhotoApps/Marketing/Schengen/appstore && npm run export`.
3. The xiaohongshu deck (`VisaPhotoApps/Marketing/Schengen/xiaohongshu/`) still uses graphic/text cards rather than real screenshots — see that folder's README for how to upgrade it once you want to refresh the campaign.

**iOS app repo:** [VisaPhotoApps](https://github.com/peterjiajunzhang/VisaPhotoApps) — scheme `SchengenVisaPhoto`.

Clone on a new machine:

```bash
git clone https://github.com/peterjiajunzhang/SchengenVisaPhotoCom.git
git clone https://github.com/peterjiajunzhang/VisaPhotoApps.git
```

Open **`VisaPhotoApps/README.md`** for full workstation setup.

## Static CSS, icons and images

The homepage no longer loads Tailwind or Lucide at runtime. The only third-party script left is the Cloudflare Web Analytics beacon.

- **CSS**: `assets/tailwind.css` is prebuilt with Tailwind CSS v3.4.17 from `index.html`, using `tailwind.config.cjs` (the theme that used to be inline in the page) and `assets/tailwind.input.css`. After changing any class in `index.html`, rebuild it and commit the output:

  ```bash
  npx tailwindcss@3.4.17 -c tailwind.config.cjs -i assets/tailwind.input.css -o assets/tailwind.css --minify
  ```

- **Icons**: Lucide icons are inline `<svg>` in `index.html`. Licence: `assets/licenses/lucide.txt` (ISC).
- **App icons**: `assets/icons/*.webp` are resized copies of each app's `AppIcon.png`, the same files the US site uses; see `assets/icons/provenance.json`. `AppIcon.png` stays as the favicon and social image.
- **Images**: PNG or JPG files over about 300 kB have a WebP copy next to them, and the page uses the WebP. The originals stay in the repo. Images below the fold use `loading="lazy"` and have their real `width`/`height`.
