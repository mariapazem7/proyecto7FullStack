import { Link } from "react-router-dom";
import librosImagen from "../../assets/librito.jpg";

export const HomePage = () => {
  return (
    <>
      <div
        className="min-vh-100 d-flex align-items-center"
        style={{ backgroundColor: "#1B1B1B", color: "#FFFFFF" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1
                className="display-4 fw-bold mb-4"
                style={{
                  fontFamily: '"Lexend", sans-serif',
                  letterSpacing: "1px",
                }}
              >
                Bienvenido a <span style={{ color: "#006D77" }}>ReLectores</span>
              </h1>
              <p
                className="lead mb-4"
                style={{
                  fontFamily: '"Sour Gummy", sans-serif',
                  color: "#CCCCCC",
                }}
              >
                Explora nuestro catálogo de libros nuevos y usados en excelente estado. Porque la lectura no debería tener precio alto, pero sí valor.
              </p>

              <Link
                to="/libros"
                className="btn"
                style={{
                  backgroundColor: "#00A8E8",
                  color: "#FFFFFF",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontFamily: '"Sour Gummy", sans-serif',
                }}
              >
                Ir al Catálogo
              </Link>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={librosImagen}
                alt="Portada de libros"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-100 py-5"
        style={{
          backgroundColor: "#2C2C2C",
          color: "#EEEEEE",
          fontFamily: '"Lexend", sans-serif',
          borderTop: "1px solid #444",
        }}
      >
        <div className="container text-center">
          <h5 className="mb-3 fw-semibold" style={{ fontSize: "1.2rem" }}>
            ¿Quieres donar un libro y obtener un descuento en tu compra?
          </h5>

          <p
            className="mb-4"
            style={{
              fontFamily: '"Sour Gummy", sans-serif',
              fontSize: "1rem",
              color: "#CCCCCC",
            }}
          >
            <i className="bi bi-envelope-fill me-2" style={{ color: "#00A8E8" }}></i>
            Escríbenos a&nbsp;
            <a
              href="mailto:contacto@relectores.com"
              style={{ color: "#00A8E8", textDecoration: "underline" }}
            >
              contacto@relectores.com
            </a>
          </p>

          <a
            href="mailto:contacto@relectores.com"
            className="btn"
            style={{
              backgroundColor: "#00A8E8",
              color: "#FFFFFF",
              fontSize: "1rem",
              padding: "10px 20px",
              borderRadius: "5px",
              fontFamily: '"Sour Gummy", sans-serif',
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#007B9E")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#00A8E8")}
          >
            Contactar
          </a>
        </div>
      </div>
    </>
  );
};