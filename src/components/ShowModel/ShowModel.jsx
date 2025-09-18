import { Link } from 'react-router-dom';
import './ShowModel.css';

const ShowModel = ({ currentImage, currentId }) => {

  return (
    <div className='container-window-model'>
        <Link to={`/product/${currentId}`}>
          <img 
            src={currentImage} 
            className='open-photo-model'
          />
        </Link>
    </div>
  )
}

export default ShowModel
