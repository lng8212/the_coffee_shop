import { useState } from "react";
import "./index.scss";
import MyModal from "../../components/modal";

const AdminPage = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

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

  const [tab, setTab] = useState("drink");

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
                      onClick={() => setIsOpenAdd(true)}
                    >
                      Thêm đồ uống mới
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Latte đá xay</td>
                  <td>49000</td>
                  <td>
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/latte-da_438410.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEdit(true)}>Edit</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Latte đá xay</td>
                  <td>49000</td>
                  <td>
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/latte-da_438410.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEdit(true)}>Edit</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Latte đá xay</td>
                  <td>49000</td>
                  <td>
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/latte-da_438410.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEdit(true)}>Edit</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Latte đá xay</td>
                  <td>49000</td>
                  <td>
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/latte-da_438410.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEdit(true)}>Edit</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Latte đá xay</td>
                  <td>49000</td>
                  <td>
                    <img
                      src="https://minio.thecoffeehouse.com/image/admin/latte-da_438410.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEdit(true)}>Edit</button>
                    </div>
                  </td>
                </tr>
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
                value={drink.name}
                onChange={onChangeDrink}
                className="admin-input"
                name="name"
              />
              <input
                type="text"
                placeholder="Price"
                value={drink.price}
                onChange={onChangeDrink}
                className="admin-input"
                name="price"
              />
              <input
                type="text"
                placeholder="Image"
                value={drink.image}
                onChange={onChangeDrink}
                className="admin-input"
                name="image"
              />
              <img src={drink.image} alt="" className="admin-preview" />
              <div className="admin-action">
                <button>Cancel</button>
                <button onClick={() => {}}>Save</button>
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
                value={drink.name}
                onChange={onChangeDrink}
                className="admin-input"
                name="name"
              />
              <input
                type="text"
                placeholder="Price"
                value={drink.price}
                onChange={onChangeDrink}
                className="admin-input"
                name="price"
              />
              <input
                type="text"
                placeholder="Image"
                value={drink.image}
                onChange={onChangeDrink}
                className="admin-input"
                name="image"
              />
              <img src={drink.image} alt="" className="admin-preview" />
              <div className="admin-action">
                <button>Cancel</button>
                <button onClick={() => {}}>Save</button>
              </div>
            </div>
          </MyModal>
        </>
      ) : (
        <>
          <div className="admin-container">
            <h1>Quản lý tin tức</h1>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th style={{ width: 500 }}>Title</th>
                  <th style={{ width: 500 }}>Content</th>
                  <th style={{ width: 100 }}>Image</th>
                  <th style={{ width: 300 }}>
                    <button
                      className="btn-add"
                      onClick={() => setIsOpenAddNew(true)}
                    >
                      Thêm bài viết mới
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM</td>
                  <td>sdfsdfsdfsdfse</td>
                  <td>
                    <img
                      src="https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEditNew(true)}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM</td>
                  <td>sdfsdfsdfsdfse</td>
                  <td>
                    <img
                      src="https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEditNew(true)}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM</td>
                  <td>sdfsdfsdfsdfse</td>
                  <td>
                    <img
                      src="https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEditNew(true)}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM</td>
                  <td>sdfsdfsdfsdfse</td>
                  <td>
                    <img
                      src="https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEditNew(true)}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>CÓ CÔNG TÍCH LUỸ BEAN - CÓ NGÀY NHẬN DEAL ĐẬM</td>
                  <td>sdfsdfsdfsdfse</td>
                  <td>
                    <img
                      src="https://feed.thecoffeehouse.com//content/images/2022/03/NEWS--1-.jpg"
                      alt=""
                      className="admin-image"
                    />
                  </td>
                  <td>
                    <div className="admin-action">
                      <button>Delete</button>
                      <button onClick={() => setIsOpenEditNew(true)}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
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
                placeholder="Title"
                value={news.title}
                onChange={onChangeNews}
                className="admin-input"
                name="title"
              />
              <input
                type="text"
                placeholder="Content"
                value={news.content}
                onChange={onChangeNews}
                className="admin-input"
                name="content"
              />
              <input
                type="text"
                placeholder="Image"
                value={news.image}
                onChange={onChangeNews}
                className="admin-input"
                name="news"
              />
              <img src={news.image} alt="" className="admin-preview" />
              <div className="admin-action">
                <button>Cancel</button>
                <button onClick={() => {}}>Save</button>
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
                placeholder="Title"
                value={news.title}
                onChange={onChangeNews}
                className="admin-input"
                name="title"
              />
              <input
                type="text"
                placeholder="Content"
                value={news.content}
                onChange={onChangeNews}
                className="admin-input"
                name="content"
              />
              <input
                type="text"
                placeholder="Image"
                value={news.image}
                onChange={onChangeNews}
                className="admin-input"
                name="news"
              />
              <img src={news.image} alt="" className="admin-preview" />
              <div className="admin-action">
                <button>Cancel</button>
                <button onClick={() => {}}>Save</button>
              </div>
            </div>
          </MyModal>
        </>
      )}
    </div>
  );
};

export default AdminPage;
