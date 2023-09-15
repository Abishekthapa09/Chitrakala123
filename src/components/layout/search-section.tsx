import { Button } from '../ui/button';

export const SearchSection = () => {
  return (
    <section className="">
      <div className="flex items-center justify-center mx-auto gap-4 xl:gap-8 xl:max-w-4xl">
        <label className=" flex items-center cursor-pointer" htmlFor="search">
          <input
            id="search"
            type="text"
            placeholder="Type here"
            className="rounded-xl px-4 py-2 bg-Light_grayish_blue caret-Primary text-Dark_grayish_blue text-xl placeholder:text-xl focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-Dark_grayish_blue focus-visible:outline-offset-0 xl:py-4 xl:px-12 xl:text-xl xl:placeholder:text-xl"
          />
        </label>

        <Button
          hasRipple
          className="overflow-hidden px-3 py-2 tracking-wider rounded-xl focus-visible:ring-2 focus-visible:ring-Light_grayish_blue bg-Primary text-xl xl:text-2xl xl:py-3 xl:px-5">
          Search
        </Button>
      </div>
    </section>
  );
};
