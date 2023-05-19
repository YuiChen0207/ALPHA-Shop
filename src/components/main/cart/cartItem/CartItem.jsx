import { ReactComponent as MinusIcon } from "assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import styles from "./CartItem.module.scss";
import { useState } from "react";

const CartItem = ({ name, img, price, quantity, recalculateTotal }) => {
  const [count, setCount] = useState(quantity);

  const handlePlusClick = () => {
    setCount(count + 1);
    recalculateTotal(price);
  };

  const handleMinusClick = () => {
    if (count >= 1) {
      setCount(count - 1);
      recalculateTotal(-price);
    }
  };

  return (
    <div
      className={`${styles.productContainer} col col-12`}
      data-count={count}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} alt={`Product: ${name}`} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon onClick={handleMinusClick} />
            <span className={styles.productCount}>{count}</span>
            <PlusIcon onClick={handlePlusClick} />
          </div>
        </div>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export default CartItem;
