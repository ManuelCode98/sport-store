import "./Returns.css";

const Returns = () => {
  return (
    <div className="returns-container">
      <h2>Política de Devoluciones y Cambios</h2>
      <div className="returns-body">
        <p>
          En <strong>FITNESS MATI</strong> queremos que tengas la mejor experiencia de compra.
          Por eso, ofrecemos la posibilidad de realizar cambios bajo ciertas condiciones.
        </p>

        <h3>1. Plazo para Solicitar Cambios</h3>
        <p>
          Tienes hasta <strong>5 días calendario</strong> después de recibir tu pedido
          para solicitar un cambio. Pasado este tiempo no se aceptan solicitudes.
        </p>

        <h3>2. Condiciones del Producto</h3>
        <p>
          Para que el cambio sea válido, la prenda debe estar en perfectas condiciones:  
          <ul>
            <li>Sin uso, sin olores ni manchas.</li>
            <li>Con etiquetas originales y empaque en buen estado. </li>
            <li>No se aceptan prendas personalizadas o en promoción.</li>
          </ul>
        </p>

        <h3>3. Costos de Envío</h3>
        <p>
          - En Palmira: 
          <ul>
            <li>Puedes acercarte a coordinar el cambio sin costo adicional.</li>
          </ul>
          - En otras ciudades:
          <ul>
            <li>El cliente asume los gastos de envío para realizar el cambio.</li>
          </ul>
        </p>

        <h3>4. Garantía</h3>
        <p>
          La garantía cubre únicamente <strong>defectos de fábrica</strong>.  
          No aplica por mal uso, desgaste normal o daño accidental.
        </p>

        <h3>5. Procedimiento</h3>
        <p>
          Para solicitar un cambio, comunícate con nosotros a través de WhatsApp
          o correo electrónico. Nuestro equipo validará la solicitud y te dará
          las instrucciones para el envío.
        </p>
      </div>
    </div>
  );
};

export default Returns;
