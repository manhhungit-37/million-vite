import SearchIcon from "@icons/Home/Search";
import classNames from "classnames";
import useOnScreen from "hooks/useOnScreen";
import { block } from "million/react";
import { useRef } from "react";

const DeepInsights = block(() => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="w-full flex items-stretch max-w-[1256px] mx-auto px-6">
      <div className="relative">
        <div className="w-px h-full bg-orange-01 mx-1 tablet-max:mx-6" />
        <div className={classNames("absolute top-10 left-1/2 translate-x-[-50%] w-14 h-14 transition-all duration-1000 opacity-0 scale-50", {
          'opacity-100 !scale-100': isVisible,
        })}>
          <SearchIcon />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-y-12 pt-10 px-6 pb-14 tablet-max:mb-32">
        <div className={classNames("max-w-[650px] transition-all ease-in-out duration-1000 opacity-0 translate-x-[-10px] translate-y-[5px]", {
          'opacity-100 transform-none': isVisible,
        })}>
          <div className="w-fit text-base px-3 py-1 text-orange-02 border border-orange-02 rounded-full mb-4">
            Insight Pages
          </div>
          <h2 className="w-full font-bold text-gray-00 tracking-[-0.02em] text-3xl tablet-max:text-5xl">
            <span className="bg-gradient-to-r from-yellow-01 via-orange-02 to-orange-02 text-transparent bg-clip-text">
              Deep Insights {' '}
            </span>
            into your entire open source ecosystem
          </h2>
        </div>
        <div className={classNames("text-start font-light max-w-2xl text-lg text-neutral-300 transition-all ease-in-out duration-1000 opacity-0 translate-x-[10px] translate-y-[5px]", {
          'opacity-100 transform-none': isVisible,
        })}>
          Gather information about internal and external GitHub repositories and organizations. Categorize, understand, and analyze different groups of contributors within open source projects.
        </div>
        <div className={classNames(" transition-all ease-in-out duration-1000 opacity-0 translate-x-[10px] translate-y-[5px]", {
          'opacity-100 transform-none': isVisible,
        })}>
          <img src="/static/images/deep-insights.png" alt="Deep Insights" />
        </div>
      </div>
    </div>
  );
});

export default DeepInsights;