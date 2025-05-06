import { envLoader } from "../../../config/envLoader";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import useCartContext from "../context/CartContext";

import flechaAtras from "../../../assets/flechaAtras.svg";
import flechaAdelante from "../../../assets/flechaAdelante.svg";

const { optionsCurrency } = envLoader;

export const CartLibro = ({ libro }) => {
  const agregarLibro = useCartContext((state) => state.agregarLibro);
  const quitarUnidadLibro = useCartContext((state) => state.quitarUnidadLibro);
  const eliminarLibro = useCartContext((state) => state.eliminarLibro);

  return (
    <li className="list-group-item d-flex align-items-start gap-3 border-0">
      <img
        src={libro.imagen}
        alt={libro.nombre}
        className="rounded"
        style={{ width: "64px", height: "64px", objectFit: "cover" }}
      />

      <div className="flex-grow-1">
        <h6 className="mb-1">{libro.nombre}</h6>
        <p className="mb-1 text-muted">
          {formatCurrency(libro.precio, optionsCurrency)}
        </p>

        <div className="d-flex align-items-center mt-2">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => quitarUnidadLibro(libro._id)}
          >
            <img src={flechaAtras} alt="Quitar" width={16} height={16} />
          </button>

          <span className="mx-2">{libro.cantidad}</span>

          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => agregarLibro(libro)}
          >
            <img src={flechaAdelante} alt="Agregar" width={16} height={16} />
          </button>

          <button
            className="btn btn-sm btn-danger ms-3"
            onClick={() => eliminarLibro(libro._id)}
            title="Eliminar libro"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};