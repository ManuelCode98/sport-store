import './hero.css';

export default function Hero() {

  const subtitle = 'Descubre nuestra colección de ropa deportiva diseñada para mujeres y hombres que buscan comodidad, elegancia y funcionalidad.'

  return (
    <section className='container-hero'>
      <div className='container-hero-title'>
        <h1>
          Rendimiento y Estilo
        </h1>
        <p>
          { subtitle }
        </p>
        
      </div>
    </section>
  );
}