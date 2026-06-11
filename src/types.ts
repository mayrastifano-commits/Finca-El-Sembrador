export interface VeggieItem {
  id: string;
  name: string;
  category: 'verdura' | 'fruta' | 'tuberculo' | 'hierba_aromatica' | 'natural_finca';
  quantity: string;
  description: string;
  benefits: string;
  imageUrl: string;
}

export interface FarmFeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
