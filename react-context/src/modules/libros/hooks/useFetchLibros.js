import { useEffect, useState } from "react";
import { fetchAllLibros } from "../services/LibrosApiService";

export const useFetchLibros = () => {
    const [libros, setLibros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLibros = async () => {
        try {
            const res = await fetchAllLibros();
            setLibros(res.data);
        } catch (err) {
            setError("Error al cargar los libros");
            console.error(err);
        } finally {
            setLoading(false);
        }
        };

        fetchLibros();
    }, []);

    return { libros, loading, error };
};