# Stanislav Ivanov — 3D Artist Portfolio

A personal portfolio website for Stanislav "murasakie" Ivanov, a 3D artist specializing in cinematic visuals and real-time rendering in Unreal Engine.

🌐 **Live site:** [stanislawivanov.github.io/3d-portfolio](https://stanislawivanov.github.io/3d-portfolio)

---

## About the Project

This portfolio was built as part of a Web Development course project. The goal was to design and deploy a fully functional personal website that showcases creative work while demonstrating core web development concepts.

The site is built with plain HTML, CSS, and vanilla JavaScript — no frameworks or build tools required. It is hosted for free on GitHub Pages.

---

## Sections

- **Header** — Name, title, animated tagline, and sticky navigation
- **About** — Showreel video, bio, and vertically scrolling skills list
- **Clients** — Horizontally scrolling client logo strip
- **Projects** — Dynamically rendered project cards loaded from JSON
- **Contact** — Email, YouTube link, and a working contact form
- **Footer** — Copyright

---

## Features

### JavaScript Interactions
- **Dark / Light mode toggle** — switches between a black & red dark theme and a blue & cream light theme, with preference saved to localStorage
- **Typing animation** — tagline types itself out on page load
- **Scroll progress bar** — vertical indicator on the right edge of the screen
- **Sticky navigation** — nav locks to the top of the screen after scrolling past the header
- **Scroll reveal animations** — sections fade in as they enter the viewport
- **Infinite vertical skills scroll** — skills list loops endlessly using requestAnimationFrame
- **Contact form validation** — inline error messages with live field validation

### Dynamic Data
- **Projects** loaded from `projects.json` — cards are generated dynamically by JavaScript
- **Skills** loaded from `skills.json` — skill items are generated and animated dynamically
- No project or skill content is hardcoded in the HTML

### Contact Form
- Powered by **Web3Forms** — submissions are sent directly to email
- Client-side validation before submission
- Loading state on the submit button during sending
- Success confirmation message on submission

---

## File Structure

```
3d-portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling, themes, animations
├── script.js           # All JavaScript functionality
├── projects.json       # Project data source
├── skills.json         # Skills data source
├── README.md           # This file
└── images/
    ├── client1.png
    ├── client2.png
    └── client3.png
```

---

## Technologies Used

- HTML5
- CSS3 (custom properties, animations, grid, flexbox)
- Vanilla JavaScript (ES6+, Fetch API, IntersectionObserver, requestAnimationFrame)
- [Web3Forms](https://web3forms.com) — contact form backend
- [Vimeo](https://vimeo.com) — showreel embed
- YouTube embed API — project video embeds
- GitHub Pages — hosting

---

## Running Locally

Open with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code for full functionality (JSON fetching, video embeds). Opening `index.html` directly in a browser will not load skills or projects correctly due to browser security restrictions on local file fetching.

---

*© 2026 Stanislav Ivanov. All rights reserved.*
