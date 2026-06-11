import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Sparkles, X, Compass } from 'lucide-react';

interface WelcomeModalProps {
  id?: string;
}

export default function WelcomeModal({ id = 'welcome-modal' }: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loadedAt, setLoadedAt] = useState<string>('');

  useEffect(() => {
    const handleLoad = () => {
      setLoadedAt(new Date().toLocaleTimeString());
      setIsOpen(true);
    };

    // Si el documento ya completo su carga
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id={id}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-950/40 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-xl border border-emerald-100 flex flex-col relative"
          >
            {/* Header decorativo */}
            <div className="bg-emerald-600 px-6 py-8 text-white relative flex flex-col items-center text-center">
              <div className="absolute top-3 right-3">
                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-full hover:bg-emerald-700/80 transition-colors text-white/90 cursor-pointer"
                  aria-label="Cerrar bienvenida"
                  id="welcome-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="w-16 h-16 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center mb-3 border border-white/40">
                <Leaf className="w-8 h-8 text-white animate-pulse" />
              </div>

              <h2 className="text-2xl font-serif font-bold tracking-tight">
                ¡Bienvenido a Finca El Sembrador!
              </h2>
              <p className="text-emerald-100 text-sm mt-1">
                Sabor de KM 0, cultivado con amor en nuestra tierra
              </p>
            </div>

            {/* Contenido */}
            <div className="p-6 md:p-8 flex-1">
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  Nos hace muy felices que nos visites. En <strong>Finca El Sembrador</strong> cosechamos verduras y frutas de temporada libres de pesticidas químicos e intermediarios, listas para ser entregadas directamente a tu hogar.
                </p>
                
                <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-xl flex items-start gap-3">
                  <div className="p-1 rounded bg-white text-emerald-700 shadow-sm mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800 text-xs uppercase tracking-wider">
                      Temporada de Primavera - Verano
                    </h4>
                    <p className="text-emerald-950 text-xs mt-0.5">
                      Esta semana incluimos aguacates Hass canarios, papas del país, lechugas frescas, tomates cherry y huevos de nuestras gallinas criadas al aire libre.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 italic flex items-center gap-1.5 justify-end">
                  <Compass className="w-3.5 h-3.5" /> Página cargada exitosamente a las {loadedAt}
                </p>
              </div>

              {/* Botón de acción */}
              <div className="mt-6 flex justify-end">
                <button
                  id="welcome-dismiss-btn"
                  onClick={closeModal}
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-all shadow-md shadow-emerald-700/10 hover:shadow-emerald-700/20 active:scale-98 cursor-pointer flex items-center gap-1.5"
                >
                  Continuar explorando
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
