# SchengenVisaPhotoCom — marketing site

GitHub Pages (pending first push): **https://peterjiajunzhang.github.io/SchengenVisaPhotoCom/**

| Path | Purpose |
|------|---------|
| `index.html` | Landing; App Store CTA is a **"Coming soon"** badge — swap in the App Store link once Connect assigns an Apple ID |
| `privacy.html` | Privacy policy (linked from App Store Connect) |
| `sitemap.xml` / `robots.txt` | SEO |
| `demos/` | Real export examples (5 diverse people, JPEG results) shown in the landing page's "Real exports" wall |
| `screenshots/` | Real device screenshots (473×1024) — `01-home`, `02-checklist`, `04-paywall`, `05-exported`, `06-saved-photos`, `07-languages` |
| `marketing/xiaohongshu-schengen/` | Xiaohongshu post previews & export scripts |
| `marketing/appstore-schengen/` | App Store screenshot campaign (7-slide, 1284×2778) previews & export scripts |

**Status:** the iOS app has not shipped yet (no Apple ID). Landing page, App Store campaign, and screenshots are complete with real device captures. Only the App Store link itself is a placeholder.

## Before submitting to App Store Connect

1. Once `SchengenVisaPhoto/Info.plist`'s `AppStoreAppleID` is filled in (after Connect creates the record), update the hero/footer CTA in `index.html` from the "Coming soon" badge to a real `https://apps.apple.com/app/id<id>` link (same pattern as `ChinaVisaPhotoCom/index.html`).
2. If the app UI changes before launch, recapture screenshots into `screenshots/` (same 6 filenames) and re-run `cd marketing/appstore-schengen && npm run export`.
3. The xiaohongshu deck (`marketing/xiaohongshu-schengen/`) still uses graphic/text cards rather than real screenshots — see that folder's README for how to upgrade it once you want to refresh the campaign.

**iOS app repo:** [VisaPhotoApps](https://github.com/peterjiajunzhang/VisaPhotoApps) — scheme `SchengenVisaPhoto`.

Clone on a new machine:

```bash
git clone https://github.com/peterjiajunzhang/SchengenVisaPhotoCom.git
git clone https://github.com/peterjiajunzhang/VisaPhotoApps.git
```

Open **`VisaPhotoApps/README.md`** for full workstation setup.
