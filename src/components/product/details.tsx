import { useEffect, useState } from 'react';
import { useCartStore } from '../../store';

import { Button } from '../ui/button';
import { TCartItem, TProduct } from '../../types';
import { products } from '../../data/products';
// import { product } from '../../data/featured-product';
import { CartIcon } from '../icons';

export const ProductDetails = ({id}:{id?:string}) => {
  const [showMsg, setShowMsg] = useState(false);
  const cart = useCartStore(state => state.cart);
  const addCartItem = useCartStore(state => state.addCartItem);

  const [filteredProduct] = products.filter((item)=>item.id==parseInt(id as string));
  const [product, setProduct] = useState<TProduct>(filteredProduct)

  const itemInCart = cart.find(i => i.id === product.id);
  const qty = itemInCart ? itemInCart.qty : 1;
  const [itemQty, setItemQty] = useState(qty);

  useEffect(() => {
    if (!itemInCart) {
      setItemQty(1);
      setShowMsg(false);
    }

    console.log(product)
  }, [itemInCart]);

  const handleItemToCart = () => {
    if (itemQty === 0 || itemQty === itemInCart?.qty) {
      setShowMsg(false);
      return;
    }

    setShowMsg(true);
    const cartItem: TCartItem = {
      id: product.id,
      qty: itemQty,
      title: product.title,
      price: product.discountedPrice,
      image: { full: '', thumb: product.image.thumb },
      size: product.size,
      availableQty: product.availableQty,
      discountPercentage: product.discountPercentage,
    };
    addCartItem(cartItem);
  };

  return (
    <section className="m-8 mb-40 justify-self-start xl:max-w-3xl xl:m-0">
      <div className="grid gap-4 mb-16">
        <h3 className="text-xl text-Primary/80 tracking-wider font-bold uppercase">
          Chitrakala
        </h3>
        <h2 className="text-5xl text-Very_dark_blue font-bold capitalize mb-4">{product.title}</h2>
        <p className="text-[1.6rem] text-Dark_grayish_blue/80">{product.description}</p>
      </div>

      <div className="grid gap-8">
        <div className="flex items-center justify-between xl:flex-col xl:items-start xl:gap-8">
          <div className="flex items-center gap-8">
            <span className="text-4xl font-bold">NPR{product.discountedPrice.toFixed(2)}</span>
            <span className="font-bold bg-Pale_Primary text-Primary px-3 py-1 rounded-md text-2xl">
              {product.discountPercentage * 100}%
            </span>
          </div>
          <span className="text-2xl text-Grayish_blue font-bold line-through">
            NPR{product.price.toFixed(2)}
          </span>
        </div>
      </div>            
        <div className="xl:flex xl:items-center xl:gap-6 mt-12">
        <Button
          hasRipple
          title="add item to cart"
          variant={'cart_chk'}
          onClick={handleItemToCart}
          className="flex items-center justify-center gap-8 w-full shadow-xl shadow-Primary/30 xl:w-2/3">
          <CartIcon className="fill-Light_grayish_blue" />
          <span>add to cart</span>
        </Button>
        <p
            className={`absolute ml-96 mt-24 -translate-x-1/2 pt-4 text-2xl text-green-500 font-bold capitalize ${
              showMsg ? 'translate-y-10 opacity-100 visible' : 'opacity-0 invisible'
            } transition-all duration-[var(--duration)]`}>
           Added to cart
          </p>
          </div>
    </section>
  );
};
