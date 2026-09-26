import "./App.css";

function App() {
  return (
    <div className="pagina">
      <h1 className="titulo">Mi mundo en la tecnología</h1>
      <img className="foto" src="/foto.jpg.png" alt="Foto de presentación" />
      <p className="descripcion">
        Hola, soy estudiante de Ingeniería de Sistemas en la UFPSO.
        Esta es mi primera página hecha con React, donde comparto
        lo que estoy aprendiendo sobre programación y tecnología.
      </p>
      <h2>Lo que estoy practicando</h2>
      <ul>
        <li>Desarrollo web con React</li>
        <li>Programación en JavaScript</li>
        <li>Control de versiones con Git y GitHub</li>
      </ul>
    </div>
  );
}

export default App;