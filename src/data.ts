import { VeggieItem, FarmFeatureItem } from './types';

export const VEGGIE_ITEMS: VeggieItem[] = [
  {
    id: 'veggie-tomato',
    name: 'Tomates Cherry Rama',
    category: 'verdura',
    quantity: '500g',
    description: 'Tomates cherry dulces cosechados maduros en la rama. Sabor intenso tradicional, perfectos para ensaladas o consumo directo.',
    benefits: 'Alto contenido en licopeno, antioxidantes naturales y vitamina C para fortalecer las defensas.',
    imageUrl: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'veggie-avocado',
    name: 'Aguacates Hass Canarios',
    category: 'fruta',
    quantity: '4 unidades',
    description: 'Aguacates supercremosos madurados al sol de nuestra ladera. De textura mantecosa y sabor suave y almendrado.',
    benefits: 'Fuente excelente de grasas monoinsaturadas saludables para el corazón y potasio.',
    imageUrl: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'veggie-potatoes',
    name: 'Papas Nuevas del País',
    category: 'tuberculo',
    quantity: '1.5 kg',
    description: 'Papas recién desenterradas con piel fina. Perfectas para hervir, arrugar o asar, con toda la riqueza del suelo local.',
    benefits: 'Aportan carbohidratos complejos de absorción lenta y alto contenido en vitamina B6.',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'veggie-bananas',
    name: 'Plátanos Plateros Ecológicos',
    category: 'fruta',
    quantity: '1 kg (aprox. 6-8 pcs)',
    description: 'Plátanos de la variedad tradicional cultivados bajo el viento cálido de la campiña. Dulces, aromáticos y con la manchita característica.',
    benefits: 'Combustible energético natural rico en magnesio, fibra dietética y potasio libre de químicos.',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'veggie-eggs',
    name: 'Huevos de Campiña',
    category: 'natural_finca',
    quantity: '1 docena',
    description: 'Huevos de gallinas felices que pastan libres entre herbazales. Yema súper intensa y consistencia perfecta para repostería o tortilla.',
    benefits: 'Proteínas de altísimo valor biológico, colina para la salud cognitiva y vitamina D.',
    imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'veggie-lettuce',
    name: 'Lechuga de Hoja de Roble',
    category: 'verdura',
    quantity: '2 piezas',
    description: 'Lechugas frescas cosechadas al amanecer de los bancales orientados al nordeste. De hojas rizadas y tiernas de color vino y verde.',
    benefits: 'Extremadamente hidratante, baja en calorías y rica en agua de galería pura de montaña.',
    imageUrl: 'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'veggie-herbs',
    name: 'Ramo de Hierbas Aromáticas',
    category: 'hierba_aromatica',
    quantity: '1 ramo variado',
    description: 'Selección de cilantro silvestre, salvia de monte, perejil y hierbabuena fresca recién atados con cordel natural de yute.',
    benefits: 'Aportan potentes fitonutrientes digestivos y aceites esenciales de aromaterapia natural.',
    imageUrl: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=600'
  }
];

export const FARM_FEATURES: FarmFeatureItem[] = [
  {
    id: 'feature-pesticides',
    title: 'Cultivo 100% Orgánico',
    description: 'No utilizamos pesticidas de tipo sintético, plaguicidas agresivos ni fertilizantes químicos artificiales. En su lugar, nutrimos la tierra mediante rotación de cultivos, compostaje artesanal y purines de ortiga.',
    icon: 'ShieldCheck'
  },
  {
    id: 'feature-water',
    title: 'Gota a Gota y Sostenibilidad',
    description: 'Maximizamos la eficiencia hídrica con un sistema de riego localizado, alimentado por depósitos que recogen el agua de lluvia y la neblina canaria, optimizando cada gota para conservar nuestros acuíferos.',
    icon: 'Droplet'
  },
  {
    id: 'feature-local',
    title: 'Cero Intermediarios (Consumo de Proximidad)',
    description: 'Al saltarse los distribuidores y transportistas mayoristas, los alimentos viajan menos de 15 km desde el surco hasta tu mesa. Esto asegura frescura insuperable, disminuye la huella de carbono y respeta los precios justos para el campo.',
    icon: 'Route'
  },
  {
    id: 'feature-packaging',
    title: 'Empaque Biodegradable',
    description: 'Entregamos nuestras verduras en cajas de cartón corrugado reciclado y atamos los ramos con fibras vegetales de cáñamo o yute. Cero plásticos de un solo uso en todo el trayecto de reparto.',
    icon: 'Package'
  }
];
