import { Button } from '../ui/button';


export const NewsletterSection = () => {
  return (
    <section className="bg-Overlay justify-items-center ">
      <div className="grid xl:grid-cols items-center justify-items-center">
      <div className="text-Primary mx-8 py-20">
          <h2 className="text-3xl text-center capitalize">signup for our newsletter</h2>
          <div className="flex justify-between items-center mt-16">
            <label htmlFor="newsletter" className="peer">
              <input
                type="text"
                id="newsletter"
                placeholder="Enter your email"
                className="bg-Light_grayish_blue text-2xl text-Dark_grayish_blue rounded-tl-xl rounded-bl-xl py-4 px-12 flex-1 outline-none placeholder:text-Grayish_blue placeholder:text-2xl focus-visible:outline focus-visible:outline-offset-0 focus-visible:outline-1 focus-visible:outline-Primary"
              />
            </label>
            <Button
              hasRipple
              variant={'input_btn'}
              className=" hover:scale-y-105">
              Signup
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
