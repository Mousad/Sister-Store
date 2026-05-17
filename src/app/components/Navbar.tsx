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
    { href: "/sudanese-top", label: " عبايات عربية" },
    { href: "/abayas", label: "عباية " },
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
        className={`fixed -top-0 right-0 left-0 z-50 transition-all duration-500 bg-[#420000] shadow-md`}
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-15">

            {/* MOBILE: Menu - LEFT */}
            <button
              className="lg:hidden text-[#f9f9f9] hover:text-[#9b3c52] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* LOGO - CENTER on mobile / LEFT on desktop */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link to="/" className="flex items-start group">
                <img
                  src="https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-1/659127591_122171919392861308_8285421110741960225_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=-i9-OTzSD2AQ7kNvwFgreC1&_nc_oc=AdoD1PmVVEdATDTD4HhIr7UZIvXaeAEL9eQz33l8pWV9Shka8X9p8D-w2CGM1CxSzx0&_nc_zt=24&_nc_ht=scontent.fcai19-7.fna&_nc_gid=60reW-5gZ_kuiqtw47aScQ&_nc_ss=7b2a8&oh=00_Af6hod0A6L_A26l3kJf2IWV-imij858MSN_gXcw_hxAaPQ&oe=6A0F13DE"
                  alt="Sister Store"
                  className="h-15 w-auto object-contain transition-opacity group-hover:opacity-80"
                />
              </Link>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-[#9b3c52] after:transition-all after:duration-300 hover:after:w-full hover:text-[#9b3c52] text-[#9b3c52] ${
                    isActive(link.href)
                      ? "text-[#f9f9f9] font-semibold after:w-full"
                      : "text-[#f9f9f9]"
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
                  className="text-[#f9f9f9] group-hover:text-[#9b3c52] transition-colors"
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