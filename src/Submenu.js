// src/components/Submenu.js
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Submenu() {
  const location = useLocation();

  const scrollLeft = () => {
    document.getElementById("submenu").scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("submenu").scrollBy({ left: 200, behavior: "smooth" });
  };

  // Detectar si estamos en el inicio "/"
  const isHome = location.pathname === "/";

  return (
    <div className="relative bg-white shadow-md">
      {/* Botón Izquierda */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scroll horizontal */}
      <div
        id="submenu"
        className="flex gap-6 overflow-x-auto no-scrollbar px-12 py-3"
      >
        {isHome && (
          <>
            <a href="#cafes" className="text-orange-600 font-bold whitespace-nowrap">☕ Cafés</a>
            <a href="#postres" className="whitespace-nowrap">🍰 Postres </a>
            <a href="#refrescos" className="whitespace-nowrap">🥤 Refrescos</a>
            <a href="#alitas" className="whitespace-nowrap">🍗 Alitas</a>
            <a href="#cafeice" className="whitespace-nowrap">🧊 Cafe helado</a>
            <a href="#tostadas" className="whitespace-nowrap">🍞 Tostadas</a>
            <a href="#frapes" className="whitespace-nowrap">🍓 Frapes</a>
            <a href="#sandwich" className="whitespace-nowrap">🥪 Sandwiches</a>
          </>
        )}
        {/* Siempre visibles */}
        <Link to="/promociones" className="whitespace-nowrap">💸 Promociones</Link>
        <Link to="/novedades" className="whitespace-nowrap">✨ Novedades</Link>
      </div>

      {/* Botón Derecha */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 shadow rounded-full"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
