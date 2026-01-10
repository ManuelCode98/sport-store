import { create } from 'zustand';


export const useProduct = create((set)=>({

    productState: {
        descripcion: '',
        genero: '',
        id: null,
        currentImage: '',
        imagenes: '',
        modelo: '',
        nombre : '',
        precio : ''
    } ,

    setProductState : ( newProduct )=>(
        set({productState: newProduct})
    )


}))