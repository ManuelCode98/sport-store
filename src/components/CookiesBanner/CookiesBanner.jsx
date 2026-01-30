import { useState, useEffect } from 'react';
import './CookiesBanner.css';

const CookiesBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookies-accepted');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAction = (status) => {
        localStorage.setItem('cookies-accepted', status);
        setShowBanner(false);
    };

    const toggleModal = () => setShowModal(!showModal);

    return (
        <>
            {showBanner && (
                <div className="cookie-banner">
                    <div className="cookie-banner-content">
                        <p>
                            Utilizamos cookies propias para mejorar el funcionamiento técnico de la tienda. 
                            <span className="cookie-link" onClick={toggleModal}> Leer más</span>
                        </p>
                        <div className="cookie-buttons">
                            <button className="btn-cookie-reject" onClick={() => handleAction('false')}>Rechazar</button>
                            <button className="btn-cookie-accept" onClick={() => handleAction('true')}>Aceptar</button>
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="close-terms-modal" onClick={toggleModal}>X</div>
                        <h2>Política de Cookies</h2>
                        <div className="modal-body">
                            <p><strong>FITNESS MATI</strong></p>
                            <p>
                                Este sitio web utiliza cookies técnicas para garantizar que la página funcione correctamente. 
                                Estas son necesarias para tareas como:
                            </p>
                            <ul>
                                <li>Gestionar los productos en tu carrito de compras.</li>
                                <li>Recordar tus preferencias de navegación.</li>
                            </ul>
                            <p>
                                Al aceptar, nos permites ofrecerte una experiencia de compra completa y fluida. 
                                No utilizamos esta información para fines distintos al funcionamiento de la tienda.
                            </p>
                        </div>
                        <div className="modal-actions">
                            <button className="btn-accept" onClick={toggleModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookiesBanner;