import "./index.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1>Xác nhận đơn hàng</h1>
        <div className="checkout-content">
          <div className="checkout-info">
            <h3 className="checkout-info__title">Thông tin</h3>
            <input
              type="text"
              placeholder="Tên người nhận"
              className="checkout-input"
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              className="checkout-input"
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              className="checkout-input"
            />
            <h3 className="checkout-info__title">Phương thức thanh toán</h3>
            <div className="checkout-info__money">
              <img
                src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                alt=""
              />
              Tiền mặt
            </div>
            <input type="checkbox" id="accept" className="checkout-checkbox" />
            <label htmlFor="accept">
              Đồng ý với các điều khoản và điều kiện mua hàng của The Coffee
              House
            </label>
          </div>
          <div className="checkout-order">
            <div className="checkout-order__content">
              <div className="checkout-order__header">
                <h3 className="checkout-info__title">Các món đã chọn</h3>
                <button>Thêm món</button>
              </div>
              <div className="checkout-order__product"></div>
              <h3 className="checkout-info__title">Tổng cộng</h3>
              <div className="checkout-order__total">
                <div>Thành tiền</div>
                <div>150,000 đ</div>
              </div>
              <div className="checkout-order__total">
                <div>Phí vận chuyển</div>
                <div>10,000 đ</div>
              </div>
            </div>
            <div className="checkout-order__order">
              <div>
                <p>Thành tiền</p>
                <p>160,000 đ</p>
              </div>
              <button>Đặt hàng</button>
            </div>

            <div className="checkout-order__delete">Xoá đơn hàng</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
