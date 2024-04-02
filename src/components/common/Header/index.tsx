import { block } from "million/react";
import LogoIcon from "@icons/Logo";
import { Link } from "react-router-dom";
import GithubWordIcon from "@icons/social/GithubWord";
import MobileMenuIcon from "@icons/MobileMenu";
import XIcon from "@icons/social/X";
import GithubIcon from "@icons/social/Github";
import InstagramIcon from "@icons/social/Instagram";
import YoutubeIcon from "@icons/social/Youtube";
import DiscordIcon from "@icons/social/Discord";
import DevIcon from "@icons/social/Dev";
import { useCallback, useState } from "react";
import classNames from "classnames";

const Header = block(() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMobileMenu = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
  }, []);

  return (
    <div className="relative flex justify-between items-center gap-10 max-w-[1256px] px-6 py-9 mx-auto">
      <div className="w-[140px] h-6">
        <LogoIcon />
      </div>
      <div className="hidden gap-8 items-center [&_a]:text-sm [&_a]:font-bold [&_a]:text-gray-00 tablet-max:flex">
        <Link to="/">Use Cases</Link>
        <Link to="/">About</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Changelog</Link>
      </div>
      <button className="hidden rounded-md bg-gradient-to-br from-orange-00 via-yellow-01 to-[#ED5432] p-[1px] outline-none border-none hover:[&>div]:bg-orange-00 tablet-max:block">
        <div className="flex items-center gap-2 text-sm leading-1 font-bold text-gray-01 bg-black-00 px-3 py-[9px] rounded-md">
          <div className="w-[14px] h-[14px]">
            <GithubWordIcon />
          </div>
          Connect with Github
        </div>
      </button>
      <div className="block tablet-max:hidden w-6 h-[13px] cursor-pointer" onClick={handleToggleMobileMenu}>
        <MobileMenuIcon />
      </div>
      <div className={classNames("hidden absolute top-full left-6 right-6 z-50 mt-6 bg-gradient-to-r from-orange-00 to-yellow-00 py-9 px-7 rounded-lg", {
        '!block': isOpen
      })}>
        <div className="font-bold text-gray-00 text-xs opacity-70 tracking-[0.2em] pb-8">
          MENU
        </div>
        <div className="flex flex-col gap-y-8 pb-14">
          <Link to="/teams">
            <div className="font-bold text-gray-00 text-lg">Teams</div>
          </Link>
          <Link to="/maintainers">
            <div className="font-bold text-gray-00 text-lg">Maintainers</div>
          </Link>
          <Link to="/contributors">
            <div className="font-bold text-gray-00 text-lg">Contributors</div>
          </Link>
          <Link to="/about">
            <div className="font-bold text-gray-00 text-lg">About</div>
          </Link>
          <Link to="/blog">
            <div className="font-bold text-gray-00 text-lg">Blog</div>
          </Link>
          <Link to="/changelog">
            <div className="font-bold text-gray-00 text-lg">Changelog</div>
          </Link>
        </div>
        <div className="font-bold text-gray-00 text-xs opacity-70 tracking-[0.2em] pb-10">
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
    </div>
  );
});

export default Header;