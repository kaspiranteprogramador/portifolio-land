import { useEffect, useRef, useState } from 'react';

/**
 * HeroSection Component
 * 
 * Design Philosophy: Minimalismo Brutalist com Movimento Orgânico
 * - Tipografia ousada (Poppins 900) para impacto visual
 * - Imagem segue o mouse com easing suave (cubic-bezier)
 * - Espaço negativo generoso
 * - Linhas geométricas que acompanham movimento
 * - Animação de entrada suave (fade-in + slide)
 */

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });

  // Seguir movimento do mouse com parallax suave
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calcular posição relativa ao centro
      const x = (e.clientX - rect.left - centerX) / centerX;
      const y = (e.clientY - rect.top - centerY) / centerY;

      setMousePosition({ x, y });

      // Aplicar offset suave à imagem (máximo 30px de movimento)
      setImageOffset({
        x: x * 30,
        y: y * 30,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Aplicar transformação à imagem com easing
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translate(${imageOffset.x}px, ${imageOffset.y}px)`;
      imageRef.current.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
  }, [imageOffset]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
    >
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#0a0a0a] pointer-events-none" />

      {/* Linhas geométricas decorativas */}
      <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="absolute bottom-40 right-0 w-1 h-40 bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

      {/* Container principal */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        {/* Grid assimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl items-center">
          {/* Coluna esquerda - Texto */}
          <div className="fade-in-slide space-y-8 lg:order-2">
            {/* Nome em tipografia brutalist */}
            <div className="space-y-4">
              <h1 className="display-bold text-6xl lg:text-7xl leading-tight">
                Kauã<br />Carlos
              </h1>
              <p className="text-lg lg:text-xl text-foreground/80 font-light max-w-md">
                Transformando ideias em experiências visuais memoráveis através de design estratégico e criativo.
              </p>
            </div>

            {/* Especialidades */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="accent-medium text-sm px-4 py-2 border border-foreground/30 hover:border-foreground/60 transition-colors duration-300 cursor-default">
                Web Designer
              </div>
              <div className="accent-medium text-sm px-4 py-2 border border-foreground/30 hover:border-foreground/60 transition-colors duration-300 cursor-default">
                Designer Gráfico
              </div>
              <div className="accent-medium text-sm px-4 py-2 border border-foreground/30 hover:border-foreground/60 transition-colors duration-300 cursor-default">
                Social Media
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button className="group relative px-8 py-3 text-foreground font-medium overflow-hidden">
                <span className="relative z-10">Ver Portfólio Completo</span>
                <div className="absolute inset-0 bg-foreground/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>
          </div>

          {/* Coluna direita - Imagem com animação */}
          <div className="relative h-96 lg:h-full lg:min-h-[600px] flex items-center justify-center lg:order-1">
            {/* Efeito de glow sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent rounded-full blur-3xl" />

            {/* Imagem com parallax */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                ref={imageRef}
                src="/images/kaua-profile.png"
                alt="Kauã Carlos"
                className="parallax-image w-full h-full object-cover max-w-md lg:max-w-none rounded-lg"
              />

              {/* Overlay decorativo */}
              <div className="absolute inset-0 border border-foreground/20 rounded-lg pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-foreground/50 uppercase tracking-widest">Scroll</span>
            <svg
              className="w-5 h-5 text-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
