const corporateMenu = [
  ["sinalizacao-digital", "Sinalização Digital"],
  ["paineis-led", "Painéis de LED"],
  ["telas-interativas", "Telas Interativas"],
  ["videoconferencia-hibrida", "Videoconferência Híbrida"],
  ["microsoft-teams-rooms", "Microsoft Teams Rooms"],
  ["zoom-meet-webex", "Zoom, Meet e Webex"],
  ["equipamentos-videoconferencia", "Equipamentos de Videoconferência"],
  ["noc-monitoramento", "NOC e Monitoramento"],
  ["totens-interativos", "Tótens Interativos"],
  ["audio-video-profissional", "Áudio e Vídeo Profissional"],
  ["menu-board-digital", "Menu Board Digital"],
  ["apple-negocios", "Apple para Negócios"],
  ["smart-office", "Smart Office"],
  ["infraestrutura-redes-cftv", "Infraestrutura, Redes Mesh e CFTV"],
];

const residentialSolutions = [
  {
    id: "automacao-residencial",
    title: "Automação Residencial",
    lead: "Casa inteligente com iluminação, cortinas, climatização, áudio, vídeo, segurança e controle por app ou voz.",
    equipment:
      "Painéis touch, sensores, controladores, automação de iluminação, cortinas, climatização, home theater, áudio multiroom, fechaduras, c?meras e controle por voz.",
    services: [
      "Projeto de casa inteligente",
      "Instalação de automação residencial",
      "Configuração de cenas personalizadas",
      "Integração de áudio, vídeo e iluminação",
      "Automação de cortinas e climatização",
      "Configuração de controle por app ou voz",
      "Treinamento dos moradores",
    ],
    benefits: ["Conforto", "Segurança", "Sofisticação", "Controle remoto", "Rotinas automatizadas", "Uso simples no dia a dia"],
  },
  {
    id: "home-theater-audio",
    title: "Home Theater e Áudio Multiroom",
    lead: "Experiência audiovisual residencial com som distribuído, imagem de alta qualidade e operação simples.",
    equipment:
      "Receivers, soundbars, caixas acústicas, subwoofers, projetores, telas, displays, matrizes, interfaces, cabeamento e sistemas de áudio multiroom.",
    services: [
      "Projeto audiovisual residencial",
      "Instalação de home theater",
      "Sonorização de ambientes",
      "Integração com automação",
      "Ajuste de áudio e imagem",
      "Configuração de cenas de entretenimento",
      "Treinamento dos moradores",
    ],
    benefits: ["Cinema em casa", "Som em múltiplos ambientes", "Instalação limpa", "Operação centralizada", "Experiência premium"],
  },
  {
    id: "iluminacao-cortinas",
    title: "Iluminação, Cortinas e Cenas",
    lead: "Controle inteligente de luz, cortinas e persianas para conforto, estética e praticidade em cada momento da casa.",
    equipment:
      "Dimmers, relés, interruptores inteligentes, sensores, controladores, motores de cortina, painéis touch e comandos por app ou voz.",
    services: [
      "Projeto de cenas residenciais",
      "Instalação de automação de iluminação",
      "Automação de cortinas e persianas",
      "Configuração de cenas por ambiente",
      "Integração com áudio, vídeo e climatização",
      "Parametrização de comandos",
      "Treinamento de uso",
    ],
    benefits: ["Conforto visual", "Cenas personalizadas", "Mais sofisticação", "Economia de energia", "Controle por app ou voz"],
  },
  {
    id: "seguranca-cftv",
    title: "Segurança, C?meras e CFTV",
    lead: "Monitoramento residencial com c?meras, sensores, fechaduras e acesso remoto integrado à rotina da casa.",
    equipment:
      "C?meras IP, DVR, NVR, sensores, fechaduras inteligentes, vídeo porteiro, controles de acesso, alarmes e armazenamento de imagens.",
    services: [
      "Projeto de segurança residencial",
      "Instalação de CFTV",
      "Configuração de c?meras IP",
      "Parametrização de NVR e DVR",
      "Integração com monitoramento remoto",
      "Configuração de acesso por app",
      "Treinamento dos moradores",
    ],
    benefits: ["Mais segurança", "Monitoramento remoto", "Acesso simplificado", "Integração com automação", "Registro de eventos"],
  },
  {
    id: "redes-mesh-wifi",
    title: "Redes Mesh e Wi-Fi Residencial",
    lead: "Conectividade estável para casas e apartamentos com alta demanda de automação, streaming, trabalho remoto e segurança.",
    equipment:
      "Roteadores, access points, redes mesh, switches, cabeamento estruturado, racks compactos e infraestrutura para alta performance.",
    services: [
      "Projeto de infraestrutura de rede",
      "Instalação de rede mesh",
      "Cabeamento estruturado residencial",
      "Configuração de Wi-Fi",
      "Organização de equipamentos de rede",
      "Testes de cobertura",
      "Suporte e expansão",
    ],
    benefits: ["Conectividade estável", "Eliminação de zonas de sombra", "Base para automação", "Streaming fluido", "Rede preparada para alta demanda"],
  },
  {
    id: "climatizacao-voz",
    title: "Climatização e Controle por Voz",
    lead: "Controle integrado de clima, rotinas, cenas e comandos por voz para deixar a casa mais confortável e intuitiva.",
    equipment:
      "Controladores de ar-condicionado, sensores, painéis touch, assistentes de voz, aplicativos, gateways e integrações com cenas residenciais.",
    services: [
      "Projeto de climatização inteligente",
      "Integração com sistemas de ar-condicionado",
      "Configuração de comandos por voz",
      "Parametrização de cenas de conforto",
      "Automação por horários e rotinas",
      "Testes de uso real",
      "Treinamento dos moradores",
    ],
    benefits: ["Mais conforto", "Rotinas automatizadas", "Controle remoto", "Uso por voz", "Ambientes sempre preparados"],
  },
];

const solutionImages = {
  "automacao-residencial": "../assets/generated-environments/hppoly/ambiente-020-hppoly.png",
  "home-theater-audio": "../assets/generated-environments/yeahlink/ambiente-020-yeahlink.png",
  "iluminacao-cortinas": "../assets/generated-environments/logitechrally/ambiente-020-logitechrally.png",
  "seguranca-cftv": "../assets/generated-environments/jabra/ambiente-020-jabra.png",
  "redes-mesh-wifi": "../assets/generated-environments/hppoly/ambiente-021-hppoly.png",
  "climatizacao-voz": "../assets/generated-environments/yeahlink/ambiente-021-yeahlink.png",
};

const residentialCaseImages = [
  ["../assets/generated-environments/logitechrally/ambiente-021-logitechrally.png", "Ambiente integrado"],
  ["../assets/generated-environments/jabra/ambiente-021-jabra.png", "Home theater"],
  ["../assets/generated-environments/hppoly/ambiente-022-hppoly.png", "Cena automatizada"],
  ["../assets/generated-environments/yeahlink/ambiente-022-yeahlink.png", "Seguranca residencial"],
];

const params = new URLSearchParams(window.location.search);
const currentId = params.get("solucao") || residentialSolutions[0].id;
const current = residentialSolutions.find((solution) => solution.id === currentId) || residentialSolutions[0];
const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
const currentImage = solutionImages[current.id] || "../assets/generated-environments/hppoly/ambiente-020-hppoly.png";

document.title = `${current.title} | Moema`;
document.querySelector("#solutionTitle").textContent = current.title;
document.querySelector("#solutionBannerTitle").textContent = current.title;
document.querySelector("#solutionHeroImage").src = currentImage;
document.querySelector("#solutionHeroImage").alt = current.title;
document.querySelector("#solutionLead").textContent = current.lead;
document.querySelector("#solutionEquipment").textContent = current.equipment;
document.querySelector("#solutionServices").innerHTML = list(current.services);
document.querySelector("#solutionBenefits").innerHTML = list(current.benefits);
document.querySelector("#solutionInput").value = current.title;
document.querySelector("#solutionCases").innerHTML = [[currentImage, current.title], ...residentialCaseImages]
  .slice(0, 4)
  .map(([image, title]) => `<article><img src="${image}" alt="${title}" loading="lazy" /><span>${title}</span></article>`)
  .join("");
document.querySelector("#residentialSubmenu").innerHTML = residentialSolutions
  .map((solution) => `<a href="?solucao=${solution.id}">${solution.title}</a>`)
  .join("");
document.querySelector("#corporateSubmenu").innerHTML = corporateMenu
  .map(([id, title]) => `<a href="../solucoes-corporativas/?solucao=${id}">${title}</a>`)
  .join("");
document.querySelector("#productsSubmenu").innerHTML =
  corporateMenu
    .map(([id, title]) => `<a href="../solucoes-corporativas/?solucao=${id}">${title}</a>`)
    .join("") + residentialSolutions.map((solution) => `<a href="?solucao=${solution.id}">${solution.title}</a>`).join("");

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const submenuItems = [...document.querySelectorAll(".has-submenu")];

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
