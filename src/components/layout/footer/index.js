import { Link } from "react-router-dom";
import LogoWhite from "../../../assets/logo-white.webp";

import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content container">
          <Link to="/">
            <img src={LogoWhite} alt="" />
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
              <Link to="/products">Đặt hàng 1800 6936 (07:00-20:30)</Link>
              <Link to="/">Hỗ trợ 028.71.087.088 (07:00-21:00)</Link>
            </div>
          </div>
          <div className="footer-column">
            <h3>Liên hệ</h3>
            <div>
              <Link to="/">
                Địa chỉ: 86 - 88 Cao Thang, Ward 4, District 3, Ho Chi Minh,
                Vietnam
              </Link>
              <Link to="/">Điện thoại: +842871 078 079</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        Copyright © 2021 The Coffee House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
