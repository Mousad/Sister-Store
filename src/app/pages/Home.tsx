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
      "https://i.pinimg.com/736x/03/15/6a/03156a9661c467b01622149c64555a44.jpg",
    title: "أناقة سودانية",
    subtitle: "بطابع عصري",
    tag: "Toob For Less",
  },
  {
    image:
      "https://i.pinimg.com/736x/05/84/f7/0584f7b0cdfc4fd3319752f34cd1af26.jpg",
    title: "توب جرتك",
    subtitle: "احدث كوليكشن للتياب السودانى   ",
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
  "https://i.pinimg.com/736x/5f/39/30/5f3930cbf01aeab6cb1aee3b36d0d0b3.jpg",
  "https://i.pinimg.com/736x/e8/02/15/e80215d33bb67b8b488b6f693257c52b.jpg",
  "https://i.pinimg.com/736x/64/51/06/6451065373b1d8fea392a87b6b23e87e.jpg",
  "https://i.pinimg.com/736x/5f/33/57/5f33577386775cd77041ef5fc92d71b2.jpg",
  "https://i.pinimg.com/1200x/1f/fb/79/1ffb79dc33b0f447884320d9b4cbd3c3.jpg",
  "https://i.pinimg.com/736x/7b/9d/62/7b9d62725fecafe4d894588ffcbbcb49.jpg",
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
              src="https://i.pinimg.com/736x/03/15/6a/03156a9661c467b01622149c64555a44.jpg"
              alt="توب سوداني"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-8 right-2">
              <h3 className="text-[#fcf7f4] text-[22px] font-bold mb-10">
                التياب سوداني
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
              src="https://i.pinimg.com/736x/9a/13/3d/9a133df286b5f71f8e86ced85c8e5238.jpg"
              alt="عبايات"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-8 right-4">
              <h3 className="text-[#fcf7f4] text-[22px] font-bold mb-10">
                توب عرس
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
      <section className="relative overflow-hidden bg-[#9b3c52] py-7 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 left-20 w-60 h-60 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758738181122-73379c806154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
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
            <p className="text-gray-500 mt-2 text-sm">Toob For Less | تشكيلة 2026</p>
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
        src="https://i.pinimg.com/1200x/f1/2f/d0/f12fd0db2cad9cd224ca46e0043a276b.jpg"
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
           احدث كوليكشن للتياب السودانى
          </h2>

          <p className="text-white/70 mb-6 text-sm md:text-base">
              TOOB FOR LESS    هي أكثر من مجرد متجر، نحن نحتفل بجمال المرأة السودانية
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
            <h2 className="text-gray-900 text-2xl font-bold">آراء عميلاتنا</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
                name: " علوية محمد",
                text: "متجر محترف ومنتجات أصلية. الجودة ممتازة والأسعار معقولة مقارنة بالجودة.",
                rating: 5,
              },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8">
                
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
  title="Google Map - Cairo"
  src="https://www.google.com/maps?q=Cairo%2C%20Egypt&output=embed"
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
      href="https://wa.me/+249909167743"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="h-8 w-8" />
    </Link>
     
    </div>
  );
}
