import { useEffect, useRef } from 'react';

/**
 * ProfileCircle Component
 * 
 * Design Philosophy: Bento Grid Layout
 * - Avatar circular com border decorativa
 * - Efeito de glow sutil
 * - Animação de fumaça saindo do avatar
 * - Posicionado no topo da página
 * - Animação de entrada suave
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

export default function ProfileCircle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particleCountRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Criar partículas de fumaça continuamente
    const createSmokeParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'smoke-particle';
      
      // Posição aleatória ao redor do avatar
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 30; // Raio do avatar é ~64px
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      // Tamanho aleatório
      const size = 20 + Math.random() * 40;
      
      // Duração e delay aleatórios
      const duration = 2 + Math.random() * 1.5;
      const delay = Math.random() * 0.5;
      
      // Offset horizontal para movimento lateral
      const offsetX = (Math.random() - 0.5) * 40;
      
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
    const interval = setInterval(createSmokeParticle, 300);

    // Criar algumas partículas iniciais
    for (let i = 0; i < 3; i++) {
      setTimeout(createSmokeParticle, i * 150);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mb-12 fade-in-slide">
      <div 
        ref={containerRef}
        className="relative w-32 h-32 lg:w-40 lg:h-40"
      >
        {/* Círculo com glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 blur-2xl" />
        
        {/* Border decorativa */}
        <div className="absolute inset-0 rounded-full border-2 border-accent/40" />
        
        {/* Imagem de perfil */}
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/QmQHwJVebkbRbEVY.png"
          alt="Kauã Carlos"
          className="relative w-full h-full rounded-full object-cover border-2 border-accent/20 shadow-lg"
        />
        
        {/* Status indicator (opcional) */}
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-accent rounded-full border-2 border-background shadow-lg" />

        {/* Container para partículas de fumaça */}
        <div className="absolute inset-0 rounded-full overflow-visible" />
      </div>
    </div>
  );
}
