# Sachin Sarcoma Society: research dashboards

A responsive Vite/React site presenting two Sachin Sarcoma Society projects. The landing page shows one tile per project.

1. **Digital reach-outs as a window into sarcoma navigation needs, diagnostic gaps and psychological support delivered by patient-led organization** (`#/digital-reachouts`)
   - 31 visualizations of 53 website and email enquiries, with the project background, methods, results and conclusion.
2. **Optimizing resource utilization in oncology: A patient-to-patient medication redistribution model to reduce financial toxicity and medication waste** (Project Efficiency, `#/project-efficiency`)
   - **Community / Patient to Patient** (`#/project-efficiency/community`): 54 visualizations (27 overview charts plus 27 in-depth charts)
   - **Pharma / Pharma Companies to Patients** (`#/project-efficiency/pharma`): 27 visualizations

Each dashboard has KPIs, key insights, category filters, search, hover takeaways and a full-screen interpretation view with PNG downloads.

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

Import this repository as the project root. Vercel detects Vite automatically.

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

Visualization assets:

- `public/reachout-visualizations/`: Digital Reach-outs charts
- `public/visualizations/`: Community charts (`medicine_viz_*` and `medicine_ken_viz_*`)
- `public/pharma-visualizations/`: Pharma charts
- `public/thumbs/`: WebP thumbnails used in the chart grids
