import { Outlet } from "react-router-dom";
import NavBar from "./shared/NaveBar/NaveBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
