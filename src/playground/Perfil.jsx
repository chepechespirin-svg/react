function Perfil() {
  return (
    <section className="container my-4 text-center">
      <img
        src="/foto.jpg.png"
        alt="Foto de presentación"
        className="img-fluid rounded-circle mb-3"
        style={{ maxWidth: "200px" }}
      />
      <p>
        Hola, soy estudiante de Ingeniería de Sistemas en la UFPSO. Esta es mi
        primera página hecha con React, donde comparto lo que estoy aprendiendo
        sobre programación y tecnología.
      </p>
      <h2>Lo que estoy practicando</h2>
      <ul className="list-unstyled">
        <li>Desarrollo web con React</li>
        <li>Programación en JavaScript</li>
        <li>Control de versiones con Git y GitHub</li>
      </ul>
    </section>
  );
}

export default Perfil;