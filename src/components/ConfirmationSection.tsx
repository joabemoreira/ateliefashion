import { Sparkles, CheckCircle2 } from 'lucide-react';

/**
 * SEÇÃO 1 & 2 — PRIMEIRA DOBRA & DESTAQUE DO VALOR
 * 
 * Sequência estrita:
 * 1. "🎉 Seu pedido foi confirmado!"
 * 2. "Suas +350 Bonecas de Papel já estão garantidas."
 * 3. "Agora, uma oferta especial para deixar cada bonequinha ainda mais divertida."
 * 
 * Apresentação:
 * - "ATELIÊ FASHION"
 * - "Um guarda-roupa inteiro para suas bonequinhas."
 * - "Crie novos looks trocando roupas, cabelos, sapatos, bolsas e acessórios."
 * - Espaço reservado para a imagem principal.
 * 
 * Destaque do valor após a apresentação:
 * - "250 PEÇAS PARA CRIAR NOVOS LOOKS"
 * - "50 roupas • 50 cabelos • 50 sapatos • 50 bolsas • 50 acessórios"
 * - "ATUALIZAÇÕES MENSAIS INCLUÍDAS"
 */
export default function ConfirmationSection() {
  return (
    <section 
      id="secao-primeira-dobra" 
      className="w-full text-center py-6 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)] relative overflow-hidden"
    >
      {/* Detalhe superior de acabamento */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 via-pink-400 to-purple-200" />

      {/* 1. Confirmação do pedido */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide mb-2">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
        <span>🎉 Seu pedido foi confirmado!</span>
      </div>

      {/* 2. Reconhecimento da compra principal */}
      <p className="text-sm sm:text-base font-bold text-gray-900 mb-1">
        Suas +350 Bonecas de Papel já estão garantidas.
      </p>

      {/* 3. Transição direta */}
      <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-5 leading-relaxed">
        Agora, uma oferta especial para deixar cada bonequinha ainda mais divertida.
      </p>

      {/* Divisor sutil */}
      <div className="w-16 h-px bg-rose-200 mx-auto mb-5" />

      {/* Nome do produto */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black tracking-widest uppercase mb-2.5">
        <Sparkles className="w-3.5 h-3.5 text-rose-600 shrink-0" />
        <span>ATELIÊ FASHION</span>
      </div>

      {/* Headline principal */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight max-w-xl mx-auto mb-2.5">
        Um guarda-roupa inteiro para suas bonequinhas.
      </h1>

      {/* Subheadline objetiva */}
      <p className="text-sm sm:text-base text-gray-700 max-w-lg mx-auto font-medium mb-6 leading-snug">
        Crie novos looks trocando roupas, cabelos, sapatos, bolsas e acessórios.
      </p>

      {/* Imagem Principal do Ateliê Fashion */}
      <div 
        id="imagem-principal-atelie-fashion"
        className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-rose-200 shadow-md mb-6 bg-rose-50/40"
      >
        <img 
          src="/imghero.webp" 
          alt="Ateliê Fashion - Coleção Complementar" 
          className="w-full h-auto object-cover block"
          loading="eager"
        />
      </div>

      {/* 2. Destaque do valor após a apresentação do produto */}
      <div 
        id="destaque-valor-produto"
        className="w-full max-w-lg mx-auto p-4 sm:p-5 rounded-xl bg-rose-50/70 border border-rose-200 flex flex-col items-center text-center"
      >
        <h2 className="text-sm sm:text-base font-black text-rose-950 tracking-tight uppercase mb-1.5">
          250 PEÇAS PARA CRIAR NOVOS LOOKS
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 font-semibold mb-3">
          50 roupas • 50 cabelos • 50 sapatos • 50 bolsas • 50 acessórios
        </p>
        <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider border border-purple-200">
          ATUALIZAÇÕES MENSAIS INCLUÍDAS
        </span>
      </div>
    </section>
  );
}



