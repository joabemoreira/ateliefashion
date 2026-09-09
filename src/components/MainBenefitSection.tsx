import { Sparkles, ArrowRight, ArrowDown, Scissors, Shirt, Crown } from 'lucide-react';

/**
 * SEÇÃO 4 — BENEFÍCIO PRINCIPAL & DESTAQUE DO MECANISMO
 * 
 * Enfatiza a liberdade criativa de combinações para as bonequinhas
 * e ilustra o mecanismo visual: BONECA → ROUPA → CABELO → ACESSÓRIO → NOVO LOOK.
 */
export default function MainBenefitSection() {
  const steps = [
    { label: "Boneca", emoji: "👧", desc: "Base", icon: null },
    { label: "Roupa", icon: Shirt, desc: "+50 Opções", emoji: null },
    { label: "Cabelo", icon: Scissors, desc: "+50 Estilos", emoji: null },
    { label: "Acessório", icon: Crown, desc: "+100 Detalhes", emoji: null },
    { label: "Novo Look", icon: Sparkles, desc: "Infinitos!", isResult: true, emoji: null },
  ];

  return (
    <section 
      id="secao-beneficio-principal" 
      className="w-full text-center py-8 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)]"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 max-w-lg mx-auto tracking-tight leading-snug">
        Agora cada bonequinha pode ter um estilo diferente.
      </h2>

      <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto mb-6 leading-relaxed">
        Troque as roupas, mude o cabelo, combine os acessórios e crie novas versões das suas personagens sempre que quiser.
      </p>

      {/* MECANISMO VISUAL DE COMBINAÇÕES */}
      <div 
        id="mecanismo-combinacoes" 
        className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-rose-50/70 via-pink-50/40 to-purple-50/50 border border-rose-200/80 max-w-lg mx-auto"
      >
        <span className="inline-block text-[11px] font-extrabold text-rose-700 tracking-wider uppercase mb-3 bg-white px-3 py-0.5 rounded-full border border-rose-200">
          Como funciona a mágica do Ateliê
        </span>

        {/* Fluxo no desktop/tablet (horizontal) e mobile (empilhado compacto com setas) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
                <div 
                  className={`w-full sm:w-20 p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                    step.isResult 
                      ? 'bg-gradient-to-br from-rose-500 to-purple-600 text-white border-transparent shadow-sm' 
                      : 'bg-white text-gray-800 border-rose-200/80 shadow-2xs'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1">
                    {Icon ? (
                      <Icon className={`w-5 h-5 ${step.isResult ? 'text-white' : 'text-rose-600'}`} />
                    ) : (
                      <span className="text-lg">{step.emoji}</span>
                    )}
                  </div>
                  <span className={`text-xs font-extrabold uppercase tracking-tight ${step.isResult ? 'text-white' : 'text-gray-900'}`}>
                    {step.label}
                  </span>
                  <span className={`text-[10px] ${step.isResult ? 'text-rose-100 font-medium' : 'text-gray-500'}`}>
                    {step.desc}
                  </span>
                </div>

                {/* Seta indicadora entre os passos */}
                {idx < steps.length - 1 && (
                  <div className="my-1 sm:my-0 sm:mx-1 flex items-center justify-center text-rose-400">
                    <ArrowDown className="w-3.5 h-3.5 sm:hidden" />
                    <ArrowRight className="w-3.5 h-3.5 hidden sm:block" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Destaque das Combinações */}
      <div 
        id="destaque-combinacoes" 
        className="p-4 rounded-xl bg-rose-50/80 border border-dashed border-rose-300 max-w-lg mx-auto"
      >
        <p className="text-base sm:text-lg font-extrabold text-rose-900 tracking-tight">
          Mais combinações. Mais criatividade. Mais brincadeiras.
        </p>
      </div>
    </section>
  );
}

