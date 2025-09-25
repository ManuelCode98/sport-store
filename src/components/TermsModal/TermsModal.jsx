import "./TermsModal.css";

const TermsModal = ({ openTermsModal, setOpenTermsModal}) => {

    const funtionOpenTermsModal = (  )=>{

    if( openTermsModal === false ){

        setOpenTermsModal( true );
        return
    }

    setOpenTermsModal( false );

}

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        <div 
            className="close-terms-modal"
            onClick={ funtionOpenTermsModal }
        >X</div>

        <h2>Términos y Condiciones</h2>
        <div className="modal-body">
          <p><strong>FITNESS MATI</strong></p>
          <p>Correo: <a href="mailto:fitness.mati098@gmail.com">fitness.mati098@gmail.com</a></p>
          <p>Teléfono: +57 3157382433</p>

          <h3>1. Objetivo</h3>
          <p>
            Este sitio web tiene como finalidad la comercialización de ropa deportiva
            para hombres y mujeres en Colombia.
          </p>

          <h3>2. Condiciones de Uso</h3>
          <p>
            El uso de este sitio implica la aceptación de estos Términos y Condiciones.
          </p>

          <h3>3. Proceso de Compra</h3>
          <p>
            Los pedidos pueden realizarse a través de WhatsApp directamente o mediante
            el carrito de compras, que redirige a WhatsApp con los productos seleccionados.
            La disponibilidad será confirmada antes de finalizar la compra.
          </p>

          <h3>4. Política sobre Errores en Precios o Stock</h3>
          <p>
            FITNESS MATI se reserva el derecho de corregir errores en precios o disponibilidad.
          </p>

          <h3>5. Formas de Pago</h3>
          <ul>
            <li>Nequi</li>
            <li>Daviplata</li>
            <li>Lulo Bank</li>
            <li>Efectivo en Palmira</li>
            <li>Pago contra entrega (otras ciudades asumen domicilio)</li>
          </ul>

          <h3>6. Cambios y Garantías</h3>
          <p>
            Los cambios pueden solicitarse hasta 5 días después de la entrega.  
            La prenda, empaque y etiquetas deben estar en perfecto estado.  
            Solo se permite cambio por otra prenda (no devolución de dinero).  
            La garantía cubre únicamente defectos de fábrica.
          </p>

          <h3>7. Privacidad y Datos</h3>
          <p>
            La información personal será utilizada únicamente para procesar pedidos y
            brindar atención al cliente. No será compartida con terceros sin autorización.
          </p>

          <h3>8. Propiedad Intelectual</h3>
          <p>
            El logo, imágenes y diseños de FITNESS MATI son propiedad exclusiva de la tienda.
            Está prohibido su uso sin autorización expresa.
          </p>

          <h3>9. Limitación de Responsabilidad</h3>
          <p>
            No nos hacemos responsables por retrasos ocasionados por causas externas
            como clima, fallas de transportadoras u otros eventos de fuerza mayor.
          </p>

          <h3>10. Modificaciones</h3>
          <p>
            FITNESS MATI puede actualizar estos Términos y Condiciones en cualquier momento.
            Los cambios entrarán en vigencia al ser publicados en este sitio web.
          </p>

          <h3>11. Legislación Aplicable</h3>
          <p>
            Estos Términos se rigen por el Código de Comercio y la Ley 1480 de 2011
            (Estatuto del Consumidor) en Colombia.
          </p>
        </div>

        <div className="modal-actions">
          <button className="btn-accept" onClick={funtionOpenTermsModal}>Aceptar</button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
