import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const LoginPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#1B1B1B", fontFamily: '"Lexend", sans-serif' }}>
            <div className="bg-secondary p-5 rounded-3 shadow-lg text-center" style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="text-white mb-4" style={{ fontSize: '2.5rem', letterSpacing: '2px', fontFamily: '"Lexend", sans-serif' }}>Iniciar Sesión</h2>
                <LoginForm />
                <p className="text-white mt-4" style={{ fontFamily: '"Lexend", sans-serif' }}>
                    ¿No tienes cuenta?{" "}
                    <Link to="/register" className="fw-bold text-warning text-decoration-none" style={{ fontFamily: '"Lexend", sans-serif' }}>Regístrate</Link>
                </p>
            </div>
        </div>
    );
};