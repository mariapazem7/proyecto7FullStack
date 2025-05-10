import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/Register/RegisterForm";

export const RegisterPage = () => {
    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{
                backgroundColor: "#1B1B1B", 
                fontFamily: '"Lexend", sans-serif',
                color: "#fff", 
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow bg-dark text-white">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-5 mt-5">
                                    ¡Ya puedes registarte!
                                </h2>

                                <RegisterForm />

                                <p className="mt-4 text-center small text-light">
                                    ¿Ya tienes una cuenta?{" "}
                                    <Link to="/login" className="text-decoration-none text-info">
                                        Iniciar sesión
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};