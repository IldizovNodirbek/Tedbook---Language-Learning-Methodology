
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle2, Sparkles, User, Phone, MapPin, MessageSquare, Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { PROBLEMS, AUDIO_TARGETS, LIFE_CHANGES, CITIES } from '../constants';

const LandingPage: React.FC<{ theme: string }> = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', comment: '' });
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const books = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=600&auto=format&fit=crop"
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 flex flex-col lg:flex-row -z-10">
          <div className="flex-1 peach-gradient relative">
             <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dotPatternHero" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="black" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dotPatternHero)" />
                </svg>
             </div>
          </div>
          <div className={`flex-1 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-32 lg:py-0 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`lg:pr-12 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}
          >
            <h1 className="text-7xl md:text-[100px] lg:text-[120px] font-black leading-[0.85] mb-8">
              Ted<br/>book
            </h1>
            <p className={`text-2xl md:text-3xl lg:text-4xl font-raleway font-light leading-snug mb-12 ${theme === 'dark' ? 'opacity-90' : 'text-[#333333]'}`}>
              Ingliz tilini oson va <span className={`font-black underline ${theme === 'dark' ? 'decoration-white/40' : 'decoration-[#FF6B6B]/40'} underline-offset-8`}>samarali</span> o'rganish metodikasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => scrollToSection('#order')}
                className={`px-12 py-8 rounded-[2.5rem] font-black text-2xl shadow-2xl transition-all flex items-center justify-center gap-4 transform hover:scale-105 active:scale-95 group ${
                  theme === 'dark' ? 'bg-white text-[#FF9999]' : 'bg-[#2C2C2C] text-white hover:bg-black'
                }`}
              >
                SOTIB OLISH <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop" 
              alt="Tedbook Hero" 
              className={`w-full lg:w-[500px] h-auto rounded-[4rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.4)] transform -rotate-2 border-8 ${theme === 'dark' ? 'border-gray-800' : 'border-white'}`}
            />
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className={`py-40 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#FFF5F5]'}`}>
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className={`text-6xl md:text-[80px] font-black leading-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>
              QUYIDAGI MUAMMOLAR <br/> <span className="text-[#FF6B6B]">SIZGA TANISHMI?</span>
            </h2>
            <div className={`w-32 h-3 mx-auto rounded-full ${theme === 'dark' ? 'bg-[#FF9999]' : 'bg-[#FF6B6B]'}`}></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROBLEMS.map((problem, idx) => (
              <motion.div
                key={idx}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`p-10 lg:p-12 rounded-[3rem] border-4 flex items-start gap-8 transition-all hover:scale-[1.02] ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-white shadow-xl shadow-gray-200/50'
                }`}
              >
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'}`}>
                  <AlertCircle className="text-red-500" size={36} />
                </div>
                <p className={`text-2xl lg:text-3xl font-bold leading-snug ${theme === 'dark' ? 'text-gray-200' : 'text-[#333333]'}`}>
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <button 
              onClick={() => scrollToSection('#order')}
              className={`inline-flex items-center gap-4 px-16 py-8 rounded-[2.5rem] font-black text-3xl transition-all transform hover:scale-110 shadow-2xl ${
                theme === 'dark' ? 'bg-white text-[#FF9999]' : 'bg-[#2C2C2C] text-white hover:bg-black'
              }`}
            >
              BUYURTMA BERISH <ArrowRight size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Audio Kurs Foydali Section */}
      <section id="audio-kurs" className={`py-40 px-6 overflow-hidden ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className={`text-6xl md:text-[80px] font-black leading-tight mb-12 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>
                AUDIO KURS <br/> <span className="text-[#FF6B6B]">KIMLAR UCHUN?</span>
              </h2>
              
              <div className="space-y-10">
                {AUDIO_TARGETS.map((target, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-6"
                  >
                    <div className={`mt-1 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${theme === 'dark' ? 'bg-[#FF9999]/10' : 'bg-[#FF6B6B]/10'}`}>
                      <CheckCircle2 className={theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'} size={32} />
                    </div>
                    <p className={`text-3xl md:text-4xl font-raleway font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                      {target}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-[#FF9999]/20 blur-[100px] -z-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop" 
                alt="People Learning" 
                className={`w-full h-auto rounded-[5rem] shadow-2xl border-4 ${theme === 'dark' ? 'border-gray-800' : 'border-white'}`}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Innovatsion Metod Section */}
      <section id="innovatsion" className={`py-40 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#FFF5F5]'}`}>
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.h2 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`text-6xl md:text-[70px] lg:text-[90px] font-black leading-tight mb-20 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}
          >
            INNOVATSION METOD BILAN <br/> <span className="text-[#FF6B6B]">HAYOTINGIZDAGI O‘ZGARISHLAR</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {LIFE_CHANGES.map((change, idx) => (
              <motion.div
                key={idx}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-16 rounded-[4rem] flex flex-col items-center text-center gap-8 border-4 transition-all hover:scale-105 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#FFE4E1] shadow-xl shadow-red-100/50'
                }`}
              >
                <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center ${theme === 'dark' ? 'bg-[#FF9999]/20' : 'bg-[#FFF0F0]'}`}>
                  <Sparkles className={theme === 'dark' ? 'text-[#FF9999]' : 'text-[#FF6B6B]'} size={48} />
                </div>
                <p className={`text-3xl md:text-4xl font-raleway font-black ${theme === 'dark' ? 'text-white' : 'text-[#333333]'}`}>
                  {change}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Spiral Galaxy Section */}
      <section id="spiral" className="min-h-screen galaxy-bg flex flex-col items-center justify-center py-40 relative px-6">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="spiral-ring"
            style={{ width: `${(i + 1) * 300}px`, height: `${(i + 1) * 300}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <div className="relative z-10 text-center mb-24">
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[100px] font-black text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            TEDBOOK: <br/> <span className="text-[#FFD700]">4 TA MUHIM BOSQICH</span>
          </motion.h2>
        </div>

        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center">
          {books.map((src, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-56 md:w-64 md:h-80"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                x: Math.cos((i * Math.PI * 2) / 4) * (window.innerWidth < 768 ? 150 : 300),
                y: Math.sin((i * Math.PI * 2) / 4) * (window.innerWidth < 768 ? 150 : 300),
              }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, delay: i * 0.2 }}
              whileHover={{ scale: 1.1, zIndex: 50 }}
            >
              <img 
                src={src} 
                alt={`Step ${i + 1}`} 
                className="w-full h-full object-cover rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(255,215,0,0.4)] border-4 border-[#FFD700]/30"
              />
            </motion.div>
          ))}
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-[#FFD700] to-[#FF6B6B] rounded-full blur-3xl opacity-60"
          />
        </div>
      </section>

      {/* 5. Order Section */}
      <section id="order" className={`py-40 px-6 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`p-12 md:p-20 rounded-[4rem] shadow-2xl border-4 ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-white'}`}
              >
                <h2 className={`text-6xl md:text-7xl font-black mb-6 leading-none ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>
                  BUYURTMA <span className="text-[#FF6B6B]">BERISH</span>
                </h2>
                <p className={`text-2xl font-raleway mb-16 ${theme === 'dark' ? 'text-gray-400 opacity-70' : 'text-[#555555]'}`}>
                  Formani to'ldiring, mutaxassislarimiz tez orada bog'lanishadi.
                </p>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                        <User size={24} className="text-[#FF6B6B]" /> Ism va familiya
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Jamshid Orifov"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all font-raleway ${
                          theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
                        }`}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                        <Phone size={24} className="text-[#FF6B6B]" /> Telefon raqam
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all font-raleway ${
                          theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                      <MapPin size={24} className="text-[#FF6B6B]" /> Kurs turi
                    </label>
                    <select
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all appearance-none font-raleway cursor-pointer ${
                        theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
                      }`}
                    >
                      <option value="" disabled>Kursni tanlang</option>
                      <option value="Ingliz tili">Ingliz tili</option>
                      <option value="Rus tili">Rus tili</option>
                      <option value="Arab tili">Arab tili</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className={`block text-xl font-black flex items-center gap-3 ${theme === 'dark' ? 'text-gray-300' : 'text-[#333333]'}`}>
                      <MessageSquare size={24} className="text-[#FF6B6B]" /> Izoh
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Qo'shimcha savollaringiz..."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className={`w-full px-8 py-6 rounded-[2.5rem] text-xl outline-none border-4 transition-all resize-none font-raleway ${
                        theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FF9999]' : 'bg-[#FFF0F0] border-[#FFE4E1] text-[#2C2C2C] focus:border-[#FF6B6B]'
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
                    {loading ? <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div> : <>BUYURTMANI YUBORISH <Send size={28} /></>}
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
                <h2 className={`text-6xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>Muvaffaqiyatli!</h2>
                <p className={`text-3xl font-raleway mb-16 ${theme === 'dark' ? 'text-gray-400 opacity-70' : 'text-[#333333]'}`}>Buyurtmangiz qabul qilindi.</p>
                <button onClick={() => setSubmitted(false)} className={`inline-flex items-center gap-3 px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-110 shadow-2xl ${theme === 'dark' ? 'bg-[#FF9999] text-white' : 'bg-[#2C2C2C] text-white hover:bg-black'}`}>
                  <ArrowLeft size={28} /> ORQAGA QAYTISH
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 6. About / Methodology Section */}
      <section id="methodology" className={`py-40 px-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className={`text-6xl md:text-[80px] font-black leading-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-[#2C2C2C]'}`}>METODIKA HAQIDA</h2>
            <p className={`text-3xl font-raleway leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-[#333333]'}`}>
              Tedbook – bu shunchaki kitob emas, bu sizning miyangiz tilni qanday o'rganishiga moslashgan mukammal tizimdir. Biz til o'rganishni "o'qish" emas, balki "his qilish" orqali amalga oshiramiz. Hech qanday murakkab formulalar va tushunarsiz qoidalarsiz, tabiiy ravishda erkin so'zlashuv darajasiga chiqishingizni ta'minlaymiz.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop" alt="Methodology" className="rounded-[4rem] shadow-2xl rotate-3 border-4 border-white" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
