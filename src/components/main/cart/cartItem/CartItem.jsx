import { ReactComponent as MinusIcon } from "assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import styles from "./CartItem.module.scss"

const CartItem = ({ name, img, price, quantity }) => {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      data-count={quantity}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} alt={`Product: ${name}`} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <MinusIcon />
            <span className={styles.productCount}>{quantity}</span>
            <PlusIcon />
          </div>
        </div>
        <div className={styles.price}>${price}</div>
      </div>
    </div>
  );
};

export default CartItem;
