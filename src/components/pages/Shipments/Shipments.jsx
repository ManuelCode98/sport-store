import "./Shipments.css";

const Shipments = () => {
  return (
    <div className="shipments-container">
      <h2>Política de Envíos</h2>
      <div className="shipments-body">
        <p>
          En <strong>FITNESS MATI</strong> realizamos envíos a todo el territorio
          colombiano a través de empresas transportadoras confiables.
        </p>

        <h3>1. Tiempo de Entrega</h3>
        <p>
          Los envíos normalmente tardan entre <strong>2 a 5 días hábiles</strong>,
          dependiendo de la ciudad o municipio.  
          En temporadas de alta demanda los tiempos pueden variar.
        </p>

        <h3>2. Costo de Envío</h3>
        <p>
          - En Palmira: Se pueden coordinar entregas en efectivo sin costo de envío. <br />
          - En otras ciudades: El cliente asume el valor del domicilio.  
          El costo depende de la transportadora y se informará al confirmar el pedido.
        </p>

        <h3>3. Seguimiento</h3>
        <p>
          Una vez despachado el pedido, se compartirá el número de guía para
          que el cliente pueda hacer el seguimiento con la transportadora.
        </p>

        <h3>4. Condiciones de Envío</h3>
        <p>
          - La dirección proporcionada debe ser correcta y completa.  
          - FITNESS MATI no se hace responsable por retrasos causados por la transportadora, 
          condiciones climáticas o fuerza mayor.
        </p>
      </div>
    </div>
  );
};

export default Shipments;
