import { productos } from '../../data/productos';
import './FilterCategories.css';

export default function Filtros({ genero, setGenero, nombre, setNombre, modelo, setModelo }) {
  const nombresUnicos = [...new Set(productos.map(p => p.nombre))];
  const modelosUnicos = [...new Set(productos.map(p => p.modelo))];

  return (
    <section className="filters" >
      <select
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      >
        <option value="">Todos los géneros</option>
        <option value="dama">Dama</option>
        <option value="caballero">Caballero</option>
      </select>

      <select
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      >
        <option value="">Todos los nombres</option>
        {nombresUnicos.map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      <select
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      >
        <option value="">Todos los modelos</option>
        {modelosUnicos.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </section>
  );
}
