import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1280px] h-[25px] mx-auto pt-[50px]">
      <a href="/">
        <h1 className="font-serif text-[32px]">MNTN</h1>
      </a>
      <ul className="flex items-center space-x-[40px]">
        <li className="font-sans">
          <a href="/">Equiment</a>
        </li>
        <li className="font-sans">
          <a href="/">About us</a>
        </li>
        <li className="font-sans">
          <a href="/">Blog</a>
        </li>
      </ul>
      <div>
        <a href="/" className="font-sans text-[17px]">
          Account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
