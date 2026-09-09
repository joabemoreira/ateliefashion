import { Sparkles, Palette, Smile } from 'lucide-react';

/**
 * SEÇÃO "POR QUE VOCÊ VAI AMAR"
 * 
 * Seção curta e escaneável:
 * - Headline: "Agora cada bonequinha pode ter um estilo diferente."
 * - Texto: "Troque o cabelo, escolha uma roupa, combine os acessórios e crie uma nova versão sempre que quiser."
 * - 3 benefícios visuais:
 *   1. "Mais combinações"
 *   2. "Mais criatividade"
 *   3. "Mais formas de brincar"
 */
export default function MainBenefitSection() {
  const benefits = [
    {
      title: "Mais combinações",
      icon: Sparkles,
    },
    {
      title: "Mais criatividade",
      icon: Palette,
    },
    {
      title: "Mais formas de brincar",
      icon: Smile,
    },
  ];

  return (
    <section 
      id="secao-por-que-amar" 
      className="w-full text-center py-7 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)]"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2 max-w-lg mx-auto tracking-tight leading-snug">
        Agora cada bonequinha pode ter um estilo diferente.
      </h2>

      <p className="text-sm sm:text-base text-gray-700 max-w-md mx-auto mb-6 leading-relaxed">
        Troque o cabelo, escolha uma roupa, combine os acessórios e crie uma nova versão sempre que quiser.
      </p>

      {/* 3 benefícios visuais escaneáveis */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div 
              key={b.title}
              className="py-3 px-3.5 rounded-xl bg-gradient-to-b from-rose-50/70 to-pink-50/50 border border-rose-200/80 flex items-center sm:flex-col justify-center gap-2.5 shadow-2xs"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-rose-200 flex items-center justify-center text-rose-600 shrink-0 shadow-2xs">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-gray-900 tracking-tight">
                {b.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}


