import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { WIAPY_CHECKOUT_URL, WIAPY_REFUSAL_URL } from '../config/wiapyConfig.ts';

declare global {
  interface Window {
    initWiapyUpsell?: (options: {
      linkUrl: string;
      linkText: string;
      styles?: {
        backgroundColor?: string;
        hoverBackgroundColor?: string;
        fontSize?: string;
        borderRadius?: string;
      };
      refusalLinkUrl: string;
      refusalLinkText: string;
      refusalLinkColor?: string;
    }) => void;
  }
}

/**
 * SEÇÃO 6 — CTA PRINCIPAL & SEÇÃO 7 — RECUSA
 * 
 * Utiliza exclusivamente a integração oficial da Wiapy.
 * O container <div id="wiapy_upsell"></div> é mantido sem nós filhos do React Virtual DOM
 * para evitar conflitos com a manipulação direta do DOM feita pelo script da Wiapy.
 */
export default function WiapyUpsellCTA() {
  const initializedRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;

    const setupWiapy = () => {
      if (initializedRef.current) return true;

      const container = document.getElementById('wiapy_upsell');
      if (!container) return false;

      if (typeof window !== 'undefined' && typeof window.initWiapyUpsell === 'function') {
        initializedRef.current = true;
        try {
          window.initWiapyUpsell({
            linkUrl: WIAPY_CHECKOUT_URL,
            linkText: "SIM, EU ACEITO ESSA OFERTA",
            styles: {
              backgroundColor: "#00d769",
              hoverBackgroundColor: "#00b85a",
              fontSize: "18px",
              borderRadius: "14px"
            },
            refusalLinkUrl: WIAPY_REFUSAL_URL,
            refusalLinkText: "Não, obrigada. Quero continuar apenas com meu pedido atual.",
            refusalLinkColor: "#6b7280"
          });
        } catch (err) {
          console.warn("[Wiapy] Erro durante a inicialização:", err);
        }
        return true;
      }
      return false;
    };

    // Tenta inicializar imediatamente
    if (!setupWiapy()) {
      interval = setInterval(() => {
        if (setupWiapy()) {
          if (interval) clearInterval(interval);
        }
      }, 150);

      // Caso o script externo demore ou falhe na rede, insere o fallback seguro via DOM direto (sem React VDOM)
      timer = setTimeout(() => {
        if (interval) clearInterval(interval);
        const container = document.getElementById('wiapy_upsell');
        if (container && !initializedRef.current && container.children.length === 0) {
          container.innerHTML = `
            <a 
              href="${WIAPY_CHECKOUT_URL}" 
              style="background-color: #00d769; display: block; width: 100%; text-align: center; color: #ffffff; font-size: 18px; font-weight: 800; padding: 16px 24px; border-radius: 14px; text-decoration: none; box-shadow: 0 4px 14px rgba(0,0,0,0.1); cursor: pointer;"
            >
              SIM, EU ACEITO ESSA OFERTA
            </a>
            <a 
              href="${WIAPY_REFUSAL_URL}" 
              style="display: block; margin-top: 14px; font-size: 13px; color: #6b7280; text-align: center; text-decoration: none;"
            >
              Não, obrigada. Quero continuar apenas com meu pedido atual.
            </a>
          `;
        }
      }, 2500);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      id="secao-cta-upsell" 
      className="w-full text-center py-7 px-4 sm:px-6 mb-6 rounded-2xl bg-gradient-to-b from-white via-rose-50/40 to-white border-2 border-rose-200/90 shadow-[0_8px_30px_rgb(244,114,182,0.18)] relative overflow-hidden"
    >
      <div className="max-w-md mx-auto">
        {/* Container ÚNICO oficial da Wiapy mantido limpo para manipulação do script */}
        <div 
          id="wiapy_upsell" 
          className="w-full min-h-[90px] flex flex-col items-center justify-center"
        />
      </div>
    </section>
  );
}

