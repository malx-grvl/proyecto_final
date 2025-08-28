import React from "react";  

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Herrero Coffe Bakery
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            En <span className="font-semibold">Herrero Café</span>
          </p>
          <p>
            Herrero Café nació de la amistad de dos jóvenes, Manuel y Sebastián, 
            quienes se conocieron en el instituto. Aunque cada uno tenía una pasión 
            diferente, encontraron la manera perfecta de unirlas.
          </p>
          <p className="mt-2">
            Sebastián, amante del café y sus infinitos aromas, soñaba con crear la 
            taza perfecta que pudiera transmitir emociones en cada sorbo. Manuel, 
            apasionado por la cocina, veía en cada plato una oportunidad de innovar 
            y compartir momentos especiales alrededor de la mesa.
          </p>
          <p className="mt-2">
            Fue así como decidieron emprender juntos y abrir su propia cafetería. 
            Con esfuerzo, creatividad y mucho cariño, Herrero Café se convirtió en 
            un espacio donde el arte del café y la cocina se complementan, creando 
            una experiencia única para cada visitante.
          </p>
          <p className="mt-2">
            Hoy, su cafetería sigue creciendo, transmitiendo la esencia con la que nació:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>☕ Pasión por el café</li>
            <li>🥧 Amor por la cocina</li>
            <li>✨ Un ambiente tranquilo donde cada persona se sienta como en casa</li>
          </ul>
          <p className="mt-4">
            En Herrero Café no solo servimos bebidas y postres; compartimos momentos, 
            historias y la calidez de un lugar hecho con el corazón.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/img/cafe.jpg`}
            alt="Imagen de café"
            className="w-[400px] h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
