// ── DATA ──────────────────────────────────────────────────────────
// Project cards are generated from this JSON data
const projects = [
   {
      title: "CS2 with RTX ON",
      description: "A cinematic reimagining of CS2 focused on realism, lighting, and high-end visual quality using Unreal Engine.",
      tag: "Cinematic",
      videoId: "jq0Mp5ZscS4"
   },
   {
      title: "CS2, but it's a Hollywood Blockbuster",
      description: "A stylized cinematic project inspired by Michael Bay movies — big explosions, dramatic cuts, and over-the-top energy.",
      tag: "Stylized",
      videoId: "ZSiaKf5X8Wg"
   },
   {
      title: "CS2, but you are detached from reality",
      description: "A surreal and atmospheric piece exploring dreamlike visuals and experimental storytelling within a CS2-inspired world.",
      tag: "Experimental",
      videoId: "kl4_USgMafE"
   }
];

// Skills data loaded from JavaScript (dynamic skill rendering)
const skills = [
   "Unreal Engine",
   "Real-time Rendering",
   "Lighting & Composition",
   "3D Modeling",
   "Scene Design",
   "Cinematic Visuals"
];


// ── RENDER SKILLS ──────────────────────────────────────────────────
function renderSkills() {
   const list = document.getElementById("skillsList");
   skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      list.appendChild(li);
   });
}


// ── RENDER PROJECTS ────────────────────────────────────────────────
function renderProjects() {
   const grid = document.getElementById("projectGrid");
   projects.forEach((project, i) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.style.animationDelay = `${i * 0.1}s`;
      card.innerHTML = `
         <span class="tag">${project.tag}</span>
         <h3>${project.title}</h3>
         <p>${project.description}</p>
         <iframe
            src="https://www.youtube.com/embed/${project.videoId}"
            title="${project.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
         </iframe>
      `;
      grid.appendChild(card);
   });
}


// ── DARK MODE TOGGLE ───────────────────────────────────────────────
function initThemeToggle() {
   const toggle = document.getElementById("themeToggle");
   const icon = toggle.querySelector(".toggle-icon");
   const saved = localStorage.getItem("theme") || "dark";

   document.documentElement.setAttribute("data-theme", saved);
   icon.textContent = saved === "dark" ? "☀" : "☾";

   toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      icon.textContent = next === "dark" ? "☀" : "☾";
   });
}


// ── SCROLL REVEAL ANIMATIONS ───────────────────────────────────────
function initScrollReveal() {
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add("visible");
         }
      });
   }, { threshold: 0.1 });

   document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}


// ── VISITOR COUNTER ────────────────────────────────────────────────
// Uses the free countapi.dev service — no account needed
async function initVisitorCounter() {
   const el = document.getElementById("visitorCount");
   try {
      // Replace "murasakie-portfolio" with any unique key you want
      const res = await fetch("https://api.countapi.xyz/hit/murasakie-portfolio/visits");
      const data = await res.json();
      el.textContent = data.value.toLocaleString();
   } catch {
      el.textContent = "—";
   }
}


// ── INIT ───────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
   renderSkills();
   renderProjects();
   initThemeToggle();
   initScrollReveal();
   initVisitorCounter();
});
