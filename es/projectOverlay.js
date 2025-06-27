// projectOverlay.js
// Modern, advanced overlay for project cards with language support

document.addEventListener("DOMContentLoaded", function () {
  // Wait for DOM and also for all images and dynamic content
  function initOverlay() {
    // Always use the English class name for project container
    let projects = document.querySelectorAll(".projects-container .project");
    if (!projects.length) {
      setTimeout(initOverlay, 200);
      return;
    }
    const overlay = document.createElement("div");
    overlay.className = "custom-project-overlay";
    overlay.style.display = "none";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(20,24,31,0.55)";
    overlay.style.zIndex = "2000";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.transition = "opacity 0.3s";
    overlay.innerHTML = `
      <div class="overlay-content" style="
        background: rgba(255,255,255,0.97); 
        max-width: 750px; width: 96vw; padding: 0 0 2.5rem 0; border-radius: 32px; 
        box-shadow: 0 8px 48px 0 #0003, 0 1.5px 8px #0001; 
        position: relative; text-align: left; min-height: 440px; 
        overflow: hidden; display: flex; flex-direction: column; align-items: stretch;
        backdrop-filter: blur(22px) saturate(1.1);
        animation: overlayPopIn 0.4s cubic-bezier(.6,-0.28,.74,.05) 1;
      ">
        <div style="height: 8px; width: 100%; background: #e5e5e5; margin-bottom: 1.5rem;"></div>
        <button class="close-overlay" style="position:absolute;top:1.2rem;right:1.2rem;background:rgba(255,255,255,0.7);border:none;font-size:2.2rem;cursor:pointer;border-radius:50%;width:44px;height:44px;box-shadow:0 2px 8px #0001;transition:background 0.2s;z-index:2;display:flex;align-items:center;justify-content:center;">
          <span style="font-weight:700;line-height:1;">&times;</span>
        </button>
        <div style="display:flex;gap:2.2rem;align-items:flex-start;flex-wrap:wrap;padding:0 2.2rem;">
          <img class="overlay-img" src="" alt="Project image" style="width:220px;max-height:220px;object-fit:cover;border-radius:18px;box-shadow:0 2px 16px #0001;margin-bottom:1.2rem;flex-shrink:0;background:#f5f7fa;" />
          <div style="flex:1;min-width:220px;display:flex;flex-direction:column;align-items:flex-start;">
            <h2 class="overlay-title" style="font-size:2.3rem;margin:0 0 0.5rem 0;font-weight:800;color:#222;letter-spacing:-1px;"></h2>
            <p class="overlay-desc" style="font-size:1.15rem;margin:0 0 1.2rem 0;color:#444;line-height:1.6;"></p>
            <div class="overlay-tech" style="margin-bottom:1.2rem;font-size:1rem;font-weight:600;"><span style="color:#222;font-weight:700;">Tecnologías:</span> <span class="tech-list">-</span></div>
            <div class="overlay-features" style="margin-bottom:1.2rem;width:100%;"><span style="color:#222;font-weight:700;">Características clave:</span>
              <ul class="feature-list" style="margin:0 0 0 1.2rem;padding:0;color:#444;font-size:1rem;line-height:1.7;"></ul>
            </div>
            <a class="overlay-link" href="#" target="_blank" style="display:inline-block;margin-top:0.5rem;padding:0.7rem 1.5rem;background:#222;color:#fff;font-weight:700;border-radius:8px;text-decoration:none;box-shadow:0 2px 8px #0001;transition:background 0.2s;">Ver Proyecto</a>
          </div>
        </div>
      </div>
      <style>
        @keyframes overlayPopIn {0%{transform:scale(0.92) translateY(40px);opacity:0;}100%{transform:scale(1) translateY(0);opacity:1;}}
        .custom-project-overlay {animation: fadeInBg 0.3s;}
        @keyframes fadeInBg {from{opacity:0;}to{opacity:1;}}
        .close-overlay:hover {background:rgba(0,0,0,0.08)!important;}
      </style>
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".close-overlay");
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
      overlay.style.opacity = "0";
    });

    // Spanish data for overlays
    const techs = [
      ["React, Node.js", "Web adaptable, Styled Components"],
      ["HTML, CSS, JS", "Figma, Diseño adaptable"],
      ["React, Firebase", "Socket.io, Tiempo real"],
      ["Vue.js, Chart.js", "Integración API"],
      ["OpenWeatherMap API, JS", "Geolocalización"],
      ["Next.js, Markdown", "Temas personalizados"],
      ["React, Redux", "Chart.js, LocalStorage"],
      ["React, Socket.io", "Node.js, MongoDB"],
    ];
    const features = [
      [
        "Autenticación de usuarios",
        "Búsqueda de productos",
        "Carrito de compras",
        "Seguimiento de pedidos",
      ],
      ["Galería de portafolio", "Formulario de contacto", "Adaptado a móviles"],
      [
        "Asignación de tareas",
        "Actualizaciones en tiempo real",
        "Colaboración en equipo",
      ],
      ["Analítica social", "Paneles personalizados", "Exportar informes"],
      ["Clima en vivo", "Pronóstico por ubicación", "Interfaz limpia"],
      ["Editor Markdown", "Temas personalizados", "SEO optimizado"],
      [
        "Seguimiento de gastos",
        "Planificación de presupuesto",
        "Visualización de datos",
      ],
      ["Chat grupal", "Mensajería privada", "Notificaciones"],
    ];
    const titles = [
      "Plataforma de Comercio Electrónico",
      "Sitio Web de Portafolio",
      "App de Gestión de Tareas",
      "Panel de Redes Sociales",
      "Aplicación del Clima",
      "Plataforma de Blog",
      "Rastreador de Finanzas",
      "Aplicación de Chat",
    ];
    const descs = [
      "Una plataforma de compras en línea con todas las funciones, construida con React y Node.js.",
      "Sitio web de portafolio adaptable que muestra trabajos creativos y habilidades.",
      "Aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real.",
      "Panel de análisis para el seguimiento del rendimiento en redes sociales.",
      "App de seguimiento del clima en tiempo real con pronósticos basados en ubicación.",
      "Plataforma de blogs moderna con soporte para markdown y temas personalizados.",
      "Rastreador de finanzas personales para presupuestos y gestión de gastos.",
      "App de chat en tiempo real con funciones de grupo y mensajes privados.",
    ];
    const links = ["#", "#", "#", "#", "#", "#", "#", "#"];

    projects.forEach((project, idx) => {
      project.setAttribute("data-project-idx", idx);
      project.addEventListener("click", function () {
        const img = project.querySelector("img").getAttribute("src");
        overlay.querySelector(".overlay-img").src = img;
        overlay.querySelector(".overlay-title").textContent = titles[idx] || "";
        overlay.querySelector(".overlay-desc").textContent = descs[idx] || "";
        overlay.querySelector(".tech-list").textContent = techs[idx]
          ? techs[idx][0]
          : "-";
        const featureList = overlay.querySelector(".feature-list");
        featureList.innerHTML = "";
        (features[idx] || []).forEach((f) => {
          const li = document.createElement("li");
          li.textContent = f;
          featureList.appendChild(li);
        });
        overlay.querySelector(".overlay-link").href = links[idx] || "#";
        overlay.style.display = "flex";
        setTimeout(() => {
          overlay.style.opacity = "1";
        }, 10);
      });
    });

    // Optional: close overlay on outside click
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        overlay.style.display = "none";
        overlay.style.opacity = "0";
      }
    });
  }
  initOverlay();
});
