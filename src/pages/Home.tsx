import BentoCard from '@/components/BentoCard';
import SkillsCarousel from '@/components/SkillsCarousel';

/**
 * Home Page - Modern Design
 * 
 * Design Philosophy: Design contemporâneo, tipografia ousada, hierarquia visual clara
 * Hero impactante com CTA direto
 * Foco em projetos principais e expertise
 */

export default function Home() {
  return (
    <main className="w-full relative">
      {/* Profile Badge - Corner */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col items-center gap-2 sm:gap-3 animate-fade-in">
        <div className="w-16 sm:w-24 h-16 sm:h-24 rounded-full overflow-hidden border-2 border-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/JRElcHXkmrrHysiA.png"
            alt="Kauã Carlos"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xs sm:text-sm font-medium text-foreground text-center">Kauã Carlos</p>
      </div>
      {/* Hero Section - Modern */}
      <section className="w-full bg-gradient-to-b from-background via-background to-background/80 py-12 sm:py-24 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="mb-6 sm:mb-8 fade-in-slide">
              <span className="accent-medium text-xs text-accent mb-4 block">Bem-vindo ao meu portfólio</span>
            </div>
            
            <h1 className="display-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight tracking-tight">
              Designer criativo transformando ideias em experiências visuais memoráveis
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
              Especialista em branding, design visual e estratégia digital. Crio identidades visuais impactantes que conectam marca e público.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a href="/projects" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg text-center">
                Ver Projetos
              </a>
              <a href="https://linktr.ee/KauaCONKA" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-2.5 sm:py-3 border border-accent/50 text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors text-center">
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full bg-background py-12 sm:py-20 lg:py-32 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-16">
            <h2 className="display-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 tracking-tight">Meus Projetos</h2>
            <p className="text-base sm:text-lg text-foreground/60">Galeria dos meus trabalhos</p>
          </div>
          
          <div className="bento-grid gap-3 sm:gap-4">
            {/* Homenz - Grande (1x1 mobile, 2x2 desktop) */}
            <div className="bento-card bento-card-1x1 sm:bento-card-2x2 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/TvKQhxdxXtpLFdhV.png"
                alt="Projeto Homenz"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="display-bold text-lg sm:text-2xl mb-1 sm:mb-2">Homenz Clínica</h3>
                <p className="text-xs sm:text-sm text-foreground/80">Branding & Produção de Conteúdo</p>
              </div>
            </div>

            {/* Lovida - Médio (1x1 mobile, 2x1 desktop) */}
            <div className="bento-card bento-card-1x1 sm:bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/lnbRGdJgxjWxsOLM.jpg"
                alt="Projeto Lovida"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="display-bold text-lg sm:text-2xl mb-1 sm:mb-2">Lovida Cafeteria</h3>
                <p className="text-xs sm:text-sm text-foreground/80">Branding & Design de Ambiente</p>
              </div>
            </div>

            {/* Betini - Médio (1x1 mobile, 2x1 desktop) */}
            <div className="bento-card bento-card-1x1 sm:bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/BIlhDyGDGGkHUTSm.gif"
                alt="Projeto Betini"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="display-bold text-lg sm:text-2xl mb-1 sm:mb-2">Betini Luxury</h3>
                <p className="text-xs sm:text-sm text-foreground/80">Branding de Luxo Internacional</p>
              </div>
            </div>

            {/* Making Off - Vídeo (1x1 mobile, 2x1 desktop) */}
            <div className="bento-card bento-card-1x1 sm:bento-card-2x1 relative overflow-hidden group bg-black">
              <video
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663296046682/2EVabLFHciGb9hiHB5ZHbD/Makingoffconka_36bfe623.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                controls
                poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663296046682/2EVabLFHciGb9hiHB5ZHbD/makingoff-poster-YbJckyzofd9kyRBEJgBZEc.webp"
              />
            </div>

            {/* CTA - Ver Todos */}
            <BentoCard
              size="1x1"
              className="fade-in-slide bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 flex items-center justify-center"
            >
              <div className="text-center">
                <h3 className="display-bold text-2xl mb-4">+10 Projetos</h3>
                <a href="/projects" className="inline-block px-6 py-2 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors">
                  Explorar Todos
                </a>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-background py-12 sm:py-20 lg:py-32 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-16">
            <h2 className="display-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 tracking-tight">Serviços</h2>
            <p className="text-base sm:text-lg text-foreground/60">Expertise em design, branding e estratégia digital</p>
          </div>

          <div className="bento-grid gap-4">
            {/* Branding */}
            <BentoCard size="2x1" className="bg-gradient-to-br from-purple-500/20 to-purple-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-purple-400 mb-3">Serviço</h3>
                  <h4 className="display-bold text-2xl mb-4">Branding</h4>
                  <p className="text-sm text-foreground/80 mb-4">
                    Criação de identidades visuais completas: logo, paleta de cores, tipografia, guidelines e estratégia de posicionamento de marca.
                  </p>
                </div>
                <span className="text-xs text-foreground/50">Mapa mental + Guidelines</span>
              </div>
            </BentoCard>

            {/* Social Media */}
            <BentoCard size="2x1" className="bg-gradient-to-br from-pink-500/20 to-pink-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-pink-400 mb-3">Serviço</h3>
                  <h4 className="display-bold text-2xl mb-4">Social Media</h4>
                  <p className="text-sm text-foreground/80 mb-4">
                    Planejamento estratégico, criação de conteúdo visual, gestão de contas e análise de performance em redes sociais.
                  </p>
                </div>
                <span className="text-xs text-foreground/50">Estratégia + Execução</span>
              </div>
            </BentoCard>

            {/* Web Design */}
            <BentoCard size="2x1" className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-cyan-400 mb-3">Serviço</h3>
                  <h4 className="display-bold text-2xl mb-4">Web Design</h4>
                  <p className="text-sm text-foreground/80 mb-4">
                    Design de landing pages, sites corporativos e aplicações web modernas com foco em experiência do usuário.
                  </p>
                </div>
                <span className="text-xs text-foreground/50">Responsive + Interativo</span>
              </div>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Skills Section - Com Efeito de Rotacao */}
      <section className="w-full bg-background py-12 sm:py-20 lg:py-32 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-16">
            <h2 className="display-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 tracking-tight">Habilidades</h2>
            <p className="text-base sm:text-lg text-foreground/60">Ferramentas e tecnologias que domino</p>
          </div>
          
          <SkillsCarousel />
        </div>
      </section>


      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-accent/20 to-accent/5 py-12 sm:py-20 lg:py-32 border-t border-border/20">
        <div className="container mx-auto max-w-3xl text-center px-4 sm:px-6">
          <h2 className="display-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 tracking-tight">
            Pronto para começar?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12">
            Vamos transformar sua visão em realidade através de design criativo e estratégia visual.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <a href="https://linktr.ee/KauaCONKA" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg">
              Entre em Contato
            </a>
            <a href="/projects" className="px-6 sm:px-8 py-2.5 sm:py-3 border border-accent/50 text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors">
              Ver Portfólio Completo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
