import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";
import styles from "./ProgressControl.module.scss";
import { useContext } from "react";
import { PaymentContext } from "../cart/CartContext";

const ProgressControlContainer = ({
  step,
  onHandleNextStep,
  onHandlePrevStep,
}) => {
  const { paymentData, setPaymentData, setOrderConfirmed } =
    useContext(PaymentContext);
  const { name, cardNumber, expiration, cvv } = paymentData;

  const prevButton = step > 1 && (
    <button className={styles.prev} onClick={onHandlePrevStep}>
      <LeftArrow className={styles.svg} />
      上一步
    </button>
  );

  const nextButton =
    step < 3 ? (
      <button className={styles.next} onClick={onHandleNextStep}>
        下一步
        <RightArrow className={styles.svg} />
      </button>
    ) : (
      <button
        className={styles.next}
        onClick={() => {
          // 將購物車總金額和持卡人資訊存入 PaymentContext
          setPaymentData({
            ...paymentData,
            name: name,
            cardNumber: cardNumber,
            expiration: expiration,
            cvv: cvv,
          });

          // 設置 orderConfirmed 為 true
          setOrderConfirmed(true);
        }}
      >
        確認下單
      </button>
    );

  return (
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      <section className={`${styles.buttonGroup} col col-12`}>
        {prevButton}
        {nextButton}
      </section>
    </section>
  );
};

export default ProgressControlContainer;
