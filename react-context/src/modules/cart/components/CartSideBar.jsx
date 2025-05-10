import { envLoader } from "../../../config/envLoader";
import { formatCurrency } from "../../../shared/utils/formatCurrency";
import useCartContext from "../context/CartContext";
import { CartLibro } from "./CartItem"; 
import { MercadoPagoButton } from "../../payments/components/MercadoPagoButton"; 

const { optionsCurrency } = envLoader;

export const CartSideBar = ({ onClose }) => {
  const libros = useCartContext((state) => state.libros);
  const precioTotal = useCartContext((state) => state.precioTotal);
  const vaciarCarrito = useCartContext((state) => state.vaciarCarrito);

  const handleCheckout = () => {
    alert("¡Pedido realizado con éxito! Muchas gracias por su compra.");
    vaciarCarrito();
    onClose();
  };

  return (
    <>
      <div
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        onClick={onClose}
        style={{ zIndex: 1040 }}
      ></div>

      <div
        className="position-fixed top-0 end-0 bg-white shadow p-3"
        style={{ 
          width: "350px", 
          height: "100vh", 
          zIndex: 1045, 
          overflowY: "auto", 
          fontFamily: '"Lexend", sans-serif' 
        }}
      >
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h5 className="mb-0">Carrito de Libros</h5>
          <button
            className="btn-close"
            aria-label="Cerrar"
            onClick={onClose}
          ></button>
        </div>

        {libros.length === 0 ? (
          <p className="text-center text-muted">Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {libros.map((libro) => (
                <CartLibro key={libro._id} libro={libro} />
              ))}
            </ul>

            <div className="border-top pt-3">
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>{formatCurrency(precioTotal, optionsCurrency)}</span>
              </div>

              <div className="mt-3">
                  <MercadoPagoButton
                    cart={libros}
                    total={precioTotal}
                    onPaymentSuccess={handleCheckout}
                  />
              </div>

              <div className="mt-3 text-center">
                <button
                  onClick={vaciarCarrito}
                  className="btn btn-link text-primary"
                >
                Vaciar carrito
               </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};