
import { useFetchLibros } from "../hooks/useFetchLibros";
import { CardLibro } from "../components/CardLibro";

export const LibrosPage = () => {
  const { libros, loading, error } = useFetchLibros();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Catálogo de Libros</h2>

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
  );
};