import { useFetchLibros } from "../hooks/useFetchLibros";
import { CardLibro } from "../components/CardLibro";

export const LibrosPage = () => {
  const { libros, loading, error } = useFetchLibros();

  return (
    <div
      className="min-vh-100"
      style={{ backgroundColor: "#1B1B1B", color: "#FFFFFF" }}
    >
      <div className="container pt-5 pb-5">
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "2.5rem",
              letterSpacing: "2px",
              fontFamily: '"Delius Unicase", cursive',
            }}
          >
            Catálogo de Libros
          </h2>
          <div
            style={{
              fontSize: "1.25rem",
              fontStyle: "italic",
              fontFamily: '"Delius Unicase", cursive',
              color: "#006D77",
              marginTop: "0.5rem",
            }}
          >
            nuevos y no tan nuevos
          </div>
        </div>

        {loading && (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        {!loading && !error && libros.length === 0 && (
          <div className="alert alert-info text-center" role="alert">
            No se encontraron libros.
          </div>
        )}

        {!loading && !error && libros.length > 0 && (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {libros.map((libro) => (
              <div className="col" key={libro._id}>
                <CardLibro libro={libro} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};