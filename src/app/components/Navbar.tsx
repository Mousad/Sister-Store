import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/sudanese-top", label: "توب سوداني" },
    { href: "/abayas", label: "تياب عرسان" },
    { href: "/offers", label: "العروض" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed -top-0 right-0 left-0 z-50 transition-all duration-500 bg-[#ffffff] shadow-md`}
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-18">

            {/* MOBILE: Menu - LEFT */}
            <button
              className="lg:hidden text-[#9b3c52] hover:text-[#9b3c52] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* LOGO - CENTER on mobile / LEFT on desktop */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link to="/" className="flex items-start group">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTue5PjUNw3Cf0XRCxL7OjIFaE1XID_O0GCkJ9x-UP7J1nwwdq3"
                  alt="Sister Store"
                  className="h-18 w-auto object-contain transition-opacity group-hover:opacity-80"
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-[#9b3c52] after:transition-all after:duration-300 hover:after:w-full hover:text-[#f5f5f5] ${
                    isActive(link.href)
                      ? "text-[#f5f5f5] font-semibold after:w-full"
                      : "text-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CART - RIGHT */}
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative group">
                <ShoppingBag
                  size={22}
                  className="text-[#9b3c52] group-hover:text-[#9b3c52] transition-colors"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -left-2 bg-white text-[#9b3c52] text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t border-gray-100`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base py-1 border-b border-gray-50 transition-colors ${
                  isActive(link.href)
                    ? "text-[#9b3c52] font-semibold"
                    : "text-gray-700 hover:text-[#9b3c52]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-[38px]" />
    </>
  );
}