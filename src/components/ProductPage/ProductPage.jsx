import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { productos } from '../../data/productos';
import './ProductPage.css';



const ProductPage = () => {

    const localtion = useLocation();
    const currentPaht = localtion.pathname;

  const [ productState, setProductState ] = useState({
    descripcion: '',
    genero: '',
    id: 0,
    imagen: '',
    modelo: '',
    nombre : '',
    precio : ''
  })
    
    useEffect(()=>{
        
        const getId = currentPaht.split('/product/');
        const id = parseInt( getId[1] );
        
        (async()=>{
          
            const getProduct = ( id ) => productos.find( product => product.id === id );

            setProductState( getProduct( id ) );
        })();

  },[])  

  console.log(productState)

  return (
    <div className="container-show-product">{ productState.id > 0 && 
        <div key={ productState.id } className='container-product' >

          <img className='product-page-photo' src={ productState.imagen } />

          <div className='product-features'>
            <div className='container-data'>
                <h4 className='home-page-product-name'>{ productState.nombre }</h4>
                <h4 className='home-page-model'>{ productState.modelo }</h4>
                <h4 className='home-page-gender'>{ productState.genero }</h4>

                <div className="rating" aria-label="Calificación: 4.5 de 5 estrellas">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="rating-text">{/*4.5*/}</span>
                </div>

                <h4 className='home-page-model'>{ productState.descripcion }</h4>
                
                <h4 className='home-page-sale-price'>Cop <span style={{ 'color':'green' }}>{ productState.precio }</span> </h4>

                <div className='container-button-buy' >
                  <span className='button-name-buy' >Comprar</span>
                </div>
            </div>
          </div>

        </div>
      }
    </div>
  );
}

export default ProductPage
