import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../modules/auth/context/AuthContext";
import { CartIcon } from "../../../modules/cart/components/CartIcon";

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#34495E", fontFamily: '"Sour Gummy", sans-serif', fontSize: "1.1rem" }}>
      <div className="container-fluid">
      
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontSize: "1.5rem",
            color: "#FFFFFF", 
          }}
        >
          ReLectores
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#FFFFFF" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter: "invert(1)", 
            }}
          ></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontSize: "1.25rem", color: "#FFFFFF" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ fontSize: "1.25rem", color: "#FFFFFF" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/libros" style={{ fontSize: "1.25rem", color: "#FFFFFF" }}>
                Libros
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <CartIcon style={{ color: "#FFFFFF" }} />

            {!user ? (
              <Link className="nav-link" to="/login" style={{ fontSize: "1rem", color: "#FFFFFF" }}>
                Login
              </Link>
            ) : (
              <div className="navbar-user-info d-flex align-items-center">
                <span className="me-3" style={{ fontSize: "1rem", color: "#FFFFFF" }}>
                  {user.nombre} {user.apellido}
                </span>
                <Link
                  className="nav-link"
                  to="/"
                  onClick={handleLogout}
                  style={{ fontSize: "1rem", color: "#FFFFFF" }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};