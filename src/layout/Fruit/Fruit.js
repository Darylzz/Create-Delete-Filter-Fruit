import "./Fruit.css";
import { useEffect, useState } from "react";
import * as fruitApi from "../../api/fruit-api";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

export default function Fruit() {
  const [allFruit, setAllFruit] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllFruit = async () => {
      const res = await fruitApi.getAllFruit();
      setAllFruit(res.data.fruitList);
    };
    fetchAllFruit();
  }, []);

  const filteredFruit = allFruit.filter(fruit =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(filteredFruit);

  return (
    <div>
      <nav>
        <div className="name">
          <h1>ผลไม้</h1>
        </div>
        <div className="searchFilter">
          <button onClick={() => setOpenModal(true)}>เพิ่มผลไม้</button>
          <Modal openModal={openModal} onClose={() => setOpenModal(false)} />
          <br />
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>
      <div className="productBox">
        <div className="productName">
          <h3>ชื่อผลไม้</h3>
          <hr />
        </div>
        {allFruit.length > 0
          ? filteredFruit.map(el => (
              <>
                <div className="productContent" key={el.id}>
                  <div className="product1">
                    <div className="productContentName">
                      <p>{el.name}</p>
                    </div>
                    <div className="productContentImg">
                      <img src={process.env.REACT_APP_URL + el.image} alt="" />
                    </div>
                    <div className="productFruitButton">
                      <button
                        onClick={async () => {
                          await fruitApi.deleteFruit(el.id);
                          navigate(0);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            ))
          : ""}
      </div>
    </div>
  );
}
