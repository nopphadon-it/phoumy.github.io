# Phoumy Sisavath — Portfolio

Minimal personal portfolio for a Backend Developer / DevOps Engineer.

Live site: https://nopphadon-it.github.io/phoumy.github.io/

## Develop

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

Build and publish the production files to the `gh-pages` branch:

```bash
npm run deploy
```

Then in the GitHub repo: **Settings → Pages → Source → Deploy from a branch → `gh-pages` / `/ (root)`**.

Do not point Pages at `main` — that serves the Vite source `index.html` and will break.

Content lives in `src/data/content.ts` and `about-me.txt`.
