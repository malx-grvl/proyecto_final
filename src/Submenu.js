// src/components/Submenu.js
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Submenu() {
  const scrollLeft = () => {
    document.getElementById("submenu").scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("submenu").scrollBy({ left: 200, behavior: "smooth" });
  };

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
        <a href="#donuts" className="text-orange-600 font-bold whitespace-nowrap">☕ Cafés</a>
        <a href="#combos" className="whitespace-nowrap">🥘 Combos </a>
        <a href="#promos" className="whitespace-nowrap">💸 Promociones</a>
        <a href="#frias" className="whitespace-nowrap">🧊 Bebidas Frías</a>
        <a href="#calientes" className="whitespace-nowrap">🥤 Otras Bebidas</a>
        <a href="#novedades" className="whitespace-nowrap">✨ Novedades</a>
        <a href="#sandwich" className="whitespace-nowrap">🥪 Sandwiches</a>
        <a href="#cookies" className="whitespace-nowrap">🍪 Cookies</a>
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
