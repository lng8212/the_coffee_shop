import Plus from "../../../assets/plus.svg";
import "./index.scss";

const OrderDetail = () => {
  const order = {
    srcProduct:
      "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
    name: "Cà Phê Sữa Đá",
    price: 29000,
    priceDiscount: 24500,
  };

  return (
    <div className="order-detail">
      <div className="order-container">
        <div className="order-card">
          <div className="order-image">
            <img src={order.srcProduct} alt={order.name} />
          </div>
          <div className="order-order">
            <h1>{order.name}</h1>
            <div className="order-price">
              <div className="order-price__text">
                <p>29.000 đ</p>
              </div>
              <div className="order-number">
                <span className="btn btn-minus">-</span>1
                <span className="btn btn-add">+</span>
              </div>
            </div>
            <div className="order-more">
              <div className="title title-first">Chọn size (bắt buộc)</div>
              <div className="order-size">
                <form>
                  <div>
                    <input type="radio" id="to" name="size" value="to" />
                    <label for="to">
                      <p>To</p>
                      <p>+ 20000 đ</p>
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="vua" name="size" value="vua" />
                    <label for="vua">
                      <p>Vừa</p>
                      <p>+ 10000 đ</p>
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="nho" name="size" value="nho" />
                    <label for="nho">
                      <p>Nhỏ</p>
                      <p>+ 0 đ</p>
                    </label>
                  </div>
                </form>
              </div>
              <div className="title">Chọn topping (tuỳ chọn)</div>
              <div className="order-topping">
                <div className="order-topping__item">
                  <div className="order-topping__name">
                    <p>Kem Phô Mai Macchiato</p>
                    <p>+ 10000 đ</p>
                  </div>
                  <div className="order-number">
                    <span className="btn btn-minus">-</span>1
                    <span className="btn btn-add">+</span>
                  </div>
                </div>
                <div className="order-topping__item">
                  <div className="order-topping__name">
                    <p>Kem Phô Mai Macchiato</p>
                    <p>+ 10000 đ</p>
                  </div>
                  <div className="order-number">
                    <span className="btn btn-minus">-</span>1
                    <span className="btn btn-add">+</span>
                  </div>
                </div>
                <div className="order-topping__item">
                  <div className="order-topping__name">
                    <p>Kem Phô Mai Macchiato</p>
                    <p>+ 10000 đ</p>
                  </div>
                  <div className="order-number">
                    <span className="btn btn-minus">-</span>1
                    <span className="btn btn-add">+</span>
                  </div>
                </div>
                <div className="order-topping__item">
                  <div className="order-topping__name">
                    <p>Kem Phô Mai Macchiato</p>
                    <p>+ 10000 đ</p>
                  </div>
                  <div className="order-number">
                    <span className="btn btn-minus">-</span>1
                    <span className="btn btn-add">+</span>
                  </div>
                </div>
                <div className="order-topping__item">
                  <div className="order-topping__name">
                    <p>Kem Phô Mai Macchiato</p>
                    <p>+ 10000 đ</p>
                  </div>
                  <div className="order-number">
                    <span className="btn btn-minus">-</span>1
                    <span className="btn btn-add">+</span>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" onClick={() => {}}>
              35000 đ - Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
