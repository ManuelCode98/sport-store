// src/components/ProductosGrid.jsx
import ProductoCard from './ProductoCard';

export default function ProductosGrid({ productos }) {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      padding: '3rem 0'
    }}>
      {productos.length > 0 ? (
        productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
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