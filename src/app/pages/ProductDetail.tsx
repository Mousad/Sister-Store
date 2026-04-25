import { useState } from "react";


import { useParams, Link, useNavigate } from "react-router-dom";
import { ShoppingBag, MessageCircle, Share2, ChevronRight, ChevronLeft, Heart, Check } from "lucide-react";
import { getProductById, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center">
          <h2 className="text-gray-800 text-2xl font-bold mb-4">المنتج غير موجود</h2>
          <Link to="/" className="text-[#9b3c52] underline">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product.id, product.category);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    addToCart(product, selectedSize, selectedColor, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) return;
    addToCart(product, selectedSize, selectedColor, qty);
    navigate("/cart");
  };

  const whatsappMsg = encodeURIComponent(
    `مرحباً، أريد الاستفسار عن المنتج:\n${product.name}\nالسعر: ${product.price} جنيه\nالمقاس: ${selectedSize || "لم يُحدد"}\nاللون: ${selectedColor || "لم يُحدد"}`
  );

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-gray-500 text-sm">
          <Link to="/" className="hover:text-[#9b3c52]">الرئيسية</Link>
          <span className="mx-2">›</span>
          <Link
            to={product.category === "sudanese-top" ? "/sudanese-top" : "/abayas"}
            className="hover:text-[#9b3c52]"
          >
            {product.category === "sudanese-top" ? "توب سوداني" : "عبايات"}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">{product.name}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* ===== Image Gallery ===== */}
          <div className="flex gap-4">
            {/* Thumbnails */}
           

            {/* Main Image */}
        <div className="flex flex-col gap-4 w-full">

  {/* Main Image */}
  <div className="relative bg-gray-100 overflow-hidden h-[300px] w-full">
    <img
      src={product.images?.[activeImg]}
      alt={product.name}
      className="w-full h-full object-cover block"
    />
  </div>





      {/* Thumbnails (3 images) */}
      <div className="grid grid-cols-3 gap-2">

        {product.images?.slice(0, 3).map((img: string, index: number) => (
          <button
            key={index}
            onClick={() => setActiveImg(index)}
            className={`border-2 overflow-hidden transition ${
              activeImg === index
                ? "border-[#9b3c52]"
                : "border-transparent"
            }`}
          >
            <img
              src={img}
              alt="thumb"
              className="w-full h-25 object-cover"
            />
          </button>
        ))}

      </div>
    </div>
          </div>

          {/* ===== Product Info ===== */}
          <div className="py-4">
            {/* Category Tag */}
            <span className="text-[#9b3c52] text-xs tracking-widest uppercase bg-[#9b3c52]/10 px-3 py-1 rounded-sm">
              {product.category === "sudanese-top" ? "توب سوداني" : "عباية"}
            </span>

            <div className="flex items-start justify-between mt-4 mb-2">
              <h1 className="text-gray-900 text-2xl md:text-3xl font-bold leading-snug flex-1">
                {product.name}
              </h1>
              <div className="flex gap-2 mr-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-[#9b3c52] transition-colors"
                >
                  <Heart
                    size={18}
                    className={liked ? "fill-[#9b3c52] text-[#9b3c52]" : "text-gray-400"}
                    fill={liked ? "#9b3c52" : "none"}
                  />
                </button>
                <button className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-[#9b3c52] transition-colors">
                  <Share2 size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#9b3c52] text-3xl font-bold">
                {product.price.toLocaleString("ar-SA")} جنيه
              </span>
              {product.originalPrice && (
                <span className="text-gray-400 text-lg line-through">
                  {product.originalPrice.toLocaleString("ar-SA")}
                </span>
              )}
            </div>

            <hr className="border-gray-100 mb-6" />

            {/* Description */}
            <p className="text-gray-600 leading-loose mb-8 text-sm">
              {product.description}
            </p>

            {/* Colors */}
            <div className="mb-6">
              <p className="text-gray-700 text-sm font-semibold mb-3">
                اللون: {selectedColor && <span className="text-gray-500 font-normal mr-1">{selectedColor}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center gap-2 px-3 py-2 border text-sm transition-all ${
                      selectedColor === color.name
                        ? "border-[#9b3c52] text-[#9b3c52]"
                        : "border-gray-200 text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-gray-200 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.name}
                  </button>
                ))}
              </div>
              {!selectedColor && (
                <p className="text-red-400 text-xs mt-2">يرجى اختيار اللون</p>
              )}
            </div>

            {/* Sizes */}
            <div className="mb-8">
              <p className="text-gray-700 text-sm font-semibold mb-3">
                المقاس: {selectedSize && <span className="text-gray-500 font-normal mr-1">{selectedSize}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-[#9b3c52] bg-[#9b3c52] text-white"
                        : "border-gray-200 text-gray-700 hover:border-[#9b3c52] hover:text-[#9b3c52]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-red-400 text-xs mt-2">يرجى اختيار المقاس</p>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-gray-700 text-sm font-semibold">الكمية:</span>
              <div className="flex items-center border border-gray-200">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg"
                >
                  −
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-gray-800">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
                className={`w-full py-4 flex items-center justify-center gap-2 transition-all text-sm font-semibold ${
                  added
                    ? "bg-green-600 text-white"
                    : selectedSize && selectedColor
                    ? "bg-[#9b3c52] text-white hover:bg-[#7d2f42]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                {added ? (
                  <>
                    <Check size={18} />
                    تمت الإضافة إلى السلة
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    إضافة إلى السلة
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                disabled={!selectedSize || !selectedColor}
                className={`w-full py-4 border-2 text-sm font-semibold transition-all ${
                  selectedSize && selectedColor
                    ? "border-[#9b3c52] text-[#9b3c52] hover:bg-[#9b3c52] hover:text-white"
                    : "border-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                شراء الآن
              </button>

             
            </div>

            {/* Info Tags */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-2">
              <p className="text-gray-500 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                شحن سريع داخل الخرطوم
              </p>
              <p className="text-gray-500 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                تغليف فاخر مجاني
              </p>
              <p className="text-gray-500 text-xs flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                ضمان الجودة أو الاستبدال
              </p>
            </div>
          </div>
        </div>

        {/* ===== Related Products ===== */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <p className="text-[#9b3c52] text-sm tracking-widest uppercase mb-2">قد يعجبك أيضاً</p>
              <h2 className="text-gray-900 text-2xl font-bold">منتجات مشابهة</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
