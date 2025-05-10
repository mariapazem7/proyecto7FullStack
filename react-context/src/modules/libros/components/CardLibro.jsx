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
      <div className="card h-100 shadow-sm book-card" style={{ fontFamily: '"Lexend", sans-serif' }}>
        <img
          src={libro.imagen}
          alt={libro.titulo}
          className="card-img-top img-fluid"
          onClick={toggleModal}
          style={{ cursor: 'pointer' }}
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title" style={{ fontFamily: '"Lexend", sans-serif', color: '#333' }}>
              {libro.titulo}
            </h5>
         
            <span
              className={`badge ${libro.uso === 'nuevo' ? 'bg-info' : 'bg-secondary'} text-uppercase`}
              style={{ fontSize: '0.6rem', fontFamily: '"Lexend", sans-serif', marginBottom: '0.5rem' }}
            >
              {libro.uso}
            </span>

            <h6 className="card-subtitle mb-2 text-muted" style={{ fontFamily: '"Lexend", sans-serif' }}>
              {libro.autor}
            </h6>
            <p className="text-muted small mb-1" style={{ fontFamily: '"Lexend", sans-serif' }}>
              {libro.genero} · {libro.ano_publicacion}
            </p>
            <p className="card-text fw-bold text-primary" style={{ fontFamily: '"Lexend", sans-serif' }}>
              {formatCurrency(libro.precio, optionsCurrency)}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span
              className={`badge ${libro.stock > 0 ? 'bg-success' : 'bg-danger'}`}
              style={{ fontFamily: '"Lexend", sans-serif' }}
            >
              {libro.stock > 0 ? `${libro.stock} disponibles` : 'Agotado'}
            </span>
            <CartAddButton
              libro={libro}
              style={{
                fontFamily: '"Sour Gummy", sans-serif',
                backgroundColor: '#004D40',
                color: '#FFF',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#00BFAE'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#004D40'}
            />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
          onClick={toggleModal}
        >
          <div
            className="modal-dialog modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content" style={{ backgroundColor: '#333', color: '#FFF' }}>
              <div className="modal-header">
                <h5 className="modal-title fw-bold text-center w-100" style={{ fontFamily: '"Lexend", sans-serif' }}>
                  {libro.titulo}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  style={{
                    backgroundColor: '#00BFAE',
                    border: 'none',
                  }}
                ></button>
              </div>
              <div className="modal-body" style={{ fontFamily: '"Lexend", sans-serif' }}>
                <img
                  src={libro.imagen}
                  alt={libro.titulo}
                  className="img-fluid d-block mx-auto mb-3"
                  style={{ maxHeight: '300px', objectFit: 'contain' }}
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
                  <strong>Estado:</strong> {libro.uso}
                </p>
                <p>
                  <strong>Precio:</strong>{' '}
                  {formatCurrency(libro.precio, optionsCurrency)}
                </p>
              </div>
              <div className="modal-footer" style={{ backgroundColor: '#333', color: '#FFF' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleModal}
                  style={{
                    backgroundColor: '#004D40',
                    color: '#FFF',
                    border: 'none',
                    fontFamily: '"Lexend", sans-serif',
                  }}
                >
                  Cerrar
                </button>
                <CartAddButton
                  libro={libro}
                  style={{
                    backgroundColor: '#00BFAE',
                    color: '#FFF',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#004D40'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#00BFAE'}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};