import { useUserStore } from '../../store';

import { Button } from '../ui/button';
import { FavorIcon } from '../icons/favorite';
import { TProduct } from '../../types/product.type';
import { SkeletonItem } from '../skeletons/skeleton-item';
import { useImageLoader } from '../../hooks/use-image-loader';
import { Link, useParams } from 'react-router-dom';

export const CategoryItem = ({ item }: { item: TProduct }) => {
  const favoriteList = useUserStore(state => state.favoriteList);
  const toggleItemFavorite = useUserStore(state => state.toggleItemFavorite);

  const itemImage = item.image.thumb as string;
  const { isLoading, imageRef } = useImageLoader(itemImage);

  const favoredItem = favoriteList.find(i => i.id === item.id);
  const itemIsFavored = favoredItem ? true : false;

  const handleFavoriteBtn = () => toggleItemFavorite({ ...item });
  

  if (isLoading) return <SkeletonItem />;

  return (
   
    <li className="relative w-96 min-h-[33rem] flex flex-col justify-between gap-4 bg-Light_grayish_blue p-8 rounded-3xl shadow-sm">
      <figure className="relative w-full min-h-[17rem] flex-center  ">
      <Link to={`product/${item.id}`} className=''>
        <img ref={imageRef} src={itemImage} alt={item.title} height={180} width={150}/>
        <figcaption className="sr-only">product image in the category section</figcaption>
        </Link>
      </figure>
      <div className="capitalize space-y-4 text-center">
        <h3 className="text-Dark_grayish_blue text-2xl">{item.title}</h3>
        <p className="text-xl text-Grayish_blue">{item.category} Painting</p>
        <p className="flex items-center justify-between text-Dark_grayish_blue text-2xl font-bold">
          <span className="">NPR {item.price}</span>
          <Button hasRipple onClick={handleFavoriteBtn}>
            <span className="sr-only">like this painting</span>
            <FavorIcon fill={itemIsFavored} />
          </Button>
        </p>
      </div>
    </li>
    
    
  );
};
