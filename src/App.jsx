import Navegacion from './proyecto/navegacion';
import Titulo from './proyecto/titulo';
import Footer from './proyecto/footer';

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <Navegacion />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Titulo />
        </div>
      </div>

      <div className="row g-0">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;