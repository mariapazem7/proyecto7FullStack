import { useEffect, useState } from "react"
import {fetchAllBook} from "../services/fetchBook"
import { CardBook } from "../components/CardBook";

export const AllBookPage = () => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        const fetchBooks = async() => {
            const books = await fetchAllBook();
            setBooks(books.data);
        }

        fetchBooks();
    }, []);

    return(
        <>
            <div className="book-container">
                {
                    books.map(book => (
                        <CardBook key={ book._id } book={ book } />
                    ))
                }
            </div>
        </>

    )
}