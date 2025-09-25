
import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok } from "react-icons/fa";
import { FaTruck, FaUndoAlt, FaShieldAlt, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ openTermsModal, setOpenTermsModal }) => {

  const linkCorreo = 'mailto:fitness.mati098@gmail.com';
  const linkWhatsapp = 'https://wa.me/3157382433';
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
        <div className="footer-feature">
          <FaMoneyBillWave className="icon-footer" />
          <p>Pago contra entrega</p>
        </div>
        <div className="footer-feature">
          <FaTruck className="icon-footer" />
          <p>Envíos a toda Colombia y en Palmira es GRATIS</p>
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

      {/* Segunda fila: Información */}
      <div className="footer-main">
        <div className="footer-brand">
          <h2>FITNESS MATI</h2>
          <p>Ropa deportiva en Colombia</p>
          <p>
            <FaEnvelope /> <a href={linkCorreo}>Contactanos al correo</a>
          </p>
          <p>
            <FaWhatsapp /> <a href={linkWhatsapp} target='_blank'>whatsapp</a>
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
