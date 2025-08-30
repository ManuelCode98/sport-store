// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filtros from './components/Filtros';
import ProductosGrid from './components/ProductosGrid';
import ProductPage from './components/ProductPage/ProductPage';
// const { productos } = require('./data/productos');
import { productos } from './data/productos';
import ButtonWhatsapp from './components/ButtonWhatsapp/ButtonWhatsapp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import '../styles.css';

export default function App() {
  const [genero, setGenero] = useState('');
  const [nombre, setNombre] = useState('');
  const [modelo, setModelo] = useState('');

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
    <BrowserRouter>
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
          </>
        }/>
        <Route path='/product/:id' element={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}