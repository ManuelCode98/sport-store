import { useEffect, useState } from "react";
import './ShoppingCart.css';

const ShoppingCart = ({ products }) => {

  const [ numberProductState, setNumberProductState ] = useState(0);
  const [ openCartState, setOpenCartState ] = useState(false);

  useEffect(() => {
    
    setNumberProductState( products.length );

  }, [ products ]);

  const openCart = (  )=>{

    if( !openCartState ) return setOpenCartState( true )

    setOpenCartState( false );
    
  }

  const placeAnOrderOnWhatsApp = async ( currentProducts )=>{

    const numberWhatsapp = '573157382433';
    
    let message = `Hola quiero hacer este pedido: \n\n`;
    //Todo debemos de encargarnos de no mandar el precio de compra del producto
    currentProducts.forEach( ( product, index ) => {
      message += `${ index + 1 }) ${ product.nombre } ${ product.modelo } para ${ product.genero } valor: ${ product.precio } cantidad: ${ product.amount } color: ${ product.color } \n`;
    });

    // Formatiamos el mensaje
    const formatMessage = encodeURIComponent(message); 

    const urlWhatsApp = `https://wa.me/${numberWhatsapp}?text=${ formatMessage }`;
    
    window.open(urlWhatsApp, '_blank');
    
  }


  return (
    <div className='container-shopping-card'>
      {/* {
        openCartState
         ?
           <>
            <button 
              className="empty-cart"
              // onClick={ () => placeAnOrderOnWhatsApp( products ) }
            >
              Vaciar Carrito
            </button>
            <button 
              className="button-place-an-order"
              onClick={ () => placeAnOrderOnWhatsApp( products ) }
            >
              Hacer Pedido
            </button>
           </>
         : ''
      } */}
      <span className="number-products-cart">{numberProductState}</span>
      <button
        className="photo-shopping-card" 
        // Todo Esta funcion debe de mostar los productos que estan agreados
        onClick={ ()=> openCart() }
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H2L1 3H5M6 6H19L17 18H8L6 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="21" r="1" fill="currentColor"/>
          <circle cx="18" cy="21" r="1" fill="currentColor"/>
        </svg>
      </button>
        { 
          openCartState 
            ? 
              <>
                <div className="container-products-cart">
                  {
                    products
                      ? products.map( product => (
                        <div className="products-cart">
                          <img className="product-photo-cart" src={product.currentImage} />
                          <div>
                            {product.nombre} {product.modelo} Cant: {product.amount} Color: {product.color} Precio: <span style={{ color: 'green' }}>{product.precio}</span>
                          </div>
                        </div>
                      ))
                      : ''
                  }
                  
                </div>

           <div>
               <button 
              className="empty-cart"
              // onClick={ () => placeAnOrderOnWhatsApp( products ) }
            >
              Vaciar Carrito
            </button>
            <button 
              className="button-place-an-order"
              onClick={ () => placeAnOrderOnWhatsApp( products ) }
            >
              Hacer Pedido
            </button>
           </div>


           </>
            : ''

        }
    </div>
  )
}

export default ShoppingCart
