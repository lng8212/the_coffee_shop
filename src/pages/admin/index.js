import { useEffect, useState } from "react";
import "./index.scss";
import MyModal from "../../components/modal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const urlApi = "http://localhost:8080/CoffeeShop";

const AdminPage = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const [tab, setTab] = useState("drink");

  const [drinks, setDrinks] = useState([]);
  const [listNews, setListNews] = useState([]);
  const [listBill, setListBill] = useState([]);

  const navigate = useNavigate();

  const getListDrinks = async () => {
    const res = await axios.get(`${urlApi}/getDrinks`);
    if (res) {
      console.log(res);
      setDrinks(res.data);
    }
  };

  const getListNews = async () => {
    const res = await axios.get(`${urlApi}/news`);
    if (res) {
      console.log(res);
      setListNews(res.data);
    }
  };

  const getListBill = async () => {
    const res = await axios.get(`${urlApi}/bill`);
    if (res) {
      console.log(res);
      setListBill(res.data);
    }
  };

  useEffect(() => {
    if (tab === "drink") {
      getListDrinks();
    } else if (tab === "new") {
      getListNews();
    } else {
      getListBill();
    }
  }, [tab]);

  const [drink, setDrink] = useState({});

  const onChangeDrink = (e) => {
    const { name, value } = e.target;

    setDrink({
      ...drink,
      [name]: value,
    });
  };

  const [isOpenAddNew, setIsOpenAddNew] = useState(false);
  const [isOpenEditNew, setIsOpenEditNew] = useState(false);

  const [news, setNews] = useState({});

  const onChangeNews = (e) => {
    const { name, value } = e.target;

    setNews({
      ...news,
      [name]: value,
    });
  };

  const onDeleteDrinks = async (id) => {
    const result = window.confirm("Bạn có muốn xoá không?");
    if (result) {
      const res = await axios.delete(`${urlApi}/drink?id_drink=${id}`);
      if (res) {
        const list = drinks.filter((dr) => dr.id_drink !== id);
        setDrinks([...list]);
        toast.success("Xoá thức uống thành công!");
      }
    }
  };

  const onAddDrinks = async () => {
    const newDrink = { ...drink };
    newDrink.id_type = 1;
    const res = await axios.post(`${urlApi}/drink`, JSON.stringify(newDrink));
    if (res) {
      setDrinks([...drinks, newDrink]);
      setIsOpenAdd(false);
      toast.success("Thêm thức uống thành công!");
    }
  };

  const onEditDrinks = async () => {
    const res = await axios.put(`${urlApi}/drink`, JSON.stringify(drink));
    if (res) {
      const index = drinks.findIndex(
        (list) => list.id_drink === drink.id_drink
      );
      console.log(index);
      if (index !== -1) {
        drinks[index] = drink;
        setDrinks([...drinks]);
        setIsOpenEdit(false);
        toast.success("Cập nhật thức uống thành công!");
      }
    }
  };

  const onDeleteNews = async (id) => {
    const result = window.confirm("Bạn có muốn xoá không?");
    if (result) {
      const res = await axios.delete(`${urlApi}/news?id=${id}`);
      if (res) {
        const list = listNews.filter((ne) => ne.id_news !== id);
        setListNews([...list]);
        toast.success("Xoá tin tức thành công!");
      }
    }
  };

  const onAddNews = async () => {
    const res = await axios.post(`${urlApi}/news`, JSON.stringify(news));
    if (res) {
      setListNews([...listNews, news]);
      setIsOpenAddNew(false);
      toast.success("Thêm tin tức thành công!");
    }
  };

  const onEditNews = async () => {
    const res = await axios.put(`${urlApi}/news`, JSON.stringify(news));
    if (res) {
      const index = listNews.findIndex((list) => list.id_news === news.id_news);
      if (index !== -1) {
        listNews[index] = news;
        setListNews([...listNews]);
        setIsOpenEditNew(false);
        toast.success("Cập nhật tin tức thành công!");
      }
    }
  };

  return (
    <div className="admin">
      <div className="admin-tab">
        <a
          onClick={() => setTab("drink")}
          className={tab === "drink" ? "active" : ""}
        >
          Đồ uống
        </a>
        <a
          onClick={() => setTab("new")}
          className={tab === "new" ? "active" : ""}
        >
          Tin tức
        </a>
        <a
          onClick={() => setTab("bill")}
          className={tab === "bill" ? "active" : ""}
        >
          Hóa đơn
        </a>
      </div>
      {tab === "drink" ? (
        <>
          <div className="admin-container">
            <h1>Quản lý đồ uống</h1>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th style={{ width: 500 }}>Name</th>
                  <th style={{ width: 300 }}>Price</th>
                  <th style={{ width: 100 }}>Image</th>
                  <th style={{ width: 300 }}>
                    <button
                      className="btn-add"
                      onClick={() => {
                        setDrink({});
                        setIsOpenAdd(true);
                      }}
                    >
                      Thêm đồ uống mới
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {drinks.map((dr, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{dr.name_drink}</td>
                    <td>{dr.price}</td>
                    <td>
                      <img src={dr.img} alt="" className="admin-image" />
                    </td>
                    <td>
                      <div className="admin-action">
                        <button onClick={() => onDeleteDrinks(dr.id_drink)}>
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            setIsOpenEdit(true);
                            setDrink(dr);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MyModal
            isOpen={isOpenAdd}
            title="Thêm nước uống"
            toggleModal={() => setIsOpenAdd(!isOpenAdd)}
          >
            <div className="admin-input-wp">
              <input
                type="text"
                placeholder="Name"
                value={drink.name_drink}
                onChange={onChangeDrink}
                className="admin-input"
                name="name_drink"
              />
              <input
                type="text"
                placeholder="Price"
                value={drink.price}
                onChange={onChangeDrink}
                className="admin-input"
                name="price"
              />
              <textarea
                placeholder="Description"
                value={drink.descript}
                onChange={onChangeDrink}
                className="admin-textarea"
                rows={5}
                name="descript"
              />
              <input
                type="text"
                placeholder="Image"
                value={drink.img}
                onChange={onChangeDrink}
                className="admin-input"
                name="img"
              />
              <img src={drink.img} alt="" className="admin-preview" />
              <div className="admin-action">
                <button onClick={() => setIsOpenAdd(false)}>Cancel</button>
                <button onClick={onAddDrinks}>Save</button>
              </div>
            </div>
          </MyModal>

          <MyModal
            isOpen={isOpenEdit}
            title="Sửa thông tin nước uống"
            toggleModal={() => setIsOpenEdit(!isOpenEdit)}
          >
            <div className="admin-input-wp">
              <input
                type="text"
                placeholder="Name"
                value={drink.name_drink}
                onChange={onChangeDrink}
                className="admin-input"
                name="name_drink"
              />
              <input
                type="text"
                placeholder="Price"
                value={drink.price}
                onChange={onChangeDrink}
                className="admin-input"
                name="price"
              />
              <textarea
                placeholder="Description"
                value={drink.descript}
                onChange={onChangeDrink}
                className="admin-textarea"
                rows={5}
                name="descript"
              />
              <input
                type="text"
                placeholder="Image"
                value={drink.img}
                onChange={onChangeDrink}
                className="admin-input"
                name="img"
              />
              <img src={drink.img} alt="" className="admin-preview" />
              <div className="admin-action">
                <button onClick={() => setIsOpenEdit(false)}>Cancel</button>
                <button onClick={onEditDrinks}>Save</button>
              </div>
            </div>
          </MyModal>
        </>
      ) : tab === "new" ? (
        <>
          <div className="admin-container">
            <h1>Quản lý tin tức</h1>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th style={{ width: 500 }}>Name</th>
                  <th style={{ width: 500 }}>Description</th>
                  <th style={{ width: 100 }}>Image</th>
                  <th style={{ width: 300 }}>
                    <button
                      className="btn-add"
                      onClick={() => {
                        setNews({});
                        setIsOpenAddNew(true);
                      }}
                    >
                      Thêm bài viết mới
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {listNews.map((ne, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{ne.name_news}</td>
                    <td>{ne.descript}</td>
                    <td>
                      <img src={ne.img} alt="" className="admin-image" />
                    </td>
                    <td>
                      <div className="admin-action">
                        <button onClick={() => onDeleteNews(ne.id_news)}>
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            setIsOpenEditNew(true);
                            setNews(ne);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <MyModal
            isOpen={isOpenAddNew}
            title="Thêm tin tức"
            toggleModal={() => setIsOpenAddNew(!isOpenAddNew)}
          >
            <div className="admin-input-wp">
              <input
                type="text"
                placeholder="Name"
                value={news.name_news}
                onChange={onChangeNews}
                className="admin-input"
                name="name_news"
              />
              <textarea
                placeholder="Description"
                value={news.descript}
                onChange={onChangeNews}
                className="admin-textarea"
                rows={5}
                name="descript"
              />
              <input
                type="text"
                placeholder="Image"
                value={news.img}
                onChange={onChangeNews}
                className="admin-input"
                name="img"
              />
              <img src={news.img} alt="" className="admin-preview" />
              <div className="admin-action">
                <button onClick={() => setIsOpenAddNew(false)}>Cancel</button>
                <button onClick={onAddNews}>Save</button>
              </div>
            </div>
          </MyModal>

          <MyModal
            isOpen={isOpenEditNew}
            title="Sửa thông tin tin tức"
            toggleModal={() => setIsOpenEditNew(!isOpenEditNew)}
          >
            <div className="admin-input-wp">
              <input
                type="text"
                placeholder="Name"
                value={news.name_news}
                onChange={onChangeNews}
                className="admin-input"
                name="name_news"
              />
              <textarea
                placeholder="Description"
                value={news.descript}
                onChange={onChangeNews}
                className="admin-textarea"
                rows={5}
                name="descript"
              />
              <input
                type="text"
                placeholder="Image"
                value={news.img}
                onChange={onChangeNews}
                className="admin-input"
                name="img"
              />
              <img src={news.img} alt="" className="admin-preview" />
              <div className="admin-action">
                <button onClick={() => setIsOpenEditNew(false)}>Cancel</button>
                <button onClick={onEditNews}>Save</button>
              </div>
            </div>
          </MyModal>
        </>
      ) : (
        <div className="admin-container">
          <h1>Danh sách hóa đơn</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th style={{ width: 500 }}>Customer</th>
                <th style={{ width: 500 }}>Order Day</th>
                <th style={{ width: 300 }}></th>
              </tr>
            </thead>
            <tbody>
              {listBill.map((list, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{list.customer.name_customer}</td>
                  <td>{list.order_day}</td>
                  <td>
                    <div className="admin-action">
                      <button
                        onClick={() => {
                          navigate(`/bill/${list.id_bill}`);
                        }}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
