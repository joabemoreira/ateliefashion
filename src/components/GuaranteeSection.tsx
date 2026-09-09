import { ShieldCheck, Lock } from 'lucide-react';

/**
 * SEÇÃO 12 — GARANTIA E SEGURANÇA
 * 
 * Seção compacta de confiança:
 * - "Compra segura"
 * - "Pagamento processado com segurança."
 * - "Você terá acesso ao material após a confirmação do pagamento."
 * 
 * - "Garantia de 30 dias"
 * - "Experimente o Ateliê Fashion por 30 dias. Se não ficar satisfeita, poderá solicitar o reembolso conforme as condições da oferta."
 */
export default function GuaranteeSection() {
  return (
    <section id="secao-seguranca" className="w-full text-center py-4 mb-4">
      <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Compra segura */}
        <div 
          id="bloco-compra-segura" 
          className="p-4 sm:p-5 bg-white border border-rose-100 rounded-2xl shadow-2xs text-center flex flex-col items-center justify-center"
        >
          <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-2.5 shadow-2xs">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
            Compra segura
          </h3>
          <p className="text-xs text-gray-600 mb-1 leading-relaxed">
            Pagamento processado com segurança.
          </p>
          <p className="text-xs text-gray-500 font-medium">
            Você terá acesso ao material após a confirmação do pagamento.
          </p>
        </div>

        {/* Garantia de 30 dias */}
        <div 
          id="bloco-garantia" 
          className="p-4 sm:p-5 bg-white border border-rose-100 rounded-2xl shadow-2xs text-center flex flex-col items-center justify-center"
        >
          <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center mb-2.5 shadow-2xs">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
            Garantia de 30 dias
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Experimente o Ateliê Fashion por 30 dias. Se não ficar satisfeita, poderá solicitar o reembolso conforme as condições da oferta.
          </p>
        </div>
      </div>

      <div className="mt-5 text-center text-xs text-gray-400">
        © Ateliê Fashion • Coleção Complementar
      </div>
    </section>
  );
}


