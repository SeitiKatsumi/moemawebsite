const heroShowcases = [...document.querySelectorAll(".hero-showcase")];

heroShowcases.forEach((heroShowcase) => {
  if (heroShowcase.dataset.physicsReady === "true") return;
  heroShowcase.dataset.physicsReady = "true";

  const orbitals = [
    { size: 230, color: "rgba(24, 213, 216, 0.58)", blur: 12, opacity: 0.64, lag: 0.055, offsetX: -120, offsetY: -46 },
    { size: 310, color: "rgba(236, 27, 46, 0.38)", blur: 18, opacity: 0.5, lag: 0.035, offsetX: 160, offsetY: 28 },
    { size: 150, color: "rgba(255, 255, 255, 0.62)", blur: 9, opacity: 0.42, lag: 0.08, offsetX: 42, offsetY: 120 },
  ].map((orb) => {
    const el = document.createElement("span");
    el.className = "physics-orb";
    el.style.setProperty("--orb-size", `${orb.size}px`);
    el.style.setProperty("--orb-color", orb.color);
    el.style.setProperty("--orb-blur", `${orb.blur}px`);
    el.style.setProperty("--orb-opacity", orb.opacity);
    heroShowcase.appendChild(el);
    return { ...orb, el, x: 50, y: 50, vx: 0, vy: 0 };
  });

  const pointer = { x: 50, y: 50, active: false };
  let time = 0;

  const setPointer = (clientX, clientY) => {
    const rect = heroShowcase.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 100;
    pointer.y = ((clientY - rect.top) / rect.height) * 100;
    pointer.active = true;
  };

  heroShowcase.addEventListener("pointermove", (event) => setPointer(event.clientX, event.clientY));
  heroShowcase.addEventListener("pointerenter", (event) => setPointer(event.clientX, event.clientY));
  heroShowcase.addEventListener("pointerleave", () => {
    pointer.active = false;
  });

  const animateOrbitals = () => {
    time += 0.018;

    orbitals.forEach((orb, index) => {
      const idleX = 50 + Math.cos(time + index * 1.4) * 14;
      const idleY = 50 + Math.sin(time * 0.85 + index * 1.2) * 10;
      const targetX = pointer.active ? pointer.x + (orb.offsetX / heroShowcase.clientWidth) * 100 : idleX;
      const targetY = pointer.active ? pointer.y + (orb.offsetY / heroShowcase.clientHeight) * 100 : idleY;
      const spring = pointer.active ? orb.lag : orb.lag * 0.42;

      orb.vx += (targetX - orb.x) * spring;
      orb.vy += (targetY - orb.y) * spring;
      orb.vx *= 0.78;
      orb.vy *= 0.78;
      orb.x += orb.vx;
      orb.y += orb.vy;

      orb.el.style.setProperty("--orb-x", `${orb.x}%`);
      orb.el.style.setProperty("--orb-y", `${orb.y}%`);
      orb.el.classList.toggle("is-muted", !pointer.active);
    });

    requestAnimationFrame(animateOrbitals);
  };

  requestAnimationFrame(animateOrbitals);
});
