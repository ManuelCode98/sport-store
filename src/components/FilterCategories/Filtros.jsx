// src/components/Filtros.jsx
import { productos } from '../../data/productos';
import './FilterCategories.css';

export default function Filtros({ genero, setGenero, nombre, setNombre, modelo, setModelo }) {
  const nombresUnicos = [...new Set(productos.map(p => p.nombre))];
  const modelosUnicos = [...new Set(productos.map(p => p.modelo))];

  return (
    <section className="filtros" 
    //   style={{
    //   padding: '2rem 0',
    //   backgroundColor: '#fff',
    //   borderBottom: '1px solid #eee',
    //   textAlign: 'center'
    // }}
    >
      <select
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        // style={selectStyle}
      >
        <option value="">Todos los géneros</option>
        <option value="dama">Dama</option>
        <option value="caballero">Caballero</option>
      </select>

      <select
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        // style={selectStyle}
      >
        <option value="">Todos los nombres</option>
        {nombresUnicos.map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      <select
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
        // style={selectStyle}
      >
        <option value="">Todos los modelos</option>
        {modelosUnicos.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </section>
  );
}

// Estilo reutilizable para selects
const selectStyle = {
  padding: '0.7rem 1rem',
  margin: '0 0.5rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  fontSize: '1rem',
  minWidth: '180px',
  transition: 'all 0.3s ease',
  backgroundColor: 'white'
};