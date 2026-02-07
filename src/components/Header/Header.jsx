import iconSvg from '/assets/icon/logo.svg';
import './Header.css';


export default function Header() {

  const translateClients = (  )=>{

    const sectionClients = document.querySelector('.footer-clients');

    if( sectionClients ) sectionClients.scrollIntoView({behavior:'smooth'});

  }

  return (
    <header className='header'>
      <div className='container-subtitle-and-logo'>
        <img className='header-icon' src={iconSvg} />
        <h2 className='header-sub-title'>
          FITNESS MATI
        </h2>
      </div>
      <a 
        className='header-sub-title-clients underline-hover'
        onClick={ translateClients }
      >Nuestros Clientes</a>
    </header>
  );
}