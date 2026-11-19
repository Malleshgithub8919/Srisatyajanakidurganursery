# Sri Satyajanaki Durga Nursery – Website Starter

This is a React + Vite starter project for the nursery website.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
1. Extract this ZIP.
2. Open the extracted folder in VS Code.
3. Open Terminal in the project folder.
4. Run:

   ```bash
   npm ci
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

## Before publishing
1. Open `src/config/business.js`.
2. Verify the nursery WhatsApp number, name and address in `src/config/business.js`.
4. Review `src/data/plants.js`: confirm each plant name, Telugu name, scientific name, category, care details and photo.
5. Add actual nursery photographs and ensure you have permission to use every image.
6. Verify WhatsApp links on a real phone.
7. Run `npm run build` and fix any errors before deployment.

## Deploy to Vercel
- Import the repository root (the folder containing `package.json`).
- Use the Vite framework preset, `npm ci` for installation, `npm run build` for the build, and `dist` as the output directory.
- Select Node.js 22.x in the Vercel project settings.
- `vercel.json` configures the same build settings and routes client-side React Router URLs to the SPA entrypoint.
- If npm reports an unknown `cache-dir` environment setting, remove `npm_config_cache_dir` from the Vercel environment variables. npm's supported setting is `npm_config_cache`.

## Current project scope
- Responsive React website scaffold
- Home, About, Plants, Plant Details, Gardening, Gallery, FAQs, Blog, Order Form and Contact routes
- Starter category and plant data
- Search and category filter
- Plant catalogue search across English, Telugu and scientific names, with category filters
- Searchable FAQ categories with keyboard-accessible accordions
- Searchable, category-filtered gardening blog with six full articles, related links and per-article SEO metadata
- Plant-specific WhatsApp enquiry with quantity
- Customer order form that sends order details to WhatsApp
- WhatsApp contact entry points

## Important
- The sample catalogue is not a confirmed inventory.
- Sample images are external illustrative image URLs; they are not verified photos of the nursery or guaranteed exact cultivar images.
- The nursery WhatsApp number and address are populated from the supplied business listing; verify them before publishing.
- No backend, database, admin panel, live inventory sync or payment system is included in this starter ZIP.
