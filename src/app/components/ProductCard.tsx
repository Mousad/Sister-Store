import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Product } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const { addToCart } = useCart();

  const currentImage =
    hovered && product.images.length > 1
      ? product.images[1]
      : product.images[0];

  return (
    <div
      className="group relative bg-white overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      dir="rtl"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.discount && (
            <span className="bg-[#9b3c52] text-white text-xs px-2 py-1 rounded-sm font-semibold">
              -{product.discount}%
            </span>
          )}
          {product.bestSeller && !product.discount && (
            <span className="bg-[#1a1a1a] text-white text-xs px-2 py-1 rounded-sm">
              الأكثر مبيعاً
            </span>
          )}
        </div>

        {/* Like + View (اختياري خفيف) */}
        <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
          <button
            onClick={() => setLiked(!liked)}
            className="w-8 h-8 bg-white flex items-center justify-center shadow"
          >
            <Heart
              size={16}
              className={liked ? "text-[#9b3c52] fill-[#9b3c52]" : "text-gray-600"}
            />
          </button>

          <Link
            to={`/product/${product.id}`}
            className="w-8 h-8 bg-white flex items-center justify-center shadow"
          >
            <Eye size={16} className="text-gray-600" />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-gray-800 text-sm mb-2 hover:text-[#9b3c52] transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Price + Cart */}
        <div className="flex items-center justify-between">
          <span className="text-[#9b3c52] font-semibold text-base">
            {product.price.toLocaleString("ar-SA")} ج.م
          </span>

          <button
            onClick={() =>
              addToCart(
                product,
                product.sizes?.[0],
                product.colors?.[0]?.name,
                1
              )
            }
            className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-[#9b3c52] transition"
          >
            <ShoppingBag size={16} className="text-[#9b3c52]" />
          </button>
        </div>
      </div>
    </div>
  );
}