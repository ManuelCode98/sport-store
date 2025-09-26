import iconSvg from '/assets/icon/logo.svg';
import './Header.css';


export default function Header() {
  return (
    <header className='header'>
      <img className='header-icon' src={iconSvg} />
      <h2 className='header-sub-title'>
        FITNESS MATI
      </h2>
    </header>
  );
}