

const ShoppingCart = () => {

  const [ numberProductState, setNumberProductState ] = ueState(0);

  // const addToCard = (  )=>{

  // }

  return (
    <div className='container-shopping-card'>
      <img 
        className="photo-shopping-card" 
        src='https://media.istockphoto.com/id/1987775073/es/vector/icono-de-dibujo-de-l%C3%ADnea-negra-del-carrito-de-la-compra.jpg?s=612x612&w=0&k=20&c=_zNOhjCgZf82ZJlE1-eU-8XV5Zc6qeQp0_eMPJszj7Q='
        width={50}
        height={50}
        // Todo Esta funcion debe de mostar los productos que estan agreados
        // onClick={  }
        />
        <span>{numberProductState}</span>
    </div>
  )
}

export default ShoppingCart
