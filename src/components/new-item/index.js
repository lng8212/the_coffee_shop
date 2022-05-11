import { useNavigate } from "react-router-dom";
import "./index.scss";

const NewItem = ({ srcNew, title, link }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/blogs/${1}`);
  };

  return (
    <div className="new-item">
      <img src={srcNew} alt={title} />
      <div className="new-item-content">
        <h3>{title}</h3>
        <div className="new-btn">
          <a onClick={goToDetail}>Đọc tiếp</a>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
