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
      "https://i.pinimg.com/736x/d3/d5/f3/d3d5f3f622302aa024a90fa584de0dd4.jpg",
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
      "https://i.pinimg.com/736x/27/25/f7/2725f77499619b709d2bc17c3f858fd1.jpg",
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
      "https://i.pinimg.com/736x/ea/68/0f/ea680f031a334fb37c97ca0dc7a96716.jpg",
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
      "https://i.pinimg.com/736x/05/84/f7/0584f7b0cdfc4fd3319752f34cd1af26.jpg",
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
      "https://i.pinimg.com/736x/7b/84/15/7b8415dfcd4e95fd3c0db99de9f6edc4.jpg",
      "https://i.pinimg.com/736x/73/7b/61/737b614fe4e8f2e89aba658a9314e922.jpg",
      
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
      "https://i.pinimg.com/736x/b5/07/d8/b507d89b263ac6a977fd876943c21d62.jpg",
      "https://i.pinimg.com/736x/61/3e/1b/613e1b80ebd472dd0752cff2a41e50cb.jpg",
      "https://i.pinimg.com/736x/b5/07/d8/b507d89b263ac6a977fd876943c21d62.jpg",
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
      "https://i.pinimg.com/736x/19/bf/71/19bf7121875b9e3528ec934d220c3f51.jpg",
      "https://i.pinimg.com/736x/ac/61/bd/ac61bd5e80327cbfcb5def3a0a05e093.jpg",
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
      "https://i.pinimg.com/736x/29/68/90/296890eb3681c8349dbc142cdee7daf0.jpg",
      "https://i.pinimg.com/736x/b7/de/d3/b7ded34bd5761c916cca671ec3e16c0c.jpg",
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
      "https://i.pinimg.com/736x/31/2c/89/312c89522fc8fe20eae122f537aa1428.jpg",
      "https://i.pinimg.com/736x/e0/3e/0d/e03e0d676e52c7480273114a09e3d831.jpg",
      "https://i.pinimg.com/736x/31/2c/89/312c89522fc8fe20eae122f537aa1428.jpg",
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
      "https://i.pinimg.com/736x/7b/83/ee/7b83ee89548adefc4b16fcc70f0b0700.jpg",
      "https://i.pinimg.com/736x/97/7e/09/977e09fdceb471b8bd3e59c5722176d1.jpg  ",
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
      "https://i.pinimg.com/736x/37/29/e8/3729e8c3cb299e2d9b465ce3cb9fabf0.jpg",
      "https://i.pinimg.com/1200x/6e/fc/fa/6efcfa3ebbfaaee6026c6bc37a0ef7a1.jpg",
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
      "https://i.pinimg.com/736x/90/98/7c/90987c3326315898dbfecd79f42450e6.jpg",
      "https://i.pinimg.com/736x/0c/d7/e2/0cd7e2c4e15309354b5e801c44488d05.jpg",
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
      
      "https://i.pinimg.com/736x/7e/42/df/7e42dfd6c4c12c441aa313f16295846d.jpg",
      "https://i.pinimg.com/736x/35/21/5c/35215cf9de94ccb66e30bd3aa7d3e084.jpg",
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
      "https://i.pinimg.com/736x/88/47/ad/8847ad40379e16ab4bb9dd22b69500b5.jpg",
      "https://i.pinimg.com/736x/91/a3/a0/91a3a0d26cf5888f79f1826b45b5729f.jpg",
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
