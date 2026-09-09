import { Sparkles } from 'lucide-react';
import { UPSELL_PRICE } from '../config/wiapyConfig.ts';

/**
 * SEÇÃO 8 & 9 — TRANSIÇÃO & BLOCO DA OFERTA
 * 
 * Frase de transição:
 * "Você já tem as bonequinhas. Agora pode criar ainda mais looks para elas."
 * "Oferta especial para quem acabou de comprar"
 * 
 * Bloco da oferta:
 * - Título: "ATELIÊ FASHION"
 * - Resumo: "50 roupas + 50 cabelos + 50 sapatos + 50 bolsas + 50 acessórios"
 * - "ATUALIZAÇÕES MENSAIS INCLUÍDAS"
 * - Preço: "Por apenas R$ 12,90"
 */
export default function SpecialOfferSection() {
  return (
    <section 
      id="secao-oferta-especial" 
      className="w-full text-center py-8 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)] relative"
    >
      {/* 7. Frase de transição para a oferta */}
      <div className="mb-6 max-w-md mx-auto">
        <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-1">
          Você já tem as bonequinhas.
        </p>
        <p className="text-sm sm:text-base font-semibold text-rose-600 mb-3">
          Agora pode criar ainda mais looks para elas.
        </p>
        <div className="inline-block px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold tracking-wide">
          Oferta especial para quem acabou de comprar.
        </div>
      </div>

      {/* 9. Bloco visual forte da oferta */}
      <div 
        id="card-bloco-oferta"
        className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-rose-50/80 via-pink-50/40 to-amber-50/40 border-2 border-rose-200/90 shadow-sm max-w-lg mx-auto relative overflow-hidden"
      >
        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight flex items-center justify-center gap-2">
          <span>ATELIÊ FASHION</span>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </h3>

        {/* Resumo do conteúdo oficial */}
        <div className="p-3.5 bg-white/95 rounded-xl border border-rose-200/80 mb-4 shadow-2xs">
          <p className="text-xs sm:text-sm text-gray-800 font-bold leading-relaxed">
            50 roupas + 50 cabelos + 50 sapatos + 50 bolsas + 50 acessórios
          </p>
        </div>

        {/* Destaque das atualizações mensais */}
        <div className="mb-5">
          <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider border border-purple-200">
            ATUALIZAÇÕES MENSAIS INCLUÍDAS
          </span>
        </div>

        {/* Preço real do Upsell */}
        <div 
          id="preco-upsell-container" 
          className="py-3.5 px-6 bg-white border border-rose-200 rounded-xl inline-flex flex-col items-center justify-center shadow-2xs w-full max-w-xs mx-auto"
        >
          <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Por apenas {UPSELL_PRICE}
          </span>
        </div>
      </div>
    </section>
  );
}


