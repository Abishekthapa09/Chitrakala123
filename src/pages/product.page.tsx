import { useUIStore } from '../store';
import { ProductCarousel } from '../components/product/carousel';
import { ProductDetails } from '../components/product/details';
import { Lightbox } from '../components/product/lightbox';
import { useParams } from 'react-router-dom';

export const Product = () => {
  const lightboxIsOpen = useUIStore(state => state.lightboxIsOpen);
  const {id:productId} = useParams();
  console.log(productId);

  return (
    <section className="xl:grid grid-cols-2 justify-items-center xl:my-40">
      <ProductCarousel id={productId} inLightbox={false} />
      <ProductDetails id={productId} />
      {lightboxIsOpen && <Lightbox />}
    </section>
  );
};
