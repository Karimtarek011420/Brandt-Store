import { Outlet } from "react-router-dom";
import Navbarlist from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbarlist />
      <Outlet />
      <Footer />
    </>
  );
}
