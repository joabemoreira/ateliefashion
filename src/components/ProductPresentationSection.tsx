import { Sparkles, Scissors, Shirt, Crown, ShoppingBag } from 'lucide-react';

/**
 * SEÇÃO 2 — APRESENTAÇÃO DO UPSELL
 * 
 * Apresenta o Ateliê Fashion como coleção complementar ao pedido principal.
 * Inclui o espaço reservado para a imagem principal/mockup [IMAGEM_ATELIE_FASHION].
 */
export default function ProductPresentationSection() {
  const categories = [
    { label: "50 Roupas", icon: Shirt },
    { label: "50 Cabelos", icon: Scissors },
    { label: "50 Sapatos", emoji: "👠" },
    { label: "50 Bolsas", icon: ShoppingBag },
    { label: "50 Acessórios", icon: Crown },
  ];

  return (
    <section 
      id="secao-apresentacao" 
      className="w-full text-center py-8 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)] relative"
    >
      {/* Etiqueta de Coleção */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-rose-800 text-xs font-bold tracking-wider uppercase mb-3">
        <Sparkles className="w-3.5 h-3.5 text-rose-600" />
        <span>Coleção Complementar Exclusiva</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2.5 tracking-tight">
        Conheça o Ateliê Fashion
      </h2>

      <p className="text-base sm:text-lg text-rose-700 font-semibold mb-6 max-w-md mx-auto leading-snug">
        Um guarda-roupa completo para criar novos looks para suas bonequinhas.
      </p>

      {/* Espaço reservado para a imagem principal/mockup com moldura de vitrine de moda de papel */}
      <div 
        id="placeholder-imagem-atelie-fashion"
        className="w-full max-w-lg mx-auto aspect-[4/3] bg-gradient-to-b from-rose-50/70 via-pink-50/40 to-purple-50/60 border-2 border-dashed border-rose-300/80 rounded-2xl flex flex-col items-center justify-center p-6 my-6 relative shadow-inner overflow-hidden group"
      >
        {/* Tag decorativa de fita */}
        <div className="absolute top-3 right-3 bg-white/95 border border-rose-200 px-3 py-1 rounded-full text-[11px] font-bold text-rose-600 shadow-sm flex items-center gap-1">
          <Scissors className="w-3 h-3 text-rose-500" />
          <span>Ateliê de Moda</span>
        </div>

        {/* Ícone sutil de atelier central */}
        <div className="w-16 h-16 rounded-full bg-white border border-rose-200 flex items-center justify-center text-rose-500 shadow-sm mb-3">
          <Shirt className="w-8 h-8 text-rose-500" />
        </div>

        <span className="font-extrabold text-gray-800 text-xl sm:text-2xl tracking-wide mb-1 font-mono">
          [IMAGEM_ATELIE_FASHION]
        </span>
        <span className="text-xs sm:text-sm text-gray-500 max-w-xs leading-tight">
          Espaço de destaque reservado para mockup / foto principal do Ateliê Fashion
        </span>

        {/* Linha decorativa inferior simulando fita métrica / pesponto */}
        <div className="absolute bottom-2 left-6 right-6 border-b border-dashed border-rose-200" />
      </div>

      {/* Mini etiquetas das 5 categorias em formato de cards rápidos */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto mb-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <span 
              key={cat.label}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-200/80 text-xs font-semibold shadow-2xs"
            >
              {Icon ? <Icon className="w-3 h-3 text-rose-600" /> : <span>{cat.emoji}</span>}
              <span>{cat.label}</span>
            </span>
          );
        })}
      </div>

      <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto mb-5 leading-relaxed">
        Você já tem as bonequinhas. Agora pode personalizar cada uma delas de várias maneiras, trocando roupas, cabelos, sapatos, bolsas e acessórios.
      </p>

      {/* Frase de impacto com moldura delicada */}
      <div className="inline-block px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-extrabold text-base sm:text-lg shadow-sm">
        Uma bonequinha. Dezenas de combinações.
      </div>
    </section>
  );
}

