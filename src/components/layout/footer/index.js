import { Link } from "react-router-dom";
import LogoWhite from "../../../assets/logo-white.webp";

import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content container">
          <Link to="/">
            <img src={LogoWhite} alt=""/>
          </Link>
          <div className="footer-column">
            <h3>Thông tin website</h3>
            <div>
              <Link to="/">Trang chủ</Link>
              <Link to="/products">Đặt hàng</Link>
              <Link to="/blogs">Tin tức</Link>
            </div>
          </div>
          <div className="footer-column">
            <h3>Hotline</h3>
            <div>
              <Link to="/products">Đặt hàng: 0376791957 (07:00-20:30)</Link>
              <Link to="/">Hỗ trợ: 0376791957 (07:00-21:00)</Link>
            </div>
          </div>
          <div className="footer-column">
            <h3>Liên hệ</h3>
            <div>
              <Link to="/">
                Địa chỉ: 96A Trần Phú, P. Mộ Lao, Hà Đông, Hà Nội
              </Link>
              <Link to="/">Điện thoại: +8437 67 919 57</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        Copyright © 2022 The Coffee Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
