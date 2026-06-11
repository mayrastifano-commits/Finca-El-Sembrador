import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sprout, 
  ArrowUp, 
  ShoppingBag, 
  Users, 
  MapPin, 
  Heart,
  FileCheck,
  Smartphone,
  Maximize2
} from 'lucide-react';

// Importar datos estáticos
import { VEGGIE_ITEMS, FARM_FEATURES } from './data';

// Importar componentes modulares
import WelcomeModal from './components/WelcomeModal';
import FarmFeature from './components/FarmFeature';
import ProductCard from './components/ProductCard';
import RegistrationForm from './components/RegistrationForm';

export default function App() {
  // --- ESTADOS PARA REQUISITOS GLOBALES ---

  // Evento 2 (Resize): Estado para detector de adaptación de pantalla
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  // Para rotar la paleta del fondo del título principal en cada resize
  const [resizeColorIndex, setResizeColorIndex] = useState(0);
  const [resizeDetected, setResizeDetected] = useState(false);

  // Paleta de degradados hermosos inspirados en la huerta orgánica para el título principal
  const titleColorPalettes = [
    {
      bgClass: "bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-300 text-emerald-950",
      label: "Albahaca Orgánica",
      badge: "border-emerald-200 bg-emerald-200/50 text-emerald-800"
    },
    {
      bgClass: "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300 text-amber-950",
      label: "Zanahoria Silvestre",
      badge: "border-amber-200 bg-amber-200/50 text-amber-800"
    },
    {
      bgClass: "bg-gradient-to-r from-lime-100 to-yellow-100 border-lime-300 text-lime-950",
      label: "Limón de la Finca",
      badge: "border-lime-200 bg-lime-200/50 text-lime-800"
    },
    {
      bgClass: "bg-gradient-to-r from-orange-100 to-rose-100 border-orange-300 text-orange-950",
      label: "Tomate de Huerta",
      badge: "border-orange-200 bg-orange-200/50 text-orange-850"
    },
    {
      bgClass: "bg-gradient-to-r from-teal-100 to-cyan-100 border-teal-300 text-teal-950",
      label: "Agua de Fogalera",
      badge: "border-teal-200 bg-teal-200/50 text-teal-850"
    }
  ];

  // Evento 3 (Scroll): Estado para visualización de "Volver arriba"
  const [showScrollTop, setShowScrollTop] = useState(false);

  // --- REGISTRO DE EVENTOS EN CICLOS DE VIDA DE WINDOW ---

  useEffect(() => {
    // 1. Manejador de Redimensionamiento (Event: resize)
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      // Rotar el índice cromático secuencialmente
      setResizeColorIndex((prevIndex) => (prevIndex + 1) % titleColorPalettes.length);
      // Indicar temporalmente que se capturó una adaptación activa
      setResizeDetected(true);
    };

    // 2. Manejador de Desplazamiento (Event: scroll)
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Subscripción a los eventos en la ventana global
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Timeout para limpiar la animación de resize detectado
    let timeoutId: NodeJS.Timeout;
    if (resizeDetected) {
      timeoutId = setTimeout(() => {
        setResizeDetected(false);
      }, 1500);
    }

    // Efecto de limpieza limpia los listeners al desmontarse
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [resizeDetected, titleColorPalettes.length]);

  // Función para desplazarse hacia arriba suavemente (Evento 3)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentPalette = titleColorPalettes[resizeColorIndex];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 selection:bg-emerald-100 selection:text-emerald-900 leading-normal antialiased pb-12">
      {/* 1. Modal de bienvenida (Fase 1: load/onload) */}
      <WelcomeModal id="welcome-modal-portal" />

      {/* Navegación Superior */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-600 text-white shadow-xs">
              <Sprout className="w-5 h-5" />
            </span>
            <div>
              <h1 className="font-serif font-bold text-lg text-emerald-900 tracking-tight">
                Finca El Sembrador
              </h1>
              <p className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
                Cultivo Ecológico Directo
              </p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#como-cultivamos" className="hover:text-emerald-700 transition-colors">¿Cómo cultivamos?</a>
            <a href="#productos-temporada" className="hover:text-emerald-700 transition-colors font-semibold text-emerald-800">Caja de Temporada</a>
            <a href="#beneficios" className="hover:text-emerald-700 transition-colors">Valor Proximidad (Km 0)</a>
          </nav>

          <div>
            <a 
              href="#booking-form-section" 
              className="px-4.5 py-2 rounded-lg bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-100 hover:bg-emerald-100 hover:text-emerald-900 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Reserva ya</span>
            </a>
          </div>
        </div>
      </header>

      {/* Sección Hero con el Título Principal interactivo */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-12 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-semibold border border-amber-200/60 shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
            <span>Sostenibilidad local y nutrición consciente</span>
          </div>

          {/* Evento 2 (Resize): Título Principal reactivo al cambio de tamaño */}
          <div 
            id="main-title-container"
            className={`p-6 md:p-10 rounded-3xl border transition-all duration-700 shadow-md ${currentPalette.bgClass}`}
          >
            <h2 
              id="main-title" 
              className="text-3xl md:text-5xl font-serif font-black tracking-tight leading-none text-emerald-950"
            >
              Cajas de Verduras Ecológicas Directamente a tu Hogar
            </h2>
            
            <p className="mt-4 text-sm md:text-base leading-relaxed opacity-95 max-w-2xl font-normal text-emerald-900">
              Finca El Sembrador es un proyecto de agricultura familiar de proximidad. Cosechamos y empacamos alimentos de temporada en el momento perfecto de maduración, garantizando sabor tradicional sin abonos químicos.
            </p>
          </div>
        </div>

        {/* Imagen del Hero con copyright-free de Unsplash */}
        <div className="lg:col-span-5 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -left-4 -top-4 w-12 h-12 border-t-4 border-l-4 border-amber-400 rounded-tl-2xl" />
          <div className="absolute -right-4 -bottom-4 w-12 h-12 border-b-4 border-r-4 border-emerald-600 rounded-br-2xl" />
          
          <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/60">
            <img 
              id="hero-img"
              src="/src/assets/images/farmer_with_veggie_crate_1781173686728.png" 
              alt="Agricultor local de Finca El Sembrador con una cesta de verduras y frutas frescas"
              referrerPolicy="no-referrer"
              className="w-full object-cover aspect-5/4 hover:scale-102 transition-transform duration-500"
            />
          </div>
          
          {/* Banner indicador de Calidad */}
          <div className="absolute -bottom-4 left-6 right-6 bg-white rounded-xl p-3 border border-emerald-50 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-800 rounded-lg flex items-center justify-center shrink-0">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-950">Garantía KM Cero (0)</h4>
              <p className="text-[10px] text-gray-500">Del bancal a tu despensa en menos de 10 horas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 1: ¿Cómo cultivamos? (Nuestros métodos) */}
      <section id="como-cultivamos" className="bg-white border-y border-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-emerald-700 font-mono text-xs uppercase font-bold tracking-widest">Nuestra Filosofía</h3>
            <h4 className="text-2xl md:text-4xl font-serif font-black text-gray-900 tracking-tight">
              ¿Cómo cultivamos en la Finca?
            </h4>
            <p className="text-gray-500 text-xs md:text-sm">
              Sembramos respeto para cosechar vitalidad ecológica libre de pesticidas sintéticos o transporte pesado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FARM_FEATURES.map((feature) => (
              <FarmFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección 2: Productos que incluye la caja de esta semana */}
      <section id="productos-temporada" className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-emerald-700 font-mono text-xs uppercase font-bold tracking-widest">Contenido de la Caja</h3>
          <h4 className="text-2xl md:text-4xl font-serif font-black text-gray-900 tracking-tight">
            Nuestros Productos esta Temporada
          </h4>
          <p className="text-gray-500 text-xs md:text-sm">
            Haga clic en el botón inferior de cada producto para expandir sus beneficios nutricionales y el método local de recolección.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {VEGGIE_ITEMS.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Sección 3: Beneficios del consumo de proximidad (KM 0) */}
      <section id="beneficios" className="bg-emerald-950 text-white py-16 px-4 md:px-8 relative overflow-hidden">
        {/* Adornos circulares de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-800/10 rounded-full blur-2xl" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center relative">
          
          <div className="md:col-span-7 space-y-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300">Impacto Positivo</h4>
            <h3 className="text-2xl md:text-4xl font-serif font-bold tracking-tight">
              Los beneficios reales de preferir Alimentos de Proximidad (KM 0)
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="p-1 rounded-full bg-emerald-800 text-emerald-300 h-fit shrink-0 mt-1">
                  <span className="w-5 h-5 flex items-center justify-center font-bold text-xs">1</span>
                </div>
                <div>
                  <h5 className="font-serif font-bold text-base text-gray-100">Máxima Concentración Nutricional</h5>
                  <p className="text-emerald-100/80 text-xs md:text-sm mt-1 leading-relaxed">
                    Las verduras que viajan distancias intercontinentales se recolectan verdes y maduran artificialmente en cámaras con gas. Las nuestras maduran en el suelo y contienen hasta un 40% más de vitaminas activas al momento de tu consumo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-1 rounded-full bg-emerald-800 text-emerald-300 h-fit shrink-0 mt-1">
                  <span className="w-5 h-5 flex items-center justify-center font-bold text-xs">2</span>
                </div>
                <div>
                  <h5 className="font-serif font-bold text-base text-gray-100">Reducción Drástica de la Huella de Carbono</h5>
                  <p className="text-emerald-100/80 text-xs md:text-sm mt-1 leading-relaxed">
                    Un plato de ensalada convencional recorre de media más de 2500 km en barcos refrigerados y aviones compartimentados. Al comprar a Finca El Sembrador, reduces las emisiones de CO₂ del transporte a prácticamente cero.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-1 rounded-full bg-emerald-800 text-emerald-300 h-fit shrink-0 mt-1">
                  <span className="w-5 h-5 flex items-center justify-center font-bold text-xs">3</span>
                </div>
                <div>
                  <h5 className="font-serif font-bold text-base text-gray-100">Sostener la Economía Agrícola Rural</h5>
                  <p className="text-emerald-100/80 text-xs md:text-sm mt-1 leading-relaxed">
                    Tus compras sustentan directamente el sueldo digno de operarios locales que aman y cuidan los campos de nuestra comarca, manteniendo vivas las tradiciones rurales de nuestro territorio.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-emerald-900/60 backdrop-blur-xs border border-emerald-800 p-8 rounded-2xl text-center space-y-6">
            <div className="inline-flex p-4 rounded-full bg-emerald-800 text-amber-400">
              <Users className="w-8 h-8" />
            </div>
            
            <div className="space-y-1.5">
              <h4 className="text-xl font-serif font-bold text-gray-100">Únete a la Cosecha</h4>
              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Más de 140 familias de nuestra comarca ya consumen de forma consciente y reciben verduras sanas todas las semanas.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#booking-form-section"
                className="w-full block py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-emerald-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md active:scale-98"
              >
                UNIRME HOY MISMO
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Sección 4: Formulario de Registro (Fase 2) */}
      <RegistrationForm id="booking-form-section" />

      {/* Footer del Sitio */}
      <footer className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-12 border-t border-gray-200 text-center space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-gray-800">Finca El Sembrador S.L.</span>
            <span>- Cosecha Orgánica Local</span>
          </div>
          <div className="flex items-center gap-1">
            <FileCheck className="w-4 h-4 text-emerald-600" />
            <span>Práctica Integrada - Integración de Componentes Escolares</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>

      {/* Evento 3 (Scroll): Botón "Volver arriba" flotante */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            id="btn-scroll-top"
            aria-label="Volver arriba"
            className="fixed bottom-6 right-6 z-50 p-3 md:p-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/30 border border-emerald-600 cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
          >
            <ArrowUp className="w-4.5 h-4.5 animate-bounce" />
            <span className="hidden md:inline">Volver arriba</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
