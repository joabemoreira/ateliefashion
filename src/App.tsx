import ConfirmationSection from './components/ConfirmationSection.tsx';
import MainBenefitSection from './components/MainBenefitSection.tsx';
import MechanismSection from './components/MechanismSection.tsx';
import FeaturesSection from './components/FeaturesSection.tsx';
import UpdatesSection from './components/UpdatesSection.tsx';
import SpecialOfferSection from './components/SpecialOfferSection.tsx';
import WiapyUpsellCTA from './components/WiapyUpsellCTA.tsx';
import GuaranteeSection from './components/GuaranteeSection.tsx';

/**
 * PÁGINA EXTERNA DE UPSELL: ATELIÊ FASHION
 * 
 * Ordem lógica estrita:
 * CONFIRMAÇÃO & OFERTA (Primeira Dobra)
 * ↓
 * POR QUE VOCÊ VAI AMAR
 * ↓
 * DEMONSTRAÇÃO DO MECANISMO
 * ↓
 * CONTEÚDO (5 cards com fotos)
 * ↓
 * ATUALIZAÇÕES MENSAIS
 * ↓
 * TRANSIÇÃO & OFERTA/PREÇO
 * ↓
 * CTA PRINCIPAL (Wiapy)
 * ↓
 * GARANTIA E SEGURANÇA
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

      {/* Conteúdo principal formatado mobile-first e responsivo no desktop */}
      <main className="w-full max-w-2xl mx-auto px-3.5 sm:px-5 py-5 sm:py-8 flex flex-col">
        {/* 1. CONFIRMAÇÃO & PRIMEIRA DOBRA DA OFERTA */}
        <ConfirmationSection />

        {/* 2. POR QUE VOCÊ VAI AMAR */}
        <MainBenefitSection />

        {/* 3. DEMONSTRAÇÃO DO MECANISMO */}
        <MechanismSection />

        {/* 4. CONTEÚDO (5 CARDS) */}
        <FeaturesSection />

        {/* 5. ATUALIZAÇÕES MENSAIS */}
        <UpdatesSection />

        {/* 6. TRANSIÇÃO & BLOCO DA OFERTA */}
        <SpecialOfferSection />

        {/* 7. CTA PRINCIPAL & MECANISMO DE RECUSA DA WIAPY */}
        <WiapyUpsellCTA />

        {/* 8. GARANTIA & SEGURANÇA */}
        <GuaranteeSection />
      </main>
    </div>
  );
}



