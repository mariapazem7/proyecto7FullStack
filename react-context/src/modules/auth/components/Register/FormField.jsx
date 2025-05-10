
export const FormField = ({
    id,
    label,
    name,
    type = "text",
    value = "",
    onChange,
    placeholder,
    required = false,
    error = null
}) => {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label} {required && <span className="text-danger">*</span>}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value || ""}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`form-control ${error ? "is-invalid" : ""}`}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};