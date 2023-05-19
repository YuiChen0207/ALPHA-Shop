import styles from "./FormContainerCreditCard.module.scss";

const CreditCardInput = ({ label, placeholder, type, className }) => {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

const FormContainerCreditCard = () => {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={`${styles.formBody} col col-12`}>
        <div className={`${styles.col} col col-12`}>
          <CreditCardInput
            label="持卡人姓名"
            placeholder="John Doe"
            type="text"
            className="lg-4 sm-full"
          />
        </div>
        <div className={`${styles.col} col col-12`}>
          <CreditCardInput
            label="卡號"
            placeholder="1111 2222 3333 4444"
            type="text"
            className="lg-4 sm-full"
          />
        </div>
        <div className={`${styles.col} col col-12`}>
          <CreditCardInput
            label="有效期限"
            placeholder="MM/YY"
            type="text"
            className="lg-3 sm-s3"
          />
          <CreditCardInput
            label="CVC / CCV"
            placeholder="123"
            type="text"
            className="lg-3 sm-s3"
          />
        </div>
      </section>
    </form>
  );
};

export default FormContainerCreditCard;
