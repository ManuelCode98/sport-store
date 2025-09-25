import { useEffect, useState } from "react";
import './ShoppingCart.css';
import { formatPrices } from "../../helpers/formatPrices";

const ShoppingCart = ({ products, setProducts }) => {

  const [ numberProductState, setNumberProductState ] = useState(0);
  const [ resultsState, setResultsState ] = useState([]);
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
      const prices = products.map( product => product.precio * product.amount );
      setResultsState( prices );
     
    }


  }, [ products ]);

  const openCart = (  )=>{

    if( !openCartState ) return setOpenCartState( true )

    setOpenCartState( false );
    
  }

  const placeAnOrderOnWhatsApp = async ( shoppingCartProducts )=>{

    if( numberProductState <= 0 ) return;

    const numberWhatsapp = '573157382433';
    
    // Solo mapeo las cantidades y los precios para poder multiplicar cade uno de ellos
    const results = shoppingCartProducts.map( (product)=>{

      const { amount, precio } = product;
      const result = amount * precio;
      return result;
    })

    // Luego los sumo para obtener el valor total a pagar y se lo enviamos a la funcion formatPrice
    const result = results.reduce( ( acumulator, currentPrice ) => acumulator + currentPrice, 0 );


    let message = `Hola quiero hacer este pedido: \n\n\n`;
    shoppingCartProducts.forEach( ( product, index ) => {
      message += `${ index + 1 }) ${ product.nombre } ${ product.modelo } para ${ product.genero } valor: ${ formatPrices( product.precio ) } cantidad: ${ product.amount } color: ${ product.color } total = ${ formatPrices( (product.precio * product.amount) ) } \n\n`;
    });


    // Formatiamos el mensaje
    const formatMessage = encodeURIComponent( `${message} Total a pagar: ${ formatPrices( result ) }`); 

    const urlWhatsApp = `https://wa.me/${numberWhatsapp}?text=${ formatMessage }`;
    
    window.open(urlWhatsApp, '_blank');
    
  }

  
  const emptyCart = (  )=>{

    if( numberProductState <= 0 ) return;

    // Borrar el localStorage
    localStorage.removeItem('products');
    setNumberProductState( 0 );
    setProducts([]);

  }

  const deleteProduct = ( index )=>{

    // Creamos una copia del array
    const newArrayProducts = [...products];
    // Borramos el producto del carrito por su indice
    newArrayProducts.splice( index, 1 );

    // Ahora le quitamos algunas propiedades para que no se guarden en el localStorage
    const saveProducts = newArrayProducts.map( (product) => {
      const { precio_compra, imagenes, ...newProduct } = product;
      return newProduct;
    } )

    // Borrar el localStorage y luego guardar los productos en el localStorage
    localStorage.removeItem('products');
    localStorage.setItem( 'products', JSON.stringify( saveProducts ) );

    setProducts( newArrayProducts );
  }

  const sumPrices = ( vales )=>{

    const result = vales.reduce( (acc, currentValue)=> acc + currentValue, 0 );
    return result;
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
                          {product.nombre} {product.modelo} <span className="amount-shopping-cart">{product.amount}</span> X <span className="result-shopping-cart">{formatPrices( product.precio )}</span> Color: {product.color} total = <span className="result-shopping-cart">{formatPrices( ( product.precio * product.amount) )}</span>

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
              <div>
                Total a pagar : <span className="result-shopping-cart"> 
                    { formatPrices( sumPrices( resultsState ) )  } 
                  </span>
              </div>
          </>
          : ''
      }

    </div>
  )
}

export default ShoppingCart
