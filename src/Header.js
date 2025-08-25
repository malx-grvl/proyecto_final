export default function Header() {
  return (
    <header className="p-4 bg-pink-600 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Cafetería</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#menu">Menú</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
