import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = () => {
  // functionality for offcanvas
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%]">
        <Image
          src={assets.header_bg_color}
          alt="gradient color"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm opacity-50">
          <li className="font-Ovo">
            <a href="#top">Home</a>
          </li>

          <li>
            <a href="#about">About me</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#work">My Work</a>
          </li>

          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Image
            src={assets.moon_icon}
            alt="moon for dark theme"
            className="w-6 cursor-pointer"
          />

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 second-font"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="arrow icon" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="hamburger"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 -right-64 w-64 h-screen z-50 bg-rose-50
          transform transition-transform duration-500"
          ref={sideMenuRef}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close offcanvas"
              className="w-5 cursor-pointer"
            />
          </div>

          <li onClick={closeMenu}>
            <a href="#top">Home</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#about">About me</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#services">Services</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#work">My Work</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
