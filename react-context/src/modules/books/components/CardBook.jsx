
export const CardBook = ({ book }) => {
return (
    <div className="card">
        
        <h2>{book.titulo}</h2>
        <p>{book.autor}</p>
        <p>publicación: {book.ano_publicado}</p>
        <p>descripción: {book.descripcion}</p>
    </div>
);
}