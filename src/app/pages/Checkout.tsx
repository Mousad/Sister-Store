import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { CheckCircle2, ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "الاسم مطلوب";
    if (!form.phone.trim()) errs.phone = "رقم الهاتف مطلوب";
    else if (!/^[0-9+\s-]{9,15}$/.test(form.phone)) errs.phone = "رقم الهاتف غير صحيح";
    if (!form.city.trim()) errs.city = "المدينة مطلوبة";
    if (!form.address.trim()) errs.address = "العنوان مطلوب";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      clearCart();
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  if (submitted) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6">
        <div className="bg-white max-w-md w-full p-10 text-center shadow-sm">
          <CheckCircle2 size={64} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-gray-900 text-2xl font-bold mb-3">تم تأكيد طلبك! 🎉</h2>
          <p className="text-gray-600 mb-2 text-sm leading-relaxed">
            شكراً <strong>{form.name}</strong>، تم استلام طلبك بنجاح.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            سيتواصل معك فريقنا على الرقم <strong>{form.phone}</strong> لتأكيد التفاصيل والشحن.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#9b3c52] text-white py-3.5 text-sm font-semibold hover:bg-[#7d2f42] transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} />
            مواصلة التسوق
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  const shipping = totalPrice >= 1000 ? 0 : 50;

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-gray-900 text-3xl font-bold mb-8">إكمال الطلب</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-6">
              <h2 className="text-gray-800 font-bold text-lg mb-2">بيانات التوصيل</h2>

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1.5">
                  الاسم الكامل <span className="text-[#9b3c52]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="مثال: فاطمة أحمد"
                  className={`w-full border px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1.5">
                  رقم الهاتف <span className="text-[#9b3c52]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="مثال: 0912345678"
                  className={`w-full border px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors ${
                    errors.phone ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1.5">
                  المدينة <span className="text-[#9b3c52]">*</span>
                </label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className={`w-full border px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors bg-white ${
                    errors.city ? "border-red-400" : "border-gray-200"
                  }`}
                >
                  <option value="">اختاري المدينة</option>


<option>الرياض</option>
<option>جدة</option>
<option>الدمام</option>
<option>مكة المكرمة</option>
<option>المدينة المنورة</option>
<option>الخبر</option>

<option>دبي</option>
<option>أبوظبي</option>
<option>الشارقة</option>
<option>عجمان</option>


<option>القاهرة</option>
<option>الجيزة</option>
<option>الإسكندرية</option>
<option>المنصورة</option>
<option>أسوان</option>


<option>الخرطوم</option>
<option>أم درمان</option>
<option>الخرطوم بحري</option>
<option>بورتسودان</option>
<option>كسلا</option>
<option>مدني</option>
<option>الأبيض</option>


<option>أخرى</option>
                </select>
                {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1.5">
                  العنوان التفصيلي <span className="text-[#9b3c52]">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="مثال: حي الرياض، شارع 15، بيت 4"
                  className={`w-full border px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors ${
                    errors.address ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-1.5">
                  ملاحظات إضافية (اختياري)
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="أي تعليمات خاصة للتوصيل..."
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#9b3c52] text-white py-4 text-sm font-semibold hover:bg-[#7d2f42] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    جارٍ تأكيد الطلب...
                  </>
                ) : (
                  "تأكيد الطلب"
                )}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <div className="bg-white p-6 sticky top-24">
              <h2 className="text-gray-800 font-bold text-lg mb-6 pb-4 border-b border-gray-100">
                تفاصيل الطلب
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-14 h-18 object-cover shrink-0"
                      style={{ height: "72px" }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-700 text-xs font-medium line-clamp-2 mb-1">
                        {item.product.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {item.selectedSize} • {item.selectedColor}
                      </p>
                      <p className="text-gray-600 text-xs mt-1">
                        {item.quantity} × {item.product.price.toLocaleString("ar-SA")} د.إ
                      </p>
                    </div>
                    <p className="text-[#9b3c52] text-sm font-semibold shrink-0">
                      {(item.product.price * item.quantity).toLocaleString("ar-SA")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>المجموع</span>
                  <span>{totalPrice.toLocaleString("ar-SA")} د.إ</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>الشحن</span>
                  <span className={shipping === 0 ? "text-green-600" : ""}>
                    {shipping === 0 ? "10%" : `${shipping} ج.م`}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 pt-2 border-t border-gray-100">
                  <span>الإجمالي</span>
                  <span className="text-[#9b3c52]">
                    {(totalPrice + shipping).toLocaleString("ar-SA")} د.إ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
