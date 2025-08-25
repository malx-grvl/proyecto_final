export default function Menu() {
  const productos = [
    { nombre: "Café Americano", precio: "S/ 6.00", imagen: "/img/cafe.png" },
    { nombre: "Capuccino", precio: "S/ 8.50", imagen: "/img/capuccino.png" },
    { nombre: "Café con leche", precio: "S/ 4.50", imagen: "/img/cafe_con_leche.png" },
  ];

  return (
    <section id="menu" className="p-8">
      <h2 className="text-3xl font-bold mb-6">Cafés</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-4">
            <img src={p.imagen} alt={p.nombre} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{p.nombre}</h3>
            <p className="text-gray-600">{p.precio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
