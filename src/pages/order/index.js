import ProductItem from "../../components/product-item";
import "./index.scss";

const Order = () => {
  const listProducts = [
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
    {
      srcProduct:
        "https://minio.thecoffeehouse.com/image/admin/1639377738_ca-phe-sua-da_400x400.jpg",
      name: "Cà Phê Sữa Đá",
      price: 29000,
      priceDiscount: 24500,
    },
  ];

  return (
    <div className="order">
      <div className="container">
        <h2>Sản phẩm</h2>
        <div className="order-product">
          {listProducts.map((list, i) => (
            <ProductItem
              name={list.name}
              price={list.price}
              priceDiscount={list.priceDiscount}
              srcProduct={list.srcProduct}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
