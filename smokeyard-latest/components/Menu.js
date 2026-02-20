"use client";
import { useState } from "react";
import { Timer, Star, Plus, Minus, X, Check, Search, ShoppingCart, Flame, TrendingUp, Sparkles } from "lucide-react";
import { BiFoodTag } from "react-icons/bi";
import { Urbanist, Plus_Jakarta_Sans } from "next/font/google";

const sleekFont = Urbanist({ subsets: ["latin"], weight: ["400", "700", "800"] });
const jk = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "800"] });

const FOOD_ITEMS = [
  { id: 1, title: "Grilled Chicken", price: 12.99, time: "22m", rating: "4.8", reviews: "1.2k", img: "/imgs/breakfast-1.jpg", offer: "25% Off", extras: ["Extra Meat", "Extra Rice"], popular: true },
  { id: 2, title: "Berry Bliss", price: 8.00, time: "15m", rating: "4.7", reviews: "800", img: "/imgs/breakfast-1.jpg", offer: "5% disc.", extras: ["Extra Cream", "Honey"], popular: false },
  { id: 3, title: "Pepperoni Feast", price: 15.50, time: "30m", rating: "4.9", reviews: "2.5k", img: "/imgs/breakfast-1.jpg", offer: "BOGOF", extras: ["Extra Cheese", "Soda"], popular: true },
  { id: 4, title: "Signature Platter", price: 22.00, time: "25m", rating: "4.9", reviews: "600", img: "/imgs/breakfast-1.jpg", offer: "Free Del.", extras: ["Extra Beef", "Egg"], popular: false },
  { id: 4, title: "Signature Platter", price: 22.00, time: "25m", rating: "4.9", reviews: "600", img: "/imgs/breakfast-1.jpg", offer: "Free Del.", extras: ["Extra Beef", "Egg"], popular: false },
  { id: 4, title: "Signature Platter", price: 22.00, time: "25m", rating: "4.9", reviews: "600", img: "/imgs/breakfast-1.jpg", offer: "Free Del.", extras: ["Extra Beef", "Egg"], popular: false },
];

export default function CompactFoodGrid() {
  const [activeItem, setActiveItem] = useState(null);
  const [qty, setQty] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className={`min-h-screen  ${sleekFont.className} text-slate-900 pb-32`}>
      
      {/* PACKED HEADER (Like Chowdeck/Jumia) */}
      <div className="bg-white px-4 pt-6 pb-4 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-black tracking-tighter italic text-orange-600 uppercase">SmokeYard</h1>
            <div className="relative bg-gray-100 p-2 rounded-full px-4 flex items-center gap-2">
                <Flame size={14} className="text-orange-500" />
                <span className="text-[10px] font-black uppercase">24 Deals Near You</span>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search for chicken, rice, drinks..." 
              className="w-full bg-gray-100 border-none rounded-2xl py-3 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>

          {/* QUICK CATEGORIES */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['All', 'Rice', 'Chicken', 'Swallow', 'Drinks', 'Sides'].map((cat, i) => (
              <button key={cat} className={`px-5 py-2 rounded-full text-xs font-black whitespace-nowrap transition-all ${i === 0 ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DENSE 2-COLUMN GRID */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3 p-3 md:gap-6 md:p-8 mt-4">
        {FOOD_ITEMS.map((item) => (
          <div 
            key={item.id} 
            onClick={() => { setActiveItem(item); setQty(1); }}
            className="group relative bg-white rounded-[2rem] p-3 md:p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100 cursor-pointer active:scale-95"
          >
            {/* COMPACT FLOATING IMAGE */}
            <div className="absolute -top-4 -right-1 w-20 h-20 md:w-28 md:h-28 z-10">
              <img 
                src={item.img} 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:rotate-6 transition-transform" 
              />
              <div className="absolute top-0 right-0 bg-orange-600 text-white text-[8px] font-black px-2 py-1 rounded-full uppercase">
                {item.offer}
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <div className="flex items-center gap-1 mb-1">
                <Star size={10} className="fill-orange-500 text-orange-500" />
                <span className="text-[10px] font-black">{item.rating}</span>
                <span className="text-[10px] text-gray-400 font-bold">({item.reviews})</span>
              </div>
              
              <h3 className="text-sm md:text-lg font-black text-slate-900 leading-tight mb-3 pr-8 truncate">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <Timer size={12} className="text-gray-400" />
                <span className="text-[10px] font-black text-gray-400 uppercase">{item.time} delivery</span>
              </div>

              <div className="flex items-center justify-between mt-auto bg-gray-50 p-2 rounded-2xl">
                <span className="text-lg font-black tracking-tighter ml-1">${item.price}</span>
                <div className="bg-black text-white p-2 rounded-xl group-hover:bg-orange-600 transition-colors">
                  <Plus size={16} strokeWidth={4} />
                </div>
              </div>
            </div>

            {/* CLICK ME HINT */}
            <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[8px] font-black uppercase text-orange-600">Click to customize</span>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING ACTION HUB */}
      <div className={`fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 ${cartCount > 0 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="max-w-md mx-auto bg-black text-white p-4 rounded-[2rem] flex items-center justify-between shadow-2xl border border-white/10">
            <div className="flex items-center gap-4">
                <div className="relative bg-orange-600 p-3 rounded-2xl">
                    <ShoppingCart size={20} />
                    <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black">{cartCount}</span>
                </div>
                <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase leading-none">Cart Total</p>
                    <p className="text-lg font-black">$42.50</p>
                </div>
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-xl font-black text-sm uppercase tracking-tighter hover:bg-orange-500 hover:text-white transition-colors">
                Checkout
            </button>
        </div>
      </div>

      {/* CUSTOMIZER DRAWER */}
      {activeItem && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm p-0 md:p-4">
          <div className="bg-white w-full max-w-lg rounded-t-[2.5rem] md:rounded-[3rem] p-6 shadow-2xl animate-in slide-in-from-bottom-full duration-500">
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6 md:hidden" />
            
            <div className="flex items-center gap-4 mb-8">
              <img src={activeItem.img} className="w-20 h-20 rounded-full border-2 border-orange-100 shadow-md" />
              <div className="flex-1">
                <h2 className="text-2xl font-black tracking-tight">{activeItem.title}</h2>
                <p className="text-sm font-bold text-orange-600">${activeItem.price}</p>
              </div>
              <button onClick={() => setActiveItem(null)} className="p-2 bg-gray-100 rounded-full"><X/></button>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Select Add-ons</p>
              {activeItem.extras.map(ex => (
                <label key={ex} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-orange-50 border border-transparent hover:border-orange-100 transition-all cursor-pointer">
                  <span className="font-bold text-gray-700">{ex}</span>
                  <input type="checkbox" className="w-5 h-5 accent-black" />
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <div className="flex items-center gap-4 bg-gray-100 px-4 rounded-2xl font-black">
                <button onClick={() => setQty(q => Math.max(1, q-1))}><Minus size={16}/></button>
                <span className="w-4 text-center">{qty}</span>
                <button onClick={() => setQty(q => q+1)}><Plus size={16}/></button>
              </div>
              <button 
                onClick={() => { setCartCount(c => c + qty); setActiveItem(null); }}
                className="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-black transition-all"
              >
                Add {(activeItem.price * qty).toFixed(2)} to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="bg-white rounded-t-3xl -mt-6 py-16 px-6 border-t border-gray-50">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
    <div className="flex flex-col items-center text-center">
      <div className="bg-orange-100 p-5 rounded-[2rem] text-orange-600 mb-6">
        <Timer size={32} strokeWidth={2.5} />
      </div>
      <h4 className="text-xl font-black tracking-tighter mb-2">30 Mins Delivery</h4>
      <p className="text-sm font-bold text-gray-400 leading-relaxed">If it takes longer, the next one is on the house. No stories.</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="bg-green-100 p-5 rounded-[2rem] text-green-600 mb-6">
        <Check size={32} strokeWidth={2.5} />
      </div>
      <h4 className="text-xl font-black tracking-tighter mb-2">Quality Assured</h4>
      <p className="text-sm font-bold text-gray-400 leading-relaxed">We only partner with top-rated kitchens that pass our 15-step hygiene check.</p>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-100 p-5 rounded-[2rem] text-blue-600 mb-6">
        <Flame size={32} strokeWidth={2.5} />
      </div>
      <h4 className="text-xl font-black tracking-tighter mb-2">Always Fresh</h4>
      <p className="text-sm font-bold text-gray-400 leading-relaxed">Cooked to order. No pre-packed meals. No microwave magic.</p>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50 overflow-hidden">
  <div className="max-w-4xl mx-auto px-6">
    <h3 className="text-2xl font-black tracking-tighter mb-10 text-center uppercase italic">What the streets are saying</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { name: "Tunde W.", review: "The Grilled Chicken is actually better than Jumia Food's. Don't tell them I said that!", rating: 5 },
        { name: "Amaka R.", review: "Delivery was 5 mins late but the food was still steaming hot. 10/10.", rating: 5 }
      ].map((rev, i) => (
        <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex text-orange-500 mb-3">
             {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <p className="text-sm font-bold text-gray-700 italic mb-4 leading-relaxed">"{rev.review}"</p>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">— {rev.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}