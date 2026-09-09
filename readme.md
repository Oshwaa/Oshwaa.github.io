# Portfolio

[https://Oshwaa.github.io](https://Oshwaa.github.io)

Built with Next.js (static export) + Tailwind CSS, deployed via GitHub Actions to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is generated in `out/`. Pushing to `main` builds and deploys automatically via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Content (experience, projects, skills) lives in [src/lib/data.ts](src/lib/data.ts) — edit that file to update the site.
