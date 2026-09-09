import { Sparkles } from 'lucide-react';

/**
 * SEÇÃO DE CONTEÚDO — 5 CARDS VISUAIS
 * 
 * 1. "50 ROUPAS" — /50roupa.webp
 * 2. "50 CABELOS" — /50cabelo.webp
 * 3. "50 SAPATOS" — /50sapato.webp
 * 4. "50 BOLSAS" — /50bolsa.webp
 * 5. "50 ACESSÓRIOS" — /50acessorio.webp
 */
export default function FeaturesSection() {
  const cards = [
    {
      id: "card-roupas",
      title: "50 ROUPAS",
      description: "Vestidos, conjuntos e diferentes estilos.",
      image: "/50roupa.webp",
    },
    {
      id: "card-cabelos",
      title: "50 CABELOS",
      description: "Penteados para mudar o visual.",
      image: "/50cabelo.webp",
    },
    {
      id: "card-sapatos",
      title: "50 SAPATOS",
      description: "Modelos para combinar com cada look.",
      image: "/50sapato.webp",
    },
    {
      id: "card-bolsas",
      title: "50 BOLSAS",
      description: "Diferentes estilos para completar a produção.",
      image: "/50bolsa.webp",
    },
    {
      id: "card-acessorios",
      title: "50 ACESSÓRIOS",
      description: "Os detalhes que transformam cada look.",
      image: "/50acessorio.webp",
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
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Tudo para criar novos looks
        </h2>
      </div>

      {/* Grid responsivo: 1 coluna no mobile muito pequeno, 2 colunas no mobile largo/tablet, 3 colunas harmoniosas no desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={card.id}
            id={card.id}
            className={`p-4 rounded-xl border border-rose-200/80 bg-gradient-to-b from-white to-rose-50/30 shadow-2xs flex flex-col justify-between transition-all hover:border-rose-300 ${
              index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Título e Descrição */}
            <div className="mb-3">
              <h3 className="text-base sm:text-lg font-black text-gray-900 tracking-tight mb-1">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                {card.description}
              </p>
            </div>

            {/* Imagem real do card */}
            <div 
              className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-rose-200/80 bg-rose-50/30 relative shadow-inner"
            >
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover block transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



