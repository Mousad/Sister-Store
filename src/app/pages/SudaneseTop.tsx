import { useState } from "react";
import { Grid3X3, LayoutList, ShoppingBag } from "lucide-react";
import { getSudaneseTops } from "../data/products";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function SudaneseTop() {
  const products = getSudaneseTops();
  const [gridCols, setGridCols] = useState(3);
  const { addToCart } = useCart();

  return (
    <div dir="rtl" className="bg-[#f5f5f5] min-h-screen">

      {/* Header */}
      <div
        className="relative py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(155,60,82,0.6)),
            url('https://i.pinimg.com/736x/28/00/1b/28001bc2fe6737dcf8faf7911fb1328d.jpg')
          `
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-3">توب سوداني</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            اكتشفي أجمل تصاميم التوب السوداني
          </p>
        </div>
      </div>

      {/* Grid Controls */}
      <div className="max-w-7xl mx-auto px-6 my-6 flex justify-end">
        <div className="flex gap-2 bg-white p-2 border">

          <button
            onClick={() => setGridCols(3)}
            className={`p-2 ${gridCols === 3 ? "bg-[#9b3c52] text-white" : ""}`}
          >
            <Grid3X3 size={18} />
          </button>

          <button
            onClick={() => setGridCols(2)}
            className={`p-2 ${gridCols === 2 ? "bg-[#9b3c52] text-white" : ""}`}
          >
            <LayoutList size={18} />
          </button>

        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className={`grid gap-6 ${
          gridCols === 3
            ? "grid-cols-2 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        }`}>

          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

              {/* Link to product */}
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.images?.[0] || product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition"
                />
              </Link>

              {/* Info */}
              <div className="p-4">

                <Link to={`/product/${product.id}`}>
                  <h3 className="text-gray-800 font-medium hover:text-[#9b3c52]">
                    {product.name}
                  </h3>
                </Link>

                {/* Price + Cart */}
                <div className="flex items-center justify-between mt-2">

                  <p className="text-[#9b3c52] font-bold">
                    {product.price} ج.م
                  </p>

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
          ))}

        </div>
      </div>

    </div>
  );
}