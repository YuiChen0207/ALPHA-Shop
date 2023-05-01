import { ReactComponent as MinusIcon } from "../../../assets/minus.svg";
import { ReactComponent as PlusIcon } from "../../..//assets/plus.svg";
import product1Image from "../../../assets/images/product-1.jpg";
import product2Image from "../../../assets/images/product-2.jpg";

const CartContainer = () => {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        <div
          className="product-container col col-12"
          data-count="0"
          data-price="3999"
        >
          <img
            className="img-container"
            src={product1Image}
            alt="cloth-product"
          />
          <div className="product-info">
            <div className="product-name">破壞補丁修身牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <MinusIcon />
                <span className="product-count">0</span>
                <PlusIcon />
              </div>
            </div>
            <div className="price">$3,999</div>
          </div>
        </div>
        <div
          className="product-container col col-12"
          data-count="0"
          data-price="1299"
        >
          <img
            className="img-container"
            src={product2Image}
            alt="cloth-product"
          />
          <div className="product-info">
            <div className="product-name">刷色直筒牛仔褲</div>
            <div className="product-control-container">
              <div className="product-control">
                <MinusIcon />
                <span className="product-count">0</span>
                <PlusIcon />
              </div>
            </div>
            <div className="price">$1,299</div>
          </div>
        </div>
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$0</div>
      </section>
    </section>
  );
};

export default CartContainer;
