import { apiClient } from "../../../shared/services/apiClient.js";


export const fetchAllBook = async() => {
    try {
        const { data } = await apiClient.get('/libros');
        return data;
    } catch (error) {
        console.error("Error obteniendo los libros:", error);
        throw new Error(error);
    }
};

export const fetchLibrosById = async(id) => {
    try {
        const { data } = await apiClient.get(`/libros/${id}`);
        return data;
    } catch (error) {
        console.error(`Error obteniendo el libro con el id: ${id}`, error);
        throw new Error(error);
    }
}