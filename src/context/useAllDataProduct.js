import { create } from 'zustand';


export const useAllDataProduct = create( (set)=>({

    productsCart: [],
    currentId: null,
    currentImage: null,

    setProductsCart: ( newProducts )=>(
        set({ productsCart: newProducts })
    ),
    setCurrentId: ( newId )=>(
        set({ currentId: newId })
    ),
    setCurrentImage: ( image )=>(
        set( {currentImage: image } )
    )
}))

