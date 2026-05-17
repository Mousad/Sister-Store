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
    name: "عباية  كلاسيكي",
    nameEn: "Classic Sudanese Top",
    price: 450,
    originalPrice: 550,
    category: "sudanese-top",
    images: [
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/671744343_17897652786438818_1082259666253622743_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzg4NDY4MzE1NTIxNDYxMjY4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=BPcAydmZIbcQ7kNvwEpUqcT&_nc_oc=AdrCHyj8uO0CchaWteDEnxllLDeZqlTavWB2gCmgMUcHSQxS6g-7coJe4HqBgIGU5jQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=VXJXfsYbsGa1fN9uDCECIw&_nc_ss=7a22e&oh=00_Af4rbkUQIVH7FhG1s8n5o-43j4lywqiVpWxUEN0I_Y7wxQ&oe=6A0EFFC8",
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/671744343_17897652786438818_1082259666253622743_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzg4NDY4MzE1NTIxNDYxMjY4Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=BPcAydmZIbcQ7kNvwEpUqcT&_nc_oc=AdrCHyj8uO0CchaWteDEnxllLDeZqlTavWB2gCmgMUcHSQxS6g-7coJe4HqBgIGU5jQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=VXJXfsYbsGa1fN9uDCECIw&_nc_ss=7a22e&oh=00_Af4rbkUQIVH7FhG1s8n5o-43j4lywqiVpWxUEN0I_Y7wxQ&oe=6A0EFFC8",
      
      
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
    name: " عباية مطرز",
    nameEn: "Embroidered Sudanese Top",
    price: 650,
    category: "sudanese-top",
    images: [
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.71878-15/673798789_921300704235036_5190098113989350074_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzg4MjU1NDAzOTg3NTAxMzIzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fbmZyYW1lX2NvdmVyX2ZyYW1lLkMzIn0%3D&_nc_ohc=zEw1irbezkMQ7kNvwFzKlYg&_nc_oc=AdqAClIlG68bqXc9xAU2mjsXUAuW9U0wu-yvyEVOgNxpXfkCivhkM4T6KgjW3omK4PI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=VXJXfsYbsGa1fN9uDCECIw&_nc_ss=7a22e&oh=00_Af7PyhcZZLqWVkPim6xFo3GwizWW8-Oyb-F5BUqEC6jrwg&oe=6A0F0C6A",
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.71878-15/673798789_921300704235036_5190098113989350074_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzg4MjU1NDAzOTg3NTAxMzIzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fbmZyYW1lX2NvdmVyX2ZyYW1lLkMzIn0%3D&_nc_ohc=zEw1irbezkMQ7kNvwFzKlYg&_nc_oc=AdqAClIlG68bqXc9xAU2mjsXUAuW9U0wu-yvyEVOgNxpXfkCivhkM4T6KgjW3omK4PI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=VXJXfsYbsGa1fN9uDCECIw&_nc_ss=7a22e&oh=00_Af7PyhcZZLqWVkPim6xFo3GwizWW8-Oyb-F5BUqEC6jrwg&oe=6A0F0C6A",
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.71878-15/673798789_921300704235036_5190098113989350074_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=Mzg4MjU1NDAzOTg3NTAxMzIzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNMSVBTLnhwaWRzLjY0MC5zZHIudmlkZW9fbmZyYW1lX2NvdmVyX2ZyYW1lLkMzIn0%3D&_nc_ohc=zEw1irbezkMQ7kNvwFzKlYg&_nc_oc=AdqAClIlG68bqXc9xAU2mjsXUAuW9U0wu-yvyEVOgNxpXfkCivhkM4T6KgjW3omK4PI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcai19-7.fna&_nc_gid=VXJXfsYbsGa1fN9uDCECIw&_nc_ss=7a22e&oh=00_Af7PyhcZZLqWVkPim6xFo3GwizWW8-Oyb-F5BUqEC6jrwg&oe=6A0F0C6A",
      
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
    name: "عباية  كاجوال",
    nameEn: "Casual Sudanese Top",
    price: 380,
    category: "sudanese-top",
    images: [
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/675416011_17900599107438818_4804189095701518330_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=Mzg5ODU1OTg0MzEzMjg4NTYzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kBKbV-TpiwUQ7kNvwFinEuo&_nc_oc=AdpYJA6mLrzhEjtAAAFValQ9GA_-LTXfWaCjyLN-cxBmnd_OuXoTJpot6uZk39PbV9s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=r4jxfx2O7w0Dor3KbxAZIQ&_nc_ss=7a22e&oh=00_Af5nQufvB7E7r3rSptYZ1hNDL4-4g-fHbuGHKzUtxeIymg&oe=6A0F018C",
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/675416011_17900599107438818_4804189095701518330_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=105&ig_cache_key=Mzg5ODU1OTg0MzEzMjg4NTYzNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=kBKbV-TpiwUQ7kNvwFinEuo&_nc_oc=AdpYJA6mLrzhEjtAAAFValQ9GA_-LTXfWaCjyLN-cxBmnd_OuXoTJpot6uZk39PbV9s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=r4jxfx2O7w0Dor3KbxAZIQ&_nc_ss=7a22e&oh=00_Af5nQufvB7E7r3rSptYZ1hNDL4-4g-fHbuGHKzUtxeIymg&oe=6A0F018C",

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
    name: "عباية  فاخر",
    nameEn: "Luxury Sudanese Top",
    price: 750,
    originalPrice: 900,
    category: "sudanese-top",
    images: [
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/671141103_17900599161438818_611517239690797446_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=Mzg5ODU1OTczNjg5MTA1NDk1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=FCuxdTHQaEsQ7kNvwGkA1Os&_nc_oc=AdpsFAe8GEAPruP8s6LAGx7MkQ2THYmQLDq4MxdtSI92SiunTW2zUSo553UORNA5fks&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=r4jxfx2O7w0Dor3KbxAZIQ&_nc_ss=7a22e&oh=00_Af5O_sLGbbI7qclrZjxaczXbiwY90LGX6HcaYPLpo6XrDQ&oe=6A0F052E",
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/671141103_17900599161438818_611517239690797446_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=110&ig_cache_key=Mzg5ODU1OTczNjg5MTA1NDk1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzAyNC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=FCuxdTHQaEsQ7kNvwGkA1Os&_nc_oc=AdpsFAe8GEAPruP8s6LAGx7MkQ2THYmQLDq4MxdtSI92SiunTW2zUSo553UORNA5fks&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=r4jxfx2O7w0Dor3KbxAZIQ&_nc_ss=7a22e&oh=00_Af5O_sLGbbI7qclrZjxaczXbiwY90LGX6HcaYPLpo6XrDQ&oe=6A0F052E",
  
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
    name: " عباية مزخرف",
    nameEn: "Ornamented Sudanese Top",
    price: 550,
    category: "sudanese-top",
    images: [
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/670872159_17896726917438818_3587299126447900209_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=Mzg4MDUyODY3NDA2NzUwNjk2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=dAPAy8FREwAQ7kNvwFO3nQB&_nc_oc=AdoHm7aoqQu7aWOJliejihz0r3kuzFl5I12fEefs9iM6XFRZSIXz0qpVMbjjjBkAkSI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=egYVHIioM0p1Q3zoBoweVw&_nc_ss=7a22e&oh=00_Af6c8xQMOHON9eYSIQnpvm9xjEYPi-0sbHETzJd_v6n4bg&oe=6A0F0495",
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/670872159_17896726917438818_3587299126447900209_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=106&ig_cache_key=Mzg4MDUyODY3NDA2NzUwNjk2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=dAPAy8FREwAQ7kNvwFO3nQB&_nc_oc=AdoHm7aoqQu7aWOJliejihz0r3kuzFl5I12fEefs9iM6XFRZSIXz0qpVMbjjjBkAkSI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=egYVHIioM0p1Q3zoBoweVw&_nc_ss=7a22e&oh=00_Af6c8xQMOHON9eYSIQnpvm9xjEYPi-0sbHETzJd_v6n4bg&oe=6A0F0495",
 
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
    name: "عباية   ناعم",
    nameEn: "Soft White Sudanese Top",
    price: 420,
    category: "sudanese-top",
    images: [
      "https://i.pinimg.com/736x/c9/f9/01/c9f90127154ba4928979d9ae14bd9b9b.jpg",
      "https://i.pinimg.com/736x/c9/f9/01/c9f90127154ba4928979d9ae14bd9b9b.jpg",
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
    name: " عباية  أنيق",
    nameEn: "Simple Elegant Sudanese Top",
    price: 350,
    category: "sudanese-top",
    images: [
     "https://i.pinimg.com/736x/05/48/56/054856c677be36fd5bdcac412c449a4e.jpg",
     "https://i.pinimg.com/736x/05/48/56/054856c677be36fd5bdcac412c449a4e.jpg",
    
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
    name: "عباية  ",
    nameEn: "Wedding Sudanese Top",
    price: 680,
    originalPrice: 800,
    category: "sudanese-top",
    images: [
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/684817980_17900599041438818_3705771421261428894_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=Mzg5ODU1OTY1MzQyNDUxNTg4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzA3Mi5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=cjJVUjhSWvYQ7kNvwEZwW9C&_nc_oc=AdqXQa2RSXzvxOFlKJINP6U6vNyLrGz3wiDlJzCy-ChjoVzwGPKmaH6cXMyAOMYWIC8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=r4jxfx2O7w0Dor3KbxAZIQ&_nc_ss=7a22e&oh=00_Af4cPQQFTznDSMj-LXkgmbaPRby1QpLTrkmSUy9nw__bYA&oe=6A0F1739",
      "https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/684817980_17900599041438818_3705771421261428894_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=100&ig_cache_key=Mzg5ODU1OTY1MzQyNDUxNTg4MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMzA3Mi5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=cjJVUjhSWvYQ7kNvwEZwW9C&_nc_oc=AdqXQa2RSXzvxOFlKJINP6U6vNyLrGz3wiDlJzCy-ChjoVzwGPKmaH6cXMyAOMYWIC8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=r4jxfx2O7w0Dor3KbxAZIQ&_nc_ss=7a22e&oh=00_Af4cPQQFTznDSMj-LXkgmbaPRby1QpLTrkmSUy9nw__bYA&oe=6A0F1739",
      
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
 
 
  // ===== العبايات =====
  {
    id: 11,
    name: "عباية  كلاسيكية",
    nameEn: "Classic Black Abaya",
    price: 850,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/eb/93/1e/eb931ecb65632371769fc93a6e29d7d7.jpg",
      "https://i.pinimg.com/736x/eb/93/1e/eb931ecb65632371769fc93a6e29d7d7.jpg",
      
      
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
    name: "عباية مطرزة ",
    nameEn: "Golden Embroidered Abaya",
    price: 1200,
    originalPrice: 1400,
    category: "abaya",
    images: [
      "https://i.pinimg.com/1200x/22/54/ac/2254accdde98ae1031ead364ed92d30f.jpg",
      "https://i.pinimg.com/1200x/22/54/ac/2254accdde98ae1031ead364ed92d30f.jpg",
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
    name: "عباية فلوي ",
    nameEn: "Modern Flowy Abaya",
    price: 950,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/3d/cf/ab/3dcfab92bcb3496f3e7482a49a192b73.jpg",
      "https://i.pinimg.com/736x/3d/cf/ab/3dcfab92bcb3496f3e7482a49a192b73.jpg",
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
    name: "عباية بسيطة ",
    nameEn: "Simple Elegant Abaya",
    price: 780,
    originalPrice: 900,
    category: "abaya",
    images: [
      "https://i.pinimg.com/1200x/29/0d/c4/290dc402baaa4417ab4610edb26ebe00.jpg",
      "https://i.pinimg.com/1200x/29/0d/c4/290dc402baaa4417ab4610edb26ebe00.jpg",
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
    name: "عباية فاخرة ",
    nameEn: "Luxury Patterned Abaya",
    price: 1100,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/03/24/bb/0324bb133d3b452b6b33355a14638479.jpg",
      "https://i.pinimg.com/736x/03/24/bb/0324bb133d3b452b6b33355a14638479.jpg",
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
    name: "عباية كريمي ",
    nameEn: "Cream Luxury Abaya",
    price: 880,
    category: "abaya",
    images: [
      "https://i.pinimg.com/736x/a7/2d/2a/a72d2ac0293ef5dc14fc486bb1b3088d.jpg",
      "https://i.pinimg.com/736x/a7/2d/2a/a72d2ac0293ef5dc14fc486bb1b3088d.jpg",
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
    name: "عباية  بالترتر",
    nameEn: "Sequin Abaya",
    price: 1050,
    originalPrice: 1200,
    category: "abaya",
    images: [
      "https://i.pinimg.com/1200x/6b/e4/49/6be4494d0531c4f5df65a843699f3036.jpg",
      "https://i.pinimg.com/1200x/6b/e4/49/6be4494d0531c4f5df65a843699f3036.jpg",
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
      "https://i.pinimg.com/736x/a5/0d/04/a50d04ed67e358e0e17622ee1b580b3e.jpg",
      "https://i.pinimg.com/736x/a5/0d/04/a50d04ed67e358e0e17622ee1b580b3e.jpg",
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
  
 
];

export const getFeaturedProducts = () => products.filter((p) => p.featured).slice(0, 6);
export const getBestSellers = () => products.filter((p) => p.bestSeller).slice(0, 4);
export const getSudaneseTops = () => products.filter((p) => p.category === "sudanese-top");
export const getAbayas = () => products.filter((p) => p.category === "abaya");
export const getProductById = (id: number) => products.find((p) => p.id === id);
export const getRelatedProducts = (id: number, category: string) =>
  products.filter((p) => p.id !== id && p.category === category).slice(0, 4);
