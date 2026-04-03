/**
 * Projects Page
 * 
 * Design Philosophy: Bento Grid com Galeria de Projetos
 * - Layout em grid assimétrico
 * - Cards com vídeos, imagens e descrições
 * - Hover effects e transições suaves
 * - Tipografia ousada e contraste alto
 */

import BentoCard from '@/components/BentoCard';

export default function Projects() {
  return (
    <section className="w-full bg-background py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-12 fade-in-slide">
          <h1 className="display-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4">
            Projetos
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
            Explore meus trabalhos recentes em design, branding e produção de conteúdo visual
          </p>
        </div>

        {/* Categoria: Projeto Homenz */}
        <div className="mb-12 sm:mb-16">
          <h2 className="display-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 text-accent">
            Projeto Homenz
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 max-w-2xl">
            Produção de conteúdo visual de alta qualidade para marca de lifestyle e saúde estética masculina. Inclui fotografia, videografia e design de identidade visual.
          </p>

          {/* Bento Grid - Projeto Homenz */}
          <div className="bento-grid gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Imagem Homenz (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/TvKQhxdxXtpLFdhV.png"
                alt="Projeto Homenz - Imagem"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2">ID</h3>
                <p className="text-sm text-foreground/80">
                </p>
              </div>
            </div>

            {/* Vídeo Homenz (2x1) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-blue-500/20 to-blue-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-blue-400 mb-4">Branding & Autoridade</h3>
                  <h4 className="display-bold text-2xl mb-6">Homenz Clínica</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Estratégia:</span> Criação de autoridade e confiança através de conteúdo educativo e visual profissional
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Foco:</span> Posicionamento como referência em saúde estética masculina com comunicação clara e científica
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Resultado:</span> Brand consolidada com identidade visual forte e conteúdo que educa e converte
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-blue-500/30 hover:bg-blue-500/50 border border-blue-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>

            {/* Vídeo Homenz 1 - Com Áudio (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <video
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/kwmCzLeZfhiiZYqv.mov"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                autoPlay
                muted
                loop
                controls
              />
            </div>

            {/* Vídeo Homenz 2 - Capilar (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <video
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/KZNtOLGXKgsaVTcO.mov"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                autoPlay
                muted
                loop
                controls
              />

            </div>

            {/* Imagem MMP (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/QqHHOtLCNIspaYsa.png"
                alt="Como funciona o MMP no início da calvície"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2">MMP - Calvície</h3>
                <p className="text-sm text-foreground/80">
                  Conteúdo educativo sobre tratamento capilar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categoria: Projeto Lovida */}
        <div className="mb-12 sm:mb-16">
          <h2 className="display-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 text-accent">
            Projeto Lovida Cafeteria
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 max-w-2xl">
            Design completo de marca e identidade visual para cafeteria boutique. Inclui branding, design de ambiente e estratégia visual.
          </p>

          {/* Bento Grid - Projeto Lovida */}
          <div className="bento-grid gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Lovida - Branding (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/lnbRGdJgxjWxsOLM.jpg"
                alt="Lovida Cafeteria - Branding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2">Identidade Visual</h3>
                <p className="text-sm text-foreground/80">
                  Design de marca e branding
                </p>
              </div>
            </div>

            {/* Lovida - Ambiente (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/IJxMCzwiwlntanOe.jpeg"
                alt="Lovida Cafeteria - Ambiente"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2">Design de Ambiente</h3>
                <p className="text-sm text-foreground/80">
                  Conceito visual e design de interiores
                </p>
              </div>
            </div>

            {/* Descrição Lovida (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-rose-500/20 to-rose-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-rose-400 mb-4">Branding & Conceito</h3>
                  <h4 className="display-bold text-2xl mb-6">Lovida Boutique</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Paleta:</span> Cores pastel (rosa, bege, verde suave) criando atmosfera relaxante e acolhedora
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Referências:</span> Cafeterias boutique europeias, design nórdico minimalista, aconchego contemporâneo
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Experiência:</span> Ambiente que transmite calma, qualidade e exclusividade para experiência premium
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-rose-500/30 hover:bg-rose-500/50 border border-rose-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>

            {/* Lovida - Vídeo Apresentação (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <video
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/YKNQTLODUJoIqmsp.mov"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                autoPlay
                muted
                loop
                controls
              />

            </div>
          </div>
        </div>

        {/* Categoria: Projeto Betini */}
        <div className="mb-12 sm:mb-16">
          <h2 className="display-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 text-accent">
            Projeto Betini
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 max-w-3xl">
            Desenvolvimento completo de branding e estratégia visual para marca de luxo. Inspirado em referências de moda internacional, este projeto combina elegança, sofisticação e identidade visual única. Inclui design de logo, paleta de cores, tipografia, guidelines de marca e estratégia de posicionamento visual.
          </p>

          {/* Bento Grid - Projeto Betini */}
          <div className="bento-grid gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Imagem Betini (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/BIlhDyGDGGkHUTSm.gif"
                alt="Projeto Betini - Identidade Visual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2">ID Visual</h3>
                <p className="text-sm text-foreground/80">
                  
                </p>
              </div>
            </div>

            {/* Paleta de Cores Betini (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/ScQwgHpNWLrqeBvd.gif"
                alt="Betini - Paleta de Cores"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2">Paleta de Cores</h3>
                <p className="text-sm text-foreground/80">
                  Paleta neutra com acentos dourados
                </p>
              </div>
            </div>

            {/* Descrição Betini (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-amber-500/20 to-amber-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-amber-400 mb-4">Branding & Estratégia</h3>
                  <h4 className="display-bold text-2xl mb-6">Betini Luxury</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Conceito:</span> Elegância atemporal com toque de sofisticação internacional
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Referências:</span> Moda de luxo europeia, design minimalista, paleta neutra com acentos dourados
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Estratégia:</span> Posicionamento premium, identidade visual consistente, guidelines de marca robustos
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-amber-500/30 hover:bg-amber-500/50 border border-amber-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>

            {/* Ambiente da Loja Betini (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/nXqNycxEVtwsRqGk.gif"
                alt="Betini - Ambiente da Loja"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">
                  
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Categoria: Projeto Ícaro Visualizer */}
        <div className="mb-12 sm:mb-16">
          <h2 className="display-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 text-accent">
            Projeto Ícaro Visualizer
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 max-w-3xl">
            Visualizer cinematográfico baseado na mitologia grega de Ícaro. Projeto de encomenda que explora a trajetória do personagem que chegou próximo ao céu. Criado com ferramentas avançadas de IA: ChatGPT para roteiro, Claude para refinamento criativo, VEO3 para geração de vídeo e Kling para efeitos cinematográficos. Inclui identidade visual completa e design de marca.
          </p>

          {/* Bento Grid - Projeto Ícaro Visualizer */}
          <div className="bento-grid gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Vídeo Ícaro Visualizer (2x2) */}
            <div className="bento-card bento-card-2x2 relative overflow-hidden group bg-black">
              <video
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/rDHbLQUusBFnWzuH.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                controls
                poster="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/eONkkcFoiHJiXnlH.jpg"
              />
            </div>

            {/* Descrição Ícaro Visualizer (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-purple-500/20 to-purple-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-purple-400 mb-4">Visualizer & Branding</h3>
                  <h4 className="display-bold text-2xl mb-6">Ícaro Visualizer</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Conceito:</span> Exploração visual da mitologia grega, focando na trajetória de Ícaro rumo ao céu com cinematografia de alta qualidade
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Ferramentas:</span> ChatGPT (roteiro), Claude (refinamento criativo), VEO3 (geração de vídeo), Kling (efeitos cinematográficos)
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Resultado:</span> Visualizer cinematográfico com identidade visual completa e design de marca sofisticado
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-purple-500/30 hover:bg-purple-500/50 border border-purple-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Categoria: Projeto CONKA Visualizer */}
        <div className="mb-12 sm:mb-16">
          <h2 className="display-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 text-accent">
            Projeto CONKA Visualizer
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 max-w-3xl">
            Visualizador de áudio abstrato inspirado em clipes de Trap e Rap como Matue. Projeto criativo que explora motion design com paleta de cores em tons quentes (vermelho, laranja, branco) sobre fundo preto. Desenvolvido com ferramentas avançadas de IA: Claude para conceito criativo e VEO3 para geração de vídeo. Perfeito para MCs e artistas que desejam apresentações visuais impactantes.
          </p>

          {/* Bento Grid - Projeto CONKA Visualizer */}
          <div className="bento-grid gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Vídeo CONKA Visualizer (2x2) */}
            <div className="bento-card bento-card-2x2 relative overflow-hidden group bg-black">
              <video
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663375750999/Gjxz2nu3pvhyf5Wt8mx2s8/conka_Th_7c9862d2.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                autoPlay
                muted
                loop
              />
            </div>

            {/* Descrição CONKA Visualizer (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-red-500/20 to-red-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-red-400 mb-4">Motion Design & Branding</h3>
                  <h4 className="display-bold text-2xl mb-6">CONKA Visualizer</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Conceito:</span> Visualizador abstrato inspirado em clipes de Trap/Rap com movimento orgânico e dinâmico
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Paleta:</span> Tons quentes (vermelho, laranja, branco) com efeitos de glow e profundidade sobre fundo preto
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Ferramentas:</span> Claude (criatividade), VEO3 (geração de vídeo), design abstrato e motion graphics
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Resultado:</span> Visualizador impactante para apresentações de MCs e artistas com atmosfera energética
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-red-500/30 hover:bg-red-500/50 border border-red-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Categoria: Projeto Batalha de Rima */}
        <div className="mb-16">
          <h2 className="display-bold text-3xl lg:text-4xl mb-8 text-accent">
            Projeto Batalha de Rima
          </h2>
          <p className="text-foreground/70 mb-8 max-w-3xl">
            Fotografia de evento ao vivo capturando a energia, emoção e dinâmica de uma batalha de rima. Trabalho focado em composição, iluminação natural e pós-processamento profissional com Adobe Camera RAW para máxima qualidade visual.
          </p>

          {/* Bento Grid - Projeto Batalha de Rima */}
          <div className="bento-grid mb-12">
            {/* Imagem Batalha de Rima 1 (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/POwZsDbGRhGjtLtj.jpg"
                alt="Batalha de Rima - Fotografia ao Vivo 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">
                  
                </p>
              </div>
            </div>

            {/* Imagem Batalha de Rima 2 (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/vZPVTtXcQKeZggOQ.jpg"
                alt="Batalha de Rima - Fotografia ao Vivo 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">
                  
                </p>
              </div>
            </div>

            {/* Descrição Batalha de Rima (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-red-500/20 to-red-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-red-400 mb-4">Fotografia & Pós-Processamento</h3>
                  <h4 className="display-bold text-2xl mb-6">Tratamento Camera RAW</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Processo:</span> Captura em RAW para máxima flexibilidade de edição e recuperação de detalhes nas sombras e altas luzes
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Ajustes:</span> Exposição, contraste, claridade, vibração, saturação e curvas tonais para realçar emoção e energia
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Resultado:</span> Imagens com cores vibrantes, contraste dinâmico e qualidade profissional
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-red-500/30 hover:bg-red-500/50 border border-red-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Galeria
                </button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Categoria: Projeto Suchwho.ink */}
        <div className="mb-12 sm:mb-16">
          <h2 className="display-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8 text-accent">
            Projeto Suchwho.ink
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 max-w-3xl">
            Produção de vídeos profissionais para o tatuador "Portuga" da marca Suchwho.ink. Projeto focado em capturar a arte da tatuagem em movimento, showcasando o trabalho artístico e a precisão técnica do tatuador. Inclui videografia de alta qualidade, edição cinematográfica e branding visual para redes sociais e portfólio digital.
          </p>

          {/* Bento Grid - Projeto Suchwho.ink */}
          <div className="bento-grid gap-3 sm:gap-4 mb-8 sm:mb-12">
            {/* Vídeo Suchwho.ink - Making Off (2x2) */}
            <div className="bento-card bento-card-2x2 relative overflow-hidden group bg-black">
              <video
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663375750999/Gjxz2nu3pvhyf5Wt8mx2s8/Makingoffconka_3ff5ceea.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                autoPlay
                loop
                controls
              />
            </div>

            {/* Vídeo Suchwho.ink - Tatto.Ink2 (2x2) */}
            <div className="bento-card bento-card-2x2 relative overflow-hidden group bg-black">
              <video
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663375750999/Gjxz2nu3pvhyf5Wt8mx2s8/Tatto.Ink2_acccc7d4.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                autoPlay
                loop
                controls
              />
            </div>

            {/* Descrição Suchwho.ink (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-indigo-500/20 to-indigo-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-indigo-400 mb-4">Videografia & Branding</h3>
                  <h4 className="display-bold text-2xl mb-6">Suchwho.ink - Tatuador Portuga</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Conceito:</span> Capturar a essência artística e técnica da tatuagem através de videografia cinematográfica de alta qualidade
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Foco:</span> Movimento, precisão, cores vibrantes e a transformação visual do cliente durante o processo de tatuagem
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Aplicação:</span> Conteúdo para redes sociais, portfólio digital e marketing da marca Suchwho.ink
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Resultado:</span> Vídeos profissionais que elevam o portfólio visual do tatuador e atraem novos clientes
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-indigo-500/30 hover:bg-indigo-500/50 border border-indigo-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Categoria: Projeto Aline Dantas Vic Engenharia */}
        <div className="mb-16">
          <h2 className="display-bold text-3xl lg:text-4xl mb-8 text-accent">
            Projeto Aline Dantas Vic Engenharia
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Branding e estratégia visual para empresa de engenharia VIC. Criando um posicionamento para a Corretora Aline Dantas, em seus projetos de caso própria para autônomos e pessoas em situação de aluguel.
          </p>

          {/* Bento Grid - Projeto Aline Dantas Vic Engenharia */}
          <div className="bento-grid mb-12">
            {/* Imagem Aline Dantas Vic Engenharia (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/kaZYoAKiCVsuBwKZ.jpg"
                alt="Aline Dantas Vic Engenharia - Concreto a Chave da Casa Própria"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">
                </p>
              </div>
            </div>

            {/* Vídeo Aline Dantas Vic Engenharia (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <video
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/IqsLbLBVxDKoorgD.mp4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-black"
                autoPlay
                muted
                loop
                playsInline
                controlsList="nodownload"
                crossOrigin="anonymous"
                style={{ width: '100%', height: '100%', display: 'block' }}
              />
            </div>

            {/* Imagem Vic Engenharia - E o Melhor Espaço (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/IJNBRaqEmaoMgpnf.jpg"
                alt="Vic Engenharia - E o Melhor Espaço"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">
                </p>
              </div>
            </div>

            {/* Imagem Vic Engenharia - Seu Sonho Está Perto (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/YDEfKhnDeXxTQYsC.jpg"
                alt="Vic Engenharia - Seu Sonho Está Perto"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">
                </p>
              </div>
            </div>


            {/* Descrição Aline Dantas Vic Engenharia (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-orange-500/20 to-orange-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-orange-400 mb-4">Branding & Posicionamento</h3>
                  <h4 className="display-bold text-2xl mb-6">VIC Engenharia</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Conceito:</span> Solidez, confiança e inovação em soluções de concreto para construção civil
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Paleta:</span> Tons terrosos (laranja, bege, marrom) com acentos dourados para transmitir profissionalismo e solidez
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Estratégia:</span> Posicionamento como referência em qualidade de concreto, com foco em segurança estrutural e inovação
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-orange-500/30 hover:bg-orange-500/50 border border-orange-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Categoria: Projeto OverMind */}
        <div className="mb-16">
          <h2 className="display-bold text-3xl lg:text-4xl mb-8 text-accent">
            Projeto OverMind
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Desenvolvimento completo de infoproduto digital voltado à educação com estratégia de funil de vendas. Criação de landing pages conversivas, captação de leads otimizada, parcerias com influencers, roteirização de conteúdo e cronograma de postagens para maximizar alcance e conversão.
          </p>

          {/* Bento Grid - Projeto OverMind */}
          <div className="bento-grid mb-12">
            {/* Imagem OverMind */}
            <div className="bento-card relative overflow-visible group bg-background flex items-center justify-center p-4" style={{gridColumn: 'span 2', gridRow: 'span auto'}}>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/GeJyEqjAUrIuXsOA.jpg"
                alt="Projeto OverMind - Infoproduto Digital"
                className="max-w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">
                </p>
              </div>
            </div>

            {/* Video OverMind (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group bg-black flex items-center justify-center">
              <video
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/BGbmVKvFwqLfZpMi.mov"
                autoPlay
                muted
                loop
                playsInline
                controls
                controlsList="nodownload"
                className="w-full h-full object-contain sm:object-cover"
              />
            </div>

            {/* Nova Imagem OverMind (1x1) */}
            <div className="bento-card bento-card-1x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/CRqCCQjDqihHqVZY.jpg"
                alt="OverMind - Biblioteca Digital"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Anúncio Meta OverMind (1x1) */}
            <div className="bento-card bento-card-1x1 relative overflow-hidden group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/NVOCfKqtIMRFRmdT.png"
                alt="Anúncio rodado no Meta"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-sm mb-2">Anúncio rodado no Meta</h3>
              </div>
            </div>

            {/* Branding OverMind (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-blue-500/20 to-blue-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-blue-400 mb-4">Branding & Posicionamento</h3>
                  <h4 className="display-bold text-2xl mb-6">OverMind</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Conceito:</span> Plataforma educacional inovadora que transforma conhecimento em oportunidades reais. Posicionada para estudantes, leitores e curiosos.
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Paleta:</span> Azul vibrante com brancos e cinzas neutros, transmitindo confianca, inovacao e clareza intelectual
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Estrategia:</span> Funil de vendas otimizado com landing pages conversivas, parcerias com influencers e calendario de conteudo
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-blue-500/30 hover:bg-blue-500/50 border border-blue-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Projeto Thumbs Para Influencers */}
        <div className="mt-20">
          <h2 className="display-bold text-3xl lg:text-4xl mb-8">Thumbs Para Influencers</h2>
          <div className="bento-grid">
            {/* Imagem Principal Thumbs (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group bg-background flex items-center justify-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/kMcSbjBkJRaoJjFQ.jpg"
                alt="Thumbs Para Influencers"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">@sofiaespanha</p>
              </div>
            </div>

            {/* Imagem Roupas Gringas (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group bg-background flex items-center justify-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/ibisDgURsAFDkLQn.jpg"
                alt="Thumbs Roupas Gringas"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">@breely7</p>
              </div>
            </div>

            {/* Imagem Escape Room (2x1) */}
            <div className="bento-card bento-card-2x1 relative overflow-hidden group bg-background flex items-center justify-center">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663296046682/msmWciHFULxWAmBT.jpg"
                alt="Thumbs Escape Room"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="display-bold text-2xl mb-2"></h3>
                <p className="text-sm text-foreground/80">@escaperoom</p>
              </div>
            </div>

            {/* Branding Thumbs (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-yellow-500/20 to-yellow-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-yellow-400 mb-4">Producao de Conteudo</h3>
                  <h4 className="display-bold text-2xl mb-6">Thumbs Para Influencers</h4>
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Servico:</span> Criacao de thumbnails profissionais para videos de influencers, otimizadas para CTR e engajamento.
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Diferencial:</span> Design impactante, tipografia legivel, paleta estrategica e elementos visuais destacados.
                    </p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Resultado:</span> Aumento de visualizacoes e engajamento atraves de thumbnails que chamam atencao.
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-yellow-500/30 hover:bg-yellow-500/50 border border-yellow-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projeto
                </button>
              </div>
            </BentoCard>
          </div>
        </div>

        {/* Outros Projetos */}
        <div className="mt-20">
          <h2 className="display-bold text-3xl lg:text-4xl mb-8">
            Outros Projetos & Serviços
          </h2>

          {/* Bento Grid - Outros Projetos */}
          <div className="bento-grid">
            {/* Projeto - Branding (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-purple-500/20 to-purple-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-purple-400 mb-3">Serviço</h3>
                  <h4 className="display-bold text-2xl mb-4">Branding Completo</h4>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Como funciona:</span>
                    </p>
                    <ul className="text-sm text-foreground/70 space-y-2">
                      <li>• <span className="font-semibold">Descoberta:</span> Entender visão, valores e público-alvo</li>
                      <li>• <span className="font-semibold">Estratégia:</span> Definir posicionamento e diferencial</li>
                      <li>• <span className="font-semibold">Design:</span> Logo, paleta, tipografia e guidelines</li>
                      <li>• <span className="font-semibold">Implementação:</span> Aplicação em todos os touchpoints</li>
                    </ul>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-purple-500/30 hover:bg-purple-500/50 border border-purple-500/50 rounded-lg text-sm font-medium transition-colors">
                  Mapa Mental
                </button>
              </div>
            </BentoCard>

            {/* Projeto - Social Media (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-pink-500/20 to-pink-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-pink-400 mb-3">Serviço</h3>
                  <h4 className="display-bold text-2xl mb-4">Gestão de Social Media</h4>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-foreground">Experiência em:</span>
                    </p>
                    <ul className="text-sm text-foreground/70 space-y-2">
                      <li>• <span className="font-semibold">Planejamento:</span> Calendário editorial e estratégia de conteúdo</li>
                      <li>• <span className="font-semibold">Criação:</span> Design de posts, stories e reels</li>
                      <li>• <span className="font-semibold">Gestão:</span> Controle de múltiplas contas e plataformas</li>
                      <li>• <span className="font-semibold">Análise:</span> Métricas, engagement e ROI</li>
                    </ul>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-pink-500/30 hover:bg-pink-500/50 border border-pink-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Portfólio
                </button>
              </div>
            </BentoCard>

            {/* Projeto - Web Design (2x2) */}
            <BentoCard size="2x2" className="fade-in-slide bg-gradient-to-br from-cyan-500/20 to-cyan-500/5">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="accent-medium text-xs text-cyan-400 mb-3">Serviço</h3>
                  <h4 className="display-bold text-2xl mb-4">Web Design & Desenvolvimento</h4>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Projetos Realizados:</p>
                      <ul className="text-sm text-foreground/70 space-y-1">
                        <li>• <span className="font-semibold">Homenz Clínica:</span> Site profissional com conteúdo educativo</li>
                        <li>• <span className="font-semibold">Disk Paradise:</span> Plataforma de serviços com integração</li>
                      </ul>
                    </div>
                    <p className="text-sm text-foreground/70">
                      Design responsivo, moderno e otimizado para conversão com foco em UX/UI.
                    </p>
                  </div>
                </div>
                <button className="self-start px-4 py-2 bg-cyan-500/30 hover:bg-cyan-500/50 border border-cyan-500/50 rounded-lg text-sm font-medium transition-colors">
                  Ver Projetos
                </button>
              </div>
            </BentoCard>

            {/* Projeto - Ilustração (1x1) */}
            <BentoCard size="1x1" className="fade-in-slide bg-gradient-to-br from-orange-500/20 to-orange-500/5">
              <div className="flex flex-col justify-between h-full">
                <h3 className="accent-medium text-xs text-orange-400 mb-3">Criativo</h3>
                <div>
                  <h4 className="font-bold text-lg mb-2">Ilustração Digital</h4>
                  <p className="text-xs text-foreground/70">Arte customizada para marcas</p>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
