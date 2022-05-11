import Modal from "react-modal";
import CloseIcon from "../../assets/close.svg";
import "./index.scss";

Modal.setAppElement("#root");

const MyModal = ({ isOpen, toggleModal, title, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal} closeTimeoutMS={500}>
      <div className="mymodal">
        <div className="mymodal-title">
          <div>{title}</div>
          <span onClick={toggleModal}>
            <img src={CloseIcon} alt="" />
          </span>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default MyModal;
