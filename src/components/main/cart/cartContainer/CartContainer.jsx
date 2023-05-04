import styles from "./cartContainer.module.scss";
import cartData from "../data/cartData.js";
import CartItem from "../cartItem/CartItem";

const CartContainer = () => {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach((data) => {
      totalPrice += data.price * data.quantity;
    });
    return totalPrice;
  };

  const calculateShippingFee = () => {
    const totalPrice = calculateTotalPrice();
    return totalPrice >= 1000 ? "免費" : "$50";
  };

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        {cartData.map((data) => (
          <CartItem key={data.id} {...data} />
        ))}
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>{calculateShippingFee()}</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${calculateTotalPrice()}</div>
      </section>
    </section>
  );
};

export default CartContainer;
