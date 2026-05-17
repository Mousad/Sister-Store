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
            url('https://instagram.fcai19-7.fna.fbcdn.net/v/t51.82787-15/660310850_17894205138438818_5432033328692160044_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzg2ODE3NDg3NTU1NDM2MTgyMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM1MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ab6MY_dK2P4Q7kNvwE9ftk9&_nc_oc=Adqz7bCtdEASnb81_TiTlF2QKtmtKZ1LbIj9IFgHPzbHlynDkJRsKsoCVnZD9LFa6Hw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=7&_nc_ht=instagram.fcai19-7.fna&_nc_gid=9vgJwhwOh94baFsZ3fE6tA&_nc_ss=7a22e&oh=00_Af5BMHwUp0WWXYztvyqifvJsrk24A8GT12NL_0CmVs3rpA&oe=6A0F2C00')
          `
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-3"> عبايات خليجي</h1>
          <p className="text-white/70 max-w-xl mx-auto">
            اكتشفي أجمل تصاميم عبايات 
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