export const formatCartLibro = (libros, libroID) => {
    const librosActualizados = libros.filter((libro) => libro._id !== libroID);
  
    const totalLibros = librosActualizados.reduce(
      (acc, libro) => acc + libro.cantidad,
      0
    );
  
    const precioTotal = librosActualizados.reduce(
      (acc, libro) => acc + libro.precio * libro.cantidad,
      0
    );
  
    return [librosActualizados, totalLibros, precioTotal];
  };