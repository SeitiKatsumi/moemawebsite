const brands = window.moemaEquipmentBrands || [];
const params = new URLSearchParams(window.location.search);
const currentId = params.get("marca") || brands[0]?.id;
const currentBrand = brands.find((brand) => brand.id === currentId) || brands[0];

const withPagePrefix = (asset) => `../${asset}`;
const heroByBrand = {
  hppoly: "../assets/generated-environments/hppoly/ambiente-001-hppoly.png",
  yeahlink: "../assets/generated-environments/yeahlink/ambiente-001-yeahlink.png",
  logitechrally: "../assets/generated-environments/logitechrally/ambiente-001-logitechrally.png",
  jabra: "../assets/generated-environments/jabra/ambiente-001-jabra.png",
};

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const submenuItems = [...document.querySelectorAll(".has-submenu")];

if (currentBrand) {
  document.title = `${currentBrand.label} | Equipamentos Moema`;
  document.querySelector("#brandTitle").textContent = currentBrand.label;
  document.querySelector("#brandIntro").textContent = currentBrand.intro;
  document.querySelector("#brandKicker").textContent = `${currentBrand.products.length} equipamentos`;
  document.querySelector("#catalogTitle").textContent = `Linha ${currentBrand.label}`;
  document.querySelector("#equipmentHeroImage").src = heroByBrand[currentBrand.id] || heroByBrand.hppoly;

  document.querySelector("#brandTabs").innerHTML = brands
    .map(
      (brand) => `
        <a class="brand-tab ${brand.id === currentBrand.id ? "active" : ""}" href="?marca=${brand.id}">
          <img src="${withPagePrefix(brand.logo)}" alt="${brand.logoAlt}" loading="lazy" />
          <span>${brand.label}</span>
        </a>
      `,
    )
    .join("");

  document.querySelector("#equipmentGrid").innerHTML = currentBrand.products
    .map(
      (product) => `
        <article class="equipment-card">
          <div class="equipment-image">
            <img src="${withPagePrefix(product.image)}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="equipment-copy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

const closeMenu = () => {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  toggle.setAttribute("aria-expanded", "false");
  submenuItems.forEach((item) => {
    item.classList.remove("submenu-open");
    item.querySelector(".submenu-trigger")?.setAttribute("aria-expanded", "false");
  });
};

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  const trigger = event.target.closest(".submenu-trigger");
  if (trigger) {
    event.preventDefault();
    const item = trigger.closest(".has-submenu");
    const isOpen = item.classList.toggle("submenu-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
    submenuItems
      .filter((submenuItem) => submenuItem !== item)
      .forEach((submenuItem) => {
        submenuItem.classList.remove("submenu-open");
        submenuItem.querySelector(".submenu-trigger")?.setAttribute("aria-expanded", "false");
      });
    return;
  }

  if (event.target.matches("a")) {
    closeMenu();
  }
});
