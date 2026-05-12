
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-[#9b3c52] font-black text-2xl">TOOB FOR LESS</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-xs">
              وجهتك الأولى للأزياء السودانية الأنيقة. نجمع بين أصالة التراث وروح العصر في كل قطعة.
              احدث كوليكشن للتياب السودانى
و أرهب التصاميم
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#9b3c52]/20 flex items-center justify-center hover:bg-[#9b3c52] transition-colors"
              >
                <Instagram size={18} className="text-[#9b3c52] hover:text-white" />
              </a>
              <a
                href="https://wa.me/249123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#9b3c52]/20 flex items-center justify-center hover:bg-[#9b3c52] transition-colors"
              >
                <MessageCircle size={18} className="text-[#9b3c52] hover:text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">تصفح</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/sudanese-top", label: "توب سوداني" },
                { href: "/abayas", label: "عبايات" },
                { href: "/offers", label: "العروض" },
                { href: "/about", label: "من نحن" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#9b3c52] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
        </div>

        <div className="border-t border-white/10 mt-2 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 TOOB FOR LESS  . جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            صُنع بـ <Heart size={13} className="text-[#9b3c52]" fill="currentColor" /><a href="https://soob-portfolio.vercel.app/">Soo</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
