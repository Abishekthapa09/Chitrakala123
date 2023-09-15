import { TProduct } from '../types/product.type';

import p1 from '../assets/Productimages/PA-1.jpg';
import p2 from '../assets/Productimages/PA-2.jpg';
import p3 from '../assets/Productimages/PA-3.jpg';
import p4 from '../assets/Productimages/PA-4.jpg';
import p5 from '../assets/Productimages/PA-5.jpg';
import p6 from '../assets/Productimages/PA-6.jpg';
import p7 from '../assets/Productimages/PA-7.jpg';
import p8 from '../assets/Productimages/PA-8.jpg';
import p9 from '../assets/Productimages/PA-9.jpg';
import p10 from '../assets/Productimages/PL-1.jpg';
import p11 from '../assets/Productimages/PL-2.jpg';
import p12 from '../assets/Productimages/PL-3.jpg';
import p13 from '../assets/Productimages/PL-4.jpg';
import p14 from '../assets/Productimages/PL-5.jpg';
import p15 from '../assets/Productimages/PL-6.jpg';
import p16 from '../assets/Productimages/PL-7.jpg';
import p17 from '../assets/Productimages/PP-1.jpg';
import p18 from '../assets/Productimages/PP-2.jpg';
import p19 from '../assets/Productimages/PP-3.jpg';
import p20 from '../assets/Productimages/PP-4.jpg';
import p21 from '../assets/Productimages/PP-5.jpg';
import p22 from '../assets/Productimages/PP-6.jpg';
export const products: TProduct[] = [
  {
    id: 1,
    title: 'Abstract Painting',
    image: {full:'',height:500, width:500, thumb: p1 },
    size: '10 x 16',
    price: 1200,
    description:
      'The beautiful painting and the abstract art.',
    availableQty: 1,
    discountPercentage: 0.1,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 1080,
  },
  {
    id: 2,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p2 },
    size: '10 X 16',
    price: 1200,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.1,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 1080,
  },
  {
    id: 3,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p3 },
    size: '8 x 14',
    price: 2000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.1,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 1800,
  },
  {
    id: 4,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p4 },
    size: '10 x 10',
    price: 4000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.1,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 3600,
  },
  {
    id: 5,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p5 },
    size: '8 x 12',
    price: 3000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.1,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 2700,
  },
  {
    id: 6,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p6 },
    size: '16 x 6',
    price: 6000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 5700,
  },
  {
    id: 7,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p7 },
    size: '12 x 12',
    price: 4000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 3800,
  },
  {
    id: 8,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p8 },
    size: '8 x 16',
    price: 5000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 4750,
  },
  {
    id: 9,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p9 },
    size: '8 x 12',
    price: 3000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Abstract',
    inStock: true,
    discountedPrice: 2850,
  },
  {
    id: 10,
    title: 'Abstract Painting',
    image: { full: '',height:500, width:500, thumb: p10 },
    size: '16 x 12',
    price: 25000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Landscape',
    inStock: true,
    discountedPrice: 23750,
  },
  {
    id: 11,
    title: 'Landscape Painting',
    image: { full: '',height:500, width:500, thumb: p11 },
    size: '24 x 12',
    price: 3000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Landscape',
    inStock: true,
    discountedPrice: 2850,
  },
  {
    id: 12,
    title: 'Landscape Painting',
    image: { full: '',height:500, width:500, thumb: p12},
    size: '16 x 16',
    price: 8000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Landscape',
    inStock: true,
    discountedPrice: 7600,
  },
  {
    id: 13,
    title: 'Landscape Painting',
    image: { full: '',height:500, width:500, thumb: p13 },
    size: '16 x 8',
    price: 3000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Landscape',
    inStock: true,
    discountedPrice: 2850,
  },
  {
    id: 14,
    title: 'Landscape Painting',
    image: { full: '',height:500, width:500, thumb: p14 },
    size: '16 x 8',
    price: 11000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Landscape',
    inStock: true,
    discountedPrice:10450,
  },
  {
    id: 15,
    title: 'Landscape Painting',
    image: { full: '',height:500, width:500, thumb: p15 },
    size: '16 x 8',
    price: 5000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Landscape',
    inStock: true,
    discountedPrice: 4750,
  },
  {
    id: 16,
    title: 'Landscape Painting',
    image: { full: '',height:500, width:500, thumb: p16 },
    size: '16 x 12',
    price: 15000,
    description:
      'The beautiful painting..',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Landscape',
    inStock: true,
    discountedPrice: 14250,
  },
  {
    id: 17,
    title: 'Potrait Painting',
    image: { full: '',height:500, width:500, thumb: p17 },
    size: '12 x 16',
    price: 3000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Potrait',
    inStock: true,
    discountedPrice: 2850,
  },
  {
    id: 18,
    title: 'Potrait Painting',
    image: { full: '',height:500, width:500, thumb: p18 },
    size: '12 x 16',
    price: 3000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Potrait',
    inStock: true,
    discountedPrice: 2850,
  },
  {
    id: 19,
    title: 'Potrait Painting',
    image: { full: '',height:500, width:500, thumb: p19 },
    size: '12 x 18',
    price: 6000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Potrait',
    inStock: true,
    discountedPrice: 5700,
  },
  {
    id: 20,
    title: 'Potrait Painting',
    image: { full: '',height:500, width:500, thumb: p20 },
    size: '8 x 12',
    price: 2000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Potrait',
    inStock: true,
    discountedPrice: 1900,
  },
  {
    id: 21,
    title: 'Potrait Painting',
    image: { full: '',height:500, width:500, thumb: p21 },
    size: '16 x 24',
    price: 36000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Potrait',
    inStock: true,
    discountedPrice: 342000,
  }, {
    id: 22,
    title: 'Potrait Painting',
    image: { full: '',height:500, width:500, thumb: p22 },
    size: ' 8 x 10',
    price: 2000,
    description:
      'The beautiful painting.',
    availableQty: 1,
    discountPercentage: 0.05,
    category: 'Potrait',
    inStock: true,
    discountedPrice: 1900,
  },
];