
import { Testimonial, Benefit } from './types';

export const PROBLEMS = [
  "Yillar davomida tillarni o`rganib, haligacha gapirishda qiynalmoqdasiz",
  "Biznes bo`yicha va boshqa onlayn kurslarda o`qimoqchisiz, lekin tilni bilmasligingiz bunga to`sqinlik qilmoqda",
  "Grammatik qoidalar sizni charchatmoqda",
  "Tilni bilmasligingiz sababli ishingizda yuqori lavozimga ko`tarila olmayapsiz",
  "Qiyin va tushunarsiz so`zlarni qayta-qayta yodlash sizni zeriktirmoqda",
  "Rus va ingliz tilini bilmasligingiz tufayli muhim mijozlar bilan ishlash qiynalmoqdasiz",
  "Chet el bestseller kitoblarini o`qishni xohlaysiz, lekin tushunmaysiz",
  "Biznesingiz rivoji uchun xorijiy tillarni mukammal bilish talab etilmoqda",
  "Erkin sayohat qilishni istaysiz, ammo chet tilini bilmasligingiz bunga halaqit qilmoqda",
  "Hamkorlar bilan muzokarada ingliz yoki rus tilida fikringizni tushuntirishda qiynalmoqdasiz"
];

export const AUDIO_TARGETS = [
  "Chet tillarni o`rganishni istaganlar",
  "Barcha o`quvchi va talabalar",
  "Kompaniya hodimlari",
  "Chet elga ishga va o`qishga boruvchilar",
  "Tadbirkor va biznes egalari",
  "Chet elga sayohat qilmoqchi bo`lganlar"
];

export const LIFE_CHANGES = [
  "Chet tillarda 5 oydan so`ng hech qanday muammolarsiz erkin va avtomatik gapirasiz",
  "Yuqori daromadli ishda ishlash imkoniyati",
  "Xorijiy tilni bilganingiz tufayli istalgan joyga erkin sayohat qilishingiz mumkin",
  "Dunyoning TOP mamlakatlarida o`qish va ishlash imkoniyati",
  "Keng qamrovli biznes ochish imkoniyati"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Malika Ahmedova",
    role: "Talaba",
    quote: "Tedbook yordamida 3 oy ichida IELTS darajamni 5.5 dan 7.0 ga ko'tardim. Metodika juda sodda!",
    avatar: "https://picsum.photos/seed/malika/200/200"
  },
  {
    id: 2,
    name: "Javohir Toshpulotov",
    role: "Dasturchi",
    quote: "Grammatikani zerikarli darslarsiz o'rganish mumkinligiga ishonmasdim. Tedbook buni isbotladi.",
    avatar: "https://picsum.photos/seed/javohir/200/200"
  },
  {
    id: 3,
    name: "Sitora Karimova",
    role: "O'qituvchi",
    quote: "Mening o'quvchilarim endi ingliz tilida gapirishdan qo'rqishmaydi. Tavsiya qilaman!",
    avatar: "https://picsum.photos/seed/sitora/200/200"
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Tezkor Natija",
    description: "Ilk haftalardanoq o'zgarishni sezasiz.",
    icon: "Zap"
  },
  {
    id: 2,
    title: "Grammatikasiz Metod",
    description: "Qoidalarni yodlamasdan, tabiy o'rganish.",
    icon: "BookOpen"
  },
  {
    id: 3,
    title: "So'zlashuvga Fokus",
    description: "Asosiy e'tibor jonli muloqotga qaratilgan.",
    icon: "MessageCircle"
  },
  {
    id: 4,
    title: "Vaqtni Tejang",
    description: "Kuniga bor-yo'g'i 30-40 daqiqa kifoya.",
    icon: "Clock"
  }
];

export const CITIES = [
  "Toshkent", "Samarqand", "Buxoro", "Namangan", "Andijon", "Farg'ona", "Xorazm", "Navoiy", "Qashqadaryo", "Surxondaryo", "Jizzax", "Sirdaryo", "Qoraqalpog'iston"
];
