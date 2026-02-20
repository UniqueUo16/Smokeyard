"use client";
import { ArrowRight,Clock } from "lucide-react";

import { Settings, Search, Timer, Star, Plus } from "lucide-react";

import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import { Yellowtail,  } from "next/font/google";

const fancyFont = Yellowtail({
  subsets: ["latin"],
  weight: ["400"]
});

import Category from "./Category";


const jk = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });



export default function Hero() {

  return (
   <div className="relative min-h-[90vh] w-full overflow-hidden">

    <div className="relative w-full bg- px-4 py-8 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CONTENT: TIGHT & ACTION-ORIENTED */}
        <div className="z-10 order-2 lg:order-1 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-orange-50 w-fit px-3 py-1 rounded-full">
             <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-700 font-bold text-[10px] uppercase tracking-wider">Open Now: Fast Delivery</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Everything you <br />
            <span className={`${fancyFont.className} text-orange-500 text-5xl md:text-7xl font-normal lowercase`}>
              crave
            </span>, delivered.
          </h1>

          <p className="text-gray-500 text-sm md:text-base max-w-sm leading-relaxed">
            Order from the best local restaurants with ultra-fast delivery and real-time tracking.
          </p>

          {/* PORTABLE SEARCH BOX */}
          <div className="flex items-center p-1.5 bg-gray-50 rounded-2xl border border-gray-100 max-w-md focus-within:ring-2 focus-within:ring-orange-100 transition-all">
            <div className="flex-1 flex items-center px-3">
              <Search className="text-gray-400 mr-2" size={18} />
              <input 
                placeholder="Enter your address..." 
                className="bg-transparent border-none outline-none text-gray-900 w-full text-sm placeholder:text-gray-400"
              /> 
            </div>
            <button className="bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-orange-500 transition-all font-bold text-sm flex items-center gap-2">
              Find Food
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT: THE PORTABLE PLATE */}
        <div className="order-1 lg:order-2 relative flex justify-center">
          {/* Subtle background element instead of giant text */}
          <div className="absolute inset-0 bg-radial-gradient from-orange-100/50 to-transparent scale-150 blur-3xl rounded-full" />
          
          <div className="relative w-full max-w-[380px] md:max-w-[480px]">
            <img 
              src="/imgs/Hero1.png" 
              alt="Main Dish"
              className="w-full sm:h-auto h-70 w-70  object-contain drop-shadow-2xl scale-100 hover:scale-105 transition-transform duration-500"
            />

            {/* MINI FLOATING CARDS (Portable scale) */}
            <div className="absolute top-4 -right-4 bg-white/95 backdrop-blur shadow-xl p-3 rounded-2xl border border-gray-100 flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Star size={16} className="fill-orange-500 text-orange-500" />
              </div>
              <div>
                <p className="font-bold text-xs text-gray-900 mt-11">4.9</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase">Popular</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur shadow-xl p-3 rounded-2xl border border-gray-100 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Clock size={16} className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-xs text-gray-900">27 min</p>
                <p className="text-[9px] text-gray-400 font-bold uppercase">Avg. Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <Category/>
    </div>
  );
}