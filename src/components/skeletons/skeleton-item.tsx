export const SkeletonItem = () => {
  return (
    <li
      className="w-96 min-h-[33rem] grid items-start gap-16 bg-Light_grayish_blue p-8 rounded-3xl shadow-sm animate-pulse"
      aria-hidden>
      <figure className="w-52 h-52 justify-self-center bg-Grayish_blue rounded-full"></figure>  
    </li>
  );
};
