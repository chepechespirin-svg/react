import { useState } from 'react';

function Footer() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', form);
    setEnviado(true);
    setForm({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <footer id="contacto" className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          {/* Formulario */}
          <div className="col-12 col-md-7">
            <h3 className="text-warning mb-3">Contáctame</h3>

            {enviado && (
              <div className="alert alert-success">¡Mensaje enviado con éxito!</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="form-text text-danger">* Todos los campos son obligatorios</div>
              </div>

              <button type="submit" className="btn btn-success">
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Datos de contacto */}
          <div className="col-12 col-md-5">
            <h3 className="text-primary mb-3">Información</h3>
            <p className="d-flex align-items-center gap-2">
              {/* SVG: envelope-fill */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              laura.gomez@correo.com
            </p>
            <p>Ocaña, Norte de Santander</p>
          </div>
        </div>

        <hr className="border-secondary mt-4" />
        <p className="text-center text-secondary mb-0">
          © 2026 Laura Gómez · Hecho con React y Bootstrap
        </p>
      </div>
    </footer>
  );
}

export default Footer;