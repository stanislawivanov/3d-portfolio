// ── DATA ──────────────────────────────────────────────────────────
// Skills are fetched from skills.json (works on GitHub Pages).
// Projects are fetched from projects.json.

const SKILLS_FALLBACK = [
   "Unreal Engine",
   "Real-time Rendering",
   "Lighting & Sequencing",
   "Environment Design",
   "Look Development",
   "3D Scene Design",
   "Camera Animation",
   "FX & Chaos Destruction",
   "Generative AI (ComfyUI)",
   "Cinematic Composition"
];

async function loadAndRenderSkills() {
   let skills = SKILLS_FALLBACK;
   try {
      const res = await fetch("skills.json");
      if (res.ok) skills = await res.json();
   } catch (e) {}

   const track = document.getElementById("skillsList");
   track.innerHTML = "";

   // Render 4x for a long seamless loop
   [...skills, ...skills, ...skills, ...skills].forEach(skill => {
      const item = document.createElement("div");
      item.className = "skill-item";
      item.textContent = skill;
      track.appendChild(item);
   });

   // JS-driven animation — works locally and on GitHub Pages
   let pos = 0;
   const itemHeight = 46; // px per item (height + gap)
   const totalItems = skills.length;

   function animate() {
      pos += 0.1;
      // Reset when we've scrolled exactly one full set
      if (pos >= itemHeight * totalItems) pos = 0;
      track.style.transform = `translateY(-${pos}px)`;
      requestAnimationFrame(animate);
   }
   animate();
}

async function loadAndRenderProjects() {
   const res = await fetch("projects.json");
   const projects = await res.json();

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
   const track = document.getElementById("themeToggle");
   const saved = localStorage.getItem("theme") || "light";

   function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
         track.classList.add("on");
      } else {
         track.classList.remove("on");
      }
   }

   applyTheme(saved);

   track.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
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

// ── TYPING ANIMATION ───────────────────────────────────────────────
function initTypingAnimation() {
   const el = document.querySelector(".tagline");
   const text = el.textContent.trim();
   el.textContent = "";
   el.style.opacity = 1;

   let i = 0;
   function type() {
      if (i < text.length) {
         el.textContent += text[i];
         i++;
         setTimeout(type, 40);
      }
   }

   // Small delay so it starts after the name has faded in
   setTimeout(type, 600);
}


// ── SCROLL PROGRESS BAR ────────────────────────────────────────────
function initScrollProgress() {
   const fill = document.getElementById("scrollFill");

   window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      fill.style.height = progress + "%";
   });
}


// ── STICKY NAV ─────────────────────────────────────────────────────
function initStickyNav() {
   const nav = document.querySelector("nav");
   const navOffsetTop = nav.getBoundingClientRect().top + window.scrollY;

   window.addEventListener("scroll", () => {
      if (window.scrollY >= navOffsetTop) {
         nav.classList.add("sticky");
         document.body.style.paddingTop = nav.offsetHeight + "px";
      } else {
         nav.classList.remove("sticky");
         document.body.style.paddingTop = "0";
      }
   });
}


// ── INIT ───────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
   await loadAndRenderSkills();
   await loadAndRenderProjects();
   initThemeToggle();
   initTypingAnimation();
   initScrollProgress();
   initStickyNav();
   initScrollReveal();
});
