import { Link } from "react-router-dom";
import librosImagen from "../../assets/librito.jpg";

export const HomePage = () => {
  return (
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
  );
};