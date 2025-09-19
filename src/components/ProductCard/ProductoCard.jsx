import { Link, useLocation } from "react-router-dom";
import './ProductCard.css';
import { formatPrices } from "../../helpers/formatPrices";


export default function ProductoCard({ producto }) {


  return (
    <div
      className="producto-card"
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    > 

      <Link to={`product/${producto.id}`} >
        <img
          src={producto.currentImage}
          alt={producto.nombre}
        />
        <div className="product-card-name" style={{ padding: '1.2rem' }}>
          <h3>
            {producto.nombre}
          </h3>
          <div className="product-card-model" >
            Modelo: {producto.modelo}
          </div>
          <div className="product-card-price">
            {
              producto.descuento
                ? 
                  <>
                    <div className="previous-price">Cop ${ formatPrices( producto.precio_anterior ) }</div>
                    <div className="price">Cop ${ formatPrices( producto.precio ) }</div>
                  </>
                :
                  <div className="price">Cop ${ formatPrices( producto.precio ) }</div>
            }
          </div>
        </div>
      </Link> 

      {/* 
        Si queremos que se abra la pagina en una nueva pestaña, envolvemos todo el codigo
        en la etiqueta <a></a>
      */}
      {/* <a href={`product/${producto.id}`} target='_blank' >
      </a>  */}
   
    </div>
  );
}