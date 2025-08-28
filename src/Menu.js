export default function Menu() {
  const cafes = [
    { nombre: "Café Americano", precio: "S/ 8.00", imagen: `${process.env.PUBLIC_URL}/img/cafe_americano.jpg` },
    { nombre: "Capuccino", precio: "S/ 11.00", imagen: `${process.env.PUBLIC_URL}/img/capuccino.jpg` },
    { nombre: "Café irlandes", precio: "S/ 16.00", imagen: `${process.env.PUBLIC_URL}/img/cafe_irlandes.jpg` },
    { nombre: "Café bombon", precio: "S/ 13.00", imagen: `${process.env.PUBLIC_URL}/img/bombon.jpg` },
    { nombre: "Chocolate caliente", precio: "S/ 8.00", imagen: `${process.env.PUBLIC_URL}/img/chocolate_caliente.jpg` },
    { nombre: "Café doppio", precio: "S/ 7.00", imagen: `${process.env.PUBLIC_URL}/img/doppio.jpg` },
    { nombre: "Latte", precio: "S/ 11.00", imagen: `${process.env.PUBLIC_URL}/img/latte.jpg` },
    { nombre: "Mocaccino", precio: "S/ 12.00", imagen: `${process.env.PUBLIC_URL}/img/mocaccino.jpg` },
  ];

  const postres = [
    { nombre: "Cheescake de pistachos", precio: "S/ 13.00", imagen: `${process.env.PUBLIC_URL}/img/cheescake.jpg` },
    { nombre: "Empanada de carne y pollo", precio: "S/ 7.00", imagen: `${process.env.PUBLIC_URL}/img/empanada.jpg` },
    { nombre: "Keke de zanahoria con pecanas", precio: "S/ 8.00", imagen: `${process.env.PUBLIC_URL}/img/keke.jpg` },
  ];

  const refrescos = [
    { nombre: "Jugo de temporada", precio: "S/ 10.00", imagen: `${process.env.PUBLIC_URL}/img/jugo.jpg` },    
  ];

  const alitas = [
    { nombre: "Alitas crispy", precio: "S/ 20.00", imagen: `${process.env.PUBLIC_URL}/img/alitas_crispy.png` },
    { nombre: "Alitas bbq", precio: "S/ 20.00", imagen: `${process.env.PUBLIC_URL}/img/alitas_bbq.png` },
    { nombre: "Alitas buffalo", precio: "S/ 20.00", imagen: `${process.env.PUBLIC_URL}/img/alitas_buffalo.png` },
  ];

  const cafehelado = [
    { nombre: "Ice latte", precio: "S/ 9.00", imagen: `${process.env.PUBLIC_URL}/img/ice_latte.jpg` },
  ];

  const tostadas = [
    { nombre: "Tostadas francesas", precio: "S/ 14.00", imagen: `${process.env.PUBLIC_URL}/img/tostadas_francesas.jpg` },
  ];

  const frapes = [
    { nombre: "Frappe blueberry banana", precio: "S/ 12.00", imagen: `${process.env.PUBLIC_URL}/img/frappe_blueberry banana.jpg` },
    { nombre: "Frappe frutos rojos", precio: "S/ 12.00", imagen: `${process.env.PUBLIC_URL}/img/frappe_frutos rojos.jpg` },
  ];

  const Sandwiches = [
    { nombre: "Martillo dulce", precio: "S/ 14.00", imagen: `${process.env.PUBLIC_URL}/img/martillo_dulce.jpg` },
    { nombre: "Sandguche pollero", precio: "S/ 12.00", imagen: `${process.env.PUBLIC_URL}/img/sandguche_pollero.jpg` },
  ];
  return (
    <div className="p-8 space-y-12">
      {/* Sección Cafés */}
      <section id="cafes">
        <h2 className="text-3xl font-bold mb-6">Cafés</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cafes.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Postres */}
      <section id="postres">
        <h2 className="text-3xl font-bold mb-6">Postres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {postres.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Sección Postres */}
      <section id="refrescos">
        <h2 className="text-3xl font-bold mb-6">Refrescos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {refrescos.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Postres */}
      <section id="alitas">
        <h2 className="text-3xl font-bold mb-6">Alitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {alitas.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Postres */}
      <section id="cafeice">
        <h2 className="text-3xl font-bold mb-6">Cafe helado</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cafehelado.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Postres */}
      <section id="tostadas">
        <h2 className="text-3xl font-bold mb-6">Tostadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tostadas.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-50 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Postres */}
      <section id="frapes">
        <h2 className="text-3xl font-bold mb-6">Frapes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {frapes.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Postres */}
      <section id="sandwich">
        <h2 className="text-3xl font-bold mb-6">Sandwiches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Sandwiches.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
              <img src={p.imagen} alt={p.nombre} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.precio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
