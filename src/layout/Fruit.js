import "./Fruit.css";
import appleImg from "../asset/Apple.jpeg";
import orangeImg from "../asset/orange.jpeg";
export default function Fruit() {
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
        <div className="productContent">
          <div className="product1">
            <div className="productContentName">
              <p>apple</p>
            </div>
            <div className="productContentImg">
              <img src={appleImg} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="productContent">
          <div className="product1">
            <div className="productContentName">
              <p>orange</p>
            </div>
            <div className="productContentImg">
              <img src={orangeImg} alt="" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
