import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/10781240.png";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { authContext } from "../../context/AuthContextProvider";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  useEffect(() => {
    state.length;
  }, []);

  const { token, settoken } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    settoken(null);
    localStorage.removeItem("tkn");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={Logo} alt="logo" className="brand-logo" />
          <span className="brand-title mx-2 fs-1">Brandt Store</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* الروابط الرئيسية */}
          {token ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-semibold">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          ) : (
            ""
          )}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!token ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    <button type="button" className="btn btn-outline-dark">
                      <i className="fa-solid fa-right-to-bracket mx-1"></i>
                      Login
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    <button type="button" className="btn btn-outline-dark">
                      <i className="fa-solid fa-user-plus mx-1"></i>
                      Register
                    </button>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2  my-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <i className="fa-brands fa-facebook fa-lg"></i>
                  </a>
                </li>
                <li className="nav-item mx-2 my-2">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <i className="fa-brands fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li className="nav-item mx-2  my-2 ">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    <i className="fa-brands fa-instagram fa-lg"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    <button type="button" className="btn btn-outline-dark">
                      <i className="fa-solid fa-cart-plus mx-1"></i> Cart{" "}
                      {state.length}
                    </button>
                  </NavLink>
                </li>

                <li className="nav-item my-2">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                    Sign Out
                  </button>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav  mb-2 mb-lg-0 social-icons"></ul>
        </div>
      </div>
    </nav>
  );
}
