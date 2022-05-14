import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      {location.pathname !== "/admin" && <Header />}
      <div>
        <Outlet />
      </div>

      <ToastContainer />
      {location.pathname !== "/admin" && <Footer />}
    </>
  );
};

export default Layout;
