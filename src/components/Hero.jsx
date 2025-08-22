// src/components/Hero.jsx
export default function Hero() {
  return (
    <section style={{
      height: '70vh',
      background: `
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(https://detqhtv6m6lzl.cloudfront.net/HCLContenido/Departament_DEPORTES/deportivo05May25/Mob/702x702-accesorios.webp) center center / cover
      `,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          Rendimiento y Estilo
        </h1>
        <p style={{
          fontSize: '1.3rem',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Descubre nuestra colección de ropa deportiva diseñada para mujeres activas que buscan comodidad, elegancia y funcionalidad.
        </p>
        
      </div>
    </section>
  );
}