"use client";

import { ShoppingCartIcon, BellAlertIcon } from "@heroicons/react/24/solid";
import { Plus_Jakarta_Sans } from "next/font/google";

const jk = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"]
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* Container with Glassmorphism */}
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md border border-white/20 shadow-lg shadow-gray-200/30 rounded-3xl px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <div className={`${jk.className} flex items-center gap-3`}>
  {/* PORTABLE IMAGE / LOGO ICON */}
  <div className="relative h-11 w-11 flex-shrink-0">
    <img 
      src="/imgs/about.jpg" // Replace with your actual icon path
      alt="SmokeYard Logo"
      className="h-full w-full object-contain"
    />
    {/* Subtle glow behind the logo for extra "sleekness" */}
    <div className="absolute inset-0 bg-orange-400/20 blur-lg rounded-full -z-10" />
  </div>

  {/* TEXT STACK */}
  <div className="flex flex-col justify-center leading-none">
    <h1 className="text-xl font-extrabold tracking-tighter text-gray-900 flex items-center">
      Smoke<span className="text-orange-500">Yard</span>
    </h1>
    <span className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.15em] mt-1">
      Order Online 
    </span>
  </div>
</div>

          {/* NAV LINKS - Desktop Only */}
          <div className={`${jk.className} hidden md:flex items-center gap-8 text-sm font-semibold text-gray-500`}>
            <span className="text-gray-900 cursor-pointer hover:text-orange-500 transition-colors">Home</span>
            <span className="cursor-pointer hover:text-orange-500 transition-colors">Menu</span>
            <span className="cursor-pointer hover:text-orange-500 transition-colors">Blog</span>
            <span className="cursor-pointer hover:text-orange-500 transition-colors">Contact</span>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4">
            {/* Notification with Dot */}
            <div className="relative group cursor-pointer p-2 bg-gray-50 rounded-xl hover:bg-orange-50 transition-all">
              <BellAlertIcon className="h-6 w-6 text-gray-700 group-hover:text-orange-500" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Cart with Counter */}
            <div className="relative group cursor-pointer p-2 bg-gray-900 rounded-xl hover:bg-orange-500 transition-all shadow-md">
              <ShoppingCartIcon className="h-6 w-6 text-white" />
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-lg border-2 border-white">
                2
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}