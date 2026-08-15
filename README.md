# Rohan Girase — Portfolio

A modern, dark-themed UI/UX & Product Designer portfolio built with **React + Vite + Framer Motion**.

## ✨ Features

- Draggable polaroid photo cards on the hero section
- Mouse-tracked 3D rotating photo cube (About section)
- Fan-hover glass skill cards (Skills section)
- Vertical carousel for projects & publications (Work section)
- Interactive cert cards with lightbox viewer (Certifications section)
- Custom cursor + scroll progress bar
- Resume download button
- GitHub Pages auto-deploy via GitHub Actions

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Framer Motion 11 | Animations |
| Vanilla CSS | Styling |
| Tailwind CDN | Utility classes (cert cards) |

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🌐 GitHub Pages Deployment

This project auto-deploys to GitHub Pages via GitHub Actions on every push to `main`.

### Setup Steps
1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Push to `main` — the site deploys automatically

> **Note:** If deploying to a sub-path (e.g. `username.github.io/portfolio`), update `base` in `vite.config.js`:
> ```js
> base: '/portfolio/'
> ```

## 📁 Project Structure

```
public/
  images/          # All photos and certificate images
  rohan_girase.pdf # Resume PDF
src/
  components/      # All React components
  index.css        # Global styles & design tokens
  App.jsx          # Root component
  main.jsx         # Entry point
```

## 📬 Contact

**Rohan Girase** · UI/UX & Product Designer · Pune, India  
[giraserohan90@gmail.com](mailto:giraserohan90@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/rohan-girase-7102ab256)
