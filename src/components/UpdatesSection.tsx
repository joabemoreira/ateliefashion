import { RefreshCw } from 'lucide-react';

/**
 * SEÇÃO — DESTAQUE DE ATUALIZAÇÕES
 * 
 * Bloco separado:
 * Título: "ATUALIZAÇÕES MENSAIS"
 * Texto: "O Ateliê Fashion continua recebendo novidades para você ter novos looks e combinações ao longo do tempo."
 * 
 * Sem promessas falsas ou quantidades inventadas.
 */
export default function UpdatesSection() {
  return (
    <section 
      id="secao-atualizacoes-mensais"
      className="w-full py-6 px-4 sm:px-6 mb-6 rounded-2xl bg-gradient-to-r from-purple-50/90 via-pink-50/80 to-rose-50/90 border border-purple-200/90 shadow-[0_4px_24px_-4px_rgba(216,180,254,0.16)] text-center relative overflow-hidden"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-white text-purple-600 border border-purple-200 flex items-center justify-center shadow-2xs mb-2.5">
          <RefreshCw className="w-5 h-5" />
        </div>

        <h2 className="text-base sm:text-lg font-black text-purple-950 tracking-wide uppercase mb-1.5">
          ATUALIZAÇÕES MENSAIS
        </h2>

        <p className="text-xs sm:text-sm text-purple-900/80 leading-relaxed font-medium">
          O Ateliê Fashion continua recebendo novidades para você ter novos looks e combinações ao longo do tempo.
        </p>
      </div>
    </section>
  );
}
