
import { motion } from 'framer-motion';
import ProductoCard from './ProductCard/ProductoCard';
import { useEffect, useRef } from 'react';
import { useProduct } from '../context/useProduct';


export default function ProductosGrid({ productos }) {

   const { productState, setProductState } = useProduct();
  const refs = useRef({});
     
  useEffect(() => {

    if( productState.id ){

      const id = Number( productState.id );
      refs.current[id].scrollIntoView({ behavior: 'smooth' });
    }

  }, [ ]);


  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      padding: '3rem 0'
    }}>
      {productos.length > 0 ? (
        productos.map((producto, index) => (
          <motion.div  
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            key={producto.id}
            ref={ dom => refs.current[producto.id] = dom }
            >
              <ProductoCard producto={producto} />
          </motion.div>
        ))
      ) : (
        <p style={{
          gridColumn: '1 / -1',
          color: '#7f8fa6',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          No se encontraron productos.
        </p>
      )}
    </section>
  );
}