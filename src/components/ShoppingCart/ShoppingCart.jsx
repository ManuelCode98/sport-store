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
      <img 
        className="photo-shopping-card" 
        src='https://media.istockphoto.com/id/1987775073/es/vector/icono-de-dibujo-de-l%C3%ADnea-negra-del-carrito-de-la-compra.jpg?s=612x612&w=0&k=20&c=_zNOhjCgZf82ZJlE1-eU-8XV5Zc6qeQp0_eMPJszj7Q='
        width={50}
        height={50}
        // Todo Esta funcion debe de mostar los productos que estan agreados
        onClick={ ()=> openCart() }
        />
        <span className="number-products-cart">{numberProductState}</span>
        { 
          openCartState 
            ? 
              <>
                <div className="container-products-cart">
                  {
                    products
                      ? products.map( product => (
                        <div>{product.nombre}</div>
                      ))
                      : ''
                  }
                  <button 
                    className="button-place-an-order"
                    onClick={ () => placeAnOrderOnWhatsApp( products ) }
                  >Hacer Pedido</button>
                </div>
                
              </>
            : ''

        }
    </div>
  )
}

export default ShoppingCart
