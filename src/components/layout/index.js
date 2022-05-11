import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      {location.pathname !== "/admin" && <Header />}

      <div>
        <Outlet />
      </div>

      {location.pathname !== "/admin" && <Footer />}
    </>
  );
};

export default Layout;
