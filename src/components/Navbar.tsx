import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/new">
                New Expense
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <NavLink className="btn btn-sm btn-outline-light" to="/login">Login</NavLink>
          <NavLink className="btn btn-sm btn-outline-light mx-1" to="/register">Register</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars color="white" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
