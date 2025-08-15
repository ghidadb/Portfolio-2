# React Portfolio (Vite + TypeScript)

## Quick Start
```bash
npm install
# create .env and add: VITE_OPENWEATHER_KEY=your_api_key
npm run dev
```

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview build
- `npm run deploy` — deploy to GitHub Pages (set `GITHUB_PAGES=1` env and update repo URL)

## Notes
- Header & Footer appear on all pages via `Layout`.
- Theme toggling stored in localStorage.
- Weather history stored in Redux and localStorage.
- Project pages are lazy-loaded for performance.
