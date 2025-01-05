import React from "react";

const Navbar = () => {
  return (
    <nav className="flex relative justify-between items-center max-w-[1280px] h-[100px] mx-auto px-5 z-10 ">
      <a href="/">
        <h1 className="font-serif text-[32px]">MNTN</h1>
      </a>
      <ul className="flex items-center space-x-[40px]">
        <li className="hover-link">
          <a href="/">Equiment</a>
        </li>
        <li className="hover-link">
          <a href="/">About us</a>
        </li>
        <li className="hover-link">
          <a href="/">Blog</a>
        </li>
      </ul>
      <div>
        <a href="/" className="hover-link text-[17px]">
          Account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
