import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h2>Política de Privacidad</h2>
      <div className="privacy-body">
        <p>
          En <strong>FITNESS MATI</strong> nos comprometemos a proteger la información personal de nuestros clientes
          y a garantizar que sus datos sean tratados con responsabilidad y seguridad.
        </p>

        <h3>1. Información que Recopilamos</h3>
        <p>
          Recopilamos datos personales como nombre, teléfono, dirección y correo electrónico
          únicamente para gestionar pedidos, coordinar envíos y brindar soporte al cliente.
        </p>

        <h3>2. Uso de la Información</h3>
        <p>
          La información proporcionada será utilizada exclusivamente para:
            <ul>
                <li>Procesar y enviar pedidos.</li>
                <li>Brindar soporte postventa.</li>
                <li>Mantener comunicación relacionada con compras. </li>
            </ul>   
        </p>

        <h3>3. Confidencialidad</h3>
        <p>
          No compartiremos, venderemos ni cederemos tus datos personales a terceros,
          salvo obligación legal o autorización expresa del cliente.
        </p>

        <h3>4. Seguridad de los Datos</h3>
        <p>
          Implementamos medidas de seguridad razonables para proteger la información
          de accesos no autorizados, pérdidas o alteraciones.
        </p>

        <h3>5. Derechos del Usuario</h3>
        <p>
          Puedes solicitar en cualquier momento la actualización, corrección o eliminación
          de tus datos personales contactándonos por correo electrónico o WhatsApp.
        </p>

        <h3>6. Modificaciones</h3>
        <p>
          FITNESS MATI puede actualizar esta Política de Privacidad en cualquier momento.
          Los cambios entrarán en vigencia al ser publicados en este sitio web.
        </p>

        <p>
          📩 Contacto: <a href="mailto:fitness.mati098@gmail.com">fitness.mati098@gmail.com</a> <br/> 
          📱 Teléfono: +573157382433
        </p>
      </div>
    </div>
  );
};

export default Privacy;
