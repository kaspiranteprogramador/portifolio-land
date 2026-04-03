import { useEffect } from 'react';
import { useLocation } from 'wouter';
import AudioVisualizer from '@/components/AudioVisualizer';

/**
 * Visualizer Page
 * 
 * Design Philosophy: Minimalismo Brutalist com Movimento Orgânico
 * - Página dedicada ao visualizador de áudio
 * - Inspirado em clipes de Trap/Rap (Matue, CONKA)
 * - Showcasing motion design e criatividade
 */

export default function VisualizerPage() {
  const [, setLocation] = useLocation();

  // Voltar para home ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLocation('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setLocation]);

  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      {/* Header com título e botão voltar */}
      <div className="bg-black border-b border-white/10 p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Audio Visualizer</h1>
          <p className="text-sm text-white/60 mt-1">Inspirado em clipes de Trap/Rap</p>
        </div>
        <button
          onClick={() => setLocation('/')}
          className="px-4 py-2 border border-white/20 text-white/80 hover:bg-white/10 transition-colors text-sm"
        >
          Voltar (ESC)
        </button>
      </div>

      {/* Visualizador */}
      <AudioVisualizer />
    </div>
  );
}
