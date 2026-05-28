const services = [
  {
    id: "sinalizacao-digital",
    title: "SinalizaÃ§Ã£o Digital e Digital Signage",
    solution:
      "Telas profissionais, players, softwares de gestÃ£o de conteÃºdo, displays corporativos e sistemas de comunicaÃ§Ã£o visual digital.",
    services: [
      "Projeto de sinalizaÃ§Ã£o digital",
      "InstalaÃ§Ã£o de telas corporativas",
      "ImplantaÃ§Ã£o de digital signage",
      "ConfiguraÃ§Ã£o de software de gestÃ£o",
      "ParametrizaÃ§Ã£o de conteÃºdos e campanhas",
      "IntegraÃ§Ã£o com comunicaÃ§Ã£o interna",
      "Treinamento operacional",
    ],
    benefits: [
      "GestÃ£o remota de conteÃºdo",
      "AtualizaÃ§Ã£o rÃ¡pida de campanhas",
      "ComunicaÃ§Ã£o mais dinÃ¢mica",
      "Ambientes mais modernos",
      "OperaÃ§Ã£o centralizada",
      "Escalabilidade para mÃºltiplas unidades",
    ],
  },
  {
    id: "paineis-led",
    title: "PainÃ©is de LED",
    solution:
      "PainÃ©is de LED indoor, outdoor, painÃ©is sob medida, telÃµes corporativos, displays de alta definiÃ§Ã£o e soluÃ§Ãµes para fachadas, eventos, auditÃ³rios e showrooms.",
    services: [
      "Projeto de painel de LED",
      "Fornecimento dos mÃ³dulos e estruturas",
      "Montagem de painel de LED",
      "InstalaÃ§Ã£o profissional",
      "ConfiguraÃ§Ã£o de controladoras",
      "Ajuste de brilho, resoluÃ§Ã£o e exibiÃ§Ã£o",
      "Treinamento de uso",
    ],
    benefits: [
      "Alto impacto visual",
      "SoluÃ§Ãµes sob medida",
      "Uso interno ou externo",
      "Alta visibilidade",
      "Acabamento premium",
      "AtualizaÃ§Ã£o dinÃ¢mica de conteÃºdo",
    ],
  },
  {
    id: "telas-interativas",
    title: "Telas Interativas Touch Screen",
    solution:
      "Telas interativas 4K, monitores touch, whiteboards digitais, displays colaborativos e soluÃ§Ãµes para reuniÃµes, treinamentos, escolas e auditÃ³rios.",
    services: [
      "InstalaÃ§Ã£o de tela interativa",
      "ConfiguraÃ§Ã£o de whiteboard digital",
      "IntegraÃ§Ã£o com notebooks e dispositivos mÃ³veis",
      "ConfiguraÃ§Ã£o de compartilhamento sem fio",
      "ParametrizaÃ§Ã£o de aplicativos",
      "Treinamento dos usuÃ¡rios",
    ],
    benefits: [
      "ColaboraÃ§Ã£o em tempo real",
      "Escrita fluida",
      "Compartilhamento sem fio",
      "SubstituiÃ§Ã£o de lousas e projetores",
      "Visual moderno",
      "Uso intuitivo",
    ],
  },
  {
    id: "videoconferencia-hibrida",
    title: "Salas de VideoconferÃªncia HÃ­bridas",
    solution:
      "CÃ¢meras inteligentes, microfones, soundbars, painÃ©is de controle, sistemas BYOD, cabos, interfaces, hubs, displays e equipamentos para Teams, Zoom, Google Meet e Webex.",
    services: [
      "Projeto de sala de reuniÃ£o hÃ­brida",
      "Montagem da sala de videoconferÃªncia",
      "InstalaÃ§Ã£o de cÃ¢meras e microfones",
      "ConfiguraÃ§Ã£o de Ã¡udio e vÃ­deo",
      "IntegraÃ§Ã£o com plataformas de reuniÃ£o",
      "ParametrizaÃ§Ã£o de BYOD",
      "Testes de uso real",
      "Treinamento da equipe",
    ],
    benefits: [
      "ReuniÃµes mais fluidas",
      "Ãudio mais claro",
      "Imagem profissional",
      "Menos ruÃ­do",
      "OperaÃ§Ã£o simples",
      "Compatibilidade com mÃºltiplas plataformas",
    ],
  },
  {
    id: "microsoft-teams-rooms",
    title: "Microsoft Teams Rooms",
    solution:
      "Kits certificados para Microsoft Teams Rooms, painÃ©is de controle, cÃ¢meras, microfones, displays, mini PCs, soundbars e licenÃ§as compatÃ­veis.",
    services: [
      "ImplantaÃ§Ã£o de Microsoft Teams Rooms",
      "InstalaÃ§Ã£o de sala Teams",
      "ConfiguraÃ§Ã£o de MTR",
      "ParametrizaÃ§Ã£o de Teams Rooms Pro ou Basic",
      "IntegraÃ§Ã£o com Outlook",
      "ConfiguraÃ§Ã£o de equipamentos certificados",
      "Treinamento de operaÃ§Ã£o",
    ],
    benefits: [
      "Ambiente nativo Microsoft",
      "Entrada rÃ¡pida nas reuniÃµes",
      "IntegraÃ§Ã£o com calendÃ¡rio",
      "ExperiÃªncia padronizada",
      "OperaÃ§Ã£o simples",
      "Mais profissionalismo nas reuniÃµes hÃ­bridas",
    ],
  },
  {
    id: "zoom-meet-webex",
    title: "Zoom Rooms, Google Meet e Cisco Webex",
    solution:
      "Hardwares para Zoom Rooms, Google Meet Hardware, Cisco Webex Room Kit, cÃ¢meras, microfones, displays e sistemas multiplataforma.",
    services: [
      "ImplantaÃ§Ã£o de Zoom Rooms",
      "InstalaÃ§Ã£o de Google Meet Hardware",
      "ConfiguraÃ§Ã£o de Cisco Webex Room Kit",
      "IntegraÃ§Ã£o entre plataformas",
      "ConfiguraÃ§Ã£o de salas BYOD",
      "ParametrizaÃ§Ã£o de contas e dispositivos",
      "Testes de reuniÃ£o",
    ],
    benefits: [
      "Flexibilidade para diferentes plataformas",
      "IntegraÃ§Ã£o com calendÃ¡rios",
      "Salas preparadas para clientes externos",
      "OperaÃ§Ã£o multiplataforma",
      "Ambientes hÃ­bridos mais eficientes",
    ],
  },
  {
    id: "equipamentos-videoconferencia",
    title: "Equipamentos para VideoconferÃªncia: Lenovo, Logitech, Yealink, Poly e Jabra",
    solution:
      "Lenovo ThinkSmart, Logitech Rally, Logitech MeetUp, Yealink MVC, Yealink MeetingBoard, Poly Studio, Jabra PanaCast, cÃ¢meras PTZ, video bars, speakerphones e headsets profissionais.",
    services: [
      "Fornecimento dos equipamentos",
      "InstalaÃ§Ã£o dos dispositivos",
      "ConfiguraÃ§Ã£o dos sistemas",
      "IntegraÃ§Ã£o com Teams, Zoom, Meet e Webex",
      "Ajuste de cÃ¢mera, microfone e Ã¡udio",
      "PadronizaÃ§Ã£o de salas",
      "Suporte tÃ©cnico",
    ],
    benefits: [
      "Equipamentos adequados ao tamanho da sala",
      "Melhor qualidade de Ã¡udio e vÃ­deo",
      "InstalaÃ§Ã£o limpa",
      "Compatibilidade com plataformas corporativas",
      "OperaÃ§Ã£o intuitiva",
      "PadronizaÃ§Ã£o para mÃºltiplos ambientes",
    ],
  },
  {
    id: "noc-monitoramento",
    title: "NOC e Salas de Monitoramento",
    solution:
      "Video walls, monitores profissionais, displays 24/7, sistemas de visualizaÃ§Ã£o, infraestrutura audiovisual, estaÃ§Ãµes de operaÃ§Ã£o e integraÃ§Ã£o com dashboards.",
    services: [
      "Projeto de NOC corporativo",
      "Montagem de sala de monitoramento",
      "InstalaÃ§Ã£o de video wall",
      "ConfiguraÃ§Ã£o de telas e fontes de dados",
      "IntegraÃ§Ã£o com dashboards",
      "OrganizaÃ§Ã£o de layout operacional",
      "Testes de visualizaÃ§Ã£o e operaÃ§Ã£o",
    ],
    benefits: [
      "Monitoramento em tempo real",
      "OperaÃ§Ã£o 24/7",
      "Ambiente ergonÃ´mico",
      "Mais controle sobre incidentes",
      "VisualizaÃ§Ã£o clara de mÃ©tricas",
      "Apoio Ã  tomada de decisÃ£o",
    ],
  },
  {
    id: "totens-interativos",
    title: "TÃ³tens Interativos",
    solution:
      "TÃ³tens touch screen, tÃ³tens de autoatendimento, tÃ³tens publicitÃ¡rios, tÃ³tens para check-in, cadastro, mapas, recepÃ§Ã£o e eventos.",
    services: [
      "Projeto de totem interativo",
      "Fornecimento do equipamento",
      "PersonalizaÃ§Ã£o visual",
      "InstalaÃ§Ã£o do totem",
      "ConfiguraÃ§Ã£o da interface",
      "IntegraÃ§Ã£o com sistemas",
      "Treinamento de uso",
    ],
    benefits: [
      "Autoatendimento",
      "ExperiÃªncia moderna",
      "ReduÃ§Ã£o de filas",
      "InteraÃ§Ã£o com o pÃºblico",
      "AplicaÃ§Ãµes comerciais e institucionais",
      "Gerenciamento remoto",
    ],
  },
  {
    id: "audio-video-profissional",
    title: "Ãudio e VÃ­deo Profissional",
    solution:
      "Projetores, displays, sistemas de som, microfones, DSPs, caixas acÃºsticas, interfaces, matrizes, cabeamento e automaÃ§Ã£o audiovisual.",
    services: [
      "Projeto audiovisual",
      "InstalaÃ§Ã£o de Ã¡udio e vÃ­deo",
      "SonorizaÃ§Ã£o de ambientes",
      "ConfiguraÃ§Ã£o de microfones e DSP",
      "InstalaÃ§Ã£o de projetores e displays",
      "IntegraÃ§Ã£o de som e imagem",
      "AutomaÃ§Ã£o do sistema AV",
      "Treinamento operacional",
    ],
    benefits: [
      "Som mais inteligÃ­vel",
      "Imagem de alta qualidade",
      "OperaÃ§Ã£o centralizada",
      "Ambientes mais profissionais",
      "Menos falhas em apresentaÃ§Ãµes",
      "ExperiÃªncia premium para eventos e reuniÃµes",
    ],
  },
  {
    id: "menu-board-digital",
    title: "Menu Board Digital",
    solution:
      "Telas profissionais, players, softwares de gestÃ£o, displays para cardÃ¡pios digitais e sistemas para restaurantes, cafeterias, lanchonetes, franquias e praÃ§as de alimentaÃ§Ã£o.",
    services: [
      "Projeto de menu board digital",
      "InstalaÃ§Ã£o das telas",
      "ConfiguraÃ§Ã£o do sistema",
      "ParametrizaÃ§Ã£o de produtos e preÃ§os",
      "ProgramaÃ§Ã£o por horÃ¡rio",
      "GestÃ£o de mÃºltiplas unidades",
      "Treinamento da operaÃ§Ã£o",
    ],
    benefits: [
      "AtualizaÃ§Ã£o rÃ¡pida de preÃ§os",
      "Mais destaque para combos e ofertas",
      "ReduÃ§Ã£o de impressÃ£o",
      "Visual mais profissional",
      "OperaÃ§Ã£o mais Ã¡gil",
      "Melhor experiÃªncia no ponto de venda",
    ],
  },
  {
    id: "apple-negocios",
    title: "Tecnologia Apple para NegÃ³cios",
    solution:
      "Macs, MacBooks, iPads, iPhones, acessÃ³rios, Apple Business Manager e soluÃ§Ãµes para gestÃ£o de dispositivos corporativos.",
    services: [
      "Consultoria Apple para empresas",
      "Fornecimento de equipamentos Apple",
      "ConfiguraÃ§Ã£o de dispositivos",
      "ParametrizaÃ§Ã£o de Apple Business Manager",
      "IntegraÃ§Ã£o com ambiente corporativo",
      "GestÃ£o de dispositivos",
      "Suporte Ã  adoÃ§Ã£o",
    ],
    benefits: [
      "Alta performance",
      "SeguranÃ§a nativa",
      "Design premium",
      "IntegraÃ§Ã£o entre dispositivos",
      "GestÃ£o centralizada",
      "Produtividade para equipes e executivos",
    ],
  },
  {
    id: "smart-office",
    title: "AutomaÃ§Ã£o Corporativa e Smart Office",
    solution:
      "PainÃ©is touch, sensores, controladores, automaÃ§Ã£o de iluminaÃ§Ã£o, climatizaÃ§Ã£o, persianas, audiovisual, salas de reuniÃ£o e ambientes corporativos inteligentes.",
    services: [
      "Projeto de smart office",
      "InstalaÃ§Ã£o de automaÃ§Ã£o corporativa",
      "ConfiguraÃ§Ã£o de cenas inteligentes",
      "IntegraÃ§Ã£o de iluminaÃ§Ã£o, clima e AV",
      "AutomaÃ§Ã£o de salas de reuniÃ£o",
      "ParametrizaÃ§Ã£o de painÃ©is e comandos",
      "Treinamento de uso",
    ],
    benefits: [
      "Ambientes mais eficientes",
      "ReduÃ§Ã£o de desperdÃ­cio energÃ©tico",
      "Controle centralizado",
      "Cenas para reuniÃµes e apresentaÃ§Ãµes",
      "Mais conforto e sofisticaÃ§Ã£o",
      "OperaÃ§Ã£o intuitiva",
    ],
  },
  {
    id: "automacao-residencial",
    title: "AutomaÃ§Ã£o Residencial",
    solution:
      "AutomaÃ§Ã£o de iluminaÃ§Ã£o, cortinas, climatizaÃ§Ã£o, home theater, Ã¡udio multiroom, fechaduras, cÃ¢meras, sensores, painÃ©is e controle por voz.",
    services: [
      "Projeto de casa inteligente",
      "InstalaÃ§Ã£o de automaÃ§Ã£o residencial",
      "ConfiguraÃ§Ã£o de cenas personalizadas",
      "IntegraÃ§Ã£o de Ã¡udio, vÃ­deo e iluminaÃ§Ã£o",
      "AutomaÃ§Ã£o de cortinas e climatizaÃ§Ã£o",
      "ConfiguraÃ§Ã£o de controle por app ou voz",
      "Treinamento dos moradores",
    ],
    benefits: [
      "Conforto",
      "SeguranÃ§a",
      "SofisticaÃ§Ã£o",
      "Controle remoto",
      "Rotinas automatizadas",
      "IntegraÃ§Ã£o com o estilo de vida da casa",
    ],
  },
  {
    id: "infraestrutura-redes-cftv",
    title: "Infraestrutura, Redes Mesh e CFTV",
    solution:
      "Roteadores, access points, redes mesh, cabeamento estruturado, switches, cÃ¢meras IP, DVR, NVR, sensores e sistemas de monitoramento.",
    services: [
      "Projeto de infraestrutura de rede",
      "InstalaÃ§Ã£o de rede mesh",
      "InstalaÃ§Ã£o de Wi-Fi corporativo",
      "Cabeamento estruturado",
      "InstalaÃ§Ã£o de CFTV",
      "ConfiguraÃ§Ã£o de cÃ¢meras IP",
      "ParametrizaÃ§Ã£o de NVR e DVR",
      "IntegraÃ§Ã£o com monitoramento remoto",
    ],
    benefits: [
      "Conectividade estÃ¡vel",
      "EliminaÃ§Ã£o de zonas de sombra",
      "Rede preparada para alta demanda",
      "Mais seguranÃ§a",
      "Monitoramento remoto",
      "Base sÃ³lida para automaÃ§Ã£o, AV e videoconferÃªncia",
    ],
  },
];

const serviceImages = {
  "sinalizacao-digital": "assets/generated-environments/hppoly/ambiente-001-hppoly.png",
  "paineis-led": "assets/generated-environments/yeahlink/ambiente-002-yeahlink.png",
  "telas-interativas": "assets/generated-environments/logitechrally/ambiente-010-logitechrally.png",
  "videoconferencia-hibrida": "assets/generated-environments/jabra/ambiente-010-jabra.png",
  "microsoft-teams-rooms": "assets/generated-environments/hppoly/ambiente-011-hppoly.png",
  "zoom-meet-webex": "assets/generated-environments/yeahlink/ambiente-012-yeahlink.png",
  "equipamentos-videoconferencia": "assets/generated-environments/logitechrally/ambiente-013-logitechrally.png",
  "noc-monitoramento": "assets/generated-environments/jabra/ambiente-014-jabra.png",
  "totens-interativos": "assets/generated-environments/hppoly/ambiente-015-hppoly.png",
  "audio-video-profissional": "assets/generated-environments/yeahlink/ambiente-016-yeahlink.png",
  "menu-board-digital": "assets/generated-environments/logitechrally/ambiente-017-logitechrally.png",
  "apple-negocios": "assets/generated-environments/jabra/ambiente-018-jabra.png",
  "smart-office": "assets/generated-environments/hppoly/ambiente-019-hppoly.png",
  "automacao-residencial": "assets/generated-environments/yeahlink/ambiente-020-yeahlink.png",
  "infraestrutura-redes-cftv": "assets/generated-environments/logitechrally/ambiente-021-logitechrally.png",
};

const galleryImages = [
  ["assets/generated-environments/hppoly/ambiente-001-hppoly.png", "Ambiente HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-001-yeahlink.png", "Ambiente Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-001-logitechrally.png", "Ambiente Logitech"],
  ["assets/generated-environments/jabra/ambiente-001-jabra.png", "Ambiente Jabra"],
  ["assets/generated-environments/hppoly/ambiente-002-hppoly.png", "Sala HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-002-yeahlink.png", "Sala Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-002-logitechrally.png", "Sala Logitech"],
  ["assets/generated-environments/jabra/ambiente-002-jabra.png", "Sala Jabra"],
  ["assets/generated-environments/hppoly/ambiente-010-hppoly.png", "Videoconfer?ncia HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-010-yeahlink.png", "Videoconfer?ncia Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-010-logitechrally.png", "Videoconfer?ncia Logitech"],
  ["assets/generated-environments/jabra/ambiente-010-jabra.png", "Videoconfer?ncia Jabra"],
  ["assets/generated-environments/hppoly/ambiente-011-hppoly.png", "Teams Room HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-011-yeahlink.png", "Meeting room Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-011-logitechrally.png", "Rally room Logitech"],
  ["assets/generated-environments/jabra/ambiente-011-jabra.png", "PanaCast room Jabra"],
];

const serviceGrid = document.querySelector("#serviceGrid");
const serviceNav = document.querySelector("#serviceNav");
const photoSliderTrack = document.querySelector("#photoSliderTrack");
const photoSliderViewport = document.querySelector("#photoSliderViewport");

const createList = (items) => items.map((item) => `<li>${item}</li>`).join("");

if (serviceNav && serviceGrid) {
  serviceNav.innerHTML = services
  .map((service) => `<a href="#${service.id}">${service.title}</a>`)
  .join("");

  serviceGrid.innerHTML = services
  .map(
    (service) => `
      <article class="service-card" id="${service.id}">
        <div>
          <header>
            <h3>${service.title}</h3>
            <p><strong>Equipamentos e soluÃ§Ãµes</strong><br />${service.solution}</p>
          </header>
          <div class="service-columns">
            <div class="mini-block">
              <strong>ServiÃ§os Moema</strong>
              <ul>${createList(service.services)}</ul>
            </div>
            <div class="mini-block">
              <strong>Diferenciais</strong>
              <ul>${createList(service.benefits)}</ul>
            </div>
          </div>
        </div>
        <div class="service-media">
          <img src="${serviceImages[service.id]}" alt="${service.title}" loading="lazy" />
          <span>${service.title}</span>
        </div>
      </article>
    `,
  )
  .join("");
}

photoSliderTrack.innerHTML = galleryImages
  .map(
    ([image, title]) => `
      <article class="slider-slide">
        <img src="${image}" alt="${title}" loading="lazy" />
        <span>${title}</span>
      </article>
    `,
  )
  .join("");

const sliderStep = () => photoSliderViewport.clientWidth * 0.82;
const moveSlider = (direction = 1) => {
  const maxScroll = photoSliderViewport.scrollWidth - photoSliderViewport.clientWidth;
  const next = photoSliderViewport.scrollLeft + sliderStep() * direction;
  photoSliderViewport.scrollTo({
    left: next >= maxScroll - 4 ? 0 : Math.max(0, next),
    behavior: "smooth",
  });
};

document.querySelector(".slider-next")?.addEventListener("click", () => moveSlider(1));
document.querySelector(".slider-prev")?.addEventListener("click", () => {
  if (photoSliderViewport.scrollLeft <= 4) {
    photoSliderViewport.scrollTo({ left: photoSliderViewport.scrollWidth, behavior: "smooth" });
    return;
  }
  moveSlider(-1);
});

let sliderTimer = window.setInterval(() => moveSlider(1), 4200);
photoSliderViewport.addEventListener("mouseenter", () => window.clearInterval(sliderTimer));
photoSliderViewport.addEventListener("mouseleave", () => {
  sliderTimer = window.setInterval(() => moveSlider(1), 4200);
});

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

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
);

sections.forEach((section) => observer.observe(section));

