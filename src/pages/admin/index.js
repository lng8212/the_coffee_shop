import { useState } from "react";
import "./index.scss";
import MyModal from "../../components/modal";

const AdminPage = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  return (
    <div className="admin">
      <div className="admin-container">
        <h1>Quản lý đồ uống</h1>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>
                <button className="btn-add" onClick={() => setIsOpenAdd(true)}>
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
                  <button>Edit</button>
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
                  <button>Edit</button>
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
                  <button>Edit</button>
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
                  <button>Edit</button>
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
        This is add
      </MyModal>

      <MyModal
        isOpen={isOpenEdit}
        title="Sửa thông tin nước uống"
        toggleModal={() => setIsOpenEdit(!isOpenEdit)}
      >
        This is edit
      </MyModal>
    </div>
  );
};

export default AdminPage;
