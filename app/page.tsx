"use client";

import { useEffect, useState } from "react";
import { services, siteConfig, faqItems } from "./site-data";

const Icon = ({ name }: { name: "leaf" | "spark" | "shield" | "clock" | "home" | "care" | "tool" | "pin" | "arrow" | "whatsapp" }) => {
  const paths = {
    leaf: <><path d="M20 4C11 4 6 9 6 16c5 0 10-2 14-12Z"/><path d="M4 20c3-6 7-9 13-12"/></>,
    spark: <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/>,
    shield: <path d="M12 3 5 6v5c0 4.8 2.8 8.4 7 10 4.2-1.6 7-5.2 7-10V6l-7-3Z"/>,
    clock: <><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></>,
    home: <><path d="m4 11 8-7 8 7"/><path d="M6 10v10h12V10M10 20v-6h4v6"/></>,
    care: <><path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z"/></>,
    tool: <><path d="M14 6a4 4 0 0 0-5 5L4 16l4 4 5-5a4 4 0 0 0 5-5l-3 3-3-3 2-4Z"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    whatsapp: <><path d="M20 11.6a8 8 0 0 1-11.9 7l-4.1 1 1.1-4a8 8 0 1 1 14.9-4Z"/><path d="M9 8c.5 3 2 4.5 5 5"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
};

const Brand = ({ light = false }: { light?: boolean }) => (
  <a className={`brand ${light ? "brand-light" : ""}`} href="#inicio" aria-label="Vitta Higienização e Proteção — início">
    <span className="official-logo-crop"><img src="/vitta-brand-board.png" alt="Vitta Higienização e Proteção"/></span>
  </a>
);

const WhatsAppLink = ({ children, className = "button" }: { children: React.ReactNode; className?: string }) => (
  <a className={className} href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" data-event="whatsapp-click">
    {children}
  </a>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slider, setSlider] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main>
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navegação principal">
            {[["Serviços","servicos"],["Como funciona","como-funciona"],["Antes e depois","antes-depois"],["Sobre a Vitta","sobre"],["FAQ","faq"]].map(([label,id]) =>
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
            )}
            <WhatsAppLink className="button nav-cta">Solicitar orçamento</WhatsAppLink>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            <span/><span/><span/>
          </button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-waves" aria-hidden="true"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Icon name="leaf"/> Renovar. Higienizar &amp; Proteger</div>
            <h1>Sua casa merece uma <em>higienização profissional.</em></h1>
            <p>Higienização de sofás, poltronas e colchões com cuidado, técnica e atendimento personalizado em Brasília e todo o Distrito Federal.</p>
            <div className="hero-actions">
              <WhatsAppLink><Icon name="whatsapp"/> Solicitar orçamento <Icon name="arrow"/></WhatsAppLink>
              <span><Icon name="pin"/> Atendimento residencial<br/>Brasília e todo o DF</span>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="Sofá claro em uma sala residencial elegante, imagem ilustrativa">
            <div className="image-crop image-crop-sofa"><img src="/vitta-brand-board.png" alt="Referência visual Vitta com sofá em ambiente residencial"/></div>
            <div className="trust-card"><Icon name="shield"/><span><b>Cuidado em cada detalhe</b><small>Respeito pela sua casa e pela sua rotina.</small></span></div>
          </div>
        </div>
      </section>

      <section className="section benefits" aria-labelledby="beneficios-title">
        <div className="container">
          <div className="section-heading centered"><span className="kicker">Benefícios</span><h2 id="beneficios-title">Cuidar do seu estofado é<br/><em>cuidar da sua casa.</em></h2></div>
          <div className="benefit-grid">
            {[
              ["leaf","Conservação","Cuidados que ajudam a preservar a aparência e as características do estofado."],
              ["spark","Higienização","Processo profissional para remover sujeiras acumuladas."],
              ["care","Renovação","Resultado visual que devolve ao estofado uma aparência mais limpa e renovada."]
            ].map(([icon,title,text]) => <article key={title}><span className="icon-badge"><Icon name={icon as "leaf"}/></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section personalized">
        <div className="container personalized-grid">
          <div className="personalized-art">
            <div className="soft-room"><Icon name="home"/><span>Atendimento residencial<br/><b>com respeito e cuidado</b></span></div>
            <span className="dots" aria-hidden="true"/>
          </div>
          <div className="personalized-copy">
            <span className="kicker">Atendimento personalizado</span>
            <h2>Na sua casa, o cuidado começa <em>antes da higienização.</em></h2>
            <p>Sabemos que entrar na casa de alguém exige mais do que conhecimento técnico. Exige respeito, organização e atenção aos detalhes.</p>
            <div className="values">
              {[["clock","Pontualidade"],["spark","Organização"],["home","Respeito"],["care","Atendimento personalizado"]].map(([icon,label]) => <span key={label}><Icon name={icon as "clock"}/>{label}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section professional">
        <div className="container professional-grid">
          <div><span className="kicker kicker-light">Equipamentos e produtos</span><h2>Profissionalismo<br/><em>em cada detalhe.</em></h2><p>Utilizamos equipamentos e produtos profissionais adequados ao serviço, aliados a uma equipe preparada para executar cada atendimento com cuidado e técnica.</p><div className="professional-points"><span><Icon name="tool"/> Equipamentos profissionais</span><span><Icon name="shield"/> Equipe preparada</span></div></div>
          <div className="equipment-image image-crop image-crop-equipment"><img src="/vitta-brand-board.png" alt="Equipamentos profissionais de higienização — imagem ilustrativa"/><span>Imagem ilustrativa</span></div>
        </div>
      </section>

      <section className="section comparison" id="antes-depois">
        <div className="container">
          <div className="section-heading"><span className="kicker">Antes e depois</span><h2>Veja a <em>diferença.</em></h2><p>Este espaço está preparado para receber imagens reais dos trabalhos da Vitta.</p></div>
          <div className="compare-wrap" style={{"--position": `${slider}%`} as React.CSSProperties}>
            <div className="compare-layer before"><span>ANTES</span><div><Icon name="home"/><b>Imagem de antes</b><small>Substituir posteriormente</small></div></div>
            <div className="compare-layer after"><span>DEPOIS</span><div><Icon name="spark"/><b>Imagem de depois</b><small>Substituir posteriormente</small></div></div>
            <input aria-label="Comparar imagem de antes e depois" type="range" min="5" max="95" value={slider} onChange={e => setSlider(Number(e.target.value))}/>
            <div className="compare-handle" aria-hidden="true">‹ ›</div>
          </div>
          <p className="compare-note">Arraste para comparar</p>
        </div>
      </section>

      <section className="section process" id="como-funciona">
        <div className="container"><div className="section-heading centered"><span className="kicker">Como funciona</span><h2>Simples para você.<br/><em>Cuidadoso em cada etapa.</em></h2></div>
          <ol className="steps">{[
            ["Chame a Vitta","Pelo WhatsApp."],["Conte o que você precisa","Nossa equipe entende sua necessidade."],["Receba seu orçamento","Com preços transparentes."],["Agende seu atendimento","Escolhemos o melhor horário para você."],["Nós cuidamos do resto","Nossa equipe realiza a higienização."]
          ].map(([title,text],i) => <li key={title}><b>{String(i+1).padStart(2,"0")}</b><span><strong>{title}</strong><small>{text}</small></span></li>)}</ol>
          <div className="center-action"><WhatsAppLink><Icon name="whatsapp"/> Solicitar orçamento</WhatsAppLink></div>
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="container"><div className="services-intro"><div><span className="kicker">Serviços e preços</span><h2>Cuidado profissional,<br/><em>com preços transparentes.</em></h2></div><p>Selecione o serviço e fale com nossa equipe. O orçamento é personalizado de acordo com sua necessidade.</p></div>
          <div className="service-grid">{services.map((service, i) => <article key={service.slug}>
            <div className={`service-image service-image-${i}`}><div className={`image-crop image-crop-service-${i}`}><img src="/vitta-brand-board.png" alt={`${service.name} em ambiente residencial — imagem ilustrativa`}/></div><span>Imagem ilustrativa</span></div>
            <div className="service-body"><small>Higienização de</small><h3>{service.name}</h3><p>{service.description}</p><div className="price-placeholder">Preço sob consulta</div><WhatsAppLink className="text-link">Pedir orçamento <Icon name="arrow"/></WhatsAppLink></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section about" id="sobre"><div className="container about-grid"><div className="about-mark"><Brand light/></div><div><span className="kicker kicker-light">Sobre a Vitta</span><h2>Cuidar de uma casa é cuidar <em>de quem vive nela.</em></h2><p className="content-placeholder">[INSERIR POSTERIORMENTE: HISTÓRIA, PROPÓSITO E APRESENTAÇÃO DA VITTA]</p><p>Enquanto isso, nossa essência está clara: oferecer um atendimento cuidadoso, profissional e respeitoso do primeiro contato à conclusão do serviço.</p></div></div></section>

      <section className="section service-area"><div className="container area-card"><div className="map-shape"><Icon name="pin"/></div><div><span className="kicker">Área de atendimento</span><h2>A Vitta vai <em>até você.</em></h2><p>Atendimento residencial em Brasília e todo o Distrito Federal.</p></div><WhatsAppLink>Consultar atendimento <Icon name="arrow"/></WhatsAppLink></div></section>

      <section className="section faq" id="faq"><div className="container faq-grid"><div><span className="kicker">Perguntas frequentes</span><h2>Tire suas <em>dúvidas.</em></h2><p>Não encontrou sua resposta? Nossa equipe pode ajudar pelo WhatsApp.</p><WhatsAppLink className="outline-button"><Icon name="whatsapp"/> Falar com a Vitta</WhatsAppLink></div><div className="accordion">{faqItems.map((item,i) => <div className="faq-item" key={item.question}><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{item.question}</span><b>{openFaq === i ? "−" : "+"}</b></button>{openFaq === i && <div className="faq-answer"><p>{item.answer}</p></div>}</div>)}</div></div></section>

      <section className="final-cta"><div className="waves-top"/><div className="container"><span className="kicker kicker-light">Renovar. Higienizar &amp; Proteger</span><h2>Sua casa merece <em>esse cuidado.</em></h2><p>Fale com a Vitta e solicite seu orçamento.</p><WhatsAppLink className="button button-white"><Icon name="whatsapp"/> Solicitar orçamento <Icon name="arrow"/></WhatsAppLink><small><Icon name="pin"/> Brasília e todo o Distrito Federal</small></div></section>

      <footer><div className="container footer-grid"><div><Brand light/><p>Renovar. Higienizar &amp; Proteger.</p></div><div><h3>Navegação</h3><a href="#servicos">Serviços</a><a href="#como-funciona">Como funciona</a><a href="#antes-depois">Antes e depois</a><a href="#sobre">Sobre a Vitta</a><a href="#faq">FAQ</a></div><div><h3>Contato</h3><a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: {siteConfig.whatsappDisplay}</a><span>Instagram: inserir posteriormente</span><span>Brasília e todo o Distrito Federal</span></div><div><h3>Informações legais</h3><span>CNPJ: 13.117.770/0001-60</span><span>Política de Privacidade — em breve</span><span>Termos de Uso — em breve</span></div></div><div className="container footer-bottom">© 2026 Vitta Higienização &amp; Proteção.</div></footer>

      <WhatsAppLink className="floating-whatsapp"><Icon name="whatsapp"/><span>Solicitar orçamento</span></WhatsAppLink>
    </main>
  );
}
