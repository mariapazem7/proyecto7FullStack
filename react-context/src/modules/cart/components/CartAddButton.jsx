import useCartContext from "../context/CartContext";

export const CartAddButton = ({ libro }) => {
  const agregarLibro = useCartContext((state) => state.agregarLibro);

  const handleAddToCart = () => {
    agregarLibro(libro);
    console.log("Agregando libro al carrito:", libro);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn"
      style={{ backgroundColor: "#00A8E8", color: "white", border: "none", fontFamily: '"Lexend", sans-serif' }}
    >
      Agregar al carrito
    </button>
  );
};