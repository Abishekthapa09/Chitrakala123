export type TCartItem = {
  id: number;
  qty: number;
  title: string;
  price: number;
  image: { full: string; thumb: string };
  size: string;
  availableQty: number;
  discountPercentage: number;
};
