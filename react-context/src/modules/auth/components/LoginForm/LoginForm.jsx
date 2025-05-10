import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const formatData = {
            correo,
            password
        };

        try {
            await login(formatData);
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("Error al iniciar sesión");
        }
    };

    return (
        <form onSubmit={handleLogin} style={{ fontFamily: '"Lexend", sans-serif' }}>
            <div className="mb-3">
                <label className="form-label text-white">Correo</label>
                <input
                    type="email"
                    className="form-control bg-white text-dark"
                    value={correo}
                    onChange={event => setCorreo(event.target.value)}
                    required
                    style={{ fontFamily: '"Lexend", sans-serif' }}
                />
            </div>
            <div className="mb-4">
                <label className="form-label text-white">Contraseña</label>
                <input
                    type="password"
                    className="form-control bg-white text-dark"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                    style={{ fontFamily: '"Lexend", sans-serif' }}
                />
            </div>
            <button
                type="submit"
                className="btn w-100"
                style={{
                    backgroundColor: "#00A8E8",
                    color: "white",
                    border: "none",
                    fontFamily: '"Lexend", sans-serif'
                }}
            >
                Iniciar Sesión
            </button>
        </form>
    );
}