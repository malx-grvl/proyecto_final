export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Sección de la cafetería */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Cafetería El Rincón</h3>
          <p>RUC: 20612918229</p>
          <p>Dirección: Av. Principal 123, Lima - Perú</p>
          <p>Teléfono: +51 999 999 999</p>
        </div>

        {/* Sección de navegación */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Enlaces rápidos</h3>
          <ul className="space-y-1">
            <li><a href="#menu" className="hover:text-white">Menú</a></li>
            <li><a href="#nosotros" className="hover:text-white">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Síguenos</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Cafetería El Rincón - Todos los derechos reservados
      </div>
    </footer>
  );
}
