import { useState } from "react";
import { SlidersHorizontal, Grid3X3, LayoutList, ShoppingBag } from "lucide-react";
import { getAbayas } from "../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Abayas() {
  const products = getAbayas();
  const [sortBy, setSortBy] = useState("default");
  const [gridCols, setGridCols] = useState(3);

  const { addToCart } = useCart();

  const sorted = [...products].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen">

      {/* Page Header */}
      <div
        className="relative py-15 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a0d12 50%, #3d1520 100%)",
        }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1728487234854-c35578502fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600"
            alt="عبايات"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-[#f5c2c2] text-sm tracking-widest uppercase mb-3">
            أرقى التشكيلات
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            العبايات
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            تشكيلة استثنائية من العبايات المصممة بإتقان
          </p>
        </div>
      </div>

      {/* Filters & Sort Bar */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white p-4 flex flex-wrap items-center justify-center gap-4">

          {/* Sort */}
         

          {/* Grid Toggle */}
          <div className="flex items-center gap-1 border border-gray-200">
            <button
              onClick={() => setGridCols(3)}
              className={`p-2 ${gridCols === 3 ? "bg-[#9b3c52] text-white" : "text-gray-500"}`}
            >
              <Grid3X3 size={16} />
            </button>

            <button
              onClick={() => setGridCols(2)}
              className={`p-2 ${gridCols === 2 ? "bg-[#9b3c52] text-white" : "text-gray-500"}`}
            >
              <LayoutList size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div
          className={`grid gap-6 ${
            gridCols === 3
              ? "grid-cols-2 md:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {sorted.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              {/* Image */}
              <Link to={`/product/${product.id}`}>
               <img
  src={product.images?.[0] || product.image}
  alt={product.name}
  className="w-full h-64 object-cover"
/>
              </Link>

              {/* Content */}
              <div className="p-4">

                <Link to={`/product/${product.id}`}>
                  <h3 className="text-gray-800 font-medium hover:text-[#9b3c52]">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center justify-between mt-3">

                  <p className="text-[#9b3c52] font-bold">
                    {product.price} ج.م
                  </p>

                  {/* Add to cart */}
                  <button
                    onClick={() => addToCart(product)}
                    className="flex items-center gap-1 bg-[#9b3c52] text-white px-3 py-1.5 text-xs hover:bg-[#7d2f42] transition"
                  >
                    <ShoppingBag size={14} />
                    
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}