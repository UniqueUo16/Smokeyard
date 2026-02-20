"use client"
import { Filter, Pizza, CupSoda, Utensils, Sandwich, IceCream } from "lucide-react";
import { BiFoodTag } from "react-icons/bi";
import { ArrowRight,Clock } from "lucide-react";
import { useState } from "react";
import { Settings, Search, Timer, Star, Plus } from "lucide-react";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";

import { Urbanist } from "next/font/google";

const jk = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });

const CATEGORIES = [
  { id: "all", name: "All", icon: <Utensils size={18} /> },
  { id: "pizza", name: "Pizza", icon: <Pizza size={18} /> },
  { id: "drinks", name: "Drinks", icon: <CupSoda size={18} /> },
  { id: "burgers", name: "Burgers", icon: <Sandwich size={18} /> },
  { id: "desserts", name: "Desserts", icon: <IceCream size={18} /> },
];


const FOOD_ITEMS = [
  {
    id: 1,
    title: "Grilled Chicken",
    category: "all",
    price: "12.99",
    time: "22 min",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=300&q=80",
    logo: <BiFoodTag/>,
    offer_type: "Special offer",
    offer: "25% Off"
  },
  {
    id: 2,
    title: "Pepperoni Feast",
    category: "pizza",
    price: "15.50",
    time: "30 min",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
    logo: <BiFoodTag/>,
    offer_type: "bonanza",
    offer: "Buy 10 get 1 free"
  },
  {
    id: 3,
    title: "Berry Bliss",
    category: "desserts",
    price: "8.00",
    time: "15 min",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80",
    logo: <BiFoodTag/>,
    offer_type: "Bonus",
    offer: "2 free"
  },
  {
    id: 3,
    title: "Berry Bliss",
    category: "desserts",
    price: "8.00",
    time: "15 min",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80",
    logo: <BiFoodTag/>,
    offer_type: "Valentine dish",
    offer: "5% discount"
  },
  {
    id: 3,
    title: "Berry Bliss",
    category: "desserts",
    price: "8.00",
    time: "15 min",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80",
    logo: <BiFoodTag/>,
    offer_type: "Special offer",
    offer: "25% Off"
  },
  
];


const sleekFont = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Category() {
    const [activeTab, setActiveTab] = useState("all");

    return(
        <div className="rounded-t-[2rem] bg-white backdrop-blur-lg -mt-10">
            
      {/* CATEGORIES */}
      <section className="max-w-5xl mx-auto mt-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className={`${sleekFont.className} text-2xl m-5 text-gray-900 font-extrabold`}>Popular Categories</h2>
          <button className="text-orange-500 font-bold text-sm">View All</button>
        </div>
        
        <div className="flex items-center gap-4 overflow-x-auto pb-4  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 shrink-0">
            <Filter size={20} />
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 shrink-0 border ${
                activeTab === cat.id 
                ? "bg-orange-600 border-orange-500 text-white shadow-xs shadow-orange-900" 
                : "bg-white border-gray-100 text-gray-500 hover:border-orange-200"
              }`}
            >
              <span className={activeTab === cat.id ? "text-white" : "text-orange-500"}>{cat.icon}</span>
              <span className="text-sm font-bold">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* FOOD SLIDER */}
      <section className={`${sleekFont.className} max-w-7xl mx-auto -mt-3 bg-black/10`}>
        <div className="flex gap-2 overflow-x-auto py-10 px-2 
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {FOOD_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-70 min-w-[280px] bg-white p-6 rounded-[2.5rem] shadow-xl shadow-black border border-gray-50 transition-all hover:-translate-y-2"
            >
              {/* Image Circle */}
              <div className="absolute -top-10 right-4 w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white transition-transform group-hover:scale-110 group-hover:rotate-6">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Delivery Badge */}
              <div className="flex items-center gap-1.5 bg-gray-900 text-white w-fit px-3 py-1.5 rounded-full mb-4">
                <Timer size={14} className="text-orange-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{item.time}</span>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-1 mb-1">
                    <Star size={12} className="fill-orange-400 text-orange-400" />
                    <span className="text-xs font-bold text-gray-600">{item.rating}</span>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-4">{item.title}</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-[10px] font-bold uppercase">Price</span>
                    <span className="text-2xl font-extrabold text-gray-900">${item.price}</span>
                  </div>
                  <button className="bg-orange-600 text-white p-3 rounded-2xl hover:bg-orange-500 transition-colors shadow-lg">
                    <Plus size={20} />
                  </button>
                </div>

                <div className="mt-auto pt-4">
  {/* The Glass Container */}
  <div className="relative overflow-hidden bg-black/90  backdrop-blur-xl border border-white/50 rounded-3xl p-4 shadow-sm hover:shadow-md transition-all">
    
    {/* Decorative background "glow" for that sleek look */}
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl" />

    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {/* Logo/Icon Container */}
        <div className="flex items-center justify-center bg-white p-2 rounded-xl shadow-sm">
          <span className="text-orange-500">
            {item.logo || <Utensils size={18} />} 
          </span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600/70">
            {item.offer_type}
          </span>
          <h4 className={`text-sm font-extrabold text-gray-100 ${jk.className}`}>
            {item.offer}
          </h4>
        </div>
      </div>

      {/* Optional: Add a subtle progress bar or divider */}
      <div className="w-full h-1 bg-gray-200/50 rounded-full overflow-hidden">
        <div className="w-2/3 h-full bg-orange-400 rounded-full" />
      </div>
    </div>
  </div>
</div>
</div>
            </div>
          ))}
        </div>
      </section>

      
        </div>
    )
}