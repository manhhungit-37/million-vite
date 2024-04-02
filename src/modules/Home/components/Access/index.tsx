import useOnScreen from "hooks/useOnScreen";
import { block } from "million/react";
import { useRef } from "react";
import classNames from "classnames";
import SearchIcon from "@icons/Home/Search";

const HomeAccess = block(() => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="w-full flex item-stretch max-w-[1256px] mx-auto px-6">
      <div className="relative">
        <div className="w-px h-full bg-orange-01 mx-1 tablet-max:mx-6" />
        <div className={classNames("absolute top-10 left-1/2 translate-x-[-50%] w-14 h-14 transition-all duration-1000 opacity-0 scale-50", {
          'opacity-100 !scale-100': isVisible,
        })}>
          <SearchIcon />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-y-12 px-6 pt-10 pb-14 tablet-max:mb-32">
        <h2
          className={classNames("w-full font-bold text-gray-00 tracking-[-0.02em] text-3xl tablet-max:text-5xl max-w-[600px] transition-all ease-in-out duration-1000 opacity-0 translate-x-[-10px] translate-y-[5px]", {
            'opacity-100 transform-none': isVisible
          })}
        >
          Easy access to all your {' '}
          <span className="bg-gradient-to-r from-yellow-01 via-orange-02 to-orange-02 text-transparent bg-clip-text">
            open source data
          </span>
        </h2>
        <div className={classNames("flex flex-col gap-8 tablet:gap-0 tablet:flex-row justify-between w-full transition-all ease-in-out duration-1000 opacity-0 translate-x-[10px] translate-y-[5px]", {
          'opacity-100 transform-none': isVisible
        })}>
          <div>
            <div className="text-xl font-semibold bg-gradient-to-r from-orange-02 to-yellow-01 text-transparent bg-clip-text mb-4">
              Streamlined Access
            </div>
            <div className="text-start font-light max-w-lg text-lg text-neutral-300">
              We distill your raw {' '}
              <span className="text-white font-semibold">
                GitHub events data
              </span>
              and give you straightforward access to your information so you can preserve your engineering resources for where they're needed most.
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold bg-gradient-to-r from-orange-02 to-yellow-01 text-transparent bg-clip-text mb-4">
              Actionable Intelligence
            </div>
            <div className="text-start font-light max-w-lg text-lg text-neutral-300">
              Our unique technology not only gathers, but also enriches your data, providing you with real insights that can guide decision making.
            </div>
          </div>
        </div>
        <div className={classNames("transition-all ease-in-out duration-1000 opacity-0 translate-x-[10px] translate-y-[5px]", {
          'opacity-100 transform-none': isVisible
        })}>
          <img src="/static/images/home-access.png" alt="Home Access" />
        </div>
      </div>
    </div>
  );
});

export default HomeAccess;