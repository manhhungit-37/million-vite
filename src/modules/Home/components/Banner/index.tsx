import BallIcon from "@icons/Ball";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <div>
      <div className="w-[230px] h-[694px] absolute hidden tablet-max:block tablet-max:top-[12rem] tablet-max:left-0 z-[-1]">
        <img src="/static/icons/banner-left.svg" alt="Banner Left" />
      </div>
      <div className="w-[303px] h-[620px] absolute hidden tablet-max:block tablet-max:top-[9rem] tablet-max:right-0 z-[-1]">
        <img src="/static/icons/banner-right.svg" alt="Banner Right" />
      </div>
      <div className="w-[181px] h-[43px] absolute top-0 right-0  tablet-max:hidden z-[-1]">
        <img src="/static/icons/banner-top.svg" alt="Banner Top" />
      </div>
      <div className="w-full max-w-[1256px] px-6 mx-auto h-fit pt-[60px] tablet-max:pt-[115px]">
        <div className="w-full flex justify-center items-stretch">
          <div className="flex relative">
            <div className="w-px bg-orange-01 mx-1 shrink-0 tablet-max:mx-6" />
            <div className="absolute w-10 h-10 top-[-20px] left-1/2 translate-x-[-50%]">
              <BallIcon />
            </div>
          </div>
          <div className="flex flex-col items-center gap-x-6 gap-y-10 mx-6 tablet-max:flex-row"> 
            <div>
              <div className="w-full text-textPrimary font-bold text-xs opacity-70 uppercase mb-4 leading-normal tracking-normal">
                Teams
              </div>
              <div className="w-full font-bold text-textPrimary tracking-[-0.02em] text-3xl tablet-max:text-6xl tablet-max:tracking-[-0.03em]">
                Transform Your {' '}
                <span className="bg-gradient-to-r from-yellow-01 via-orange-02 to-orange-02 text-transparent bg-clip-text">
                  Open Source Strategy
                </span>
              </div>
              <div className="w-full text-textPrimary text-sm opacity-70 tablet-max:text-base leading-normal tracking-normal py-10">
                Access insights to validate and share the value and impact of open source to your organization.
              </div>
              <div className="flex flex-col items-start gap-4 tablet-max:flex-row tablet-max:items-center">
                <div className="p-[1px] bg-gradient-to-br from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-md hover:[&>button]:bg-orange-00">
                  <button className="font-bold text-sm leading-1 text-gray-01 rounded-md border-none px-10 py-[10px]">
                    Get Started
                  </button>
                </div>
                <button className="border border-gray-02 bg-black-01 font-bold text-sm leading-1 text-gray-01 rounded-md border-none px-10 py-[10px] hover:bg-gray-03 hover:text-black-01">
                  Contact Sales
                </button>
              </div>
            </div>
            <div>
              <img src="/static/images/banner.png" alt="Banner" className="relative scale-100 scl -right-4 tablet-max:scale-125"  />
            </div>
          </div>
        </div>
        <div className="w-full flex items-stretch">
          <div className="w-px h-auto bg-orange-01 mx-1 tablet-max:mx-6" />
          <div className="w-full mx-6">
            <div className="w-full text-gray-00 font-bold text-xs opacity-70 uppercase mt-10 mb-8 leading-normal tracking-normal">
              TRUSTED BY
            </div>
            <div className="w-full px-6 pb-40 grid grid-cols-3 gap-x-10 gap-y-8 justify-center items-center content-center tablet-max:mt-0 tablet-max:grid-cols-6 tablet-max:px-0">
              <Link to="https://www.digitalocean.com/">
                <img src="/static/icons/digital-ocean.svg" alt="Digital Ocean" />
              </Link>
              <Link to="https://supabase.com/">
                <img src="/static/icons/supabase.svg" alt="Supabase" />
              </Link>
              <Link to="https://questdb.io/">
                <img src="/static/icons/quest-db.svg" alt="QuestDB" />
              </Link>
              <Link to="https://www.techstars.com/">
                <img src="/static/icons/tech-stars.svg" alt="TechStars" />
              </Link>
              <Link to="https://swimm.io/">
                <img src="/static/icons/swim.svg" alt="Swim" />
              </Link>
              <Link to="https://github.com/">
                <img src="/static/icons/github-static.svg" alt="Github" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;