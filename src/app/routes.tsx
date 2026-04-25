import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { CartProvider } from "./context/CartContext";

import { Home } from "./pages/Home";
import { SudaneseTop } from "./pages/SudaneseTop";
import { Abayas } from "./pages/Abayas";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Offers } from "./pages/Offers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Root />
      </CartProvider>
    ),
    children: [
      { index: true, Component: Home },
      { path: "sudanese-top", Component: SudaneseTop },
      { path: "abayas", Component: Abayas },
      { path: "product/:id", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "offers", Component: Offers },
    ],
  },
]);