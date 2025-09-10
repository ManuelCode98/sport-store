import { useEffect, useState } from "react";
import './ShoppingCart.css';

const ShoppingCart = ({ products, setProducts }) => {

  const [ numberProductState, setNumberProductState ] = useState(0);
  const [ openCartState, setOpenCartState ] = useState(false);

  
  useEffect(() =>{

    const existsProductsLocalStorage = localStorage.getItem( 'products' );

    if( existsProductsLocalStorage === null ) return

    const getProductsLocalStorage = JSON.parse( localStorage.getItem( 'products' ) );

    setProducts( getProductsLocalStorage );

  }, []);

  useEffect(() => {
    
    if (products) {
      
      setNumberProductState( products.length );
    }


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

  
  const emptyCart = (  )=>{

    // Borrar el localStorage
    localStorage.removeItem('products');
    setNumberProductState( 0 );
    setProducts([]);

  }

  const deleteProduct = ( index )=>{

    const newArrayProducts = [...products];
    newArrayProducts.splice( index, 1 );

    // Borrar el localStorage y luego guardar los productos en el localStorage
    localStorage.removeItem('products');
    localStorage.setItem( 'products', JSON.stringify( newArrayProducts ) );

    setProducts( newArrayProducts );
  }

  return (
    <div className='container-shopping-card'>
      <div className="container-buttons-shopping-cart">

        {
          openCartState 
            ?
              <>
                <button 
                  className="button-shopping-cart empty-cart"
                  onClick={ () => emptyCart() }
                  disabled={!openCartState}
                >
                  Vaciar Carrito
                </button>

                <button 
                  className="button-shopping-cart place-an-order"
                  onClick={ () => placeAnOrderOnWhatsApp( products ) }
                  disabled={!openCartState} 
                >
                  Hacer pedido
                </button>
              </>
          : ''    
        }

        <div className="container-icons-shopping-cart">
          <span className="number-products-cart">{numberProductState}</span>
          <button 
            className="button-shopping-cart shopping-cart"
            onClick={ ()=> openCart() }  
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H2L1 3H5M6 6H19L17 18H8L6 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="21" r="1" fill="currentColor"/>
              <circle cx="18" cy="21" r="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      { 
        openCartState 
          ? 
            <>
              <div className="container-products-cart">
                {
                  products.length
                    ? products.map( (product, index) => (
                      <div key={index} className="products-cart">
                        <img className="product-photo-cart" src={product.currentImage} />
                        <div>
                          {product.nombre} {product.modelo} Cant: {product.amount} Color: {product.color} Precio: <span style={{ color: 'green' }}>{product.precio}</span>

                          <button 
                            className="btn-trash"
                            onClick={ ( )=> deleteProduct( index ) }
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6H5H21" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>

                        </div>
                      </div>
                    ))
                    : 
                      <div style={{'color':'red', 'fontWeight':'bold'}}>No hay productos en el carrito</div>
                      
                }
                
              </div>
          </>
          : ''
      }

    </div>
  )
}

export default ShoppingCart
