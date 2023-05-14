import styles from "./cartContainer.module.scss";
import cartData from "../data/cartData.js";
import CartItem from "../cartItem/CartItem";
import { useEffect, useState } from "react";

const CartContainer = ({ onShippingPrice }) => {
  const [itemsPrice, setItemsPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(onShippingPrice);

  useEffect(() => {
    let itemsPrice = 0;
    itemsPrice = cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setItemsPrice(itemsPrice);
  }, []);

  useEffect(() => {
    setShippingPrice(onShippingPrice);
  }, [onShippingPrice]);

  const totalPrice = itemsPrice + shippingPrice;

  function recalculateTotal(price) {
    setItemsPrice(itemsPrice + price);
  }

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section
        className={`${styles.productList} col col-12`}
        data-total-price="0"
      >
        {cartData.map((data) => (
          <CartItem
            key={data.id}
            {...data}
            recalculateTotal={recalculateTotal}
          />
        ))}
      </section>

      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>{onShippingPrice}</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${totalPrice.toLocaleString()}</div>
      </section>
    </section>
  );
};

export default CartContainer;
