
import { useRef, useState } from "react";
import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaTruck, FaUndoAlt, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import { stories } from "../../data/stories";
import StoriesModal from "../StoriesModal/StoriesModal";

const Footer = ({ openTermsModal, setOpenTermsModal }) => {


  const [isStoriesOpen, setIsStoriesOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  const linkCorreo = 'mailto:fitness.mati098@gmail.com';
  const linkWhatsapp = 'https://wa.me/3157382433';
  const linkFacebook = 'https://www.facebook.com/profile.php?id=61584623556525';
  const linkInstagram = 'https://www.instagram.com/fitness.mati_/';
  const linkTikTok = 'https://www.tiktok.com/@fitness.mati_';

  const funtionOpenTermsModal = (  )=>{

    if( openTermsModal === false ){

      setOpenTermsModal( true );
      return
    }

    setOpenTermsModal( false );

  }

  return (
    <footer className="footer">
      {/* Primera fila: Beneficios */}
      <div className="footer-top">

        <div className="footer-credibility">
          <div className="footer-feature">
            <FaMoneyBillWave className="icon-footer" />
            <p>Pago contra entrega</p>
          </div>
          <div className="footer-feature">
            <FaTruck className="icon-footer" />
            <p>Envíos a toda Colombia</p>
          </div>
          <div className="footer-feature">
            <FaUndoAlt className="icon-footer" />
            <p>Cambios y devoluciones</p>
          </div>
          <div className="footer-feature">
            <FaShieldAlt className="icon-footer" />
            <p>Compra segura</p>
          </div>
        </div>

        <div className="container-stories-wrapper">

          <p className="clients-text">Ell@s confían en Fitness Mati</p>

          <div className="stories-wrapper">
            <button className="arrow left" onClick={() => scroll(-200)}>‹</button>

            <div className="footer-clients" ref={scrollRef}>
              { Array.isArray( stories ) ? stories.map( ( items, index ) => (
                // <div 
                //   key={index+1} 
                //   className="container-photo-stories"
                //   onClick={() => {
                //     setActiveStoryIndex(index);
                //     setIsStoriesOpen(true);
                //   }} 
                // >
                //   <img 
                //     src={ items[0].src } 
                //     className="photo-stories"
                //     alt="story"
                //   />
                // </div>
                <div 
                  key={index+1} 
                  className="container-photo-stories"
                  onClick={() => {
                    setActiveStoryIndex(index);
                    setIsStoriesOpen(true);
                  }} 
                >
                  <img 
                    src={ items.cover } 
                    className="photo-stories"
                    alt="story"
                  />
                </div>
              ) )
              : null
              }
            </div>

            <button className="arrow right" onClick={() => scroll(200)}>›</button>
          </div>

        </div>

        {/* Modal de las historias */}
        {isStoriesOpen && (
          <StoriesModal
            stories={stories}
            initialStory={activeStoryIndex}
            onClose={() => setIsStoriesOpen(false)}
          />
        )}

      </div>

      {/* Segunda fila: Información */}
      <div className="footer-main">
        <div className="footer-brand">
          <h2>FITNESS MATI</h2>
          <h4>Ropa deportiva en Colombia</h4>
          <p>
            <FaEnvelope /> <a href={linkCorreo}>Contactanos al correo</a>
          </p>
          <p>
            <FaWhatsapp /> <a href={linkWhatsapp} target='_blank'>whatsapp</a>
          </p>
          <p>
            <FaFacebook /> <a href={linkFacebook} target='_blank'>Siguenos Fitness Mati</a>
          </p>
          <p>
            <FaInstagram /> <a href={linkInstagram} target='_blank'>Siguenos @fitness.mati_</a>
          </p>
          <p>
            <FaTiktok /> <a href={linkTikTok} target='_blank'>Siguenos @fitness.mati_</a>
          </p>
        </div>

        <div className="footer-links">
          <h3>Información</h3>
          <ul>
            <li><Link to="/shipments">Envíos</Link></li>
            <li><Link to="/returns">Devoluciones</Link></li>
            <li><Link to="/privacy">Privacidad</Link></li>
            <li><a onClick={ funtionOpenTermsModal }>Términos y condiciones</a></li>
          </ul>
        </div>
      </div>

      {/* Fila final */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} FITNESS MATI - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
