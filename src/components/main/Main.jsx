import Register from "./register/Register";
import CartContainer from "./cart/cartContainer/CartContainer";
import ProgressControlContainer from "./progressControl/ProgressControlContainer";
import styles from "components/main/main.module.scss";

const Main = ({ step, setStep }) => {
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
        <Register onStep={step} />
        <CartContainer />
        <ProgressControlContainer
          onStep={step}
          onChangeNextStep={handleNextStep}
          onChangePrevStep={handlePrevStep}
        />
      </div>
    </main>
  );
};

export default Main;
