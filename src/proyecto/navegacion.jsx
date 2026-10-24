function Navegacion() {
  return (
    <header>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#inicio">
          {/* SVG: person-circle */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          Mi Portafolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#titulo">Título</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Presentación personal */}
      <section id="inicio" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-4 text-center">
              <img
                src="https://picsum.photos/300/300"
                alt="Foto de perfil"
                className="img-fluid rounded-circle border border-5 border-primary shadow"
              />
            </div>

            <div className="col-12 col-md-8">
              <h1 className="display-5 fw-bold text-primary">Luis edaurdo beleño hoyos</h1>
              <h2 className="h4 text-secondary">Desarrolladora Front-End</h2>
              <p className="lead">
                Apasionada por crear interfaces limpias y funcionales con React y Bootstrap.
                Me gusta aprender nuevas tecnologías y trabajar en equipo.
              </p>

              <span className="badge text-bg-success me-2">Disponible para todas</span>
              <span className="badge text-bg-warning me-2">Aprendiendo TypeScript</span>
              <span className="badge text-bg-danger">adicto a las mujeres</span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Navegacion;