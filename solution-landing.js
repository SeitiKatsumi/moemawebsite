const corporateSolutions = [
  {
    id: "sinalizacao-digital",
    title: "Sinalização Digital e Digital Signage",
    lead: "Comunicação visual digital para empresas que precisam atualizar campanhas, avisos e conteúdos com velocidade, controle e impacto.",
    equipment: "Telas profissionais, players, softwares de gestão de conteúdo, displays corporativos e sistemas de comunicação visual digital.",
    services: ["Projeto de sinalização digital", "Instalação de telas corporativas", "Implantação de digital signage", "Configuração de software de gestão", "Parametrização de conteúdos e campanhas", "Integração com comunicação interna", "Treinamento operacional"],
    benefits: ["Gestão remota de conteúdo", "Atualização rápida de campanhas", "Comunicação mais dinâmica", "Operação centralizada"],
  },
  {
    id: "paineis-led",
    title: "Painéis de LED",
    lead: "Painéis de LED sob medida para fachadas, eventos, showrooms, auditórios e ambientes corporativos de alto impacto.",
    equipment: "Painéis de LED indoor, outdoor, módulos, estruturas, controladoras, telões corporativos e displays de alta definição.",
    services: ["Projeto de painel de LED", "Fornecimento de módulos e estruturas", "Montagem e instalação profissional", "Configuração de controladoras", "Ajuste de brilho, resolução e exibição", "Treinamento de uso"],
    benefits: ["Alto impacto visual", "Solução sob medida", "Uso interno ou externo", "Acabamento premium"],
  },
  {
    id: "telas-interativas",
    title: "Telas Interativas Touch Screen",
    lead: "Displays colaborativos para reuniões, treinamentos, escolas e auditórios com escrita fluida e compartilhamento sem fio.",
    equipment: "Telas interativas 4K, monitores touch, whiteboards digitais, displays colaborativos e recursos de apresentação.",
    services: ["Instalação de tela interativa", "Configuração de whiteboard digital", "Integração com notebooks e dispositivos móveis", "Configuração de compartilhamento sem fio", "Parametrização de aplicativos", "Treinamento dos usuários"],
    benefits: ["Colaboração em tempo real", "Uso intuitivo", "Visual moderno", "Substitui lousas e projetores"],
  },
  {
    id: "videoconferencia-hibrida",
    title: "Salas de Videoconferência",
    lead: "Salas preparadas para reuniões por vídeo com áudio claro, imagem profissional e operação simples.",
    equipment: "Câmeras inteligentes, microfones, soundbars, painéis de controle, sistemas BYOD, cabos, interfaces, hubs e displays.",
    services: ["Projeto de sala de videoconferência", "Montagem da sala de videoconferência", "Instalação de câmeras e microfones", "Configuração de áudio e vídeo", "Integração com Teams, Zoom, Meet e Webex", "Testes de uso real", "Treinamento da equipe"],
    benefits: ["Reuniões mais fluidas", "Menos ruído", "Imagem profissional", "Compatibilidade multiplataforma"],
  },
  {
    id: "microsoft-teams-rooms",
    title: "Microsoft Teams Rooms",
    lead: "Ambientes nativos Microsoft Teams para reuniões padronizadas, integradas ao calendário e fáceis de operar.",
    equipment: "Kits certificados para Microsoft Teams Rooms, painéis de controle, câmeras, microfones, displays, mini PCs e soundbars.",
    services: ["Implantação de Microsoft Teams Rooms", "Instalação de sala Teams", "Configuração de MTR", "Parametrização de Teams Rooms Pro ou Basic", "Integração com Outlook", "Configuração de equipamentos certificados", "Treinamento de operação"],
    benefits: ["Ambiente nativo Microsoft", "Entrada rápida nas reuniões", "Integração com calendário", "Experiência padronizada"],
  },
  {
    id: "zoom-meet-webex",
    title: "Zoom Rooms, Google Meet e Cisco Webex",
    lead: "Salas flexíveis para empresas que recebem clientes, fornecedores e times em diferentes plataformas de reunião.",
    equipment: "Hardwares para Zoom Rooms, Google Meet Hardware, Cisco Webex Room Kit, câmeras, microfones, displays e sistemas multiplataforma.",
    services: ["Implantação de Zoom Rooms", "Instalação de Google Meet Hardware", "Configuração de Cisco Webex Room Kit", "Integração entre plataformas", "Configuração de salas BYOD", "Parametrização de contas e dispositivos", "Testes de reunião"],
    benefits: ["Flexibilidade de plataforma", "Integração com calendários", "Salas para clientes externos", "Operação multiplataforma"],
  },
  {
    id: "equipamentos-videoconferencia",
    title: "Equipamentos Lenovo, Logitech, Yealink, Poly e Jabra",
    lead: "Seleção, instalação e padronização de equipamentos profissionais de videoconferência para múltiplos ambientes.",
    equipment: "Lenovo ThinkSmart, Logitech Rally, Logitech MeetUp, Yealink MVC, Yealink MeetingBoard, Poly Studio, Jabra PanaCast, câmeras PTZ, video bars, speakerphones e headsets.",
    services: ["Fornecimento dos equipamentos", "Instalação dos dispositivos", "Configuração dos sistemas", "Integração com Teams, Zoom, Meet e Webex", "Ajuste de câmera, microfone e áudio", "Padronização de salas", "Suporte técnico"],
    benefits: ["Equipamento adequado ao tamanho da sala", "Melhor áudio e vídeo", "Instalação limpa", "Operação intuitiva"],
  },
  {
    id: "noc-monitoramento",
    title: "NOC e Salas de Monitoramento",
    lead: "Ambientes de monitoramento 24/7 com visualização clara de dados, dashboards, incidentes e indicadores críticos.",
    equipment: "Video walls, monitores profissionais, displays 24/7, sistemas de visualização, infraestrutura audiovisual, estações de operação e dashboards.",
    services: ["Projeto de NOC corporativo", "Montagem de sala de monitoramento", "Instalação de video wall", "Configuração de telas e fontes de dados", "Integração com dashboards", "Organização de layout operacional", "Testes de visualização e operação"],
    benefits: ["Monitoramento em tempo real", "Operação 24/7", "Ambiente ergonômico", "Apoio à tomada de decisão"],
  },
  {
    id: "totens-interativos",
    title: "Tótens Interativos",
    lead: "Autoatendimento, recepção, check-in, mapas e experiências interativas para ambientes comerciais e institucionais.",
    equipment: "Tótens touch screen, tótens de autoatendimento, tótens publicitários, tótens para check-in, cadastro, mapas, recepção e eventos.",
    services: ["Projeto de totem interativo", "Fornecimento do equipamento", "Personalização visual", "Instalação do totem", "Configuração da interface", "Integração com sistemas", "Treinamento de uso"],
    benefits: ["Autoatendimento", "Redução de filas", "Interação com o público", "Gerenciamento remoto"],
  },
  {
    id: "audio-video-profissional",
    title: "Áudio e Vídeo Profissional",
    lead: "Projetos audiovisuais para auditórios, salas, eventos e ambientes corporativos com som inteligível e imagem de alta qualidade.",
    equipment: "Projetores, displays, sistemas de som, microfones, DSPs, caixas acústicas, interfaces, matrizes, cabeamento e automação audiovisual.",
    services: ["Projeto audiovisual", "Instalação de áudio e vídeo", "Sonorização de ambientes", "Configuração de microfones e DSP", "Instalação de projetores e displays", "Integração de som e imagem", "Automação do sistema AV", "Treinamento operacional"],
    benefits: ["Som inteligível", "Imagem de alta qualidade", "Operação centralizada", "Experiência premium"],
  },
  {
    id: "menu-board-digital",
    title: "Menu Board Digital",
    lead: "Cardápios digitais para restaurantes, cafeterias, lanchonetes, franquias e operações com múltiplas unidades.",
    equipment: "Telas profissionais, players, softwares de gestão, displays para cardápios digitais e sistemas para ponto de venda.",
    services: ["Projeto de menu board digital", "Instalação das telas", "Configuração do sistema", "Parametrização de produtos e preços", "Programação por horário", "Gestão de múltiplas unidades", "Treinamento da operação"],
    benefits: ["Atualização rápida de preços", "Destaque para combos", "Redução de impressão", "Visual profissional"],
  },
  {
    id: "apple-negocios",
    title: "Tecnologia Apple para Negócios",
    lead: "Consultoria, fornecimento e configuração de tecnologia Apple para equipes, executivos e ambientes corporativos.",
    equipment: "Macs, MacBooks, iPads, iPhones, acessórios, Apple Business Manager e soluções para gestão de dispositivos corporativos.",
    services: ["Consultoria Apple para empresas", "Fornecimento de equipamentos Apple", "Configuração de dispositivos", "Parametrização de Apple Business Manager", "Integração com ambiente corporativo", "Gestão de dispositivos", "Suporte à adoção"],
    benefits: ["Alta performance", "Segurança nativa", "Design premium", "Gestão centralizada"],
  },
  {
    id: "smart-office",
    title: "Automação Corporativa e Smart Office",
    lead: "Escritórios inteligentes com cenas, sensores, controle centralizado e integração entre iluminação, clima e audiovisual.",
    equipment: "Painéis touch, sensores, controladores, automação de iluminação, climatização, persianas, audiovisual e salas inteligentes.",
    services: ["Projeto de smart office", "Instalação de automação corporativa", "Configuração de cenas inteligentes", "Integração de iluminação, clima e AV", "Automação de salas de reunião", "Parametrização de painéis e comandos", "Treinamento de uso"],
    benefits: ["Ambientes eficientes", "Redução de desperdício energético", "Controle centralizado", "Mais conforto e sofisticação"],
  },
  {
    id: "infraestrutura-redes-cftv",
    title: "Infraestrutura, Redes Mesh e CFTV",
    lead: "Base técnica para ambientes conectados, seguros e preparados para alta demanda de rede, automação, AV e videoconferência.",
    equipment: "Roteadores, access points, redes mesh, cabeamento estruturado, switches, câmeras IP, DVR, NVR, sensores e sistemas de monitoramento.",
    services: ["Projeto de infraestrutura de rede", "Instalação de rede mesh", "Instalação de Wi-Fi corporativo", "Cabeamento estruturado", "Instalação de CFTV", "Configuração de câmeras IP", "Parametrização de NVR e DVR", "Integração com monitoramento remoto"],
    benefits: ["Conectividade estável", "Eliminação de zonas de sombra", "Rede de alta demanda", "Monitoramento remoto"],
  },
];

const residentialMenu = [
  ["automacao-residencial", "Automação Residencial"],
  ["home-theater-audio", "Home Theater e Áudio Multiroom"],
  ["iluminacao-cortinas", "Iluminação, Cortinas e Cenas"],
  ["seguranca-cftv", "Segurança, Câmeras e CFTV"],
  ["redes-mesh-wifi", "Redes Mesh e Wi-Fi Residencial"],
  ["climatizacao-voz", "Climatização e Controle por Voz"],
];

const solutionImages = {
  "sinalizacao-digital": "../assets/generated-environments/hppoly/ambiente-001-hppoly.png",
  "paineis-led": "../assets/generated-environments/yeahlink/ambiente-002-yeahlink.png",
  "telas-interativas": "../assets/generated-environments/logitechrally/ambiente-010-logitechrally.png",
  "videoconferencia-hibrida": "../assets/generated-environments/jabra/ambiente-010-jabra.png",
  "microsoft-teams-rooms": "../assets/generated-environments/hppoly/ambiente-011-hppoly.png",
  "zoom-meet-webex": "../assets/generated-environments/yeahlink/ambiente-012-yeahlink.png",
  "equipamentos-videoconferencia": "../assets/generated-environments/logitechrally/ambiente-013-logitechrally.png",
  "noc-monitoramento": "../assets/generated-environments/jabra/ambiente-014-jabra.png",
  "totens-interativos": "../assets/generated-environments/hppoly/ambiente-015-hppoly.png",
  "audio-video-profissional": "../assets/generated-environments/yeahlink/ambiente-016-yeahlink.png",
  "menu-board-digital": "../assets/generated-environments/logitechrally/ambiente-017-logitechrally.png",
  "apple-negocios": "../assets/generated-environments/jabra/ambiente-018-jabra.png",
  "smart-office": "../assets/generated-environments/hppoly/ambiente-019-hppoly.png",
  "infraestrutura-redes-cftv": "../assets/generated-environments/logitechrally/ambiente-021-logitechrally.png",
};

const corporateCaseImages = [
  ["../assets/generated-environments/hppoly/ambiente-001-hppoly.png", "Sala de reunião HP Poly"],
  ["../assets/generated-environments/yeahlink/ambiente-001-yeahlink.png", "Sala de reunião Yealink"],
  ["../assets/generated-environments/logitechrally/ambiente-001-logitechrally.png", "Sala de reunião Logitech"],
  ["../assets/generated-environments/jabra/ambiente-001-jabra.png", "Sala de reunião Jabra"],
];

const params = new URLSearchParams(window.location.search);
const currentId = params.get("solucao") || corporateSolutions[0].id;
const current = corporateSolutions.find((solution) => solution.id === currentId) || corporateSolutions[0];
const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
const currentImage = solutionImages[current.id] || "../assets/generated-environments/hppoly/ambiente-001-hppoly.png";
const videoSolutionIds = new Set([
  "videoconferencia-hibrida",
  "microsoft-teams-rooms",
  "zoom-meet-webex",
  "equipamentos-videoconferencia",
]);

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
document.querySelector("#solutionCases").innerHTML = [[currentImage, current.title], ...corporateCaseImages]
  .slice(0, 4)
  .map(([image, title]) => `<article><img src="${image}" alt="${title}" loading="lazy" /><span>${title}</span></article>`)
  .join("");
document.querySelector("#solutionSubmenu").innerHTML = corporateSolutions
  .map((solution) => `<a href="?solucao=${solution.id}">${solution.title}</a>`)
  .join("");
document.querySelector("#productsSubmenu").innerHTML =
  corporateSolutions.map((solution) => `<a href="?solucao=${solution.id}">${solution.title}</a>`).join("") +
  residentialMenu
    .map(([id, title]) => `<a href="../solucoes-residenciais/?solucao=${id}">${title}</a>`)
    .join("");

const videoBrandSection = document.querySelector("#marcas-videoconferencia");
const videoBrandMenu = document.querySelector("#videoBrandMenu");
const equipmentBrands = window.moemaEquipmentBrands || [];

if (videoBrandSection && videoBrandMenu && videoSolutionIds.has(current.id)) {
  videoBrandSection.hidden = false;
  videoBrandMenu.innerHTML = equipmentBrands
    .map(
      (brand) => `
        <a class="brand-equipment-card" href="../equipamentos/?marca=${brand.id}">
          <span class="brand-logo-box">
            <img src="../${brand.logo}" alt="${brand.logoAlt}" loading="lazy" />
          </span>
          <strong>${brand.label}</strong>
          <small>${brand.products.length} equipamentos cadastrados</small>
        </a>
      `,
    )
    .join("");
}

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

