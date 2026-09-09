import ConfirmationSection from './components/ConfirmationSection.tsx';
import ProductPresentationSection from './components/ProductPresentationSection.tsx';
import FeaturesSection from './components/FeaturesSection.tsx';
import MainBenefitSection from './components/MainBenefitSection.tsx';
import SpecialOfferSection from './components/SpecialOfferSection.tsx';
import WiapyUpsellCTA from './components/WiapyUpsellCTA.tsx';
import GuaranteeSection from './components/GuaranteeSection.tsx';

/**
 * PÁGINA EXTERNA DE UPSELL: ATELIÊ FASHION
 * 
 * Conceito: Fashion + Papel + Criatividade + Encanto.
 * Extensão premium da oferta principal "+350 Bonecas de Papel".
 * Segue estritamente a hierarquia, seções, copy e integração do Upsell da Wiapy.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6f4] text-[#372836] flex flex-col items-center selection:bg-rose-200 selection:text-rose-900">
      {/* Barra superior de ateliê delicada */}
      <header className="w-full bg-white border-b border-rose-100/80 py-2.5 px-4 text-center sticky top-0 z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <p className="text-[11px] sm:text-xs font-extrabold tracking-widest text-rose-800 uppercase flex items-center justify-center gap-1.5">
          <span>🎀</span>
          <span>Ateliê Fashion • Coleção Complementar de Moda em Papel</span>
          <span>🎀</span>
        </p>
      </header>

      {/* Conteúdo principal formatado mobile-first */}
      <main className="w-full max-w-xl mx-auto px-3.5 sm:px-5 py-5 sm:py-8 flex flex-col">
        {/* SEÇÃO 1 — CONFIRMAÇÃO DA COMPRA */}
        <ConfirmationSection />

        {/* SEÇÃO 2 — APRESENTAÇÃO DO UPSELL */}
        <ProductPresentationSection />

        {/* SEÇÃO 3 — O QUE VEM NO ATELIÊ FASHION */}
        <FeaturesSection />

        {/* SEÇÃO 4 — BENEFÍCIO PRINCIPAL & MECANISMO */}
        <MainBenefitSection />

        {/* SEÇÃO 5 — OFERTA ESPECIAL */}
        <SpecialOfferSection />

        {/* SEÇÃO 6 & 7 — CTA PRINCIPAL & MECANISMO DE RECUSA DA WIAPY */}
        <WiapyUpsellCTA />

        {/* SEÇÃO 8 — GARANTIA / SEGURANÇA */}
        <GuaranteeSection />
      </main>
    </div>
  );
}


