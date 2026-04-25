
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Tag } from "lucide-react";

export function Offers() {
  const discounted = products.filter((p) => p.discount);

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div className="relative py-20 px-6 text-center bg-gradient-to-br from-[#9b3c52] via-[#7d2f42] to-[#5a1f2e] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full border-2 border-white" style={{ transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border-2 border-white" style={{ transform: "translate(-30%, 30%)" }} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Tag size={20} className="text-white/70" />
            <p className="text-white/70 text-sm tracking-widest uppercase">عروض حصرية</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">العروض والتخفيضات</h1>
          <p className="text-white/70 max-w-lg mx-auto">
            فرصة ذهبية للحصول على أفخم المنتجات بأفضل الأسعار. العروض محدودة!
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-gray-500 text-sm">
          <Link to="/" className="hover:text-[#9b3c52]">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">العروض</span>
        </p>
      </div>

      {/* Banner Info */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-[#9b3c52]/10 border border-[#9b3c52]/30 p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Tag size={20} className="text-[#9b3c52]" />
            <p className="text-gray-700 text-sm">
              جارٍ عرض <strong>{discounted.length}</strong> منتجات بخصومات تصل إلى <strong>25%</strong>
            </p>
          </div>
          <p className="text-[#9b3c52] text-xs font-semibold">
            ⏰ العرض لفترة محدودة
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {discounted.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {discounted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Tag size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-gray-500 text-lg">لا توجد عروض حالياً</h3>
            <p className="text-gray-400 text-sm mt-2">تابعينا لمعرفة أحدث العروض</p>
          </div>
        )}
      </div>
    </div>
  );
}
