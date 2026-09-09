import { CheckCircle2, Sparkles } from 'lucide-react';

/**
 * SEÇÃO 1 — CONFIRMAÇÃO DA COMPRA
 * 
 * Informa que o produto principal (+350 Bonecas de Papel) já foi adquirido
 * com sucesso antes de apresentar a coleção complementar.
 */
export default function ConfirmationSection() {
  return (
    <section 
      id="secao-confirmacao" 
      className="w-full text-center py-6 px-4 mb-6 rounded-2xl bg-white border border-rose-100 shadow-[0_4px_20px_-4px_rgba(244,114,182,0.12)] relative overflow-hidden"
    >
      {/* Detalhe de costura decorativo superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-200 via-pink-400 to-purple-200" />

      {/* Selo sutil de confirmação */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide uppercase mb-3">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Pagamento Confirmado</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-2">
        🎉 Seu pedido foi confirmado!
      </h1>

      <p className="text-base sm:text-lg font-bold text-rose-600 mb-3 flex items-center justify-center gap-1.5">
        <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
        <span>Suas +350 Bonecas de Papel já estão garantidas.</span>
      </p>

      <div className="max-w-md mx-auto p-3 rounded-xl bg-rose-50/60 border border-dashed border-rose-200/80">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
          Mas antes de acessar seu material, temos uma coleção especial que pode deixar a brincadeira ainda mais divertida.
        </p>
      </div>
    </section>
  );
}

