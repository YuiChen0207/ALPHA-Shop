import Register from "./register/Register";
import CartContainer from "./cart/cartContainer/CartContainer";
import ProgressControlContainer from "./progressControl/ProgressControlContainer";
import styles from "components/main/main.module.scss";
import { useState } from "react";

const Main = ({ step, setStep }) => {
  const [shippingPrice, setShippingPrice] = useState(0);

  const handleClick = (e) => {
    setShippingPrice(parseInt(e.currentTarget.dataset.price));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Register
          step={step}
          onShippingPrice={shippingPrice}
          onHandleClick={handleClick}
        />
        <CartContainer
          onShippingPrice={shippingPrice}
          onHandleClick={handleClick}
        />
        <ProgressControlContainer
          step={step}
          onChangeNextStep={handleNextStep}
          onChangePrevStep={handlePrevStep}
        />
      </div>
    </main>
  );
};

export default Main;
