"use client";

import React, { useState } from "react";
import Image from "next/image";  
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title:"Home",
    path:"#home"
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-[#33353F]">
      <div className="container flex items-center justify-between mx-auto px-4 py-3">
        {/* Adjust the logo styling */}
        <div className="flex items-center">
          <Image
            src="/images/mphok.png"
            width={50}  // Adjust width
            height={50} // Adjust height
            alt="Profile Image"
            className="rounded-full object-cover"  // Makes the logo round
          />
         
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Main navigation menu */}
        <div className={`md:block ${navbarOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-3 md:mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
