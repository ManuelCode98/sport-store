import { createContext, useContext, useState } from 'react'

const ProductsCartContext = createContext();

export const ProductsCartProvider = ({children}) => {
  
  const [ products, setProducts ] = useState([]);

  return (
    <ProductsCartContext.Provider value={ {products, setProducts} }>
      {children}
    </ProductsCartContext.Provider>
  )

}

export const useProducts = ()=> useContext( ProductsCartContext );


