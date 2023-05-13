import ProgressContainer from "./progress/ProgressContainer";
import FormContainer from "./form/FormContainer";
import styles from "./Register.module.scss";

const Register = ({ onStep }) => {
  return (
    <section
      className={`${styles.registerContainer} col col-lg-6 col-sm-12`} data-phase={onStep} data-total-price="0"
    >
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <ProgressContainer onStep={onStep} />
      <FormContainer onStep={onStep} />
    </section>
  );
};

export default Register;
