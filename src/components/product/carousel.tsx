import { useEffect, useRef, useState } from 'react';
import { useProductStore, useUIStore } from '../../store';
import { products } from '../../data/products';
import { TProduct } from '../../types';
export const ProductCarousel = ({id}:{id?: string, inLightbox: boolean}) => {
  const curImageIdx = useProductStore(state => state.curImageIdx);
 
  const [filteredProduct] = products.filter((item)=>item.id==parseInt(id as string));
  const [product, setProduct] = useState<TProduct>(filteredProduct)
  return (
    <div className="xl:max-w-2xl">
      <div className="relative group">
        <figure className="relative flex items-center xl:rounded-2xl overflow-hidden">
          {/* {(prodFullImgs as string[]).map((image, idx) => ( */}
            <img
              // key={idx}
              src={product.image.thumb as string}
              // ref={imageRef}
              alt="painting image"
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${curImageIdx * 100}%)` }}
            />
          {/* ))} */}
        </figure>
      </div>
    </div>
  );
};
