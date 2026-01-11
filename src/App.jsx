// src/App.jsx
import { useState, useEffect  } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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


const scrollAnimation = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.5 }
};


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
          <motion.div { ...scrollAnimation }>
            <Header />
          </motion.div>
          
          <motion.div { ...scrollAnimation }>
            <Hero />
          </motion.div>
          
          <motion.div { ...scrollAnimation }>
            <Filtros
              genero={genero}
              setGenero={setGenero}
              nombre={nombre}
              setNombre={setNombre}
              modelo={modelo}
              setModelo={setModelo}
            />
          </motion.div>

          <div className="container">
            {/* <motion.div { ...scrollAnimation }> */}
              <ProductosGrid productos={productosFiltrados} />
            {/* </motion.div>   */}
          </div>

            <ButtonWhatsapp/>

          <motion.div { ...scrollAnimation }>
            <Footer openTermsModal={ termsModal } setOpenTermsModal={ setTermsModal } />
          </motion.div>
            
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