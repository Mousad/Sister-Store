import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowLeft, Package } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-[#9b3c52]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={36} className="text-[#9b3c52]" />
          </div>
          <h2 className="text-gray-800 text-2xl font-bold mb-3">سلة التسوق فارغة</h2>
          <p className="text-gray-500 mb-8 text-sm">لم تُضيفي أي منتجات بعد. ابدئي التسوق الآن!</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#9b3c52] text-white px-8 py-3.5 hover:bg-[#7d2f42] transition-colors text-sm"
          >
            <ShoppingBag size={16} />
            تسوق الآن
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 text-3xl font-bold mb-1">سلة التسوق</h1>
          <p className="text-gray-500 text-sm">{totalItems} منتج في سلتك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                className="bg-white p-5 flex gap-4"
              >
                {/* Product Image */}
                <Link to={`/product/${item.product.id}`} className="shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-24 h-32 object-cover"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="text-gray-800 font-semibold text-sm hover:text-[#9b3c52] transition-colors mb-1 line-clamp-2">
                      {item.product.name}
                    </h3>
                  </Link>
                  <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                    <span>المقاس: {item.selectedSize}</span>
                    <span>•</span>
                    <span>اللون: {item.selectedColor}</span>
                  </div>
                  <p className="text-[#9b3c52] font-bold text-base">
                    {item.product.price.toLocaleString("ar-SA")} ج.م
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity - 1
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-base"
                      >
                        −
                      </button>
                      <span className="w-8 h-8 flex items-center justify-center text-gray-800 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            item.quantity + 1
                          )
                        }
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-base"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal + Delete */}
                    <div className="flex items-center gap-4">
                      <span className="text-gray-700 text-sm">
                        {(item.product.price * item.quantity).toLocaleString("ar-SA")} ج.م
                      </span>
                      <button
                        onClick={() =>
                          removeFromCart(item.product.id, item.selectedSize, item.selectedColor)
                        }
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#9b3c52] text-sm hover:gap-3 transition-all"
              >
                <ArrowLeft size={14} className="rotate-180" />
                متابعة التسوق
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-6 sticky top-24">
              <h2 className="text-gray-800 font-bold text-lg mb-6 pb-4 border-b border-gray-100">
                ملخص الطلب
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>المجموع الفرعي ({totalItems} منتج)</span>
                  <span>{totalPrice.toLocaleString("ar-SA")} ج.م</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>الشحن</span>
                  <span className={totalPrice >= 1000 ? "text-green-600" : ""}>
                    {totalPrice >= 1000 ? "مجاني" : "50 جنيه"}
                  </span>
                </div>
                {totalPrice < 1000 && (
                  <p className="text-xs text-gray-400">
                    أضيفي {(1000 - totalPrice).toLocaleString("ar-SA")} جنيه للحصول على شحن مجاني
                  </p>
                )}
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between font-bold text-gray-900">
                  <span>المجموع الكلي</span>
                  <span className="text-[#9b3c52] text-lg">
                    {(totalPrice + (totalPrice >= 1000 ? 0 : 50)).toLocaleString("ar-SA")} ج.م
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-[#9b3c52] text-white py-4 text-sm font-semibold hover:bg-[#7d2f42] transition-colors flex items-center justify-center gap-2"
              >
                <Package size={16} />
                إكمال الطلب
              </button>

              <a
                href={`https://wa.me/249123456789?text=${encodeURIComponent("مرحباً، أريد إتمام طلبي عبر واتساب")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 py-3 border border-[#25D366] text-[#25D366] flex items-center justify-center gap-2 text-sm hover:bg-[#25D366] hover:text-white transition-colors"
              >
                طلب عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
