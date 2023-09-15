type TProductImage = { full: string | string[]; thumb: string; height: number | number; width: number | number };
export type TProductCategory = 'Potrait' | 'Landscape' | 'Abstract';
export type TProduct = {
  id: number;
  title: string;
  image: TProductImage;
  size: string;
  price: number;
  description: string;
  availableQty: number;
  discountedPrice: number;
  discountPercentage: number;
  category: TProductCategory;
  inStock: boolean;
};
