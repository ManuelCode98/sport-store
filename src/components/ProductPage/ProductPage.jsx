import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { productos } from '../../data/productos';
import './ProductPage.css';


const ProductPage = ({ products, setProducts }) => {

  const localtion = useLocation();
  const currentPaht = localtion.pathname;
  const [ windowImageOpen, setWindowImageOpen ] = useState(false);
  const [ showModelState, setShowModelState ] = useState(false);
  const [ amountProductState, setAmountProductState ] = useState(1);

  const [ productState, setProductState ] = useState({
    descripcion: '',
    genero: '',
    id: 0,
    currentImage: '',
    imagenes: '',
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

  },[]);

  const changeImage = ( {currentTarget} )=>{


    // Aca seleccionamos todos las imagenes por su clase y le borramos la clase "opacity"
    const images = document.querySelectorAll('.image-model');
    images.forEach( (image)=>(
      image.classList.add('opacity')
    ))
    
    // Aca le agregamos la clase solo al elemento que se clico
    currentTarget.classList.remove('opacity');

    setProductState( { ...productState, currentImage: currentTarget.src } );
    

  }

  const showImage = ( { currentTarget } )=>{

    console.log(currentTarget.className)
    console.log(currentTarget.src)

    if( !showModelState ){
      setShowModelState( true );
      return
    }

    setShowModelState( false );
  }

  const addToCart = ( { currentTarget }, product, productUnits )=>{

    const color = product.currentImage
    .split('/').pop() 
    .split('.')[0]              
    .split('-').slice(1).join(' '); 

    setProducts( prevProducts => [ ...prevProducts, {
      ...product,
      amount : amountProductState,
      color 
      }  
    ]);
    
    setAmountProductState( 1 );

    // Creo una copia del array original y le quito la propieda "precio_compra"
    const { precio_compra, imagenes, ...newProduct } = product
    // Creo una copia del array de products y luego le agrego agrego el producto que viene en la funcion 
    const newArrayProducts = [...products];
    newArrayProducts.push( {
      ...newProduct, 
        amount : amountProductState, 
        color 
    } );

    // Borrar el localStorage y luego guardar los productos en el localStorage
    localStorage.removeItem('products');
    localStorage.setItem( 'products', JSON.stringify( newArrayProducts ) );

  }

  const amountProduct = ( { currentTarget } )=>{

    if( currentTarget.innerText === '-' && amountProductState === 1 ) return
    if( currentTarget.innerText === '+' ){
      setAmountProductState( amountProductState + 1 )
    }
    if( currentTarget.innerText === '-' ){
      setAmountProductState( amountProductState - 1 )
    }

  }


  return (
    <>
      { showModelState 
        ?
          <div className='container-window-model'>
            <img 
              src={productState.currentImage} 
              className='open-photo-model'
              onClick={ (e)=> showImage(e) }
            />
          </div>
        :
          <>
            <div className="container-show-product">{ productState.id > 0 && 
              <div key={ productState.id } className='container-product' >

                <img 
                  className='product-page-photo' 
                  src={ productState.currentImage } 
                  onClick={ (e)=> showImage(e) }
                />

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
                      {/* Aca debo de hacer la funcion para agregar los productos al carrito */}
                      <div className='container-button-buy' >
                        <div className='container-button-handle-amount'>
                          <button className='button-handle-amount' onClick={ (e)=> amountProduct(e) }>-</button>
                            <span>{amountProductState}</span>
                          <button className='button-handle-amount' onClick={ (e)=> amountProduct(e) }>+</button>
                        </div>

                        <span 
                          className='button-name-buy' 
                          // Aca debe de ir agregando productos al carro
                          onClick={ (e)=> addToCart(e, productState, amountProductState ) }
                        >
                          Añadir al carrito
                        </span>
                      </div>
                  </div>
                </div>

              </div>
            }
          </div>
          <div className='container-model'>
            {
              productState.imagenes.length > 0 && productState.imagenes.map( ( image, index )=>(
                <img
                  key={image}
                  src={image}
                  className={`image-model ${ index === 0 ? '' : 'opacity' }`}
                  onClick={(e) => changeImage(e)}
                />  
              ))
            
            }
          </div>
          </>
      }
    </>
  );
}

export default ProductPage
