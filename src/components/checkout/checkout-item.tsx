import { useCartStore } from '../../store';
import { TCartItem } from '../../types';

export const CheckoutItem = ({ cartItem }: { cartItem: TCartItem }) => {


  return (
    <li
      key={cartItem.id}
      className="bg-Light_grayish_blue shadow-sm px-6 py-4 rounded-3xl flex items-center gap-4 xl:gap-12">
      <figure className="rounded-3xl bg-Grayish_blue w-28 xl:w-36">
        <img alt={cartItem.title} src={cartItem.image.thumb} className="w-full rounded-3xl" />
        <figcaption className="sr-only">product image</figcaption>
      </figure>

      <div className="flex flex-col gap-y-2 text-2xl xl:text-3xl">
        <h3 className=" text-Very_dark_blue capitalize ">{cartItem.title}</h3>
        <p className="flex items-center gap-2 text-lg capitalize text-Dark_grayish_blue xl:text-xl">
          <span>size: {cartItem.size}</span>
          <span className="text-slate-300">|</span>
        </p>
        <p className="flex items-center justify-between">
          <span>NPR{cartItem.price.toFixed(2)}</span>
          <span className="flex items-center font-bold bg-Pale_Primary text-Secondary px-2 py-1 rounded-md text-xl">
            {cartItem.discountPercentage * 100} %
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 ml-auto bg-white py-3 px-2 rounded-3xl">

        <span className="text-xl font-bold xl:text-2xl">{cartItem.qty}</span>

       
      </div>
    </li>
  );
};
