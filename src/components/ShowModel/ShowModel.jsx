

const ShowModel = ({ products, setProducts }) => {
  return (
    <div className='container-window-model'>
        <img 
            src='https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            // src={products.currentImage} 
            className='open-photo-model'
            // onClick={ (e)=> showImage(e) }
        />
    </div>
  )
}

export default ShowModel
