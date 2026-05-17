import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Star,
  Truck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getFeaturedProducts, getBestSellers } from "../data/products";
import { ProductCard } from "../components/ProductCard";

const heroSlides = [
  {
    image:
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/672999014_17897176668438818_8822519780005888371_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=Mzg4MjYwNjc5NzEzMDk4NDc5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=r4cl501TjSsQ7kNvwFTDE1q&_nc_oc=Adp3E1omjNbepM4Jtqwoy2M_rOxM8zLE6QGc1VwoHiEkIvNCbsxlcLyctiXCx-i-Qjc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=VXJXfsYbsGa1fN9uDCECIw&_nc_ss=7a22e&oh=00_Af5sHHTmGIK2SVjmp4Wg8bJ0FuBSJ_AB1fKH-M1VnuYNfQ&oe=6A0F06D6",
    title: "أناقة سودانية",
    subtitle: "بطابع عصري",
    tag: "Sabah Line",
  },
  {
    image:
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/671744343_17897652786438818_1082259666253622743_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzg4NDY4MzE1NTIxNDYxMjY4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=BPcAydmZIbcQ7kNvwEpUqcT&_nc_oc=AdrCHyj8uO0CchaWteDEnxllLDeZqlTavWB2gCmgMUcHSQxS6g-7coJe4HqBgIGU5jQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=VXJXfsYbsGa1fN9uDCECIw&_nc_ss=7a22e&oh=00_Af4rbkUQIVH7FhG1s8n5o-43j4lywqiVpWxUEN0I_Y7wxQ&oe=6A0EFFC8",
    title: "عبايات",
    subtitle: "بطابع عصري",
    tag: "تشكيلة جديدة",
  },
];

  const cards = [
  {
    img: "https://i.pinimg.com/736x/a7/cc/1f/a7cc1f74349970760721385e310e4a86.jpg",
    icon: faInstagram,
    color: "text-pink-500",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/736x/56/ee/29/56ee293e90d0fa8124dde5b809abf52d.jpg",
    icon: faFacebook,
    color: "text-blue-600",
    link: "#",
  },
  {
    img: "https://i.pinimg.com/1200x/83/c8/e0/83c8e00c70c3295487ee890be79e9527.jpg",
    icon: faWhatsapp,
    color: "text-green-500",
    link: "#",
  },
];


const lookbookImages = [
  "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/670872159_17896726917438818_3587299126447900209_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=Mzg4MDUyODY3NDA2NzUwNjk2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=dAPAy8FREwAQ7kNvwFO3nQB&_nc_oc=AdoHm7aoqQu7aWOJliejihz0r3kuzFl5I12fEefs9iM6XFRZSIXz0qpVMbjjjBkAkSI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=egYVHIioM0p1Q3zoBoweVw&_nc_ss=7a22e&oh=00_Af6c8xQMOHON9eYSIQnpvm9xjEYPi-0sbHETzJd_v6n4bg&oe=6A0F0495",
  "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/671744343_17897652786438818_1082259666253622743_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzg4NDY4MzE1NTIxNDYxMjY4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=BPcAydmZIbcQ7kNvwEpUqcT&_nc_oc=AdrCHyj8uO0CchaWteDEnxllLDeZqlTavWB2gCmgMUcHSQxS6g-7coJe4HqBgIGU5jQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=bz4LN-zJ_CkjGZ5C1Md9GA&_nc_ss=7a22e&oh=00_Af6LNykfUeap44MFe9x06dmhDyOfaBRnp77l2XfbO2el-w&oe=6A0EFFC8",
  "https://i.pinimg.com/736x/77/fb/f0/77fbf05c60b971f72bab0e3a66e1808c.jpg",
  "https://i.pinimg.com/1200x/9a/f0/31/9af03173d4af47a496c40dae179a6b29.jpg",
  "https://i.pinimg.com/736x/50/22/fb/5022fb49782a10831a3e695417a3f57c.jpg",
  "https://i.pinimg.com/1200x/b8/11/7b/b8117b569383cd7958fd35197d05e6a5.jpg",
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featured = getFeaturedProducts();
  const bestSellers = getBestSellers();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen">
      {/* ======= HERO SECTION ======= */}
      <section className="relative h-[89vh] min-h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <span className="inline-block bg-[#9b3c52] text-white text-sm px-4 py-1.5 mb-4 tracking-widest uppercase rounded-sm">
                {heroSlides[currentSlide].tag}
              </span>
              <h1
                className="text-white mb-2"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                {heroSlides[currentSlide].title}
              </h1>
              <h2
                className="text-[#f5c2c2] mb-8"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 3rem)",
                  fontWeight: 300,
                }}
              >
                {heroSlides[currentSlide].subtitle}
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/sudanese-top"
                  className="bg-[#9b3c52] text-white px-8 py-3.5 hover:bg-[#7d2f42] transition-all duration-300 text-sm tracking-wide flex items-center gap-2 group"
                >
                  تسوق الآن
                  <ArrowLeft
                    size={16}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/offers"
                  className="border-2 border-white text-white px-8 py-3.5 hover:bg-white hover:text-[#9b3c52] transition-all duration-300 text-sm tracking-wide"
                >
                  العروض الحصرية
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "bg-[#9b3c52] w-8 h-2"
                  : "bg-white/50 w-2 h-2"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ======= FEATURES BAR ======= */}
      <section className="bg-[#f5f5f5] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Truck, text: "شحن سريع" },
              { icon: ShieldCheck, text: "جودة عالية" },
              { icon: Star, text: "منتجات أصلية" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center gap-2 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <Icon size={32} className="text-[#9b3c52]" />
                <span className="text-gray-700 text-sm font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CATEGORIES ======= */}
      <section className="py-1 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#9b3c52] text-3xl font-bold">الأقسام</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          {/* Sudanese Top */}
          <Link
            to="/sudanese-top"
            className="group relative overflow-hidden h-[240px] rounded-[8px] block"
          >
            <img
              src="https://i.pinimg.com/736x/c2/45/fb/c245fb9abd87a53cbef16b59f85c55d2.jpg "
              alt="توب سوداني"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-8 right-2">
              <h3 className="text-[#fcf7f4] text-[22px] font-bold mb-10">
               عبايات خليجي 
              </h3>

              <span className="inline-flex items-center gap-2 text-white text-sm border border-white/50 px-2 py-1 rounded-[7px] group-hover:bg-white group-hover:text-[#9b3c52] transition-all">
                تسوق <ArrowLeft size={8} />
              </span>
            </div>
          </Link>

          {/* Abayas */}
          <Link
            to="/abayas"
            className="group relative overflow-hidden h-[240px] rounded-[8px] block"
          >
            <img
              src="https://i.pinimg.com/736x/05/48/56/054856c677be36fd5bdcac412c449a4e.jpg"
              alt="عبايات"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-8 right-4">
              <h3 className="text-[#fcf7f4] text-[22px] font-bold mb-10">
               عبايات
              </h3>

              <span className="inline-flex items-center gap-2 text-white text-sm border border-white/50 px-2 py-1 rounded-[7px] group-hover:bg-white group-hover:text-[#9b3c52] transition-all">
                تسوق <ArrowLeft size={8} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ======= FEATURED PRODUCTS ======= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-[#9b3c52] text-3xl font-bold">
                المنتجات المميزة
              </h2>
            </div>
            <Link
              to="/sudanese-top"
              className="text-[#9b3c52] text-sm flex items-center gap-1 hover:gap-2 transition-all"
            >
              عرض <ArrowLeft size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ======= BANNER ======= */}
      <section className="relative overflow-hidden bg-[#420000] py-7 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-20 w-60 h-60 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://scontent.fcai19-7.fna.fbcdn.net/v/t51.82787-15/658054208_17894199384438818_5563236726400410199_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=d83B1lWX0oQQ7kNvwGoDcwN&_nc_oc=AdoeVlLO3PoFyAAKsJ-5Z7Wml8gzH9Ei9tIOq39Krfl4JfgmaRuVS7WTzS_xC-AFtIk&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=e1YssV_DRCSLUPT9dVw_zA&_nc_ss=7b2a8&oh=00_Af4jbFFemrI6umerffhn6yVSJIjXDZvbVWY5eBxyieUr2g&oe=6A0F21C1"
                alt="عروض"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -top-4 -left-4 bg-white text-[#9b3c52] w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl">
                <span className="text-2xl font-black leading-none">25%</span>
                <span className="text-xs">خصم</span>
              </div>
            </div>
            <div>
              <h2 className="text-white text-4xl font-bold mb-4">
                خصم يصل إلى 25%
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                على مجموعة مختارة من التوبات السودانية والعبايات الفاخرة. لا
                تفوتي الفرصة!
              </p>
              <Link
                to="/offers"
                className="inline-flex items-center gap-2 bg-white text-[#9b3c52] px-8 py-3.5 font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                تسوق العروض <ArrowLeft size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======= BEST SELLERS ======= */}
      <section className="py-20 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#9b3c52] text-sm tracking-widest uppercase mb-2">
              الأعلى طلباً
            </p>
            <h2 className="text-gray-900 text-3xl font-bold">الأكثر مبيعاً</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ======= LOOKBOOK / GALLERY ======= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#9b3c52] text-sm tracking-widest uppercase mb-2">
              إلهام الأناقة
            </p>
            <h2 className="text-gray-900 text-3xl font-bold">معرض الصور</h2>
            <p className="text-gray-500 mt-2 text-sm">Sabah Line | Abayas | تشكيلة 2026</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {lookbookImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden group cursor-pointer ${
                  i === 0 ? "md:row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`صورة ${i + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "h-full" : "aspect-square"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======= ABOUT TEASER ======= */}
   <section className="py-20 px-6 bg-[#f5f5f5]">
  <div className="max-w-7xl mx-auto">

    <div className="relative overflow-hidden group">

      {/* Image */}
      <img
        src="https://scontent.fcai19-7.fna.fbcdn.net/v/t51.82787-15/660310850_17894205138438818_5432033328692160044_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ab6MY_dK2P4Q7kNvwE9ftk9&_nc_oc=Adqz7bCtdEASnb81_TiTlF2QKtmtKZ1LbIj9IFgHPzbHlynDkJRsKsoCVnZD9LFa6Hw&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=Mjjv9waJNXSLKcXyFH7u7g&_nc_ss=7b2a8&oh=00_Af73h3VSOf5EqCM72XrKeOTC5oOgohKoYRLouE8bZGIAGw&oe=6A0F2C00"
        alt="عن Sister Store"
        className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">

        <div className="text-white max-w-xl">

          <p className="text-[#f5c2c2] text-sm tracking-widest uppercase mb-3">
            قصتنا
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
           احدث كوليكشن عبايات السودانى
          </h2>

          <p className="text-white/70 mb-6 text-sm md:text-base">
             Sabah Line | Abayas   هي أكثر من مجرد متجر، نحن نحتفل بجمال المرأة السودانية
          </p>

          {/* Button */}
          <Link
            to="/about"
            className="inline-flex items-center justify-center bg-[#9b3c52] hover:bg-[#7d2f42] text-white px-6 py-3 text-sm font-semibold transition"
          >
            من نحن
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ======= TESTIMONIALS ======= */}
    <section className="py-16 bg-[#9b3c52]/5 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-10">
      <h2 className="text-gray-900 text-2xl font-bold">
        آراء عميلاتنا
      </h2>
    </div>

    {/* Scroll Container */}
    <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
      
      {[
        {
          name: "أميرة محمد",
          text: "أجمل توب سوداني اشتريته في حياتي! الخامة رائعة والتطريز يدوي حقيقي. شكراً Sister Store",
          rating: 5,
        },
        {
          name: "سارة عبد الله",
          text: "العباية المطرزة فوق التوقعات، الشحن سريع والتغليف أنيق جداً. سأتسوق منهم دائماً",
          rating: 5,
        },
        {
          name: "نور الإيمان",
          text: "متجر محترف ومنتجات أصلية. الجودة ممتازة والأسعار معقولة مقارنة بالجودة.",
          rating: 5,
        },
        {
          name: "علوية محمد",
          text: "متجر محترف ومنتجات أصلية. الجودة ممتازة والأسعار معقولة مقارنة بالجودة.",
          rating: 5,
        },
      ].map((review, i) => (
        
        <div
          key={i}
          className="min-w-[280px] md:min-w-[320px] bg-white p-8 snap-center"
        >
          
          <p className="text-gray-600 leading-relaxed mb-4 text-sm">
            "{review.text}"
          </p>

          <div className="flex gap-1 mb-4">
            {Array(review.rating)
              .fill(0)
              .map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className="text-[#9b3c52] fill-[#9b3c52]"
                />
              ))}
          </div>

          <p className="text-gray-800 font-semibold text-sm">
            {review.name}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>

      <section className="py-20 px-6 bg-[#f5f5f5]">
  <div className="max-w-7xl mx-auto text-center mb-10">

    <p className="text-[#9b3c52] text-sm tracking-widest uppercase mb-2">
      موقعنا
    </p>

    <h2 className="text-3xl font-bold text-gray-900">
     مصر القاهرة
    </h2>

    <p className="text-gray-600 mt-3">
      يمكنك زيارتنا أو معرفة موقعنا بسهولة عبر الخريطة
    </p>

  </div>

  {/* Map */}
  <div className="w-full h-[250px] overflow-hidden shadow-md border">
 <iframe
  title="Google Map - Abu Dhabi"
  src="https://www.google.com/maps?q=Abu%20Dhabi%2C%20United%20Arab%20Emirates&output=embed"
  width="100%"
  height="100%"
  loading="lazy"
  className="w-full h-full"
></iframe>
  </div>
</section>

 <section className="py-10 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">

         <div className="grid grid-cols-3 gap-4">
  {cards.map((item, i) => (
    <Link key={i} to={item.link} className="relative group ">

      {/* Image */}
      <img
        src={item.img}
        className="w-full h-32 object-cover "
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/40  group-hover:opacity-100 transition" />

      {/* Icon center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <FontAwesomeIcon
          icon={item.icon}
          className="text-[#9b3c52] text-2xl  transition"
        />
      </div>

    </Link>
  ))}
</div>

      </div>
    </section>

      <Link
      href="https://wa.me/+201019715494"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="h-8 w-8" />
    </Link>
     
    </div>
  );
}
