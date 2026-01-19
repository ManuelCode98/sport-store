import { useProduct } from '../../../context/useProduct';
import './LeftArrow.css';



const LeftArrow = () => {

  const { productState, setProductState } = useProduct();


  const handleArrow = (  )=>{

    const { imagenes, currentImage } = productState;
    

    if( imagenes.length === 1 ) return;

    if( imagenes.length > 1 ){

      const indexImage = imagenes.findIndex((element)=> element === currentImage );
      
      if( indexImage === 0 ){

        setProductState({...productState, currentImage: imagenes[imagenes.length - 1] });

        return
      }

      setProductState({...productState, currentImage: imagenes[indexImage - 1] })

    } 

  }

  return (
    <div 
      className="LeftArrow flex items-center justify-center p-4"
      onClick={handleArrow}
    >
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadowLeft" x="-20%" y="-20%" width="150%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="#7A5CFA" />
          </filter>
        </defs>
        <path 
          d="M15 18L9 12L15 6" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#shadowLeft)"
        />
      </svg>
    </div>
  )

};

export default LeftArrow;