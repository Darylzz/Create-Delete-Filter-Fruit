import "./Fruit.css";
import { useEffect, useState } from "react";
import * as fruitApi from "../api/fruit-api";
export default function Fruit() {
  const [allFruit, setAllFruit] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchAllFruit = async () => {
      const res = await fruitApi.getAllFruit();
      setAllFruit(res.data.fruitList);
    };
    fetchAllFruit();
  }, []);

  return (
    <div>
      <nav>
        <div className="name">
          <h1>ผลไม้</h1>
        </div>
        <div className="searchFilter">
          <button>เพิ่มผลไม้</button>
          <br />
          <input type="text" placeholder="Search here" />
        </div>
      </nav>
      <div className="productBox">
        <div className="productName">
          <h3>ชื่อผลไม้</h3>
          <hr />
        </div>
        {allFruit?.map(el => (
          <>
            <div className="productContent" key={el.id}>
              <div className="product1">
                <div className="productContentName">
                  <p>{el.name}</p>
                </div>
                <div className="productContentImg">
                  <img src={process.env.REACT_APP_URL + el.image} alt="" />
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
