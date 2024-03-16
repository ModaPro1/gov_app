import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarAlt from "../components/NavbarAlt";

export default function Layout() {
  const router = useLocation()
  return (
    <>
      {
        router.pathname == "/" ? <Navbar /> : <NavbarAlt />
      }
      <Outlet />
    </>
  );
}
