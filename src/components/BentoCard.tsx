import React from 'react';

interface BentoCardProps {
  title?: string;
  description?: string;
  image?: string;
  video?: string;
  size?: '1x1' | '2x1' | '1x2' | '2x2';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * BentoCard Component
 * 
 * Design Philosophy: Bento Grid Layout
 * - Cards assimétricos com tamanhos variados
 * - Suporte a imagens de fundo com overlay
 * - Hover effects sutis
 * - Tipografia limpa e contraste alto
 */

export default function BentoCard({
  title,
  description,
  image,
  video,
  size = '1x1',
  children,
  className = '',
  onClick,
}: BentoCardProps) {
  const sizeClass = `bento-card-${size}`;

  return (
    <div
      className={`bento-card ${sizeClass} ${className}`}
      onClick={onClick}
    >
      {/* Video ou Imagem de fundo */}
      {video && (
        <>
          <video
            src={video}
            className="bento-card-image"
            autoPlay
            muted
            loop
            controls
          />
          <div className="bento-card-overlay" />
        </>
      )}
      {image && !video && (
        <>
          <img
            src={image}
            alt={title || 'Card'}
            className="bento-card-image"
          />
          <div className="bento-card-overlay" />
        </>
      )}

      {/* Conteúdo */}
      <div className="bento-card-content">
        {children ? (
          children
        ) : (
          <>
            {title && (
              <h3 className="display-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-xs sm:text-sm md:text-base text-foreground/80">
                {description}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
