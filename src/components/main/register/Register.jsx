import ProgressContainer from "./progress/ProgressContainer";
import FormContainer from "./form/FormContainer";
import styles from "./Register.module.scss";

const Register = ({ step, onShippingPrice, onHandleClick }) => {
  return (
    <section
      className={`${styles.registerContainer} col col-lg-6 col-sm-12`}
      data-phase={step}
      data-total-price="0"
    >
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <ProgressContainer step={step} />
      <FormContainer
        step={step}
        onShippingPrice={onShippingPrice}
        onHandleClick={onHandleClick}
      />
    </section>
  );
};

export default Register;
