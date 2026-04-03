import { useEffect, useRef } from 'react';
import BentoCard from './BentoCard';

/**
 * BentoHero Component
 * 
 * Design Philosophy: Bento Grid Layout com Flutuação Suave
 * - Hero section em layout bento com cards assimétricos
 * - PNG flutuando suavemente (sem rotação 3D)
 * - Fumaça cinza saindo continuamente
 * - Apresentação clean e moderna
 * - Tipografia ousada e contraste alto
 */

interface SmokeParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  offsetX: number;
}

export default function BentoHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Criar fumaça saindo da imagem
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createSmokeParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'smoke-particle';
      
      // Posição aleatória ao redor da imagem
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 40;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      // Tamanho aleatório
      const size = 25 + Math.random() * 50;
      
      // Duração e delay aleatórios
      const duration = 2.5 + Math.random() * 1.5;
      const delay = Math.random() * 0.5;
      
      // Offset horizontal para movimento lateral
      const offsetX = (Math.random() - 0.5) * 50;
      
      // Aplicar estilos
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `calc(50% + ${x}px)`;
      particle.style.top = `calc(50% + ${y}px)`;
      particle.style.animation = `smokeFloat ${duration}s ease-out ${delay}s forwards`;
      particle.style.setProperty('--tx', `${offsetX}px`);
      
      container.appendChild(particle);
      
      // Remover partícula após animação
      setTimeout(() => {
        particle.remove();
      }, (duration + delay) * 1000);
    };

    // Criar partículas em intervalos
    const interval = setInterval(createSmokeParticle, 350);

    // Criar algumas partículas iniciais
    for (let i = 0; i < 3; i++) {
      setTimeout(createSmokeParticle, i * 150);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-background py-12 lg:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-slide text-center">
          <h1 className="display-bold text-5xl lg:text-6xl mb-4">
            Kauã Carlos
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Designer criativo transformando ideias em experiências visuais memoráveis
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card Principal - PNG Flutuando (2x2) */}
          <div
            ref={containerRef}
            className="bento-card bento-card-2x2 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-background to-background/80"
          >
            {/* Imagem flutuando */}
            <img
              src="/images/kaua-profile.png"
              alt="Kauã Carlos"
              className="floating w-3/4 h-3/4 object-contain drop-shadow-2xl"
            />

            {/* Container para partículas de fumaça */}
            <div className="absolute inset-0 pointer-events-none" />
          </div>

          {/* Card - Sobre (1x2) */}
          <BentoCard size="1x2" className="fade-in-slide">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="accent-medium text-xs mb-4 text-accent">
                  Sobre
                </h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Especialista em criar identidades visuais impactantes e experiências digitais intuitivas que conectam marca e público.
                </p>
              </div>
              <div className="text-xs text-foreground/50">
                Baseado em São Paulo, BR
              </div>
            </div>
          </BentoCard>

          {/* Card - Web Designer (1x1) */}
          <BentoCard size="1x1" className="fade-in-slide">
            <div className="flex flex-col justify-between h-full">
              <h3 className="accent-medium text-xs text-accent">Web Design</h3>
              <p className="text-sm font-medium">Interfaces modernas e responsivas</p>
            </div>
          </BentoCard>

          {/* Card - Designer Gráfico (1x1) */}
          <BentoCard size="1x1" className="fade-in-slide">
            <div className="flex flex-col justify-between h-full">
              <h3 className="accent-medium text-xs text-accent">Design Gráfico</h3>
              <p className="text-sm font-medium">Identidades visuais únicas</p>
            </div>
          </BentoCard>

          {/* Card - Social Media (1x1) */}
          <BentoCard size="1x1" className="fade-in-slide">
            <div className="flex flex-col justify-between h-full">
              <h3 className="accent-medium text-xs text-accent">Social Media</h3>
              <p className="text-sm font-medium">Conteúdo visual engajador</p>
            </div>
          </BentoCard>

          {/* Card - CTA (2x1) */}
          <BentoCard size="2x1" className="fade-in-slide bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50">
            <div className="flex flex-col justify-between h-full">
              <h3 className="display-bold text-2xl">Pronto para começar?</h3>
              <a href="/projects" className="self-start px-6 py-2 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors inline-block">
                Ver Portfólio
              </a>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
