import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { CartProvider } from "./app/context/CartContext";
import "./styles/index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);