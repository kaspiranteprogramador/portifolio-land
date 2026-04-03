import { useState, useRef, useEffect } from 'react';

/**
 * Testimonials Carousel Component
 * 
 * Design Philosophy: Efeito lateral com rotação contínua em loop
 * Depoimentos rotacionam horizontalmente de forma automática
 * Parallax effect para sensação de profundidade
 */

const testimonialsData = [
  {
    id: 1,
    name: 'Marina Silva',
    company: 'Homenz Clínica',
    role: 'Diretora',
    testimonial: 'Kauã transformou completamente a identidade visual da nossa clínica. O trabalho foi impecável, criativo e entregue no prazo. Recomendo muito!'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    company: 'Lovida Cafeteria',
    role: 'Proprietário',
    testimonial: 'O design do espaço e da marca foi excelente. Kauã entendeu perfeitamente a essência do nosso negócio e criou algo memorável.'
  },
  {
    id: 3,
    name: 'Beatriz Costa',
    company: 'Betini Luxury',
    role: 'CEO',
    testimonial: 'Trabalhar com Kauã foi uma experiência premium. A atenção aos detalhes e a compreensão do mercado de luxo foi impressionante.'
  },
  {
    id: 4,
    name: 'Roberto Alves',
    company: 'Batalha de Rima',
    role: 'Organizador de Eventos',
    testimonial: 'As fotos e o tratamento visual do evento foram perfeitos. Kauã capturou a energia e a essência do evento de forma única.'
  },
  {
    id: 5,
    name: 'Aline Dantas',
    company: 'Aline Dantas Vic Engenharia',
    role: 'Sócia-Diretora',
    testimonial: 'Kauã criou uma estratégia de branding que elevou nossa presença no mercado imobiliário. Resultados comprovados em vendas.'
  }
];

export default function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [mouseRotation, setMouseRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Animação de rotação contínua em loop
  useEffect(() => {
    let animationFrameId: number;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const rotationValue = (elapsed / 60) % 360; // Completa uma volta a cada 21.6 segundos
      
      if (!isHovering) {
        setRotation(rotationValue);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  // Interação com mouse
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      const mouseX = e.clientX - rect.left;
      
      // Calcular rotação baseado na posição do mouse (-30 a 30 graus)
      const rotationValue = ((mouseX - centerX) / centerX) * 30;
      setMouseRotation(rotationValue);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMouseRotation(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      className="relative h-96 flex items-center justify-center overflow-hidden"
      style={{
        perspective: '1000px'
      }}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovering ? `rotateY(${mouseRotation}deg)` : `rotateY(${rotation}deg)`,
          transition: isHovering ? 'none' : 'none'
        }}
      >
        {testimonialsData.map((testimonial, index) => {
          const angle = (index - 2) * 72; // Distribuir em 5 posições (360/5 = 72 graus)
          const distance = 400; // Distância do centro
          
          return (
            <div
              key={testimonial.id}
              className="testimonial-card absolute w-full max-w-lg p-8 rounded-xl"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg) translateZ(${distance}px)`,
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Testimonial Text */}
              <p className="text-foreground/80 text-sm mb-6 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>

              {/* Author Info */}
              <div className="border-t border-accent/20 pt-4">
                <h4 className="font-bold text-accent mb-1">{testimonial.name}</h4>
                <p className="text-xs text-foreground/60">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicador visual */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 mt-8">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: Math.abs(rotation % 360 - (index * 72)) < 36 ? '#8b5cf6' : '#404040'
            }}
          />
        ))}
      </div>
    </div>
  );
}
