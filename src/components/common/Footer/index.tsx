import LogoIcon from "@icons/Logo";
import DevIcon from "@icons/social/Dev";
import DiscordIcon from "@icons/social/Discord";
import GithubIcon from "@icons/social/Github";
import InstagramIcon from "@icons/social/Instagram";
import XIcon from "@icons/social/X";
import YoutubeIcon from "@icons/social/Youtube";
import { block } from "million/react";
import { Link } from "react-router-dom";

const Footer = block(() => (
  <footer className="bg-brownShades-0007 pb-10">
    <div className="w-full max-w-[1256px] mx-auto px-6 h-fit flex justify-center flex-col items-center">
      <div className="w-full pt-10 pb-16 tablet-max:pt-12">
        <div className="w-[140px] h-6">
          <LogoIcon />
        </div>
      </div>
      <div className="w-full flex flex-col tablet-max:flex-row">
        <div className="w-full tablet-max:w-[45%]">
          <div className="font-bold text-gray-00 opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">
            SOCIALS
          </div>
          <div className="flex flex-wrap relative gap-x-3 pr-2 [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:opacity-70">
            <Link to="https://twitter.com/saucedopen">
              <XIcon />
            </Link>
            <Link to="https://github.com/open-sauced">
              <GithubIcon />
            </Link>
            <Link to="https://instagram.com/opensauced">
              <InstagramIcon />
            </Link>
            <Link to="https://youtube.com/opensauced">
              <YoutubeIcon />
            </Link>
            <Link to="https://discord.com/invite/U2peSNf23P">
              <DiscordIcon />
            </Link>
            <Link to="https://dev.to/opensauced">
              <DevIcon />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-between">
          <div>
            <div className="font-bold text-gray-00 opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">
              Menu
            </div>
            <div className="flex flex-col gap-y-3">
              <Link to="/about" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                About
              </Link>
              <Link to="/blog" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                Blog
              </Link>
              <Link to="/changelog" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                Changelog
              </Link>
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-00 opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">
              MORE SAUCE
            </div>
            <div className="flex flex-col gap-y-3">
              <Link to="https://hot.opensauced.pizza/" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                hot.opensauced.pizza
              </Link>
              <Link to="https://insights.opensauced.pizza/" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                insights.opensauced.pizza
              </Link>
              <Link to="https://docs.opensauced.pizza/" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                docs.opensauced.pizza
              </Link>
              <Link to="https://news.opensauced.pizza/" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                news.opensauced.pizza
              </Link>
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-00 opacity-[0.35] text-xs uppercase tracking-[0.2em] pb-8">
              CONTACT US
            </div>
            <div>
              <Link to="maito:manhhungit.37@gmail.com" className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.7] pb-3">
                manhhungit.37@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-9 mt-7 flex flex-col-reverse border-t-[0.5px] border-gray-700 tablet-max:flex-row tablet-max:mt-12 tablet-max:justify-between">
        <div className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.35]">
          © 2024 Open Sauced, INC. All rights reserved.
        </div>
        <div className="flex items-center mb-5 tablet-max:mb-0 ">
          <Link
            to="https://app.termly.io/document/privacy-policy/5e303854-d262-468a-80ec-54b645d01c2e"
            className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.35]"
          >
            Privacy
          </Link>
          <div className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.35] mx-2">
            •
          </div>
          <Link
            to="https://app.termly.io/document/terms-of-use-for-saas/03e4e1c1-53ad-4fc4-b415-5c3f0e8c25ef"
            className="font-normal text-gray-00 text-sm tracking-[-0.02em] opacity-[0.35]"
          >
            Terms
          </Link>        
        </div>
      </div>
    </div>
  </footer>
));

export default Footer;