
export default function Footer(params) {
    return(
        <div>
            {/* QUICK CONTACT FLOATING BUTTON (WhatsApp/Support Style) */}
      <div className="fixed bottom-24 right-6 z-40">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:rotate-12 group">
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black text-white text-[10px] font-black px-3 py-1 rounded-lg">
            Chat with us?
          </div>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </button>
      </div>

      {/* DENSE APP FOOTER */}
      <footer className="bg-white mt-12 border-t border-gray-100 pt-12 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Col */}
            <div className="col-span-2">
              <h2 className="text-2xl font-black italic text-orange-600 mb-4 tracking-tighter uppercase">Smokeyard.</h2>
              <p className="text-gray-400 text-sm font-bold leading-relaxed pr-8">
                The fastest way to get your favorite street flavors delivered to your doorstep. Hot, fresh, and always on time.
              </p>
            </div>
            
            {/* Links Col */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm font-bold text-gray-600">
                <li className="hover:text-orange-600 cursor-pointer">About Us</li>
                <li className="hover:text-orange-600 cursor-pointer">Our Menu</li>
                <li className="hover:text-orange-600 cursor-pointer">Be a Rider</li>
              </ul>
            </div>

            {/* Support Col */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Support</h4>
              <ul className="space-y-2 text-sm font-bold text-gray-600">
                <li className="hover:text-orange-600 cursor-pointer">Help Center</li>
                <li className="hover:text-orange-600 cursor-pointer">Contact Us</li>
                <li className="hover:text-orange-600 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Payment & Final End */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-50 gap-6">
            <div className="flex items-center gap-4">
               {/* Minimalist Payment Icons */}
               <div className="flex gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-6 bg-gray-100 rounded-md border border-gray-200"></div>
                  ))}
               </div>
               <span className="text-[10px] font-black text-gray-300 uppercase">100% Secured Payment</span>
            </div>
            
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              © 2026 SmokeYard — Made for the Street
            </p>
          </div>
        </div>
      </footer>
        </div>
    )
}