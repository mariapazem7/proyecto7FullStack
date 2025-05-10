export const AboutPage = () => {
    return (
      <div
        className="min-vh-100 d-flex align-items-center"
        style={{ backgroundColor: "#1B1B1B", color: "#FFFFFF" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1
                className="mb-4 display-4"
                style={{
                  fontFamily: '"Lexend", sans-serif',
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                Sobre ReLectores
              </h1>
  
              <p
                className="lead mb-4"
                style={{
                  fontSize: "1.25rem",
                  fontFamily: '"Sour Gummy", sans-serif',
                  color: "#CCCCCC",
                }}
              >
                ReLectores es una plataforma para adquirir libros nuevos y usados en excelente estado, a precios accesibles. Sabemos que muchas veces el alto costo limita el acceso a la lectura, y queremos cambiar eso.
              </p>
  
              <div className="rounded p-4 shadow-sm" style={{ backgroundColor: "#006D77" }}>
                <p style={{ fontSize: "1.1rem", fontFamily: '"Sour Gummy", sans-serif', color: "#FFFFFF" }}>
                 Nuestra misión es facilitar que más personas puedan descubrir y redescubrir historias sin que el precio sea una barrera. En ReLectores creemos que los libros merecen más de una vida, y que cada lector merece la oportunidad de encontrarse con ellos. Ya sea un clásico olvidado o una joya contemporánea, aquí puedes encontrar tu próxima gran lectura a bajo costo y en condiciones óptimas.
                </p>
              </div>
  
              <div className="mt-5">
                <h5 className="text-uppercase" style={{ letterSpacing: "1px", color: "#A0C1D1" }}>
                  ¿Tienes dudas o sugerencias?
                </h5>
                <p className="text-light">
                  Escríbenos a{" "}
                  <a href="mailto:contacto@relectores.com" className="text-info text-decoration-none">
                    contacto@relectores.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };