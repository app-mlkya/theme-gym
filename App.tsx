
import React, { useState, useEffect } from 'react';
import { LogoIcon, PRODUCTS, TESTIMONIALS } from './constants';
import { Product } from './types';

// Components
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-2xl font-bold text-[#5D4037] serif-font">مخبز نجوى</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <a href="#" className="hover:text-[#A0522D] transition-colors">الرئيسية</a>
          <a href="#menu" className="hover:text-[#A0522D] transition-colors">المنيو</a>
          <a href="#about" className="hover:text-[#A0522D] transition-colors">عن نجوى</a>
          <a href="#contact" className="hover:text-[#A0522D] transition-colors">اتصل بنا</a>
        </div>

        <button className="bg-[#8B4513] text-white px-6 py-2 rounded-full hover:bg-[#A0522D] transition-all shadow-lg">
          اطلب الآن
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FFF8F0]">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative z-10 text-center md:text-right">
        <h1 className="text-5xl md:text-7xl font-bold text-[#4A3728] leading-tight mb-6">
          خبز يدفئ <span className="text-[#D2691E]">القلب</span> <br />
          ويداعب الحواس
        </h1>
        <p className="text-xl text-[#6D4C41] mb-10 max-w-lg leading-relaxed">
          نحن في مخبز نجوى نؤمن بأن الخبز ليس مجرد غذاء، بل هو لغة من الحب والدفء. نستخدم أجود المكونات الطبيعية لنقدم لكم تجربة لا تُنسى.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#menu" className="bg-[#8B4513] text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#5D4037] transition-all shadow-xl text-center">
            استكشف المنيو
          </a>
          <a href="#about" className="bg-white border-2 border-[#8B4513] text-[#8B4513] px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#FFF8F0] transition-all text-center">
            قصتنا
          </a>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-[#D2B48C] rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
        <img 
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800" 
          alt="مخبوزات طازجة" 
          className="rounded-3xl shadow-2xl w-full object-cover aspect-square md:aspect-[4/5]"
        />
        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#F5DEB3] rounded-full flex items-center justify-center">
              🥖
            </div>
            <div>
              <p className="font-bold text-[#4A3728]">أكثر من ٢٠ نوع</p>
              <p className="text-sm text-gray-500">من المخبوزات اليومية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F5E6D3]">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#8B4513]">
        {product.price} ر.س
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#5D4037] mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        {product.description}
      </p>
      <button className="w-full bg-[#FFF8F0] border border-[#D2B48C] text-[#8B4513] py-2 rounded-lg font-bold hover:bg-[#8B4513] hover:text-white transition-all">
        أضف للسلة
      </button>
    </div>
  </div>
);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'pastry', label: 'معجنات' },
    { id: 'bread', label: 'خبز' },
    { id: 'cake', label: 'كيك' },
    { id: 'savory', label: 'موالح' },
  ];

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-4 serif-font">مخبوزاتنا المختارة</h2>
          <div className="w-24 h-1 bg-[#D2691E] mx-auto mb-6"></div>
          <p className="text-[#6D4C41] max-w-2xl mx-auto">
            نخبز لكم يومياً بكل حب وشغف، لتصلكم مخبوزاتنا طازجة ومقرمشة كما تحبونها.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id 
                ? 'bg-[#8B4513] text-white shadow-lg' 
                : 'bg-[#FFF8F0] text-[#8B4513] hover:bg-[#F5E6D3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24 bg-[#FFF8F0]">
    <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
      <div className="md:w-1/2">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800" 
            alt="مخبز نجوى من الداخل" 
            className="rounded-3xl shadow-2xl z-10 relative"
          />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D2B48C] rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#8B4513] rounded-full blur-3xl opacity-10 -z-10"></div>
        </div>
      </div>
      <div className="md:w-1/2">
        <span className="text-[#D2691E] font-bold tracking-widest uppercase mb-4 block">سر الجودة</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A3728] mb-8 serif-font leading-tight">
          بدأت قصتنا بحبة قمح واحدة وشغف كبير.
        </h2>
        <div className="space-y-6 text-[#6D4C41] leading-relaxed text-lg">
          <p>
            تأسس "مخبز نجوى" ليكون الوجهة الأولى لكل من يبحث عن المذاق الأصيل والجودة التي لا تضاهى. نحن لا نستخدم أي مواد حافظة أو إضافات صناعية.
          </p>
          <p>
            كل رغيف خبز وكل قطعة معجنات تمر بمراحل دقيقة من العجن والتخمير الطبيعي لضمان حصولكم على أفضل قوام وألذ نكهة.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-3xl font-bold text-[#8B4513]">١٠٠٪</p>
              <p className="text-sm font-medium">مكونات طبيعية</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#8B4513]">طازج</p>
              <p className="text-sm font-medium">يخبز يومياً</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-[#4A3728] mb-16 serif-font">ماذا يقول عملاؤنا؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map(t => (
          <div key={t.id} className="bg-[#FFF8F0] p-8 rounded-2xl border border-[#F5E6D3] relative">
            <div className="absolute -top-6 left-8 text-4xl text-[#D2691E]">"</div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < t.rating ? 'text-yellow-500' : 'text-gray-300'}>★</span>
              ))}
            </div>
            <p className="text-[#6D4C41] mb-6 italic">"{t.comment}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <span className="font-bold text-[#4A3728]">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24 bg-[#4A3728] text-white">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-8 serif-font">تواصل معنا</h2>
        <p className="text-[#D2B48C] mb-12 text-lg">
          هل لديك مناسبة خاصة؟ أو ترغب في طلب كمية كبيرة؟ نحن هنا لخدمتك.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">📍</div>
            <div>
              <p className="font-bold">موقعنا</p>
              <p className="text-gray-300 text-sm">شارع التحلية، الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">📞</div>
            <div>
              <p className="font-bold">رقم الهاتف</p>
              <p className="text-gray-300 text-sm">+966 50 123 4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">✉️</div>
            <div>
              <p className="font-bold">البريد الإلكتروني</p>
              <p className="text-gray-300 text-sm">hello@nagwa-bakery.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-3xl text-[#4A3728] shadow-2xl">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">الاسم بالكامل</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513]" placeholder="أدخل اسمك" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">رقم الجوال</label>
            <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513]" placeholder="05XXXXXXXX" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">الرسالة</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B4513]" placeholder="كيف يمكننا مساعدتك؟"></textarea>
          </div>
          <button className="w-full bg-[#8B4513] text-white py-4 rounded-xl font-bold hover:bg-[#5D4037] transition-all shadow-lg">
            إرسال الطلب
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#2D1B0F] text-white py-12 border-t border-white/5">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <LogoIcon />
        <span className="text-2xl font-bold serif-font text-[#F5DEB3]">مخبز نجوى</span>
      </div>
      
      <div className="flex gap-8 text-sm">
        <a href="#" className="hover:text-[#F5DEB3]">سياسة الخصوصية</a>
        <a href="#" className="hover:text-[#F5DEB3]">الشروط والأحكام</a>
        <a href="#" className="hover:text-[#F5DEB3]">الشحن والتوصيل</a>
      </div>

      <div className="flex gap-4">
        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-colors">📱</a>
        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-colors">📸</a>
        <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#8B4513] transition-colors">🐦</a>
      </div>
    </div>
    <div className="text-center mt-12 text-xs text-gray-500">
      جميع الحقوق محفوظة © ٢٠٢٤ مخبز نجوى - صنع بحب
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
