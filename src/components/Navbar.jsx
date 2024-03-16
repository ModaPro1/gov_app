import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-alt.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <Link className="navbar-brand pt-0" to="/">
          <img src={logo} alt="LOGO" width={200} />
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
          <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                نبذه عن المؤسسة
              </a>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/test">
                الرؤية
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/goals">
                الأهداف والمهام
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                الخدمات
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallary">
                مكتبة الصور
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
