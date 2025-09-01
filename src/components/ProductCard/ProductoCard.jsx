import { useLocation } from "react-router-dom";
import './ProductCard.css';

// src/components/ProductoCard.jsx
export default function ProductoCard({ producto }) {

  // const location = useLocation();
  // const currentPath = location.pathname();
  // const getId = ;

  // console.log(currentPath)

  const abrirDetalle = () => {
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${producto.nombre}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div class="container">
          <div class="detalle">
            <img src="${producto.currentImage}" alt="${producto.nombre}" />
            <h2>${producto.nombre}</h2>
            <div class="modelo">Modelo: ${producto.modelo}</div>
            <div class="precio">USD $${producto.precio.toFixed(2)}</div>
            <p>${producto.descripcion}</p>
          </div>
        </div>
      </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <div
      className="producto-card"
      // onClick={abrirDetalle}
      // style={{
      //   backgroundColor: 'white',
      //   borderRadius: '12px',
      //   overflow: 'hidden',
      //   boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      //   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      //   cursor: 'pointer',
      //   textAlign: 'center'
      // }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    > 
      <a href={`product/${producto.id}`} target='_blank' >
         {/* href={`product/${product.id}`} */}
        <img
          src={producto.currentImage}
          alt={producto.nombre}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }}
        />
        <div style={{ padding: '1.2rem' }}>
          <h3 style={{
            fontSize: '1.2rem',
            margin: '0.5rem 0',
            color: '#2c3e50'
          }}>
            {producto.nombre}
          </h3>
          <div className="modelo" style={{
            color: '#7f8fa6',
            fontSize: '0.9rem'
          }}>
            Modelo: {producto.modelo}
          </div>
          <div className="precio" style={{
            fontWeight: 'bold',
            color: '#27ae60',
            fontSize: '1.1rem'
          }}>
            Cop ${producto.precio.toFixed(2)}
          </div>
        </div>
      </a> 
   
    </div>
  );
}