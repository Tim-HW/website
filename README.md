# timothee-freville · personal website

Personal website of **Timothée Fréville**, Computer Vision Engineer (SLAM, autonomous perception, embedded deep learning).

Built with [Vite](https://vitejs.dev), [Tailwind CSS](https://tailwindcss.com), [GSAP](https://gsap.com) and [Lenis](https://lenis.darkroom.engineering).

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Editing content

| What | Where |
| --- | --- |
| All text, projects, journey, publications, links | `index.html` |
| Portrait and project images | `public/portrait.jpg`, `public/images/` |
| Colours, fonts, publication list styles | `src/main.css` |
| Animations, typewriter phrases, chronometer start date | `src/main.js` |

To add a project, copy one of the `work-item` cards in `index.html` (alternate the light/dark card styles) and drop its image in `public/images/`.

## Deployment (GitHub Pages)

1. Create a repository named **`Tim-HW.github.io`** and push this folder to its `main` branch.
2. In the repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Each push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it at <https://tim-hw.github.io>.

The build uses relative asset paths (`base: './'`), so it also works from a project sub-path such as `tim-hw.github.io/website/`.

## Credits

Based on the MIT-licensed [Portfolio-Site](https://github.com/dnuzi/Portfolio-Site) template by Kelum'Xz & Danu'Zz (see `LICENSE`).
