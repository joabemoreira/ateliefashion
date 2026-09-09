import { ArrowDown, Sparkles } from 'lucide-react';

/**
 * SEÇÃO — DEMONSTRAÇÃO DO MECANISMO
 * 
 * Conceito central: "Uma bonequinha. Dezenas de combinações."
 * Fluxo demonstrativo:
 * Passo 1 (BONECA) → Passo 2 (ROUPA) → Passo 3 (CABELO) → Passo 4 (ACESSÓRIO) → Passo 5 (NOVO LOOK)
 */
export default function MechanismSection() {
  const steps = [
    {
      stepNumber: "1",
      title: "BONECA",
      subtitle: "Base da personagem",
      image: "/passo1.webp",
      isResult: false,
    },
    {
      stepNumber: "2",
      title: "ROUPA",
      subtitle: "Vestidos e conjuntos",
      image: "/passo2.webp",
      isResult: false,
    },
    {
      stepNumber: "3",
      title: "CABELO",
      subtitle: "Penteados variados",
      image: "/passo3.webp",
      isResult: false,
    },
    {
      stepNumber: "4",
      title: "ACESSÓRIO",
      subtitle: "Sapatos, bolsas e joias",
      image: "/passo4.webp",
      isResult: false,
    },
    {
      stepNumber: "5",
      title: "NOVO LOOK",
      subtitle: "Combinação exclusiva",
      image: "/passo5.webp",
      isResult: true,
    },
  ];

  return (
    <section 
      id="secao-mecanismo" 
      className="w-full text-center py-8 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)] relative"
    >
      {/* Etiqueta de Demonstração */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-rose-800 text-xs font-bold tracking-wider uppercase mb-2">
        <Sparkles className="w-3.5 h-3.5 text-rose-600" />
        <span>Demonstração do Produto</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 tracking-tight">
        Uma bonequinha. Dezenas de combinações.
      </h2>

      {/* Grid responsivo do mecanismo */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-2xl mx-auto items-stretch">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col sm:contents">
            {/* Card individual do passo */}
            <div 
              className={`p-3 rounded-xl border flex flex-col items-center justify-between transition-all ${
                step.isResult
                  ? 'bg-gradient-to-b from-rose-500 to-purple-600 text-white border-transparent shadow-md ring-2 ring-rose-300'
                  : 'bg-rose-50/40 text-gray-900 border-rose-200/80 shadow-2xs'
              }`}
            >
              {/* Topo: Número e Título */}
              <div className="w-full text-center mb-2">
                <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                  step.isResult ? 'bg-white/20 text-white' : 'bg-white text-rose-700 border border-rose-200'
                }`}>
                  Passo {step.stepNumber}
                </span>
                <h3 className={`text-xs sm:text-sm font-black tracking-tight ${step.isResult ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
              </div>

              {/* Imagem do passo */}
              <div 
                className={`w-full aspect-[3/4] rounded-lg overflow-hidden border mb-2 relative ${
                  step.isResult 
                    ? 'border-white/40 shadow-inner bg-black/10' 
                    : 'border-rose-200 shadow-2xs bg-white'
                }`}
              >
                <img 
                  src={step.image} 
                  alt={`${step.title} - Passo ${step.stepNumber}`} 
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>

              {/* Subtítulo */}
              <p className={`text-[11px] leading-tight text-center ${step.isResult ? 'text-rose-100 font-medium' : 'text-gray-600'}`}>
                {step.subtitle}
              </p>
            </div>

            {/* Seta indicadora (no mobile para baixo) */}
            {idx < steps.length - 1 && (
              <div className="sm:hidden my-1 flex items-center justify-center text-rose-400">
                <ArrowDown className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

