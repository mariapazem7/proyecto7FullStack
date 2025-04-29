import axios from "axios";

export const fetchAllBook = async() => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/v1/libros');
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw new Error(error);
    }
}