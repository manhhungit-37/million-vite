import { block } from "million/react";

const HomeContact = block(() => (
  <div>
    <div className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center relative">
      <div className="mb-[120px] tablet-max:mb-[250px]">
        <div className="relative w-screen">
          <div className="absolute top-[-14rem] left-[-30rem] tablet-max:left-[-15rem] tablet-max:block tablet-max:-top-[10rem]">
            <img src="/static/icons/contact-left-1.svg" alt="Contact" />
          </div>
          <div className="absolute top-[-14rem] right-[-34rem] tablet-max:-right-[32rem] tablet-max:block tablet-max:-top-[22rem]">
            <img src="/static/icons/contact-right-1.svg" alt="Contact" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8 text-center">
          <h2 className="w-full font-bold text-gray-00 tracking-[-0.02em] text-3xl tablet-max:text-6xl tablet-max:tracking-[-0.03em]">
            <span className="bg-gradient-to-r from-orange-02 to-yellow-01 text-transparent bg-clip-text">
              The fast track {' '}
            </span>
            to open source
          </h2>
          <div className="w-full text-gray-00 text-lg opacity-70 leading-normal tracking-normal tablet-max:text-xl">
            Stay up to date with the latest OpenSauced news and trends.
          </div>
          <div className="h-fit w-fit p-[1px] bg-gradient-to-tr from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-md">
            <form className="relative px-4 flex items-center w-[280px] h-[38px] text-orange-03 pr-4 py-3 text-sm font-medium bg-black-00 rounded-md tablet-max:w-[394px]">
              <input type="text" placeholder="Email" className="pr-4 outline-none focus:outline-none bg-black-00 w-[180px] tablet-max:w-[290px]" />
              <button type="submit" className="text-orange-04 text-sm cursor-pointer border-none p-0 focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mb-[120px] tablet-max:mb-[350px]">
        <div className="relative w-screen">
          <div className="absolute hidden tablet-max:bottom-[-27rem] tablet-max:left-0 tablet-max:block">
            <img src="/static/icons/contact-left-2.svg" alt="Contact" />
          </div>
          <div className="absolute hidden tablet-max:block tablet-max:bottom-[-26rem] tablet-max:right-0">
            <img src="/static/icons/contact-right-2.svg" alt="Contact" />
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="w-full font-bold text-gray-00 tracking-[-0.02em] text-3xl tablet-max:text-5xl">
            Subscribe for
            <span className="bg-orange-02 text-transparent bg-clip-text"> Extra Sauce</span>
          </h2>
          <div className="max-w-[680px] mt-4 mb-14 w-full text-gray-00 font-normal opacity-70 text-base leading-normal tracking-normal tablet-max:text-2xl">
            Stay up to date with the latest OpenSauced news and trends.
          </div>
          <div className="h-fit w-fit p-[1px] bg-gradient-to-tr from-orange-00 via-yellow-00 to-orange-00 drop-shadow-[0_0_4px_#ED5432] rounded-md">
            <form className="relative px-4 flex items-center w-[280px] h-[38px] text-orange-03 pr-4 py-3 text-sm font-medium bg-black-00 rounded-md tablet-max:w-[394px]">
              <input type="text" placeholder="Email" className="pr-4 outline-none focus:outline-none bg-black-00 w-[180px] tablet-max:w-[290px]" />
              <button type="submit" className="text-orange-04 text-sm cursor-pointer border-none p-0 focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default HomeContact;