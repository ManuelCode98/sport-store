import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { productos } from '../../../data/productos';
import './ProductPage.css';
import { formatPrices } from '../../../helpers/formatPrices';
import { informationAlert } from '../../../helpers/informationAlert';
import { useAllDataProduct } from '../../../context/useAllDataProduct';
import { useProduct } from '../../../context/useProduct';
import ShowModel from '../../ShowModel/ShowModel';
import HomeArrow from './components/HomeArrow';


const ProductPage = () => {

  const localtion = useLocation();
  const currentPaht = localtion.pathname;
  const [ windowImageOpen, setWindowImageOpen ] = useState(false);
  const [ amountProductState, setAmountProductState ] = useState(1);
  const [ selectSizeState, setSelectSizeState ] = useState(null);
  const { productsCart, setProductsCart, currentImage, setCurrentImage, setCurrentId } = useAllDataProduct();
  const { productState, setProductState } = useProduct();
   

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

  const showImage = ( { currentTarget }, id )=>{

    // Agrega la imagen que se le dio clic
    setCurrentImage( currentTarget.src );
  
    //Abre la ventana para mostrar solo la imagen
    setWindowImageOpen(true);


    return
  }

  const addToCart = ( { currentTarget }, product, productUnits, size )=>{

    if(!size){
      informationAlert(
        'Información',
        'Tienes que elegir una talla!'
      )
      return
    }    

    const color = product.currentImage
    .split('/').pop() 
    .split('.')[0]              
    .split('-').slice(1).join(' '); 

    const { precio_compra, imagenes, sizes, ...newProduct } = product

    const productToAdd = {
      ...newProduct,
      amount: productUnits,
      color,
      size,
    }

    const updatedCart = [ ...productsCart, productToAdd ];
    setProductsCart( updatedCart );
    
    // Guarda los productos en el localStorage
    localStorage.setItem( 'products', JSON.stringify( updatedCart ) );

    setAmountProductState( 1 );

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
        <div className='container-button-start'>
            <Link to={'/'} className='button-start'>
                <HomeArrow />
            </Link>
        </div>

        <div className="container-show-product">
            {productState.id > 0 && (
                <div key={productState.id} className='container-product'>
                    
                    {/* COLUMNA IZQUIERDA: FOTOS */}
                    <div className='container-product-photo-and-models'>
                        <div className='container-photo'>
                            <img
                                className='product-page-photo'
                                src={productState.currentImage}
                                onClick={(e) => showImage(e, productState.id)}
                            />
                        </div>

                        <div className='container-model'>
                            {productState.imagenes.length > 0 && productState.imagenes.map((image, index) => (
                                <img
                                    key={image}
                                    src={image}
                                    className={`image-model ${index === 0 ? '' : 'opacity'}`}
                                    onClick={(e) => changeImage(e)}
                                />
                            ))}
                        </div>
                        {windowImageOpen && <ShowModel setWindowsOpen={setWindowImageOpen} />}
                    </div>

                    {/* COLUMNA DERECHA: CARACTERÍSTICAS */}
                    <div className='product-features'>
                        <div className='container-data'>
                            
                            <div className="group-header">
                                <h4 className='home-page-product-name'>{productState.nombre}</h4>
                                <h4 className='home-page-model'>{productState.modelo}</h4>
                                <h4 className='home-page-gender'>{productState.genero}</h4>
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span className="rating-text">4.5</span>
                                </div>
                            </div>

                            <h4 className='home-page-model'>{productState.descripcion}</h4>

                            <div className='group-sale-row'>
                                <h4 className='home-page-sale-price'>
                                    Cop <span style={{ 'color': 'green' }}>{formatPrices(productState.precio)}</span>
                                </h4>

                                <div className='home-page-container-size'>
                                    <p className='home-page-size'>Talla</p>
                                    <div className="sizes-wrapper">
                                        {productState.sizes.map(size => (
                                            <button
                                                key={`${productState.id}${size}`}
                                                className={`size-buttons ${selectSizeState === size ? 'select-size' : ''}`}
                                                onClick={() => setSelectSizeState(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='container-button-buy'>
                                <div className='container-button-handle-amount'>
                                    <button className='button-handle-amount' onClick={(e) => amountProduct(e)}>-</button>
                                    <span>{amountProductState}</span>
                                    <button className='button-handle-amount' onClick={(e) => amountProduct(e)}>+</button>
                                </div>

                                <button
                                    className='button-name-buy'
                                    onClick={(e) => addToCart(e, productState, amountProductState, selectSizeState)}
                                >
                                    Añadir al carrito
                                </button>
                            </div>

                        </div>
                    </div> 

                </div> 
            )}
        </div>
    </>
);
};

export default ProductPage;
