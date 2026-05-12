import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Instagram, MapPin, Clock, CheckCircle2, Loader2, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "الاسم مطلوب";
    if (!form.message.trim()) errs.message = "الرسالة مطلوبة";
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
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen">
      {/* Header */}
      <div
        className="relative py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a22 100%)" }}
      >
        <p className="text-[#f5c2c2] text-sm tracking-widest uppercase mb-3">نحن هنا</p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">تواصل معنا</h1>
        <p className="text-white/60 max-w-md mx-auto text-sm">
          يسعدنا استقبال رسائلكم واستفساراتكم. فريقنا متاح دائماً للمساعدة
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <p className="text-gray-500 text-sm">
          <Link to="/" className="hover:text-[#9b3c52]">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">تواصل معنا</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-gray-900 font-bold text-xl mb-6">معلومات التواصل</h2>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/00201207013520"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm mb-0.5">واتساب</p>
                <p className="text-gray-500 text-sm">+249909167743</p>
                <p className="text-[#9b3c52] text-xs mt-1">راسلينا الآن ←</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-white p-6 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-purple-500 transition-colors">
                <Instagram size={22} className="text-purple-500" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm mb-0.5">إنستغرام</p>
                <p className="text-gray-500 text-sm">@toob_for_less</p>
                <p className="text-[#9b3c52] text-xs mt-1">تابعينا ←</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 bg-white p-6">
              <div className="w-12 h-12 bg-[#9b3c52]/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-[#9b3c52]" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm mb-0.5">العنوان</p>
                <p className="text-gray-500 text-sm"> 📍 السودان</p>
                <p className="text-gray-400 text-xs mt-0.5">نخدم جميع الدول </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 bg-white p-6">
              <div className="w-12 h-12 bg-[#9b3c52]/10 rounded-full flex items-center justify-center shrink-0">
                <Clock size={22} className="text-[#9b3c52]" />
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm mb-1">ساعات العمل</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  السبت – الخميس: 9 صباحاً – 10 مساءً<br />
                  الجمعة: 2 ظهراً – 10 مساءً
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <a
              href="https://wa.me/249123456789?text=مرحباً، أريد الاستفسار عن منتجاتكم"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 hover:bg-[#1dba57] transition-colors text-sm font-semibold w-full"
            >
              <MessageCircle size={20} />
              تحدثي معنا على واتساب
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle2 size={60} className="text-green-500 mx-auto mb-5" />
                  <h3 className="text-gray-900 text-xl font-bold mb-2">تم إرسال رسالتك!</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    شكراً لتواصلك معنا. سنرد عليكِ في أقرب وقت ممكن خلال ساعات العمل.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", message: "" });
                    }}
                    className="mt-8 text-[#9b3c52] text-sm border-b border-[#9b3c52] pb-0.5 hover:text-[#7d2f42] transition-colors"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-gray-900 font-bold text-xl mb-2">أرسلي لنا رسالة</h2>
                  <p className="text-gray-500 text-sm mb-8">
                    سنرد على رسالتك خلال ساعات العمل
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1.5">
                          الاسم <span className="text-[#9b3c52]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="اسمك الكريم"
                          className={`w-full border px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors ${
                            errors.name ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 font-medium mb-1.5">
                          رقم الهاتف (اختياري)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="رقم الهاتف"
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 font-medium mb-1.5">
                        رسالتك <span className="text-[#9b3c52]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="اكتبي رسالتك أو استفسارك هنا..."
                        className={`w-full border px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#9b3c52] transition-colors resize-none ${
                          errors.message ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#9b3c52] text-white px-10 py-4 text-sm font-semibold hover:bg-[#7d2f42] transition-colors flex items-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          جارٍ الإرسال...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          إرسال الرسالة
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
