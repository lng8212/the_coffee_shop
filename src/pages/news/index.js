import NewItem from "../../components/new-item";
import "./index.scss";

const News = () => {
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
    <div className="news">
      <div className="container">
        <h2>Tin tức</h2>
        <div className="news-list">
          {listNews.map((list, i) => (
            <NewItem
              title={list.title}
              link={list.link}
              srcNew={list.srcNew}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
