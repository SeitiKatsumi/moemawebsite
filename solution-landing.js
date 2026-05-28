const corporateSolutions = [
  {
    id: "sinalizacao-digital",
    title: "SinalizaÃ§Ã£o Digital e Digital Signage",
    lead: "ComunicaÃ§Ã£o visual digital para empresas que precisam atualizar campanhas, avisos e conteÃºdos com velocidade, controle e impacto.",
    equipment: "Telas profissionais, players, softwares de gestÃ£o de conteÃºdo, displays corporativos e sistemas de comunicaÃ§Ã£o visual digital.",
    services: ["Projeto de sinalizaÃ§Ã£o digital", "InstalaÃ§Ã£o de telas corporativas", "ImplantaÃ§Ã£o de digital signage", "ConfiguraÃ§Ã£o de software de gestÃ£o", "ParametrizaÃ§Ã£o de conteÃºdos e campanhas", "IntegraÃ§Ã£o com comunicaÃ§Ã£o interna", "Treinamento operacional"],
    benefits: ["GestÃ£o remota de conteÃºdo", "AtualizaÃ§Ã£o rÃ¡pida de campanhas", "ComunicaÃ§Ã£o mais dinÃ¢mica", "OperaÃ§Ã£o centralizada"],
  },
  {
    id: "paineis-led",
    title: "PainÃ©is de LED",
    lead: "PainÃ©is de LED sob medida para fachadas, eventos, showrooms, auditÃ³rios e ambientes corporativos de alto impacto.",
    equipment: "PainÃ©is de LED indoor, outdoor, mÃ³dulos, estruturas, controladoras, telÃµes corporativos e displays de alta definiÃ§Ã£o.",
    services: ["Projeto de painel de LED", "Fornecimento de mÃ³dulos e estruturas", "Montagem e instalaÃ§Ã£o profissional", "ConfiguraÃ§Ã£o de controladoras", "Ajuste de brilho, resoluÃ§Ã£o e exibiÃ§Ã£o", "Treinamento de uso"],
    benefits: ["Alto impacto visual", "SoluÃ§Ã£o sob medida", "Uso interno ou externo", "Acabamento premium"],
  },
  {
    id: "telas-interativas",
    title: "Telas Interativas Touch Screen",
    lead: "Displays colaborativos para reuniÃµes, treinamentos, escolas e auditÃ³rios com escrita fluida e compartilhamento sem fio.",
    equipment: "Telas interativas 4K, monitores touch, whiteboards digitais, displays colaborativos e recursos de apresentaÃ§Ã£o.",
    services: ["InstalaÃ§Ã£o de tela interativa", "ConfiguraÃ§Ã£o de whiteboard digital", "IntegraÃ§Ã£o com notebooks e dispositivos mÃ³veis", "ConfiguraÃ§Ã£o de compartilhamento sem fio", "ParametrizaÃ§Ã£o de aplicativos", "Treinamento dos usuÃ¡rios"],
    benefits: ["ColaboraÃ§Ã£o em tempo real", "Uso intuitivo", "Visual moderno", "Substitui lousas e projetores"],
  },
  {
    id: "videoconferencia-hibrida",
    title: "Salas de VideoconferÃªncia HÃ­bridas",
    lead: "Salas preparadas para reuniÃµes hÃ­bridas com Ã¡udio claro, imagem profissional e operaÃ§Ã£o simples.",
    equipment: "CÃ¢meras inteligentes, microfones, soundbars, painÃ©is de controle, sistemas BYOD, cabos, interfaces, hubs e displays.",
    services: ["Projeto de sala de reuniÃ£o hÃ­brida", "Montagem da sala de videoconferÃªncia", "InstalaÃ§Ã£o de cÃ¢meras e microfones", "ConfiguraÃ§Ã£o de Ã¡udio e vÃ­deo", "IntegraÃ§Ã£o com Teams, Zoom, Meet e Webex", "Testes de uso real", "Treinamento da equipe"],
    benefits: ["ReuniÃµes mais fluidas", "Menos ruÃ­do", "Imagem profissional", "Compatibilidade multiplataforma"],
  },
  {
    id: "microsoft-teams-rooms",
    title: "Microsoft Teams Rooms",
    lead: "Ambientes nativos Microsoft Teams para reuniÃµes padronizadas, integradas ao calendÃ¡rio e fÃ¡ceis de operar.",
    equipment: "Kits certificados para Microsoft Teams Rooms, painÃ©is de controle, cÃ¢meras, microfones, displays, mini PCs e soundbars.",
    services: ["ImplantaÃ§Ã£o de Microsoft Teams Rooms", "InstalaÃ§Ã£o de sala Teams", "ConfiguraÃ§Ã£o de MTR", "ParametrizaÃ§Ã£o de Teams Rooms Pro ou Basic", "IntegraÃ§Ã£o com Outlook", "ConfiguraÃ§Ã£o de equipamentos certificados", "Treinamento de operaÃ§Ã£o"],
    benefits: ["Ambiente nativo Microsoft", "Entrada rÃ¡pida nas reuniÃµes", "IntegraÃ§Ã£o com calendÃ¡rio", "ExperiÃªncia padronizada"],
  },
  {
    id: "zoom-meet-webex",
    title: "Zoom Rooms, Google Meet e Cisco Webex",
    lead: "Salas flexÃ­veis para empresas que recebem clientes, fornecedores e times em diferentes plataformas de reuniÃ£o.",
    equipment: "Hardwares para Zoom Rooms, Google Meet Hardware, Cisco Webex Room Kit, cÃ¢meras, microfones, displays e sistemas multiplataforma.",
    services: ["ImplantaÃ§Ã£o de Zoom Rooms", "InstalaÃ§Ã£o de Google Meet Hardware", "ConfiguraÃ§Ã£o de Cisco Webex Room Kit", "IntegraÃ§Ã£o entre plataformas", "ConfiguraÃ§Ã£o de salas BYOD", "ParametrizaÃ§Ã£o de contas e dispositivos", "Testes de reuniÃ£o"],
    benefits: ["Flexibilidade de plataforma", "IntegraÃ§Ã£o com calendÃ¡rios", "Salas para clientes externos", "OperaÃ§Ã£o multiplataforma"],
  },
  {
    id: "equipamentos-videoconferencia",
    title: "Equipamentos Lenovo, Logitech, Yealink, Poly e Jabra",
    lead: "SeleÃ§Ã£o, instalaÃ§Ã£o e padronizaÃ§Ã£o de equipamentos profissionais de videoconferÃªncia para mÃºltiplos ambientes.",
    equipment: "Lenovo ThinkSmart, Logitech Rally, Logitech MeetUp, Yealink MVC, Yealink MeetingBoard, Poly Studio, Jabra PanaCast, cÃ¢meras PTZ, video bars, speakerphones e headsets.",
    services: ["Fornecimento dos equipamentos", "InstalaÃ§Ã£o dos dispositivos", "ConfiguraÃ§Ã£o dos sistemas", "IntegraÃ§Ã£o com Teams, Zoom, Meet e Webex", "Ajuste de cÃ¢mera, microfone e Ã¡udio", "PadronizaÃ§Ã£o de salas", "Suporte tÃ©cnico"],
    benefits: ["Equipamento adequado ao tamanho da sala", "Melhor Ã¡udio e vÃ­deo", "InstalaÃ§Ã£o limpa", "OperaÃ§Ã£o intuitiva"],
  },
  {
    id: "noc-monitoramento",
    title: "NOC e Salas de Monitoramento",
    lead: "Ambientes de monitoramento 24/7 com visualizaÃ§Ã£o clara de dados, dashboards, incidentes e indicadores crÃ­ticos.",
    equipment: "Video walls, monitores profissionais, displays 24/7, sistemas de visualizaÃ§Ã£o, infraestrutura audiovisual, estaÃ§Ãµes de operaÃ§Ã£o e dashboards.",
    services: ["Projeto de NOC corporativo", "Montagem de sala de monitoramento", "InstalaÃ§Ã£o de video wall", "ConfiguraÃ§Ã£o de telas e fontes de dados", "IntegraÃ§Ã£o com dashboards", "OrganizaÃ§Ã£o de layout operacional", "Testes de visualizaÃ§Ã£o e operaÃ§Ã£o"],
    benefits: ["Monitoramento em tempo real", "OperaÃ§Ã£o 24/7", "Ambiente ergonÃ´mico", "Apoio Ã  tomada de decisÃ£o"],
  },
  {
    id: "totens-interativos",
    title: "TÃ³tens Interativos",
    lead: "Autoatendimento, recepÃ§Ã£o, check-in, mapas e experiÃªncias interativas para ambientes comerciais e institucionais.",
    equipment: "TÃ³tens touch screen, tÃ³tens de autoatendimento, tÃ³tens publicitÃ¡rios, tÃ³tens para check-in, cadastro, mapas, recepÃ§Ã£o e eventos.",
    services: ["Projeto de totem interativo", "Fornecimento do equipamento", "PersonalizaÃ§Ã£o visual", "InstalaÃ§Ã£o do totem", "ConfiguraÃ§Ã£o da interface", "IntegraÃ§Ã£o com sistemas", "Treinamento de uso"],
    benefits: ["Autoatendimento", "ReduÃ§Ã£o de filas", "InteraÃ§Ã£o com o pÃºblico", "Gerenciamento remoto"],
  },
  {
    id: "audio-video-profissional",
    title: "Ãudio e VÃ­deo Profissional",
    lead: "Projetos audiovisuais para auditÃ³rios, salas, eventos e ambientes corporativos com som inteligÃ­vel e imagem de alta qualidade.",
    equipment: "Projetores, displays, sistemas de som, microfones, DSPs, caixas acÃºsticas, interfaces, matrizes, cabeamento e automaÃ§Ã£o audiovisual.",
    services: ["Projeto audiovisual", "InstalaÃ§Ã£o de Ã¡udio e vÃ­deo", "SonorizaÃ§Ã£o de ambientes", "ConfiguraÃ§Ã£o de microfones e DSP", "InstalaÃ§Ã£o de projetores e displays", "IntegraÃ§Ã£o de som e imagem", "AutomaÃ§Ã£o do sistema AV", "Treinamento operacional"],
    benefits: ["Som inteligÃ­vel", "Imagem de alta qualidade", "OperaÃ§Ã£o centralizada", "ExperiÃªncia premium"],
  },
  {
    id: "menu-board-digital",
    title: "Menu Board Digital",
    lead: "CardÃ¡pios digitais para restaurantes, cafeterias, lanchonetes, franquias e operaÃ§Ãµes com mÃºltiplas unidades.",
    equipment: "Telas profissionais, players, softwares de gestÃ£o, displays para cardÃ¡pios digitais e sistemas para ponto de venda.",
    services: ["Projeto de menu board digital", "InstalaÃ§Ã£o das telas", "ConfiguraÃ§Ã£o do sistema", "ParametrizaÃ§Ã£o de produtos e preÃ§os", "ProgramaÃ§Ã£o por horÃ¡rio", "GestÃ£o de mÃºltiplas unidades", "Treinamento da operaÃ§Ã£o"],
    benefits: ["AtualizaÃ§Ã£o rÃ¡pida de preÃ§os", "Destaque para combos", "ReduÃ§Ã£o de impressÃ£o", "Visual profissional"],
  },
  {
    id: "apple-negocios",
    title: "Tecnologia Apple para NegÃ³cios",
    lead: "Consultoria, fornecimento e configuraÃ§Ã£o de tecnologia Apple para equipes, executivos e ambientes corporativos.",
    equipment: "Macs, MacBooks, iPads, iPhones, acessÃ³rios, Apple Business Manager e soluÃ§Ãµes para gestÃ£o de dispositivos corporativos.",
    services: ["Consultoria Apple para empresas", "Fornecimento de equipamentos Apple", "ConfiguraÃ§Ã£o de dispositivos", "ParametrizaÃ§Ã£o de Apple Business Manager", "IntegraÃ§Ã£o com ambiente corporativo", "GestÃ£o de dispositivos", "Suporte Ã  adoÃ§Ã£o"],
    benefits: ["Alta performance", "SeguranÃ§a nativa", "Design premium", "GestÃ£o centralizada"],
  },
  {
    id: "smart-office",
    title: "AutomaÃ§Ã£o Corporativa e Smart Office",
    lead: "EscritÃ³rios inteligentes com cenas, sensores, controle centralizado e integraÃ§Ã£o entre iluminaÃ§Ã£o, clima e audiovisual.",
    equipment: "PainÃ©is touch, sensores, controladores, automaÃ§Ã£o de iluminaÃ§Ã£o, climatizaÃ§Ã£o, persianas, audiovisual e salas inteligentes.",
    services: ["Projeto de smart office", "InstalaÃ§Ã£o de automaÃ§Ã£o corporativa", "ConfiguraÃ§Ã£o de cenas inteligentes", "IntegraÃ§Ã£o de iluminaÃ§Ã£o, clima e AV", "AutomaÃ§Ã£o de salas de reuniÃ£o", "ParametrizaÃ§Ã£o de painÃ©is e comandos", "Treinamento de uso"],
    benefits: ["Ambientes eficientes", "ReduÃ§Ã£o de desperdÃ­cio energÃ©tico", "Controle centralizado", "Mais conforto e sofisticaÃ§Ã£o"],
  },
  {
    id: "infraestrutura-redes-cftv",
    title: "Infraestrutura, Redes Mesh e CFTV",
    lead: "Base tÃ©cnica para ambientes conectados, seguros e preparados para alta demanda de rede, automaÃ§Ã£o, AV e videoconferÃªncia.",
    equipment: "Roteadores, access points, redes mesh, cabeamento estruturado, switches, cÃ¢meras IP, DVR, NVR, sensores e sistemas de monitoramento.",
    services: ["Projeto de infraestrutura de rede", "InstalaÃ§Ã£o de rede mesh", "InstalaÃ§Ã£o de Wi-Fi corporativo", "Cabeamento estruturado", "InstalaÃ§Ã£o de CFTV", "ConfiguraÃ§Ã£o de cÃ¢meras IP", "ParametrizaÃ§Ã£o de NVR e DVR", "IntegraÃ§Ã£o com monitoramento remoto"],
    benefits: ["Conectividade estÃ¡vel", "EliminaÃ§Ã£o de zonas de sombra", "Rede de alta demanda", "Monitoramento remoto"],
  },
];

const residentialMenu = [
  ["automacao-residencial", "AutomaÃ§Ã£o Residencial"],
  ["home-theater-audio", "Home Theater e Ãudio Multiroom"],
  ["iluminacao-cortinas", "IluminaÃ§Ã£o, Cortinas e Cenas"],
  ["seguranca-cftv", "SeguranÃ§a, CÃ¢meras e CFTV"],
  ["redes-mesh-wifi", "Redes Mesh e Wi-Fi Residencial"],
  ["climatizacao-voz", "ClimatizaÃ§Ã£o e Controle por Voz"],
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
  ["../assets/generated-environments/hppoly/ambiente-001-hppoly.png", "Ambiente HP Poly"],
  ["../assets/generated-environments/yeahlink/ambiente-001-yeahlink.png", "Ambiente Yealink"],
  ["../assets/generated-environments/logitechrally/ambiente-001-logitechrally.png", "Ambiente Logitech"],
  ["../assets/generated-environments/jabra/ambiente-001-jabra.png", "Ambiente Jabra"],
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

