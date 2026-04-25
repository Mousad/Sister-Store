export interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  category: 'sudanese-top' | 'abaya';
  images: string[];
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  featured?: boolean;
  bestSeller?: boolean;
  discount?: number;
}

export const products: Product[] = [
  // ===== التوبات السودانية =====
  {
    id: 1,
    name: "توب  كلاسيكي",
    nameEn: "Classic Sudanese Top",
    price: 450,
    originalPrice: 550,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/3d/f7/42/3df7423e0eaf379672498835900f4351.jpg",
      "https://i.pinimg.com/736x/6d/e7/af/6de7af247cc7bf3fd612dec2bf343d81.jpg",
      "https://i.pinimg.com/736x/3d/f7/42/3df7423e0eaf379672498835900f4351.jpg",
    ],
    description: "توب سوداني كلاسيكي مصنوع من أجود أنواع الأقمشة، يجمع بين الأصالة والعصرية بتصميم أنيق يناسب كل المناسبات.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "أبيض", hex: "#FFFFFF" },
      { name: "أزرق سماوي", hex: "#87CEEB" },
      { name: "وردي فاتح", hex: "#FFB6C1" },
    ],
    featured: true,
    bestSeller: true,
    discount: 18,
  },
  {
    id: 2,
    name: "توب سوداني مطرز",
    nameEn: "Embroidered Sudanese Top",
    price: 650,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/fd/a0/91/fda091f1a1cfa5029dc3272674cdd585.jpg",
      "https://i.pinimg.com/736x/3a/d0/e9/3ad0e9c8569a1d7ab1046e8b7a4a7144.jpg",
      "https://i.pinimg.com/736x/fd/a0/91/fda091f1a1cfa5029dc3272674cdd585.jpg",
    ],
    description: "توب سوداني مطرز يدوياً بخيوط ذهبية وفضية، تحفة فنية تعكس جمال التراث السوداني الأصيل مع لمسة عصرية فاخرة.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أبيض بتطريز ذهبي", hex: "#FFFFF0" },
      { name: "كريمي بتطريز فضي", hex: "#FFFDD0" },
    ],
    featured: true,
    bestSeller: false,
  },
  {
    id: 3,
    name: "توب  كاجوال",
    nameEn: "Casual Sudanese Top",
    price: 380,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/eb/97/c6/eb97c6c7d1fbef63a0f37566b3eb27b9.jpg",
      "https://i.pinimg.com/736x/9a/19/fa/9a19faf390c22e2aaa8ee0030bf0932b.jpg",
    ],
    description: "توب سوداني عصري للاستخدام اليومي، مريح وخفيف الوزن مع تصميم أنيق يناسب الخروجات اليومية والمناسبات البسيطة.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "أبيض", hex: "#FFFFFF" },
      { name: "رمادي فاتح", hex: "#D3D3D3" },
      { name: "بيج", hex: "#F5F5DC" },
    ],
    featured: false,
    bestSeller: true,
  },
  {
    id: 4,
    name: "توب سوداني فاخر",
    nameEn: "Luxury Sudanese Top",
    price: 750,
    originalPrice: 900,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/9e/8a/97/9e8a9767928a7bebac7260b26ecc9f9b.jpg",
      "https://i.pinimg.com/736x/ed/de/11/edde11866562d9af98767745f3b78aac.jpg",
    ],
    description: "توب سوداني فاخر من أجود أنواع الشيفون والحرير الطبيعي، مثالي للأفراح والمناسبات الفخمة.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "ذهبي", hex: "#FFD700" },
      { name: "بني فاتح", hex: "#D2B48C" },
      { name: "خمري", hex: "#9b3c52" },
    ],
    featured: true,
    bestSeller: false,
    discount: 17,
  },
  {
    id: 5,
    name: "توب سوداني مزخرف",
    nameEn: "Ornamented Sudanese Top",
    price: 550,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/60/76/24/607624b07a7e4c5182a8e12cfeba31b6.jpg",
      "https://i.pinimg.com/736x/a3/11/f4/a311f4cc900f24923f4cdbafead59239.jpg",
    ],
    description: "توب سوداني بزخارف تقليدية مستوحاة من الفن السوداني الأصيل، يجسّد الهوية الثقافية بأسلوب عصري.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "بيج بزخارف", hex: "#F5F5DC" },
      { name: "وردي بزخارف", hex: "#FFB6C1" },
    ],
    featured: false,
    bestSeller: true,
  },
  {
    id: 6,
    name: "توب  أبيض ناعم",
    nameEn: "Soft White Sudanese Top",
    price: 420,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/1200x/cd/c8/32/cdc8323278086732ca0fc2f2128d03e3.jpg",
      "https://i.pinimg.com/736x/b9/15/06/b91506553a83d0db6a69eef73ecb380e.jpg",
    ],
    description: "توب سوداني بلون أبيض ناصع ونسيج ناعم، يعطي إطلالة نقية وأنيقة تناسب جميع الأوقات.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "أبيض ناصع", hex: "#FFFFFF" },
      { name: "كريمي", hex: "#FFFDD0" },
    ],
    featured: false,
    bestSeller: false,
  },
  {
    id: 7,
    name: "توب سوداني  أنيق",
    nameEn: "Simple Elegant Sudanese Top",
    price: 350,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/1c/a9/79/1ca9799a118fef79a513b7ebb1e4e9a0.jpg",
      "https://i.pinimg.com/736x/50/1e/9b/501e9b1c0169a60b5e3409d3bc3aea82.jpg",
    ],
    description: "توب سوداني بسيط وأنيق، التصميم البسيط يجعله متعدد الاستخدامات ويناسب مختلف المناسبات.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أسود", hex: "#000000" },
      { name: "كحلي", hex: "#000080" },
      { name: "رمادي", hex: "#808080" },
    ],
    featured: false,
    bestSeller: false,
  },
  {
    id: 8,
    name: "توب سوداني للأفراح",
    nameEn: "Wedding Sudanese Top",
    price: 680,
    originalPrice: 800,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/6a/3f/1b/6a3f1bb9179a2e584888cffba230da41.jpg",
      "https://i.pinimg.com/736x/5a/c7/f8/5ac7f85dffccb6561454f6282160c390.jpg",
    ],
    description: "توب سوداني خاص للأفراح والمناسبات الكبيرة، مطرز بالترتر والخرز ليضفي إطلالة ملكية لا تُنسى.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "ذهبي لامع", hex: "#FFD700" },
      { name: "فضي لامع", hex: "#C0C0C0" },
    ],
    featured: true,
    bestSeller: true,
    discount: 15,
  },
  {
    id: 9,
    name: "توب سوداني ميرون",
    nameEn: "Meroon Sudanese Top",
    price: 590,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/fe/cf/f2/fecff2d7b3f4fe4336e408ecf161d6c0.jpg",
      "https://i.pinimg.com/736x/57/7d/25/577d25792845033cc6475f798d90c66b.jpg",
    ],
    description: "توب سوداني بلون الميرون الأنيق، مزين بتطريز يدوي دقيق على الياقة والأكمام.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "خمري غامق", hex: "#722F37" },
      { name: "بني أرجواني", hex: "#9b3c52" },
    ],
    featured: false,
    bestSeller: true,
  },
  {
    id: 10,
    name: "توب سوداني دانتيل",
    nameEn: "Lace Sudanese Top",
    price: 720,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/8c/47/34/8c4734f0bfa8202c5e0ca0188c52078a.jpg",
      "https://i.pinimg.com/736x/c8/99/b8/c899b844c81f51150fe4e7d08128779a.jpg",
     ,
    ],
    description: "توب سوداني فاخر مصنوع من الدانتيل الأصلي المستورد، قطعة استثنائية للمناسبات الراقية.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أبيض دانتيل", hex: "#FFFFF0" },
      { name: "أسود دانتيل", hex: "#1C1C1C" },
      { name: "بيج دانتيل", hex: "#F5F5DC" },
    ],
    featured: true,
    bestSeller: false,
  },

  // ===== العبايات =====
  {
    id: 11,
    name: "عباية  كلاسيكية",
    nameEn: "Classic Black Abaya",
    price: 850,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/e9/88/28/e98828d0a49d59ccce7474d279ee99b7.jpg",
      "https://i.pinimg.com/webp/1200x/47/e1/6c/47e16c15055fce5af8c5ff9148c75f41.webp",
      
    ],
    description: "عباية  كلاسيكية من أجود أنواع الكريب المطاط، بقصة مستقيمة أنيقة تناسب جميع المناسبات.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "أسود", hex: "#000000" },
      { name: "رمادي داكن", hex: "#333333" },
    ],
    featured: true,
    bestSeller: true,
  },
  {
    id: 12,
    name: "عباية مطرزة ذهبية",
    nameEn: "Golden Embroidered Abaya",
    price: 1200,
    originalPrice: 1400,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/64/b9/0b/64b90bcf7cad9b9a7e9450d33f938742.jpg",
      "https://i.pinimg.com/736x/a9/b0/24/a9b0246d3901b5d5d78d6a3a0467778d.jpg",
      "https://i.pinimg.com/736x/64/b9/0b/64b90bcf7cad9b9a7e9450d33f938742.jpg",
    ],
    description: "عباية فاخرة بتطريز ذهبي يدوي على الأطراف والأكمام، تجسّد الأناقة الشرقية بأبهى صورها.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أسود بتطريز ذهبي", hex: "#000000" },
      { name: "كحلي بتطريز ذهبي", hex: "#000080" },
    ],
    featured: true,
    bestSeller: false,
    discount: 14,
  },
  {
    id: 13,
    name: "عباية فلوي عصرية",
    nameEn: "Modern Flowy Abaya",
    price: 950,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/13/70/9f/13709f3b1e7f346f4fcc4ecab9b9e52a.jpg",
      "https://i.pinimg.com/736x/e7/6a/44/e76a4444650325447917061bebf7a05b.jpg",
    ],
    description: "عباية شيفون فلوي بقطعة مميزة تتمايل بخفة مع الحركة، مثالية للخروجات الراقية والحفلات.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "أسود", hex: "#000000" },
      { name: "برقوقي", hex: "#8B4513" },
      { name: "زيتي", hex: "#556B2F" },
    ],
    featured: false,
    bestSeller: true,
  },
  {
    id: 14,
    name: "عباية بسيطة أنيقة",
    nameEn: "Simple Elegant Abaya",
    price: 780,
    originalPrice: 900,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/74/2b/61/742b61e4519e8de74948369dc2b52d4d.jpg",
      "https://i.pinimg.com/736x/c7/54/fa/c754fa08e8c47eac20e59336a38e0487.jpg",
    ],
    description: "عباية بسيطة ذات تصميم أنيق ونظيف، الجودة العالية تتحدث عن نفسها في كل تفصيلة.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "بيج فاتح", hex: "#F5F5DC" },
      { name: "رمادي فاتح", hex: "#D3D3D3" },
      { name: "أبيض", hex: "#FFFFFF" },
    ],
    featured: false,
    bestSeller: false,
    discount: 13,
  },
  {
    id: 15,
    name: "عباية فاخرة بنقشة",
    nameEn: "Luxury Patterned Abaya",
    price: 1100,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/78/b7/bc/78b7bce1176730ddda3392f0a57c208d.jpg",
      "https://i.pinimg.com/736x/4b/f2/a2/4bf2a2efb33a861386475456771ff642.jpg",
      "https://i.pinimg.com/736x/78/b7/bc/78b7bce1176730ddda3392f0a57c208d.jpg",
    ],
    description: "عباية بنقشة عصرية راقية، تجمع بين الأصالة والحداثة في تصميم يستحق الاقتناء.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أسود بنقشة رمادية", hex: "#1C1C1C" },
      { name: "كحلي بنقشة فضية", hex: "#1B2A4A" },
    ],
    featured: true,
    bestSeller: false,
  },
  {
    id: 16,
    name: "عباية كريمي فاخرة",
    nameEn: "Cream Luxury Abaya",
    price: 880,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/fc/56/1e/fc561e206538db965a75f69f3251132c.jpg",
      "https://i.pinimg.com/736x/8b/e7/58/8be758e8e02dee5ac351520620d2193a.jpg",
    ],
    description: "عباية بلون الكريمي الراقي من قماش الكريب الفاخر، تعطي إطلالة ملكية ناعمة.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "كريمي", hex: "#FFFDD0" },
      { name: "أبيض عاجي", hex: "#FFFFF0" },
    ],
    featured: false,
    bestSeller: true,
  },
  {
    id: 17,
    name: "عباية مزخرفة بالترتر",
    nameEn: "Sequin Abaya",
    price: 1050,
    originalPrice: 1200,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/0e/ec/aa/0eecaa5ee6a5a1481b0b8bd280987b29.jpg",
      "https://i.pinimg.com/736x/d8/2c/fb/d82cfb0849c7b6a3aaa6178d440d711d.jpg",
      "https://i.pinimg.com/736x/0e/ec/aa/0eecaa5ee6a5a1481b0b8bd280987b29.jpg",
    ],
    description: "عباية مزينة بالترتر اللامع على الأكمام والياقة، تجعلكِ نجمة الحفل في كل مناسبة.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أسود بترتر ذهبي", hex: "#000000" },
      { name: "أسود بترتر فضي", hex: "#111111" },
    ],
    featured: true,
    bestSeller: true,
    discount: 13,
  },
  {
    id: 18,
    name: "عباية تراثية",
    nameEn: "Heritage Abaya",
    price: 920,
    category: "abaya",
    images: [
      "https://img.fantaskycdn.com/dc0c32aeb68f63cfe47dd497637d133a_1920x.jpeg",
      "https://img.fantaskycdn.com/ea38ff25ac357b217e17c6a9826b13e7_720x.jpeg",
    ],
    description: "عباية مستوحاة من الموروث الثقافي السوداني الأصيل، تحتضن كل تفصيلة فيها قيمة تراثية عميقة.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "بني تراثي", hex: "#8B4513" },
      { name: "أخضر تراثي", hex: "#2D4A1E" },
    ],
    featured: false,
    bestSeller: false,
  },
  {
    id: 19,
    name: "عباية أفراح",
    nameEn: "Wedding Abaya",
    price: 990,
    originalPrice: 1150,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/35/b3/1f/35b31fb9221580670a84605012597410.jpg",
      "https://i.pinimg.com/736x/f1/90/49/f19049b069649dac369253cf50d036c9.jpg",
      "https://i.pinimg.com/736x/35/b3/1f/35b31fb9221580670a84605012597410.jpg",
    ],
    description: "عباية خاصة للأفراح والمناسبات الكبرى، تجمع بين الوقار والفخامة في تصميم لا مثيل له.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أبيض ملكي", hex: "#FAF9F6" },
      { name: "فضي", hex: "#C0C0C0" },
      { name: "ذهبي فاتح", hex: "#FFD700" },
    ],
    featured: true,
    bestSeller: false,
    discount: 14,
  },
  {
    id: 20,
    name: "عباية دانتيل",
    nameEn: "Lace Abaya",
    price: 1150,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/43/6d/95/436d95540165139d5a0fb6d9e6f51ad3.jpg",
      "https://i.pinimg.com/736x/4a/07/8a/4a078a313d5540b6f0894af1d4ceba58.jpg",
      "https://i.pinimg.com/736x/43/6d/95/436d95540165139d5a0fb6d9e6f51ad3.jpg",
    ],
    description: "عباية دانتيل فاخرة بطبقات متعددة تضيف عمقاً وجمالاً فريداً، مثالية لأرقى المناسبات.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "أسود دانتيل", hex: "#000000" },
      { name: "بيج دانتيل", hex: "#F5F5DC" },
    ],
    featured: true,
    bestSeller: true,
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured).slice(0, 6);
export const getBestSellers = () => products.filter((p) => p.bestSeller).slice(0, 4);
export const getSudaneseTops = () => products.filter((p) => p.category === "sudanese-top");
export const getAbayas = () => products.filter((p) => p.category === "abaya");
export const getProductById = (id: number) => products.find((p) => p.id === id);
export const getRelatedProducts = (id: number, category: string) =>
  products.filter((p) => p.id !== id && p.category === category).slice(0, 4);
