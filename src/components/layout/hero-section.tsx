import heroImg from '../../images/Banner.png';
import { Button } from '../ui/button';

export const HeroSection = () => {
  return (
    <>
    <div>
      <figure className=" max-sm:hidden">
        <img
          className='block h-[550px] w-full'
          src={heroImg}
          alt="hero image"   
        />
         {/* <Button hasRipple variant={'hero_main'} className=' absolute top-3/4 ml-36 bg-Primary'>
              start shopping
            </Button> */}
      </figure>
      </div>
    </>
  );
};
