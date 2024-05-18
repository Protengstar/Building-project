import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}
const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}>
      <div className="w-[100vh] h-[100vh] flex flex-col items-center justify-center">
        <Link href="#home" scroll={false} className="nav-link-mobile">
          Home
        </Link>
        <Link href="#about" scroll={false} className="nav-link-mobile">
          ABOUT
        </Link>
        <Link href="#service" scroll={false} className="nav-link-mobile">
          SERVICES
        </Link>
        <Link href="#project" scroll={false} className="nav-link-mobile">
          PROJECT
        </Link>
        <Link href="#blog" scroll={false} className="nav-link-mobile">
          BLOG
        </Link>
        <Link href="#contact" scroll={false} className="nav-link-mobile">
          CONTACT
        </Link>
      </div>
      <div onClick={closeNav} className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300">
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
