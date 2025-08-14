import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductosPage from "./pages/ProductosPage";
import CombosPage from "./pages/CombosPage";
import RedesSocialesPage from "./pages/RedesSocialesPage";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductosPage />,
  },
  {
    path: "/combos",
    element: <CombosPage />,
  },
  {
    path: "/redes-sociales",
    element: <RedesSocialesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
