import { ShieldCheck, Lock } from 'lucide-react';

/**
 * SEÇÃO 8 — GARANTIA / SEGURANÇA
 * 
 * Seção curta de segurança e confiança com garantia incondicional de 7 dias.
 */
export default function GuaranteeSection() {
  return (
    <section id="secao-seguranca" className="w-full text-center py-6">
      <div className="max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Compra segura */}
        <div 
          id="bloco-compra-segura" 
          className="p-5 bg-white border border-rose-100 rounded-2xl shadow-2xs text-center flex flex-col items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-3 shadow-2xs">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">
            Compra segura
          </h3>
          <p className="text-xs text-gray-600 mb-1 leading-relaxed">
            Seu pagamento é processado com segurança.
          </p>
          <p className="text-xs text-gray-500 font-medium">
            Você terá acesso ao material após a confirmação do pagamento.
          </p>
        </div>

        {/* Garantia de 7 dias */}
        <div 
          id="bloco-garantia" 
          className="p-5 bg-white border border-rose-100 rounded-2xl shadow-2xs text-center flex flex-col items-center justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center mb-3 shadow-2xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">
            Garantia de 7 dias
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Você tem 7 dias para conhecer o material. Caso não fique satisfeita, poderá solicitar o reembolso de acordo com as condições da oferta.
          </p>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400">
        © Ateliê Fashion • Coleção Complementar
      </div>
    </section>
  );
}

