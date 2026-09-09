import { Sparkles, Crown } from 'lucide-react';
import { UPSELL_PRICE_PLACEHOLDER } from '../config/wiapyConfig.ts';

/**
 * SEÇÃO 5 — OFERTA ESPECIAL
 * 
 * Resumo da oferta com o placeholder do preço facilmente identificável
 * com apresentação boutique e detalhes champagne/ouro suave.
 */
export default function SpecialOfferSection() {
  return (
    <section 
      id="secao-oferta-especial" 
      className="w-full text-center py-8 px-4 sm:px-6 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_24px_-4px_rgba(244,114,182,0.12)] relative"
    >
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase mb-2">
        <Crown className="w-3.5 h-3.5 text-amber-600" />
        <span>Condição Exclusiva</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1.5 tracking-tight">
        Oferta especial para você
      </h2>

      <p className="text-sm sm:text-base text-rose-600 font-semibold mb-6">
        Disponível somente nesta etapa após a compra.
      </p>

      {/* Card boutique do produto com borda champagne/rosé e textura suave */}
      <div 
        id="card-resumo-oferta"
        className="p-6 rounded-2xl bg-gradient-to-b from-rose-50/70 via-pink-50/40 to-amber-50/50 border-2 border-rose-200/90 shadow-sm max-w-lg mx-auto relative overflow-hidden"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-rose-500 text-white text-xs font-black uppercase tracking-widest mb-3 shadow-2xs">
          Edição Limitada
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3 tracking-tight flex items-center justify-center gap-2">
          <span>ATELIÊ FASHION</span>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </h3>

        {/* Resumo do conteúdo */}
        <div className="p-3.5 bg-white/90 rounded-xl border border-rose-200/70 mb-5 shadow-2xs">
          <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
            50 roupas + 50 cabelos + 50 sapatos + 50 bolsas + 50 acessórios + atualizações mensais
          </p>
        </div>

        {/* Placeholder do preço do Upsell em destaque com moldura champagne */}
        <div 
          id="preco-upsell-placeholder" 
          className="py-3 px-6 bg-gradient-to-r from-amber-50 to-rose-50 border-2 border-dashed border-amber-300 rounded-xl inline-flex flex-col items-center justify-center my-1 shadow-2xs"
        >
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-0.5">
            Valor Promocional do Upsell
          </span>
          <span className="text-xl sm:text-2xl font-black text-gray-900 font-mono tracking-tight">
            {UPSELL_PRICE_PLACEHOLDER}
          </span>
        </div>
      </div>
    </section>
  );
}

