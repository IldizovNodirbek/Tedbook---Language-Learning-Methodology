
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowLeft, Send, Phone, User, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CITIES } from '../constants';

const Order: React.FC<{ theme: string }> = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const isFormValid = formData.name.length > 2 && formData.phone.length > 7 && formData.city !== '';

  return (
    <div className={`min-h-screen pt-40 pb-32 px-6 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
        <Link to="/" className={`inline-flex items-center gap-3 mb-12 text-xl font-bold transition-all hover:gap-5 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-[#555555] hover:text-[#2C2C2C]'}`}>
          <ArrowLeft size={24} /> Bosh sahifaga qaytish
        </Link>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`p-12 md:p-20 rounded-[4rem] shadow-2xl border-4 ${theme === 'dark' ? 'bg-gray-900 border-gray-800 shadow-none' : 'bg-white border-white shadow-gray-200/60'}`}
            >
              <h1 className={`text-6xl md:text-7xl font-black mb-6 leading-none ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>
                Buyurtma <span className={`${theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'}`}>berish</span>
              </h1>
              <p className={`text-2xl font-raleway mb-16 ${theme === 'dark' ? 'text-gray-400 opacity-70' : 'text-[#555555]'}`}>
                Ma'lumotlaringizni to'ldiring, mutaxassislarimiz tez orada bog'lanishadi.
              </p>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                      <User size={24} className={`${theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'}`} /> Ism va familiya
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Jamshid Orifov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all font-raleway ${
                        theme === 'dark' 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' 
                          : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
                      }`}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                      <Phone size={24} className={`${theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'}`} /> Telefon raqam
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all font-raleway ${
                        theme === 'dark' 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' 
                          : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                    <MapPin size={24} className={`${theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'}`} /> Shahar yoki Viloyat
                  </label>
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all appearance-none font-raleway cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' 
                        : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
                    }`}
                  >
                    <option value="" disabled>Shaharni tanlang</option>
                    {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                </div>

                <div className="space-y-4">
                  <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                    <MessageSquare size={24} className={`${theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'}`} /> Qo'shimcha izoh
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Qo'shimcha savollaringiz bo'lsa qoldiring..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all resize-none font-raleway ${
                      theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' 
                        : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || loading}
                  className={`w-full py-8 rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-4 transition-all shadow-2xl ${
                    isFormValid && !loading
                      ? (theme === 'dark' ? 'bg-[#FF9999] text-white hover:bg-[#ff8888]' : 'bg-[#2C2C2C] text-white hover:bg-black') + ' shadow-xl transform hover:scale-[1.03] active:scale-95'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {loading ? (
                    <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>BUYURTMANI YUBORISH <Send size={28} /></>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-20 lg:p-32 rounded-[5rem] text-center shadow-2xl border-4 ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-white'}`}
            >
              <div className="w-32 h-32 bg-green-50 dark:bg-green-900/20 rounded-[3rem] flex items-center justify-center mx-auto mb-12">
                <CheckCircle className="text-green-500" size={64} />
              </div>
              <h2 className={`text-6xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>
                Muvaffaqiyatli!
              </h2>
              <p className={`text-3xl font-raleway mb-16 ${theme === 'dark' ? 'text-gray-400 opacity-70' : 'text-[#333333]'}`}>
                Sizning buyurtmangiz qabul qilindi. Menejerimiz tez orada qo'ng'iroq qiladi.
              </p>
              <Link to="/" className={`inline-flex items-center gap-3 px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-110 shadow-2xl ${
                theme === 'dark' ? 'bg-[#FF9999] text-white' : 'bg-[#2C2C2C] text-white hover:bg-black'
              }`}>
                <ArrowLeft size={28} /> BOSH SAHIFAGA
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Order;
