import './ShowModel.css';
import { useProduct } from '../../context/useProduct';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';

const ShowModel = ({ setWindowsOpen }) => {

  const { productState } = useProduct();

  const handleWindow = ()=>{
    setWindowsOpen(false);
  }

  return (
    <div className='container-window-model'>
      <div className='arrow-wrapper left'>
        <LeftArrow />
      </div>
        <img 
          src={productState.currentImage} 
          className='open-photo-model'
          onClick={handleWindow}
        />
      <div className='arrow-wrapper right'>
        <RightArrow />
      </div>
    </div>
  )
}

export default ShowModel
