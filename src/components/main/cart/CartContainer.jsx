import { ReactComponent as MinusIcon } from "assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import styles from "./cart.module.scss";
import cartData from "./data/cartData.js";

const CartContainer = () => {
  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        {cartData.map((data) => (
          <div
            key={data.id}
            className={`${styles.productContainer} col col-12`}
            data-count={data.quantity}
            data-price={data.price}
          >
            <img
              className={styles.imgContainer}
              src={data.img}
              alt="cloth-product"
            />
            <div className={styles.productInfo}>
              <div className={styles.productName}>{data.name}</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  <MinusIcon />
                  <span className={styles.productCount}>{data.quantity}</span>
                  <PlusIcon />
                </div>
              </div>
              <div className={styles.price}>{data.price}</div>
            </div>
          </div>
        ))}
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>$0</div>
      </section>
    </section>
  );
};

export default CartContainer;
