import { useState } from "react";
import useCartContext from "../context/CartContext";
import cartSvg from "../../../assets/cart.svg";
import { CartSideBar } from "./CartSideBar";

export const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalLibros = useCartContext((state) => state.totalLibros);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="position-relative d-inline-block">
      <button
        onClick={handleIsOpen}
        className="btn p-2 text-secondary"
        aria-label="Abrir carrito"
      >
       <img src={cartSvg} alt="Carrito" style={{ width: "28px", height: "28px", filter: "invert(1)" }}/>

        {totalLibros > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: "0.7rem", width: "1.5rem", height: "1.5rem", lineHeight: "1.5rem" }}
          >
            {totalLibros}
          </span>
        )}
      </button>

      {isOpen && <CartSideBar onClose={handleIsOpen} />}
    </div>
  );
};