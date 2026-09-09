import { Shirt, Scissors, ShoppingBag, Crown, Sparkles, RefreshCw } from 'lucide-react';

/**
 * SEÇÃO 3 — O QUE VEM NO ATELIÊ FASHION
 * 
 * Exibe exatamente os 5 grupos de itens de moda (250 itens no total)
 * e o destaque de atualizações mensais incluídas.
 */
export default function FeaturesSection() {
  const items = [
    {
      count: "50",
      title: "50 Roupas",
      category: "Roupas & Vestidos",
      description: "Vestidos, conjuntos e diferentes estilos para criar novos visuais.",
      icon: Shirt,
      accentColor: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50/50",
      borderColor: "border-rose-200/80",
    },
    {
      count: "50",
      title: "50 Cabelos e Penteados",
      category: "Penteados & Cabelos",
      description: "Diferentes estilos para mudar completamente o visual das personagens.",
      icon: Scissors,
      accentColor: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50/50",
      borderColor: "border-purple-200/80",
    },
    {
      count: "50",
      title: "50 Sapatos",
      category: "Calçados & Sapatos",
      description: "Modelos para combinar com cada look.",
      emoji: "👠",
      accentColor: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50/50",
      borderColor: "border-pink-200/80",
    },
    {
      count: "50",
      title: "50 Bolsas",
      category: "Bolsas de Passeio",
      description: "Diversos estilos para completar cada produção.",
      icon: ShoppingBag,
      accentColor: "from-amber-500 to-rose-400",
      bgColor: "bg-amber-50/40",
      borderColor: "border-amber-200/80",
    },
    {
      count: "50",
      title: "50 Acessórios",
      category: "Joias & Adornos",
      description: "Detalhes para deixar cada combinação ainda mais especial.",
      icon: Crown,
      accentColor: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50/40",
      borderColor: "border-purple-200/80",
    },
  ];

  return (
    <section 
      id="secao-conteudo" 
      className="w-full py-8 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)]"
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold tracking-wider uppercase mb-2">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>250 Peças Exclusivas</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Tudo para criar novos looks
        </h2>
      </div>

      {/* Grid de cards de coleção de moda */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              id={`item-conteudo-${index + 1}`}
              className={`p-4 rounded-xl border ${item.borderColor} ${item.bgColor} shadow-2xs relative overflow-hidden transition-all flex flex-col justify-between`}
            >
              {/* Topo do card com número grande e ícone */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight font-mono">
                    {item.count}
                  </span>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-rose-700 bg-white/90 px-2 py-0.5 rounded-full border border-rose-200/60 shadow-2xs">
                    peças
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white border border-rose-200/60 flex items-center justify-center text-rose-600 shadow-2xs">
                  {Icon ? <Icon className="w-4 h-4" /> : <span className="text-sm">{item.emoji}</span>}
                </div>
              </div>

              {/* Título e descrição */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Destaque das Atualizações Mensais */}
      <div 
        id="destaque-atualizacoes" 
        className="mt-5 p-4 rounded-xl bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 border border-purple-200/90 max-w-lg mx-auto text-center shadow-2xs flex items-center justify-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-full bg-white text-purple-600 border border-purple-200 flex items-center justify-center shrink-0 shadow-2xs">
          <RefreshCw className="w-4 h-4" />
        </div>
        <p className="text-sm sm:text-base font-extrabold text-purple-900">
          Atualizações mensais incluídas
        </p>
      </div>
    </section>
  );
}

