import React from 'react';
import { FarmFeatureItem } from '../types';
import { ShieldCheck, Droplet, Route, Package } from 'lucide-react';

interface FarmFeatureProps {
  key?: string;
  feature: FarmFeatureItem;
}

export default function FarmFeature({ feature }: FarmFeatureProps) {
  // Función para obtener el componente Lucide correspondiente al string
  const getIconComponent = (iconName: string): React.ReactNode => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-teal-600" />;
      case 'Route':
        return <Route className="w-6 h-6 text-amber-600" />;
      case 'Package':
        return <Package className="w-6 h-6 text-lime-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div 
      id={`farm-feature-${feature.id}`}
      className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-emerald-100/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-4 items-start"
    >
      <div className="p-3 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
        {getIconComponent(feature.icon)}
      </div>
      
      <div className="space-y-1.5">
        <h5 className="font-serif font-bold text-gray-900 text-base">
          {feature.title}
        </h5>
        <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
