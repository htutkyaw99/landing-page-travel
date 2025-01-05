import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-5 p-3 max-w-[850px] mx-auto mt-[200px] px-5">
      <div className="space-y-1 col-span-3">
        <h6 className="font-serif text-[18px]">MNTN</h6>
        <p className="font-sans text-[14px]">
          Get out there & discover your next slope, mountain & destination!
        </p>
        <p className="font-sans text-[12px] text-white/30">
          Copyright 2025 MNTN, Inc. Terms & Privacy
        </p>
      </div>
      <div className="ml-auto">
        <h6 className="text-[18px] text-secondary">More on the Blog</h6>
        <ul>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              About MNTN
            </a>
          </li>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              Contributors and Writers
            </a>
          </li>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              Write for Us
            </a>
          </li>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              Contact Us
            </a>
          </li>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <h6 className="text-[18px] text-secondary">More on MNTN</h6>
        <ul>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              The Team
            </a>
          </li>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              Jobs
            </a>
          </li>
          <li className="hover-link">
            <a href="/" className="text-[10px]">
              Press
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
