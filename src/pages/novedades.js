export default function Novedades() {
  const novedades = [
    { id: 1, titulo: "Nuevo Café de Temporada", descripcion: "Prueba nuestro nuevo café de temporada, una mezcla única de sabores.", imagen: `${process.env.PUBLIC_URL}/img/cafe_americano.jpg` },
    { id: 2, titulo: "Postre del Mes", descripcion: "No te pierdas nuestro postre del mes, una delicia que no podrás resistir.", imagen: `${process.env.PUBLIC_URL}/img/cheescake.jpg` },
    { id: 3, titulo: "Promoción Especial", descripcion: "Aprovecha nuestra promoción especial en bebidas frías durante todo el verano.", imagen: `${process.env.PUBLIC_URL}/img/frappe_blueberry banana.jpg` },
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Novedades</h1>
      <p>Aquí puedes ver nuestras Novedades.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {novedades.map((n) => (
          <div key={n.id} className="bg-white rounded-2xl shadow-lg p-4">
            <img src={n.imagen} alt={n.titulo} className="w-full h-50 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{n.titulo}</h3>
            <p className="text-gray-600">{n.descripcion}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
