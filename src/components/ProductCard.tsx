import React, { useState } from 'react';
import { VeggieItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, ChevronRight, Check } from 'lucide-react';

interface ProductCardProps {
  key?: string;
  item: VeggieItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Selector de categoría en español para fines prácticos
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'verdura': return '🥬 Verdura Fresca';
      case 'fruta': return '🍊 Fruta Ecológica';
      case 'tuberculo': return '🥔 Tubérculo del País';
      case 'hierba_aromatica': return '🌿 Hierba Aromática';
      case 'natural_finca': return '🥚 Producto de Granja';
      default: return '🚜 Finca El Sembrador';
    }
  };

  return (
    <div 
      id={`product-card-${item.id}`}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group justify-between"
    >
      <div>
        {/* Imagen con Aspect Ratio controlado */}
        <div className="relative overflow-hidden aspect-video bg-gray-50">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2">
            <span className="text-[10px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-xs text-emerald-800 px-2.5 py-1 rounded-full shadow-xs">
              {getCategoryLabel(item.category)}
            </span>
          </div>
          <div className="absolute bottom-2 right-2">
            <span className="text-xs font-bold bg-emerald-600/90 backdrop-blur-xs text-white px-2 py-0.5 rounded-md shadow-xs">
              Uds: {item.quantity}
            </span>
          </div>
        </div>

        {/* Info Base */}
        <div className="p-5 space-y-2">
          <div className="flex justify-between items-start">
            <h5 className="font-serif font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
              {item.name}
            </h5>
          </div>
          
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Accordion / Detalles Expandibles para más interacción */}
      <div className="border-t border-gray-50 p-4">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden pb-4 text-xs text-gray-600 space-y-2.5"
            >
              <div className="bg-amber-50/50 border border-amber-100 p-3 rounded-lg space-y-1">
                <span className="font-bold text-amber-800 flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5" /> Beneficios del alimento:
                </span>
                <p className="leading-normal text-amber-950 font-normal">
                  {item.benefits}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cosechado bajo pedido (KM 0)</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          id={`product-card-btn-${item.id}`}
          className="w-full flex items-center justify-between text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-all py-1 cursor-pointer"
        >
          <span>{isExpanded ? 'Ocultar detalles cosecheros' : 'Ver beneficios y origen'}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-emerald-800' : 'text-emerald-600'}`} />
        </button>
      </div>
    </div>
  );
}
