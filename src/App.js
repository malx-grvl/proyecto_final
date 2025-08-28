// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Submenu from "./Submenu";
import Promociones from "./pages/promociones"
import Novedades from "./pages/novedades"
import Contacto from './contacto/contacto';
import Nosotros from './Nosotros';
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Submenu />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  );
}

export default App;

