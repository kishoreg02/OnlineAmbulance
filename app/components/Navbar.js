"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// import { createRoot } from 'react-dom/client'
// import { Canvas, useFrame } from '@react-three/fiber'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className=" px-3 py-2 ">
              <Image src="/Images/site-logo_2.png" width={70} height={10} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
            <Link
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="hover:text-blue-900 text-blue-500 block px-3 py-2 text-base font-medium transition duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </Link>
            <Link
               href="#services"
               onClick={(e) => handleScroll(e, "services")}
              className="hover:text-blue-900 text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-110"
            >
              Services
            </Link>
            <Link
              href="#team"
              onClick={(e) => handleScroll(e, "team")}
              className="hover:text-blue-900 text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-110"
            >
              Experts
            </Link>
           
            {/* <Link
              href="#contacts"
              onClick={(e) => handleScroll(e, "contacts")}
              className="hover:text-blue-900 text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-110"
            >
              Contacts
            </Link> */}
            <Link
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="hover:text-blue-900 text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-110"
            >
              About Us
            </Link>
          </div>
          <div className="hidden md:flex items-center ">
            <button href="#contacts" onClick={(e) => handleScroll(e, "contacts")} className=" px-3 py-2 text-white bg-blue-500 rounded">
              Contact Us
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={isOpen ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#services"
            onClick={(e) => handleScroll(e, "services")}
            className="bg-blue-500 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="#team"
            onClick={(e) => handleScroll(e, "team")}
            className="bg-blue-500 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            Our Team
          </Link>
          <Link
            href="#clients"
            onClick={(e) => handleScroll(e, "clients")}
            className="bg-blue-500 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            Clients
          </Link>
          <Link
            href="#contacts"
            onClick={(e) => handleScroll(e, "contacts")}
            className="bg-blue-500 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Us
          </Link>
          <Link
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="bg-blue-500 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
