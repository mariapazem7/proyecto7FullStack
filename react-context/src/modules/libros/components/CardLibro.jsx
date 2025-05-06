import { useState } from 'react';
import { formatCurrency } from '../../../shared/utils/formatCurrency';
import { envLoader } from '../../../config/envLoader';
import { CartAddButton } from '../../cart/components/CartAddButton';

const { optionsCurrency } = envLoader;

export const CardLibro = ({ libro }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <div className="card h-100 shadow-sm book-card">
        <img
          src={libro.imagen}
          alt={libro.titulo}
          className="card-img-top img-fluid"
          onClick={toggleModal}
          style={{ cursor: 'pointer' }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{libro.titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{libro.autor}</h6>
            <p className="text-muted small mb-1">
              {libro.genero} · {libro.ano_publicacion}
            </p>
            <p className="card-text fw-bold text-primary">
              {formatCurrency(libro.precio, optionsCurrency)}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span
              className={`badge ${libro.stock > 0 ? 'bg-success' : 'bg-danger'}`}
            >
              {libro.stock > 0 ? `${libro.stock} disponibles` : 'Agotado'}
            </span>
            <CartAddButton libro={libro} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          onClick={toggleModal}
        >
          <div
            className="modal-dialog modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{libro.titulo}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={libro.imagen}
                  alt={libro.titulo}
                  className="img-fluid mb-3"
                />
                <p>{libro.descripcion}</p>
                <p>
                  <strong>Autor:</strong> {libro.autor}
                </p>
                <p>
                  <strong>Género:</strong> {libro.genero}
                </p>
                <p>
                  <strong>Año de publicación:</strong> {libro.ano_publicacion}
                </p>
                <p>
                  <strong>Precio:</strong>{' '}
                  {formatCurrency(libro.precio, optionsCurrency)}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                >
                  Cerrar
                </button>
                <CartAddButton libro={libro} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};