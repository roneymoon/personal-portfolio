"use client";

import { useState } from "react";
import { navItems } from "./Footer";
import { Button } from "@/components/Button";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import github from "@/assets/images/github.png";

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b bg-[#030712] border-gray-200/20 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Brand
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-3xl md:ml-4">
              <span className="text-fuchsia-200">Roney</span>
              <strong className="text-violet-300">Moon</strong>
            </span>
          </div> */}

          {/* Desktop Nav */}
          <div className="h-full hidden lg:block">
            <nav className="h-full flex items-center gap-2">
              {navItems.map(({ name, href }) => (
                <a
                  href={href}
                  key={href}
                  className="h-full px-6 relative inline-flex items-center font-bold text-xs tracking-widest uppercase text-gray-400 float-animation nav-gradient-hover before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:gap-3 lg:flex">
            <a
              href="https://github.com/roneymoon"
              target="_blank"
              className="relative inline-flex items-center justify-center text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg z-0 transition-all bg-gray-100 text-gray-950"
            >
              <span className="mr-2">
                <Image src={github} alt="github" width={24} height={24} />
              </span>
              Github
            </a>
            <Button variant="primary">Contact Me</Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="size-10 rounded-lg animated-border lg:hidden bg-black relative active:click-pulse z-50"
            onClick={() => {
              setIsMobileNavOpen((curr) => !curr);
            }}
          >
            {/* Line 1 */}
            <div
              className={twMerge(
                "absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-100 transition-transform duration-300 ease-in-out",
                isMobileNavOpen
                  ? "rotate-45 translate-x-[-50%] translate-y-[-50%]"
                  : "translate-x-[-50%] translate-y-[-6px]"
              )}
            ></div>

            {/* Line 2 */}
            <div
              className={twMerge(
                "absolute top-1/2 left-1/2 w-4 h-0.5 bg-gray-100 transition-transform duration-300 ease-in-out",
                isMobileNavOpen
                  ? "-rotate-45 translate-x-[-50%] translate-y-[-50%]"
                  : "translate-x-[-50%] translate-y-[6px]"
              )}
            ></div>
          </button>
        </div>
      </header>

      {/* Mobile Side Panel */}
      {/* Mobile Side Panel */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={twMerge(
              "fixed top-0 right-0 h-full w-full max-w-[375px] z-40 p-6 overflow-y-auto", // Changed width and added max-w
              "bg-glass-gradient backdrop-blur-md shadow-glass border-l border-white/10",
              "lg:hidden"
            )}
          >
            <nav className="flex flex-col items-start gap-6 mt-16">
              {navItems.map(({ name, href }) => (
                <a
                  href={href}
                  key={href}
                  className="px-4 py-2 text-sm font-bold uppercase tracking-wides transition float-animation nav-gradient-hover"
                  onClick={() => setIsMobileNavOpen(false)} // Close nav on item click
                >
                  {name}
                </a>
              ))}
              <Button
                variant="primary"
                onClick={() => setIsMobileNavOpen(false)}
              >
                Contact Me
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
