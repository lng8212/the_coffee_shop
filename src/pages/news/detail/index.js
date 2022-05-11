import "./index.scss";

const NewsDetail = () => {
  const news = {
    srcNew:
      "https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg",
    title: "CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM",
    link: "#",
  };

  return (
    <div className="news-detail">
      <div className="news-container">
        <div className="news-card">
          <h1>{news.title}</h1>
          <p>Noi dng</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
