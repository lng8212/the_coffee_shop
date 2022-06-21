import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";

const urlApi = "http://localhost:8080/CoffeeShop";

export default function BillDetail() {
  const { id } = useParams();

  const [bill, setBill] = useState({});

  const getDetailBill = async (id_bill) => {
    const res = await axios.get(`${urlApi}/checkout?id=${id_bill}`);
    if (res) {
      setBill(res.data);
    }
  };

  useEffect(() => {
    getDetailBill(id);
  }, [id]);

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
              <strong>Họ và tên:</strong> {bill?.customer?.name_customer}
            </div>
            <div className="bill-input-text">
              <strong>SĐT</strong>: {bill?.customer?.phone_number}
            </div>
            <div className="bill-input-text">
              <strong>Địa chỉ:</strong> {bill?.customer?.address}
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
              </div>
              <div className="bill-order__product">
                {bill?.listBillDetail?.map((list) => (
                  <div>
                    <div className="bill-order__product-item">
                      <div>
                        <p>
                          {list.drink.name_drink} X {list.amount}
                        </p>
                        <p>{list.size.name_size}</p>
                      </div>
                      <div>{list.price} đ</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <h3 className="bill-info__title">Tổng cộng</h3> */}
              <div className="bill-order__total">
                {/* <div>Thành tiền</div> */}
                {/* <div>{bill?.totalMoney} đ</div> */}
              </div>
            </div>
            <div className="bill-order__order">
              <div>
                <p>Thành tiền</p>
                <p>{bill?.totalMoney} đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
