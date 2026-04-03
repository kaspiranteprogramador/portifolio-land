import { useEffect, useRef, useState } from 'react';

/**
 * HeroSection3D Component
 * 
 * Design Philosophy: Minimalismo Brutalist com Efeito 3D Interativo
 * - Imagem com perspectiva 3D que rotaciona baseado no movimento do mouse
 * - Efeito de profundidade com transform 3D (rotateX, rotateY)
 * - Sombra dinâmica que acompanha a rotação
 * - Tipografia ousada (Poppins 900) para impacto visual
 * - Espaço negativo generoso
 */

export default function HeroSection3D() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });

  // Seguir movimento do mouse com rotação 3D
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calcular posição relativa ao centro (-1 a 1)
      const x = (e.clientX - rect.left - centerX) / centerX;
      const y = (e.clientY - rect.top - centerY) / centerY;

      // Aplicar rotação 3D (máximo 25 graus)
      setRotation({
        x: y * -25,
        y: x * 25,
      });

      // Sombra dinâmica acompanha o movimento
      setShadowPosition({
        x: x * 20,
        y: y * 20,
      });
    };

    const handleMouseLeave = () => {
      // Voltar para posição neutra ao sair
      setRotation({ x: 0, y: 0 });
      setShadowPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
      style={{
        perspective: '1200px',
      }}
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

          {/* Coluna direita - Imagem 3D */}
          <div className="relative h-96 lg:h-full lg:min-h-[600px] flex items-center justify-center lg:order-1">
            {/* Efeito de glow sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent rounded-full blur-3xl" />

            {/* Container 3D com perspectiva */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                perspective: '1000px',
              }}
            >
              {/* Sombra dinâmica */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at ${50 + shadowPosition.x}% ${50 + shadowPosition.y}%, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                  transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />

              {/* Imagem com efeito 3D */}
              <div
                ref={imageRef}
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src="/images/kaua-profile.png"
                  alt="Kauã Carlos"
                  className="w-full h-full object-cover max-w-md lg:max-w-none rounded-lg"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                />

                {/* Overlay decorativo */}
                <div className="absolute inset-0 border border-foreground/20 rounded-lg pointer-events-none" />
              </div>

              {/* Luz especular (highlight) dinâmica */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at ${50 + rotation.y * 2}% ${50 + rotation.x * 2}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                  transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
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
