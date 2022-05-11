import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import Bag from "../../../assets/bag.svg";
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper container">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <nav>
          <Link to="/products">Đặt hàng</Link>
          <Link to="/blogs">Tin tức</Link>
        </nav>
        <Link to="/checkout">
          <span className="header-bag">
            <img src={Bag} alt="bag" />
            <span className="number-of-bag">1</span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
