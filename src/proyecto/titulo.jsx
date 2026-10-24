function Titulo() {
  return (
    <section id="titulo" className="py-5 bg-white">
      <div className="container">
        <div className="card border-success shadow">
          <div className="card-header bg-success text-white d-flex align-items-center gap-2">
            {/* SVG: mortarboard-fill */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
            </svg>
            <h3 className="h5 mb-0">Formación académica</h3>
          </div>

          <div className="card-body">
            <h4 className="card-title text-success">Ingeniero de Sistemas</h4>
            <p className="card-text">
              Universidad Francisco de Paula Santander · 2025 – 2026
            </p>

            <div className="alert alert-warning d-flex align-items-center gap-2" role="alert">
              {/* SVG: check-circle-fill */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Actualmente cursando: Especialización en Desarrollo Web
            </div>

            <div className="alert alert-danger mb-0" role="alert">
              <strong>Nota:</strong> Certificaciones disponibles bajo solicitud.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Titulo;