"use client";

import React from "react";

// import type { MainNavItem } from "~/types";

// interface NavBarProps {
//   items?: MainNavItem[];
//   children?: React.ReactNode;
//   rightElements?: React.ReactNode;
//   scroll?: boolean;
// }

export function NavBar() {
  return (
    <header className="w-full backdrop-blur-xl transition-all">
      <div className="container flex h-20 py-4 sm:h-28">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="cursor-pointer text-3xl font-black italic sm:text-6xl">
            <span className="text-pixColor">PIX</span>
            <span className="text-funColor">FUN</span>
          </div>
          {/* <div className="cursor-pointer text-base font-normal text-[#383838] sm:text-xl">
            English
          </div> */}
        </div>
      </div>
    </header>
  );
}
