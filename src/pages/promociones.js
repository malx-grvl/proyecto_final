export default function Promociones() {
  const promociones = [
    { id: 1, titulo: "2x1 en Frappes y Iced Coffee", descripcion: "Todos los jueves.", imagen: `${process.env.PUBLIC_URL}/img/promo1.jpg` },
    { id: 2, titulo: "3x2 en Coffees", descripcion: "Lleva 3 coffees y paga solo 2.", imagen: `${process.env.PUBLIC_URL}/img/promo2.jpg` },
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Promociones</h1>
      <p>Aquí puedes ver nuestras últimas promociones.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {promociones.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl shadow-lg p-4">
            <img src={p.imagen} alt={p.titulo} className="w-full h-70 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{p.titulo}</h3>
            <p className="text-gray-600">{p.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
