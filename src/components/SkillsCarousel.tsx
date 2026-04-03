/**
 * Skills Carousel Component
 * 
 * Design Philosophy: Layout em grid com glass effect moderno
 * Habilidades em cards lado a lado com efeito de vidro refletido ao passar o cursor
 */

const skillsData = [
  {
    id: 1,
    title: 'Design',
    items: [
      'Adobe Photoshop ',
      'CorelDraw',
      'Figma',
      'Canva'
    ]
  },
  {
    id: 2,
    title: 'Web & Tech',
    items: [
      'HTML/CSS',
      '',
      'Python',
      'IA '
    ]
  },
  {
    id: 3,
    title: 'Criativo & Estratégia',
    items: [
      'Branding & Identidade Visual',
      'Social Media Strategy',
      'Copywriting',
      'Ilustração Digital'
    ]
  }
];

export default function SkillsCarousel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {skillsData.map((skill) => (
        <div
          key={skill.id}
          className="skill-card p-4 sm:p-6 md:p-8 rounded-xl h-full flex flex-col justify-between"
        >
          {/* Título */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-accent">{skill.title}</h3>
            
            {/* Lista de Habilidades */}
            <ul className="text-xs sm:text-sm space-y-1.5 sm:space-y-2 text-foreground/70">
              {skill.items.filter(item => item.trim()).map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
