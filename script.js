const services = [
  {
    id: "sinalizacao-digital",
    title: "Sinalização Digital e Digital Signage",
    solution:
      "Telas profissionais, players, softwares de gestão de conteúdo, displays corporativos e sistemas de comunicação visual digital.",
    services: [
      "Projeto de sinalização digital",
      "Instalação de telas corporativas",
      "Implantação de digital signage",
      "Configuração de software de gestão",
      "Parametrização de conteúdos e campanhas",
      "Integração com comunicação interna",
      "Treinamento operacional",
    ],
    benefits: [
      "Gestão remota de conteúdo",
      "Atualização rápida de campanhas",
      "Comunicação mais din?mica",
      "Ambientes mais modernos",
      "Operação centralizada",
      "Escalabilidade para múltiplas unidades",
    ],
  },
  {
    id: "paineis-led",
    title: "Painéis de LED",
    solution:
      "Painéis de LED indoor, outdoor, painéis sob medida, telões corporativos, displays de alta definição e soluções para fachadas, eventos, auditórios e showrooms.",
    services: [
      "Projeto de painel de LED",
      "Fornecimento dos módulos e estruturas",
      "Montagem de painel de LED",
      "Instalação profissional",
      "Configuração de controladoras",
      "Ajuste de brilho, resolução e exibição",
      "Treinamento de uso",
    ],
    benefits: [
      "Alto impacto visual",
      "Soluções sob medida",
      "Uso interno ou externo",
      "Alta visibilidade",
      "Acabamento premium",
      "Atualização din?mica de conteúdo",
    ],
  },
  {
    id: "telas-interativas",
    title: "Telas Interativas Touch Screen",
    solution:
      "Telas interativas 4K, monitores touch, whiteboards digitais, displays colaborativos e soluções para reuniões, treinamentos, escolas e auditórios.",
    services: [
      "Instalação de tela interativa",
      "Configuração de whiteboard digital",
      "Integração com notebooks e dispositivos móveis",
      "Configuração de compartilhamento sem fio",
      "Parametrização de aplicativos",
      "Treinamento dos usuários",
    ],
    benefits: [
      "Colaboração em tempo real",
      "Escrita fluida",
      "Compartilhamento sem fio",
      "Substituição de lousas e projetores",
      "Visual moderno",
      "Uso intuitivo",
    ],
  },
  {
    id: "videoconferencia-hibrida",
    title: "Salas de Videoconferência Híbridas",
    solution:
      "C?meras inteligentes, microfones, soundbars, painéis de controle, sistemas BYOD, cabos, interfaces, hubs, displays e equipamentos para Teams, Zoom, Google Meet e Webex.",
    services: [
      "Projeto de sala de reunião híbrida",
      "Montagem da sala de videoconferência",
      "Instalação de c?meras e microfones",
      "Configuração de áudio e vídeo",
      "Integração com plataformas de reunião",
      "Parametrização de BYOD",
      "Testes de uso real",
      "Treinamento da equipe",
    ],
    benefits: [
      "Reuniões mais fluidas",
      "Áudio mais claro",
      "Imagem profissional",
      "Menos ruído",
      "Operação simples",
      "Compatibilidade com múltiplas plataformas",
    ],
  },
  {
    id: "microsoft-teams-rooms",
    title: "Microsoft Teams Rooms",
    solution:
      "Kits certificados para Microsoft Teams Rooms, painéis de controle, c?meras, microfones, displays, mini PCs, soundbars e licenças compatíveis.",
    services: [
      "Implantação de Microsoft Teams Rooms",
      "Instalação de sala Teams",
      "Configuração de MTR",
      "Parametrização de Teams Rooms Pro ou Basic",
      "Integração com Outlook",
      "Configuração de equipamentos certificados",
      "Treinamento de operação",
    ],
    benefits: [
      "Ambiente nativo Microsoft",
      "Entrada rápida nas reuniões",
      "Integração com calendário",
      "Experiência padronizada",
      "Operação simples",
      "Mais profissionalismo nas reuniões híbridas",
    ],
  },
  {
    id: "zoom-meet-webex",
    title: "Zoom Rooms, Google Meet e Cisco Webex",
    solution:
      "Hardwares para Zoom Rooms, Google Meet Hardware, Cisco Webex Room Kit, c?meras, microfones, displays e sistemas multiplataforma.",
    services: [
      "Implantação de Zoom Rooms",
      "Instalação de Google Meet Hardware",
      "Configuração de Cisco Webex Room Kit",
      "Integração entre plataformas",
      "Configuração de salas BYOD",
      "Parametrização de contas e dispositivos",
      "Testes de reunião",
    ],
    benefits: [
      "Flexibilidade para diferentes plataformas",
      "Integração com calendários",
      "Salas preparadas para clientes externos",
      "Operação multiplataforma",
      "Ambientes híbridos mais eficientes",
    ],
  },
  {
    id: "equipamentos-videoconferencia",
    title: "Equipamentos para Videoconferência: Lenovo, Logitech, Yealink, Poly e Jabra",
    solution:
      "Lenovo ThinkSmart, Logitech Rally, Logitech MeetUp, Yealink MVC, Yealink MeetingBoard, Poly Studio, Jabra PanaCast, c?meras PTZ, video bars, speakerphones e headsets profissionais.",
    services: [
      "Fornecimento dos equipamentos",
      "Instalação dos dispositivos",
      "Configuração dos sistemas",
      "Integração com Teams, Zoom, Meet e Webex",
      "Ajuste de c?mera, microfone e áudio",
      "Padronização de salas",
      "Suporte técnico",
    ],
    benefits: [
      "Equipamentos adequados ao tamanho da sala",
      "Melhor qualidade de áudio e vídeo",
      "Instalação limpa",
      "Compatibilidade com plataformas corporativas",
      "Operação intuitiva",
      "Padronização para múltiplos ambientes",
    ],
  },
  {
    id: "noc-monitoramento",
    title: "NOC e Salas de Monitoramento",
    solution:
      "Video walls, monitores profissionais, displays 24/7, sistemas de visualização, infraestrutura audiovisual, estações de operação e integração com dashboards.",
    services: [
      "Projeto de NOC corporativo",
      "Montagem de sala de monitoramento",
      "Instalação de video wall",
      "Configuração de telas e fontes de dados",
      "Integração com dashboards",
      "Organização de layout operacional",
      "Testes de visualização e operação",
    ],
    benefits: [
      "Monitoramento em tempo real",
      "Operação 24/7",
      "Ambiente ergonômico",
      "Mais controle sobre incidentes",
      "Visualização clara de métricas",
      "Apoio à tomada de decisão",
    ],
  },
  {
    id: "totens-interativos",
    title: "Tótens Interativos",
    solution:
      "Tótens touch screen, tótens de autoatendimento, tótens publicitários, tótens para check-in, cadastro, mapas, recepção e eventos.",
    services: [
      "Projeto de totem interativo",
      "Fornecimento do equipamento",
      "Personalização visual",
      "Instalação do totem",
      "Configuração da interface",
      "Integração com sistemas",
      "Treinamento de uso",
    ],
    benefits: [
      "Autoatendimento",
      "Experiência moderna",
      "Redução de filas",
      "Interação com o público",
      "Aplicações comerciais e institucionais",
      "Gerenciamento remoto",
    ],
  },
  {
    id: "audio-video-profissional",
    title: "Áudio e Vídeo Profissional",
    solution:
      "Projetores, displays, sistemas de som, microfones, DSPs, caixas acústicas, interfaces, matrizes, cabeamento e automação audiovisual.",
    services: [
      "Projeto audiovisual",
      "Instalação de áudio e vídeo",
      "Sonorização de ambientes",
      "Configuração de microfones e DSP",
      "Instalação de projetores e displays",
      "Integração de som e imagem",
      "Automação do sistema AV",
      "Treinamento operacional",
    ],
    benefits: [
      "Som mais inteligível",
      "Imagem de alta qualidade",
      "Operação centralizada",
      "Ambientes mais profissionais",
      "Menos falhas em apresentações",
      "Experiência premium para eventos e reuniões",
    ],
  },
  {
    id: "menu-board-digital",
    title: "Menu Board Digital",
    solution:
      "Telas profissionais, players, softwares de gestão, displays para cardápios digitais e sistemas para restaurantes, cafeterias, lanchonetes, franquias e praças de alimentação.",
    services: [
      "Projeto de menu board digital",
      "Instalação das telas",
      "Configuração do sistema",
      "Parametrização de produtos e preços",
      "Programação por horário",
      "Gestão de múltiplas unidades",
      "Treinamento da operação",
    ],
    benefits: [
      "Atualização rápida de preços",
      "Mais destaque para combos e ofertas",
      "Redução de impressão",
      "Visual mais profissional",
      "Operação mais ágil",
      "Melhor experiência no ponto de venda",
    ],
  },
  {
    id: "apple-negocios",
    title: "Tecnologia Apple para Negócios",
    solution:
      "Macs, MacBooks, iPads, iPhones, acessórios, Apple Business Manager e soluções para gestão de dispositivos corporativos.",
    services: [
      "Consultoria Apple para empresas",
      "Fornecimento de equipamentos Apple",
      "Configuração de dispositivos",
      "Parametrização de Apple Business Manager",
      "Integração com ambiente corporativo",
      "Gestão de dispositivos",
      "Suporte à adoção",
    ],
    benefits: [
      "Alta performance",
      "Segurança nativa",
      "Design premium",
      "Integração entre dispositivos",
      "Gestão centralizada",
      "Produtividade para equipes e executivos",
    ],
  },
  {
    id: "smart-office",
    title: "Automação Corporativa e Smart Office",
    solution:
      "Painéis touch, sensores, controladores, automação de iluminação, climatização, persianas, audiovisual, salas de reunião e ambientes corporativos inteligentes.",
    services: [
      "Projeto de smart office",
      "Instalação de automação corporativa",
      "Configuração de cenas inteligentes",
      "Integração de iluminação, clima e AV",
      "Automação de salas de reunião",
      "Parametrização de painéis e comandos",
      "Treinamento de uso",
    ],
    benefits: [
      "Ambientes mais eficientes",
      "Redução de desperdício energético",
      "Controle centralizado",
      "Cenas para reuniões e apresentações",
      "Mais conforto e sofisticação",
      "Operação intuitiva",
    ],
  },
  {
    id: "automacao-residencial",
    title: "Automação Residencial",
    solution:
      "Automação de iluminação, cortinas, climatização, home theater, áudio multiroom, fechaduras, c?meras, sensores, painéis e controle por voz.",
    services: [
      "Projeto de casa inteligente",
      "Instalação de automação residencial",
      "Configuração de cenas personalizadas",
      "Integração de áudio, vídeo e iluminação",
      "Automação de cortinas e climatização",
      "Configuração de controle por app ou voz",
      "Treinamento dos moradores",
    ],
    benefits: [
      "Conforto",
      "Segurança",
      "Sofisticação",
      "Controle remoto",
      "Rotinas automatizadas",
      "Integração com o estilo de vida da casa",
    ],
  },
  {
    id: "infraestrutura-redes-cftv",
    title: "Infraestrutura, Redes Mesh e CFTV",
    solution:
      "Roteadores, access points, redes mesh, cabeamento estruturado, switches, c?meras IP, DVR, NVR, sensores e sistemas de monitoramento.",
    services: [
      "Projeto de infraestrutura de rede",
      "Instalação de rede mesh",
      "Instalação de Wi-Fi corporativo",
      "Cabeamento estruturado",
      "Instalação de CFTV",
      "Configuração de c?meras IP",
      "Parametrização de NVR e DVR",
      "Integração com monitoramento remoto",
    ],
    benefits: [
      "Conectividade estável",
      "Eliminação de zonas de sombra",
      "Rede preparada para alta demanda",
      "Mais segurança",
      "Monitoramento remoto",
      "Base sólida para automação, AV e videoconferência",
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
  ["assets/generated-environments/hppoly/ambiente-001-hppoly.png", "Sala de reunião HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-001-yeahlink.png", "Sala de reunião Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-001-logitechrally.png", "Sala de reunião Logitech"],
  ["assets/generated-environments/jabra/ambiente-001-jabra.png", "Sala de reunião Jabra"],
  ["assets/generated-environments/hppoly/ambiente-002-hppoly.png", "Auditório colaborativo HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-002-yeahlink.png", "Auditório colaborativo Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-002-logitechrally.png", "Auditório colaborativo Logitech"],
  ["assets/generated-environments/jabra/ambiente-002-jabra.png", "Auditório colaborativo Jabra"],
  ["assets/generated-environments/hppoly/ambiente-010-hppoly.png", "Videoconferência HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-010-yeahlink.png", "Videoconferência Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-010-logitechrally.png", "Videoconferência Logitech"],
  ["assets/generated-environments/jabra/ambiente-010-jabra.png", "Videoconferência Jabra"],
  ["assets/generated-environments/hppoly/ambiente-011-hppoly.png", "Microsoft Teams Room HP Poly"],
  ["assets/generated-environments/yeahlink/ambiente-011-yeahlink.png", "Sala multiplataforma Yealink"],
  ["assets/generated-environments/logitechrally/ambiente-011-logitechrally.png", "Sala Rally Logitech"],
  ["assets/generated-environments/jabra/ambiente-011-jabra.png", "Sala PanaCast Jabra"],
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
            <p><strong>Equipamentos e soluções</strong><br />${service.solution}</p>
          </header>
          <div class="service-columns">
            <div class="mini-block">
              <strong>Serviços Moema</strong>
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

