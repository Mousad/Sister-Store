import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { CartProvider } from "./app/context/CartContext";
import "./styles/index.css";

import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);