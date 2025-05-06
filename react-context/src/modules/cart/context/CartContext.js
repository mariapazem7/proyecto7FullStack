
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { formatCartLibro } from "../../libros/utils/formatCartLibro";


const useCartContext = create(
  persist(
    (set, get) => ({
      libros: [],
      totalLibros: 0,
      precioTotal: 0,

      agregarLibro: (libro) => {
        const libros = get().libros;
        const libroExistente = libros.find((item) => item._id === libro._id);

        if (libroExistente) {
          const librosActualizados = libros.map((item) =>
            item._id === libro._id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );

          set((state) => ({
            libros: librosActualizados,
            totalLibros: state.totalLibros + 1,
            precioTotal: state.precioTotal + libro.precio,
          }));
        } else {
          const nuevoLibro = { ...libro, cantidad: 1 };

          set((state) => ({
            libros: [...state.libros, nuevoLibro],
            totalLibros: state.totalLibros + 1,
            precioTotal: state.precioTotal + libro.precio,
          }));
        }
      },

      quitarUnidadLibro: (_id) => {
        const libros = get().libros;
        const libroExistente = libros.find((item) => item._id === _id);
        if (!libroExistente) return;

        if (libroExistente.cantidad === 1) {
          const librosActualizados = libros.filter((item) => item._id !== _id);
          set((state) => ({
            libros: librosActualizados,
            totalLibros: state.totalLibros - 1,
            precioTotal: state.precioTotal - libroExistente.precio,
          }));
        } else {
          const librosActualizados = libros.map((item) =>
            item._id === _id
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          );

          set((state) => ({
            libros: librosActualizados,
            totalLibros: state.totalLibros - 1,
            precioTotal: state.precioTotal - libroExistente.precio,
          }));
        }
      },

      eliminarLibro: (_id) => {
        const libros = get().libros;
        const libro = libros.find((item) => item._id === _id);
        if (!libro) return;

        const [librosActualizados, totalLibros, precioTotal] = formatCartLibro(libros, _id);

        set(() => ({
          libros: librosActualizados,
          totalLibros,
          precioTotal,
        }));
      },

      vaciarCarrito: () => {
        set(() => ({
          libros: [],
          totalLibros: 0,
          precioTotal: 0,
        }));
      },
    }),
    {
      name: "carrito-libros",
      getStorage: () => localStorage,
    }
  )
)

export default useCartContext;