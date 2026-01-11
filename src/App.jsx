// src/App.jsx
import { useState, useEffect  } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { initFacebookPixel } from "./metaPixel";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Filtros from './components/FilterCategories/Filtros';
import ProductosGrid from './components/ProductosGrid';
import ProductPage from './components/pages/ProductPage/ProductPage';
import { productos } from './data/productos';
import ButtonWhatsapp from './components/ButtonWhatsapp/ButtonWhatsapp';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Footer from './components/Footer/Footer';
import TermsModal from './components/TermsModal/TermsModal';
import Shipments from './components/pages/Shipments/Shipments';
import Returns from './components/pages/Returns/Returns';
import Privacy from './components/pages/Privacy/Privacy';



export default function App() {
  const [genero, setGenero] = useState('');
  const [nombre, setNombre] = useState('');
  const [modelo, setModelo] = useState('');
  const [ termsModal, setTermsModal ] = useState(false);


  const location = useLocation();
  useEffect(() => {
    initFacebookPixel();
  }, []);

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);


  // Importamos los productos
  const productosFiltrados = productos.filter(p => {
    return (
      (!genero || p.genero === genero) &&
      (!nombre || p.nombre === nombre) &&
      (!modelo || p.modelo === modelo)
    );
  });

  return (
    <>
    
      <ShoppingCart/>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Hero />
            <Filtros
              genero={genero}
              setGenero={setGenero}
              nombre={nombre}
              setNombre={setNombre}
              modelo={modelo}
              setModelo={setModelo}
            />
            <div className="container">
              <ProductosGrid productos={productosFiltrados} />
            </div>
            <ButtonWhatsapp/>
            <Footer openTermsModal={ termsModal } setOpenTermsModal={ setTermsModal } />
            { termsModal 
              ?
                <TermsModal openTermsModal={ termsModal } setOpenTermsModal={ setTermsModal } />  
              : '' 
            }
          </>
        }/>

        <Route path='/product/:id' element={
          <ProductPage/>
          } 
        />

        <Route 
          path='/shipments' 
          element={ <Shipments/> }
        />

        <Route 
          path='/returns' 
          element={ <Returns/> }
        />

        <Route 
          path='/privacy' 
          element={ <Privacy/> }
        />

      </Routes>
      
    </>
  );
}