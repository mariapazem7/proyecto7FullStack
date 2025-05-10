import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import { FormField } from "./FormField";
import { ImageUploader } from "../../../../shared/components/ImageUploader";

import { FORM_INITIAL_STATE } from "../../utils/types/initialFormState";
import { useValidateRegisterForm } from "../../hooks/useValidateRegisterForm";
import { formatDataRegister } from "../../utils/formaters/formatDataRegister";

export const RegisterForm = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState(FORM_INITIAL_STATE);
    const [formError, setFormError] = useState("");

    const { errors, validateField, validateForm } = useValidateRegisterForm(formData);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        validateField(name, value);
    }, [validateField]);

    useEffect(() => {
        if (formData.confirmPassword) {
            validateField("confirmPassword", formData.confirmPassword);
        }
    }, [formData.password, formData.confirmPassword, validateField]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormError("");

        if (validateForm()) {
            setFormError("Por favor, corrige los errores antes de continuar.");
            return;
        }

        try {
            const formDataToSend = formatDataRegister(formData);
            await register(formDataToSend);
            alert("Usuario registrado correctamente, por favor inicie sesión.");
            navigate("/login");
        } catch (error) {
            console.error("Error registering:", error);
            setFormError("Error al registrar el usuario. Por favor, inténtelo de nuevo más tarde.");
        }
    };

    return (
        <div
            className="container py-5"
            style={{
                backgroundColor: "#006D77",
                fontFamily: '"Lexend", sans-serif',
                color: "white",
                minHeight: "100vh",
                borderRadius: "8px",
            }}
        >
            <form
                onSubmit={handleSubmit}
                className="p-4 rounded shadow"
                style={{ backgroundColor: "#006D77" }}
            >
                <h2 className="text-center mb-5">Crear Cuenta</h2>

                {formError && (
                    <div className="alert alert-danger" role="alert">
                        {formError}
                    </div>
                )}

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <FormField
                            id="nombre"
                            label="Nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Nombre"
                            required={true}
                            error={errors.nombre}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <FormField
                            id="apellido"
                            label="Apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            placeholder="Apellido"
                            required={true}
                            error={errors.apellido}
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <FormField
                        id="correo"
                        label="Correo"
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="Correo"
                        required={true}
                        error={errors.correo}
                    />
                </div>

                <div className="mb-3">
                    <FormField
                        id="telefono"
                        label="Teléfono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        required={true}
                        error={errors.telefono}
                    />
                </div>

                <div className="mb-3">
                    <FormField
                        id="fecha_nacimiento"
                        label="Fecha de Nacimiento"
                        name="fecha_nacimiento"
                        type="date"
                        value={formData.fecha_nacimiento}
                        onChange={handleChange}
                        placeholder="Fecha de Nacimiento"
                        required={true}
                        error={errors.fecha_nacimiento}
                    />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <FormField
                            id="password"
                            label="Contraseña"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Contraseña"
                            required={true}
                            error={errors.password}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <FormField
                            id="confirmPassword"
                            label="Confirmar Contraseña"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirmar Contraseña"
                            required={true}
                            error={errors.confirmPassword}
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <ImageUploader
                        onChange={handleChange}
                        error={errors.imagen}
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn px-5"
                        style={{
                            backgroundColor: "#00A8E8",
                            color: "white",
                            border: "none",
                            fontFamily: '"Lexend", sans-serif'
                        }}
                    >
                        Regístrate
                    </button>
                </div>
            </form>
        </div>
    );
};