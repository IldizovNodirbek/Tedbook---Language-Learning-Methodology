
import React from 'react';
import { Instagram, Send, Globe } from 'lucide-react';

const Footer: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <footer className={`py-32 px-6 border-t-8 ${theme === 'dark' ? 'bg-gray-950 border-gray-900' : 'bg-white border-[#FFF0F0]'}`}>
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-md">
          <h2 className={`text-5xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>
            Ted<span className={`${theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'}`}>book</span>
          </h2>
          <p className={`text-2xl font-raleway leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-[#333333]'}`}>
            O'zbekistondagi eng innovatsion ingliz tili metodikasi. Sifat va natija kafolati.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          <div>
            <h4 className={`text-xl font-black uppercase tracking-widest mb-8 ${theme === 'dark' ? 'text-white' : 'text-[#555555]'}`}>Bog'lanish</h4>
            <ul className={`text-2xl font-bold space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-[#2C2C2C]'}`}>
              <li>+998 90 123 45 67</li>
              <li>info@tedbook.uz</li>
              <li>Toshkent sh., Chilonzor tumani</li>
            </ul>
          </div>
          <div>
             <h4 className={`text-xl font-black uppercase tracking-widest mb-8 ${theme === 'dark' ? 'text-white' : 'text-[#555555]'}`}>Ijtimoiy tarmoqlar</h4>
             <div className="flex gap-6">
                <a href="#" className={`p-5 shadow-xl rounded-3xl transition-transform hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-[#FF9999]' : 'bg-[#FFF0F0] text-[#FF6B6B]'}`}>
                  <Instagram size={32} />
                </a>
                <a href="#" className={`p-5 shadow-xl rounded-3xl transition-transform hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-[#FF9999]' : 'bg-[#FFF0F0] text-[#FF6B6B]'}`}>
                  <Send size={32} />
                </a>
                <a href="#" className={`p-5 shadow-xl rounded-3xl transition-transform hover:scale-110 ${theme === 'dark' ? 'bg-gray-800 text-[#FF9999]' : 'bg-[#FFF0F0] text-[#FF6B6B]'}`}>
                  <Globe size={32} />
                </a>
             </div>
          </div>
        </div>
      </div>

      <div className={`max-w-[1440px] mx-auto mt-32 pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
        <p className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-500' : 'text-[#555555]'}`}>
          © 2026 Tedbook.uz. Barcha huquqlar himoyalangan.
        </p>
        <p className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-500' : 'text-[#555555]'}`}>
          Designed by <span className={`${theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'}`}>N-Next-Dev</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
