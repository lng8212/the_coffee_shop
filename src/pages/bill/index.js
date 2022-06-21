import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function BillDetail() {
  return (
    <div className="bill">
      <div className="bill-container">
        <h1>
          <Link to="/admin">{"< Quay lại"}</Link>
          Chi tiết đơn hàng
        </h1>
        <div className="bill-content">
          <div className="bill-info">
            <h3 className="bill-info__title">Thông tin</h3>
            <div className="bill-input-text">
              <strong>Họ và tên:</strong> Trần Văn Thắng
            </div>
            <div className="bill-input-text">
              <strong>SĐT</strong>: 0987654321
            </div>
            <div className="bill-input-text">
              <strong>Địa chỉ:</strong> 110 Trần Phú
            </div>
            <h3 className="bill-info__title">Phương thức thanh toán</h3>
            <div className="bill-info__money">
              <img
                src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                alt=""
              />
              Tiền mặt
            </div>
          </div>
          <div className="bill-order">
            <div className="bill-order__content">
              <div className="bill-order__header">
                <h3 className="bill-info__title">Các món đã chọn</h3>
                <button onClick={() => {}}>Xóa</button>
              </div>
              <div className="bill-order__product">
                <div>
                  <div className="bill-order__product-item">
                    <div>
                      <p>Bạc sửu nóng X 1</p>
                      <p>Vừa</p>
                    </div>
                    <div>35,000 đ</div>
                  </div>
                </div>
                <div>
                  <div className="bill-order__product-item">
                    <div>
                      <p>Bạc sửu đá X 2</p>
                      <p>Vừa</p>
                    </div>
                    <div>70,000 đ</div>
                  </div>
                </div>
              </div>
              <h3 className="bill-info__title">Tổng cộng</h3>
              <div className="bill-order__total">
                <div>Thành tiền</div>
                <div>150,000 đ</div>
              </div>
              <div className="bill-order__total">
                <div>Phí vận chuyển</div>
                <div>10,000 đ</div>
              </div>
            </div>
            <div className="bill-order__order">
              <div>
                <p>Thành tiền</p>
                <p>160,000 đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
