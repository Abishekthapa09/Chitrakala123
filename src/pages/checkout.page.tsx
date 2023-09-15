import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store';

import { Button } from '../components/ui/button';
import { ActionModal } from '../components/ui/action-modal';
import { NavigateBackIcon, DeleteIcon } from '../components/icons';
import { PromoCodeInput } from '../components/checkout/promo-code';
import { CheckoutList } from '../components/checkout/checkout-list';
import { CheckoutTotal } from '../components/checkout/checkout-total';


export const Checkout = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const cart = useCartStore(state => state.cart);
  const clearCart = useCartStore(state => state.clearCart);
  const showWarning = useCartStore(state => state.showWarning);
  const setCartWarning = useCartStore(state => state.setCartWarning);

  useEffect(() => {
    if (showWarning) setModal(true);
  }, [showWarning]);

  if (cart.length === 0)
    return (
      <section className="my-16">
        <h2 className="text-3xl text-Dark_grayish_blue text-center font-bold xl:text-5xl xl:pb-16">
          Your cart is empty ! <br /> start shopping
        </h2>
      </section>
    );

  return (
    <>
      <ActionModal
        state={modal}
        variants={'clear_cart'}
        onConfirm={() => clearCart()}
        onCancel={() => {
          setModal(false);
          setCartWarning(false);
        }}
      />

      <section className="my-16 mx-8">
        <div className="relative">
          <Button
            title="previous page"
            onClick={() => navigate(-1)}
            className="absolute top-1/2 -translate-y-1/2 left-0"
            variant={'navigation'}>
            <NavigateBackIcon />
          </Button>

          <h2 className="text-4xl text-Very_dark_blue text-center font-bold mb-8">My Cart</h2>

          <Button
            title="clear cart"
            onClick={() => setModal(true)}
            className="group absolute top-1/2 -translate-y-1/2 right-0 bg-Grayish_blue/50 w-16 h-16 flex items-center justify-center rounded-lg ">
            <DeleteIcon className="fill-Very_dark_blue group-hover:fill-Primary group-focus-visible:fill-Primary" />
          </Button>
        </div>
        <div className="xl:mt-28 xl:mx-20 xl:grid xl:grid-cols ">
          <div>
            <CheckoutList />
            <PromoCodeInput />
            <CheckoutTotal />
          </div>
        </div>
      </section>
    </>
  );
};
