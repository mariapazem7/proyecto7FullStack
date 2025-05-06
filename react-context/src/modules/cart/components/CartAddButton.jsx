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
      className="btn btn-primary"
    >
      Agregar al carrito
    </button>
  );
};