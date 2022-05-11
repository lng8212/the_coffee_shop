import "./index.scss";
import Plus from "../../assets/plus.svg";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import MyModal from "../modal";

const ProductItem = ({ srcProduct, name, price, priceDiscount }) => {
  const navigate = useNavigate();

  const order = {
    srcProduct:
      "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
    name: "Cà Phê Sữa Đá",
    price: 29000,
    priceDiscount: 24500,
  };

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const NumberToPrice = (str) => {
    return str.toLocaleString("en");
  };

  const goToDetail = (e) => {
    navigate(`/products/${1}`);
  };

  const openModal = (e) => {
    e.stopPropagation();
    toggleModal();
  };

  return (
    <>
      <div className="product-item" onClick={goToDetail}>
        <img src={srcProduct} alt={name} />
        <h3>{name}</h3>
        <div className="product-item__price">
          <div>
            <p className="price-discount">
              {NumberToPrice(priceDiscount) + "đ"}
            </p>
            <p className="price">{NumberToPrice(price) + "đ"}</p>
          </div>
          <span className="btn-add" onClick={openModal}>
            <img src={Plus} alt="" />
          </span>
        </div>
      </div>
      <MyModal isOpen={isOpen} toggleModal={toggleModal} title="Thêm món mới">
        <div className="mymodal-content">
          <div className="mymodal-top">
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
            </div>
          </div>
          <div>
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
      </MyModal>
    </>
  );
};

export default ProductItem;
