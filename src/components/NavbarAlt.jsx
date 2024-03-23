import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-alt.png";
import { HashLink } from "react-router-hash-link";

export default function NavbarAlt() {
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
          <ul className="navbar-nav d-flex flex-wrap mb-2 ms-5 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="fa-solid fa-house me-2"></i>
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#about">
                <i className="fa-solid fa-address-card me-2"></i>
                نبذه عن المؤسسة
              </HashLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/goals">
                <i className="fa-solid fa-calendar-check me-2"></i>
                الأهداف والمهام
              </NavLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#services">
                <i className="fa-solid fa-briefcase me-2"></i>
                الخدمات
              </HashLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gallary">
                <i className="fa-solid fa-image me-2"></i>
                مكتبة الصور
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skeleton">
              <i className="fa-solid fa-list me-2"></i>
                الهيكل التنظيمي
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
