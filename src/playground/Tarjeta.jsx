function Tarjeta() {
  return (
    <section className="container my-4 d-flex justify-content-center">
      <div className="card" style={{ maxWidth: "24rem" }}>
        <div className="card-body">
          <h3 className="card-title">React</h3>
          <p className="card-text">
            Biblioteca de JavaScript para construir interfaces de usuario
            usando componentes reutilizables.
          </p>
          <a
            href="https://react.dev"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Tarjeta;