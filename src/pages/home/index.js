import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.scss";
import ProductItem from "../../components/product-item";
import { Link } from "react-router-dom";
import NewItem from "../../components/new-item";

const Home = () => {
  const slideImages = [
    {
      url: "https://minio.thecoffeehouse.com/image/admin/1650991303_web-cu.jpg",
    },
    {
      url: "https://minio.thecoffeehouse.com/image/admin/1649353133_bh-web.jpg",
    },
    {
      url: "https://minio.thecoffeehouse.com/image/admin/1649353010_banner-web.jpg",
    },
    {
      url: "https://minio.thecoffeehouse.com/image/admin/1649318882_bh-web.jpg",
    },
    {
      url: "https://minio.thecoffeehouse.com/image/admin/1648762492_web-cu.jpeg",
    },
  ];

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

  const listNews = [
    {
      srcNew:
        "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
      title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
      link: "#",
    },
    {
      srcNew:
        "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
      title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
      link: "#",
    },
    {
      srcNew:
        "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
      title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
      link: "#",
    },
    {
      srcNew:
        "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
      title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
      link: "#",
    },
    {
      srcNew:
        "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
      title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
      link: "#",
    },
    {
      srcNew:
        "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
      title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
      link: "#",
    },
    {
      srcNew:
        "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
      title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
      link: "#",
    },
  ];

  return (
    <div className="home">
      <div className="home-banner">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper container"
        >
          {slideImages.map((slide, i) => (
            <SwiperSlide key={i}>
              <img src={slide.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container">
        <h2>Sản phẩm</h2>
        <div className="home-product">
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
        <div className="home-all">
          <Link to="/products">Xem tất cả</Link>
        </div>
        <h2>Tin tức</h2>
        <div className="home-new">
          {listNews.map((list, i) => (
            <NewItem
              title={list.title}
              link={list.link}
              srcNew={list.srcNew}
              key={i}
            />
          ))}
        </div>
        <div className="home-all">
          <Link to="/blogs">Xem tất cả</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
