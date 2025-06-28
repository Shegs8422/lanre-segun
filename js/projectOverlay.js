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
      max-width: 850px; width: 96vw; padding: 0 0 2.5rem 0; border-radius: 32px; 
      box-shadow: 0 8px 48px 0 #0003, 0 1.5px 8px #0001; 
      position: relative; text-align: left; min-height: 480px; 
      overflow: hidden; display: flex; flex-direction: column; align-items: stretch;
      backdrop-filter: blur(22px) saturate(1.1);
      animation: overlayPopIn 0.4s cubic-bezier(.6,-0.28,.74,.05) 1;
    ">
      <div style="height: 8px; width: 100%; background: #e5e5e5; margin-bottom: 1.5rem;"></div>
      <button class="close-overlay" style="position:absolute;top:1.2rem;right:1.2rem;background:rgba(255,255,255,0.7);border:none;font-size:2.2rem;cursor:pointer;border-radius:50%;width:44px;height:44px;box-shadow:0 2px 8px #0001;transition:background 0.2s;z-index:2;display:flex;align-items:center;justify-content:center;">
        <span style="font-weight:700;line-height:1;">&times;</span>
      </button>
      <div style="display:flex;gap:2.2rem;align-items:flex-start;flex-wrap:wrap;padding:0 2.2rem;">
        <!-- Left column -->
        <div style="flex:0 0 260px;display:flex;flex-direction:column;align-items:center;min-width:220px;">
          <img class="overlay-img" src="" alt="Project image" style="width:220px;max-height:180px;object-fit:cover;border-radius:18px;box-shadow:0 2px 16px #0001;margin-bottom:1.2rem;background:#f5f7fa;" />
          <div style="width:100%;margin-top:1.2rem;">
            <div style="font-size:1.05rem;font-weight:700;margin-bottom:0.5rem;">Tools</div>
            <div class="overlay-tech-logos" style="display:flex;gap:0.7rem;align-items:center;">
              <!-- Tech logos will be injected here -->
            </div>
          </div>
        </div>
        <!-- Right column -->
        <div style="flex:1;min-width:220px;display:flex;flex-direction:column;align-items:flex-start;gap:1.1rem;">
          <h2 class="overlay-title" style="font-size:2.1rem;margin:0 0 0.2rem 0;font-weight:800;color:#222;letter-spacing:-1px;"></h2>
          <div style="width:100%;">
            <p class="overlay-desc" style="font-size:1.13rem;margin:0 0 0.3rem 0;color:#444;line-height:1.6;max-height:3.2em;overflow:hidden;position:relative;" data-full="" data-short=""></p>
            <button class="desc-more-btn" style="display:none;font-size:0.98rem;color:#1a73e8;background:none;border:none;cursor:pointer;padding:0;margin:0;">More</button>
          </div>
          <div class="overlay-features-box" style="background:#f7f8fa;border-radius:14px;padding:1.1rem 1.2rem;width:100%;box-shadow:0 1px 6px #0001;">
            <div style="color:#222;font-weight:700;margin-bottom:0.3rem;">Features & Scope of Project</div>
            <ul class="feature-list" style="margin:0 0 0 1.2rem;padding:0;color:#444;font-size:1rem;line-height:1.7;"></ul>
          </div>
          <a class="overlay-link" href="#" target="_blank" style="align-self:flex-end;margin-top:0.7rem;padding:0.7rem 1.5rem;background:#222;color:#fff;font-weight:700;border-radius:8px;text-decoration:none;box-shadow:0 2px 8px #0001;transition:background 0.2s;">View Project</a>
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

  // Fetch project data from projects.json
  let projectData = [];
  fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      projectData = data.projects || [];
      // Attach event listeners after data is loaded
      projects.forEach((project, idx) => {
        project.setAttribute("data-project-idx", idx);
        project.addEventListener("click", function () {
          const pdata = projectData[idx];
          if (!pdata) return;
          overlay.querySelector(".overlay-img").src = pdata.preview;
          overlay.querySelector(".overlay-title").textContent = pdata.name;
          // Description expand/collapse logic
          const descElem = overlay.querySelector(".overlay-desc");
          const moreBtn = overlay.querySelector(".desc-more-btn");
          descElem.textContent = pdata.description;
          descElem.setAttribute("data-full", pdata.description);
          let shortDesc = pdata.description;
          if (pdata.description.length > 120) {
            shortDesc = pdata.description.slice(0, 120) + "...";
            descElem.textContent = shortDesc;
            descElem.setAttribute("data-short", shortDesc);
            moreBtn.style.display = "inline";
            moreBtn.textContent = "More";
          } else {
            moreBtn.style.display = "none";
          }
          moreBtn.onclick = function () {
            if (moreBtn.textContent === "More") {
              descElem.textContent = descElem.getAttribute("data-full");
              moreBtn.textContent = "Less";
            } else {
              descElem.textContent = descElem.getAttribute("data-short");
              moreBtn.textContent = "More";
            }
          };
          // Tech stack logos
          const techLogoDiv = overlay.querySelector(".overlay-tech-logos");
          techLogoDiv.innerHTML = "";
          (pdata.techStack || []).forEach((t) => {
            const img = document.createElement("img");
            img.src = t.logo;
            img.alt = t.name;
            img.title = t.name;
            img.style.width = "36px";
            img.style.height = "36px";
            img.style.objectFit = "contain";
            techLogoDiv.appendChild(img);
          });
          // Features
          const featureList = overlay.querySelector(".feature-list");
          featureList.innerHTML = "";
          (pdata.features || []).forEach((f) => {
            const li = document.createElement("li");
            li.textContent = f;
            featureList.appendChild(li);
          });
          overlay.querySelector(".overlay-link").href = pdata.link || "#";
          overlay.style.display = "flex";
          setTimeout(() => {
            overlay.style.opacity = "1";
          }, 10);
        });
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
