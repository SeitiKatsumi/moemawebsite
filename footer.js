const pathPrefix = window.location.pathname.includes("/") && window.location.pathname !== "/" ? "../" : "";

const footer = document.createElement("footer");
footer.className = "site-footer";
footer.id = "rodape";
footer.innerHTML = `
  <div class="footer-inner">
    <div class="footer-brand-col">
      <a class="footer-logo" href="${pathPrefix}">
        <img src="${pathPrefix}assets/logo-moema.webp" alt="Moema" />
      </a>
      <p>
        Soluções em tecnologia, audiovisual, videoconferência, automação, infraestrutura e ambientes inteligentes
        com projeto, implantação e suporte especializado.
      </p>
      <div class="footer-social" aria-label="Redes sociais">
        <a href="${pathPrefix}#contato" aria-label="LinkedIn">in</a>
        <a href="${pathPrefix}#contato" aria-label="Instagram">ig</a>
        <a href="${pathPrefix}#contato" aria-label="YouTube">yt</a>
        <a href="${pathPrefix}#contato" aria-label="WhatsApp">wa</a>
      </div>
    </div>

    <nav class="footer-col" aria-label="Produtos e Serviços">
      <strong>Produtos e Serviços</strong>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=sinalizacao-digital">Sinalização Digital</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=paineis-led">Painéis de LED</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=telas-interativas">Telas Interativas</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=videoconferencia-hibrida">Videoconferência Híbrida</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=microsoft-teams-rooms">Microsoft Teams Rooms</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=zoom-meet-webex">Zoom, Meet e Webex</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=equipamentos-videoconferencia">Equipamentos de Videoconferência</a>
      <a href="${pathPrefix}equipamentos/?marca=hppoly">Catálogo de Equipamentos</a>
    </nav>

    <nav class="footer-col" aria-label="Soluções">
      <strong>Soluções</strong>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=noc-monitoramento">NOC e Monitoramento</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=totens-interativos">Tótens Interativos</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=audio-video-profissional">Áudio e Vídeo Profissional</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=menu-board-digital">Menu Board Digital</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=apple-negocios">Apple para Negócios</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=smart-office">Smart Office</a>
      <a href="${pathPrefix}solucoes-corporativas/?solucao=infraestrutura-redes-cftv">Infraestrutura, Redes Mesh e CFTV</a>
    </nav>

    <nav class="footer-col" aria-label="Institucional">
      <strong>Institucional</strong>
      <a href="${pathPrefix}#sobre">Sobre a Moema</a>
      <a href="${pathPrefix}#projetos">Projetos Especiais</a>
      <a href="${pathPrefix}#diferenciais">Diferenciais</a>
      <a href="${pathPrefix}#conteudos">Conteúdos</a>
      <a href="${pathPrefix}#contato">Contato</a>
      <a href="${pathPrefix}#contato">Política de Privacidade</a>
      <a href="${pathPrefix}#contato">Termos de Uso</a>
      <a href="${pathPrefix}#contato">Suporte e Atendimento</a>
    </nav>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} Moema Store. Todos os direitos reservados.</span>
    <span>Tecnologia, integração e ambientes inteligentes para uso real.</span>
  </div>
`;

document.body.appendChild(footer);
