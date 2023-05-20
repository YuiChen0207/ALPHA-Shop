import { useContext } from "react";
import styles from "./FormContainerCreditCard.module.scss";
import { PaymentContext } from "context/CartAndPaymentContext";

const CreditCardInput = ({
  label,
  placeholder,
  type,
  className,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <div className={styles.inputLabel}>{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

const FormContainerCreditCard = () => {
  const { paymentData, setPaymentData, setOrderConfirmed } =
    useContext(PaymentContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setOrderConfirmed(false);
  };

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
            value={paymentData.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>
        <div className={`${styles.col} col col-12`}>
          <CreditCardInput
            label="卡號"
            placeholder="1111 2222 3333 4444"
            type="text"
            className="lg-4 sm-full"
            value={paymentData.cardNumber}
            onChange={handleInputChange}
            name="cardNumber"
          />
        </div>
        <div className={`${styles.col} col col-12`}>
          <CreditCardInput
            label="有效期限"
            placeholder="MM/YY"
            type="text"
            className="lg-3 sm-s3"
            value={paymentData.expiration}
            onChange={handleInputChange}
            name="expiration"
          />
          <CreditCardInput
            label="CVC / CCV"
            placeholder="123"
            type="text"
            className="lg-3 sm-s3"
            value={paymentData.cvv}
            onChange={handleInputChange}
            name="cvv"
          />
        </div>
      </section>
    </form>
  );
};

export default FormContainerCreditCard;
