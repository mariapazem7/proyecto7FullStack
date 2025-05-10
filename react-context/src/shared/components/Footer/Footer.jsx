
export const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4" style={{ fontFamily: '"Lexend", sans-serif' }}>
            <div className="container text-center">
                <p className="mb-0" style={{ fontSize: '1rem', letterSpacing: '1px' }}>
                    &copy; {new Date().getFullYear()} ReLectores. Todos los derechos reservados.
                </p>
                <p className="mb-0">
                    <a href="https://www.example.com" className="text-light text-decoration-none">
                        Política de privacidad
                    </a>{" "}
                    |{" "}
                    <a href="https://www.example.com" className="text-light text-decoration-none">
                        Términos y condiciones
                    </a>
                </p>
            </div>
        </footer>
    );
};