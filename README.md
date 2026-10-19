# Medicine Visual Story

Responsive Vite/React website presenting two connected medicine-donation datasets:

- 27 community medicine redistribution visualizations
- 27 Pharma company donation visualizations

The site includes dataset switching, tailored interpretations, filters, fullscreen viewing and PNG downloads.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploying to Vercel

Upload or import this folder as the project root. Vercel should detect Vite automatically.

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Visualization assets are stored in:

- `public/visualizations/`
- `public/pharma-visualizations/`
