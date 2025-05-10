import { Link, useLocation } from "react-router-dom";
import { message } from "../utils/messages";
import { statusStyles } from "../utils/stylesFormat";

export const MercadoPagoStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");

  const { title, description } = message[status] || message.default;
  const alertClass = statusStyles[status] || statusStyles.default;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className={`alert ${alertClass} p-4 rounded shadow w-100`} style={{ maxWidth: "500px" }}>
        <h2 className="h4 mb-3">{title}</h2>
        <p className="mb-4">{description}</p>
        <Link to="/libros" className="btn btn-primary w-100">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
};