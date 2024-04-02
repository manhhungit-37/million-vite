import classNames from "classnames";
import useOnScreen from "hooks/useOnScreen";
import { block } from "million/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HomeBlog = block(() => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '0px');

  return (
    <div ref={ref} className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center text-center pb-[120px] tablet-max:pb-[320px]">
      <h2 className="w-full font-bold text-gray-00 tracking-[-0.02em] text-3xl tablet-max:text-5xl mb-20">
        <span className="bg-gradient-to-r from-orange-02 to-yellow-01 text-transparent bg-clip-text">Supercharge </span>
        your open source knowledge
      </h2>
      <Link to="mailto:manhhungit.37@gmail.com">
        <div className="p-[1px] bg-gradient-to-br from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-md hover:[&>button]:bg-orange-00">
          <button className="font-bold text-sm leading-1 text-gray-01 rounded-md border-none px-10 py-[10px]">
            Contact Sales
          </button>
        </div>
      </Link>
      <div className={classNames("transition-all ease-in-out duration-1000 opacity-0 translate-y-[100px]", {
        'opacity-100 transform-none': isVisible,
      })}>
        <div className="w-full text-gray-00 font-bold text-xs opacity-70 uppercase mb-4 leading-normal tracking-normal mt-[215px]">
          Our secret sauce
        </div>
        <div className="w-full font-bold text-gray-00 tracking-[-0.02em] text-3xl tablet-max:text-6xl tablet-max:tracking-[-0.03em]">
          <span className="bg-gradient-to-r from-yellow-01 via-orange-02 to-orange-02 text-transparent bg-clip-text">OpenSauced </span>
          Blog
        </div>
        <div className="w-full max-w-3xl mt-4 mb-14 text-gray-00 font-normal opacity-70 text-base leading-normal tracking-normal tablet-max:text-2xl tablet-max:mt-10 tablet-max:mb-24">
          Musings on the open-source community, engineering, and the future of talent acquisition.
        </div>
        <div className="grid grid-cols-1 gap-10 mb-12 tablet-max:grid-cols-2 tablet-max:mb-24">
          <div>
            <div className="p-[1px] bg-gradient-to-tr from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-[5px]">
              <Link to="https://opensauced.pizza/blog/scaling-oss-projects">
                <img src="/static/images/home-blog-challenges.png" alt="Home Blog Challenges" className="rounded-[5px]" />
              </Link>
            </div>
            <div className="font-bold text-gray-00 text-base tracking-[-0.02em] text-center pb-1 pt-4 tablet-max:text-xl tablet-max:tracking-[-0.03em] tablet-max:pt-6">
              Navigating the Challenges of Scaling Open Source Projects
            </div>
          </div>
          <div>
            <div className="p-[1px] bg-gradient-to-tr from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-[5px]">
              <Link to="https://opensauced.pizza/blog/ai-secret-sauce-traction-in-open-source">
                <img src="/static/images/home-blog-ai.png" alt="Home Blog Ai" className="rounded-[5px]" />
              </Link>
            </div>
            <div className="font-bold text-gray-00 text-base tracking-[-0.02em] text-center pb-1 pt-4 tablet-max:text-xl tablet-max:tracking-[-0.03em] tablet-max:pt-6">
              AI Secret Sauce: Traction In Open Source
            </div>
          </div>
          <div>
            <div className="p-[1px] bg-gradient-to-tr from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-[5px]">
              <Link
                to="https://opensauced.pizza/blog/stop-burning-out-maintainers:-an-empathetic-guide-for-contributors"
              >
                <img src="/static/images/home-blog-burning.png" alt="Home Blog Burning" className="rounded-[5px]" />
              </Link>
            </div>
            <div className="font-bold text-gray-00 text-base tracking-[-0.02em] text-center pb-1 pt-4 tablet-max:text-xl tablet-max:tracking-[-0.03em] tablet-max:pt-6">
              Stop Burning Out Maintainers: An Empathetic Guide for Contributors
            </div>
            <div className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
              #contributors
            </div>
          </div>
          <div>
            <div className="p-[1px] bg-gradient-to-tr from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-[5px]">
              <Link
                to="https://opensauced.pizza/blog/resume-driven-contributions"
              >
                <img src="/static/images/home-blog-driven.png" alt="Home Blog Driven" className="rounded-[5px]" />
              </Link>
            </div>
            <div className="font-bold text-gray-00 text-base tracking-[-0.02em] text-center pb-1 pt-4 tablet-max:text-xl tablet-max:tracking-[-0.03em] tablet-max:pt-6">
              Resume Driven Contributions
            </div>
            <div className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
              #career
            </div>
          </div>
        </div>
        <Link to="/blog">
          <div className="w-fit mx-auto p-[1px] bg-gradient-to-br from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-md hover:[&>button]:bg-orange-00">
            <button className="font-bold text-sm leading-1 text-gray-01 rounded-md border-none px-10 py-[10px]">
              Load More
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
});

export default HomeBlog;