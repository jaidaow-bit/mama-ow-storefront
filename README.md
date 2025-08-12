# Mama Ow Storefront

## Run locally
```bash
npm install
# optional: export NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
npm run dev
```

## Production build
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Create a Vercel account and click **New Project**.
2. Import this project from GitHub or upload as a ZIP.
3. (Optional) Set env var `NEXT_PUBLIC_GA_ID` for GA4.
4. Deploy.

## Tech
- Next.js 14 (App Router)
- Tailwind CSS with PB&J palette
- Zustand cart state
- GA4 events: `add_to_cart`, `begin_checkout`, `purchase`

Mama Ow — Warm, heartfelt peanut butter made with love by Jaida Ow’s family. Naturally sweet from roasted peanuts — no sugar, no salt, no preservatives.
