import "./Modal.css";
import * as fruitApi from "../../api/fruit-api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Modal({ openModal, onClose }) {
  const [fruitList, setFruitList] = useState({
    name: "",
    image: ""
  });
  const navigate = useNavigate();
  const handleChangeInput = e => {
    setFruitList({ ...fruitList, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", fruitList.name);
    formData.append("image", fruitList.image);
    await fruitApi.createFruit(formData);
    setFruitList({
      name: "",
      image: ""
    });
    navigate(0);
    onClose();
  };
  return (
    <div>
      {openModal ? (
        <div className="ModalContainer" onMouseDown={e => e.stopPropagation}>
          <div className="ModalCreate">
            <h1>Create</h1>
          </div>
          <div className="ModalInput">
            <form onSubmit={handleSubmitForm}>
              <label>Name: </label>
              <input type="text" name="name" value={fruitList.name} onChange={handleChangeInput} />
              <br />
              <label>Picture: </label>
              <input
                type="file"
                name="image"
                onChange={e => {
                  if (e.target.files[0]) {
                    setFruitList({ ...fruitList, image: e.target.files[0] });
                  }
                }}
              />
              <br />
              <div className="ModalButton">
                <button>Save</button>
                <button
                  style={{ background: "gray", color: "#333", marginLeft: "10px" }}
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
