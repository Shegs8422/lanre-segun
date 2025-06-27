// projectOverlay.js
// Modern, advanced overlay for project cards

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".projects-container .project");
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
          <div class="overlay-tech" style="margin-bottom:1.2rem;font-size:1rem;font-weight:600;"><span style="color:#222;font-weight:700;">Technologies:</span> <span class="tech-list">-</span></div>
          <div class="overlay-features" style="margin-bottom:1.2rem;width:100%;"><span style="color:#222;font-weight:700;">Key Features:</span>
            <ul class="feature-list" style="margin:0 0 0 1.2rem;padding:0;color:#444;font-size:1rem;line-height:1.7;"></ul>
          </div>
          <a class="overlay-link" href="#" target="_blank" style="display:inline-block;margin-top:0.5rem;padding:0.7rem 1.5rem;background:#222;color:#fff;font-weight:700;border-radius:8px;text-decoration:none;box-shadow:0 2px 8px #0001;transition:background 0.2s;">View Project</a>
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

  projects.forEach((project, idx) => {
    project.setAttribute("data-project-idx", idx);
    project.addEventListener("click", function () {
      const img = project.querySelector("img").getAttribute("src");
      const title = project.querySelector("h2").textContent;
      const desc = project.querySelector("p").textContent;
      // Example data for demonstration, you should replace with real data or fetch dynamically
      const techs = [
        ["React, Node.js", "Responsive Web, Styled Components"],
        ["HTML, CSS, JS", "Figma, Responsive Design"],
        ["React, Firebase", "Socket.io, Real-time"],
        ["Vue.js, Chart.js", "API Integration"],
        ["OpenWeatherMap API, JS", "Geolocation"],
        ["Next.js, Markdown", "Custom Themes"],
        ["React, Redux", "Chart.js, LocalStorage"],
        ["React, Socket.io", "Node.js, MongoDB"],
      ];
      const features = [
        [
          "User authentication",
          "Product search",
          "Shopping cart",
          "Order tracking",
        ],
        ["Portfolio gallery", "Contact form", "Mobile friendly"],
        ["Task assignment", "Real-time updates", "Team collaboration"],
        ["Social analytics", "Custom dashboards", "Export reports"],
        ["Live weather", "Location-based forecast", "Clean UI"],
        ["Markdown editor", "Custom themes", "SEO optimized"],
        ["Expense tracking", "Budget planning", "Data visualization"],
        ["Group chat", "Private messaging", "Notifications"],
      ];
      const links = ["#", "#", "#", "#", "#", "#", "#", "#"];
      overlay.querySelector(".overlay-img").src = img;
      overlay.querySelector(".overlay-title").textContent = title;
      overlay.querySelector(".overlay-desc").textContent = desc;
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
});
