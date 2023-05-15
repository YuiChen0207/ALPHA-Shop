import styles from "./formContainerShipping.module.scss";

const shippingOptions = [
  {
    id: "shippingStandard",
    name: "標準運送",
    price: 0,
    period: "約 3~7 個工作天",
  },
  {
    id: "shippingDhl",
    name: "DHL 貨運",
    price: 500,
    period: "48 小時內送達",
  },
];

const FormContainerShipping = ({ onHandleShippingPrice }) => {
  return (
    <form
      className={`col col-12 ${styles.formContainer}`}
      data-phase="shipping"
    >
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={`col col-12 ${styles.formBody}`}>
        {shippingOptions.map(({ id, name, price, period }, index) => (
          <label
            key={id}
            className={`col col-12 ${styles.radioGroup}`}
            data-price={price}
          >
            <input
              id={id}
              type="radio"
              name="shipping"
              onClick={onHandleShippingPrice}
              data-price={price}
              defaultChecked={index === 0}
            />
            <div className={styles.radioInfo}>
              <div className={`${styles.col} ${styles.space} col col-12`}>
                <div className={styles.text}>{name}</div>
                <div className={styles.price}>
                  {price === 0 ? "免費" : `$${price}`}
                </div>
              </div>
              <div className={`${styles.period} col col-12`}>{period}</div>
            </div>
            <div className={styles.radioBoxBorder}></div>
          </label>
        ))}
      </section>
    </form>
  );
};

export default FormContainerShipping;
