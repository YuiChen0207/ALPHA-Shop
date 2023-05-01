import ProgressContainer from "./progress/ProgressContainer";
import FormContainer from "./form/FormContainer";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <section className={`${styles.registerContainer} col col-lg-6 col-sm-12`}>
      <h2 className={`${styles.registerTitle} col col-12`}>結帳</h2>
      <ProgressContainer />
      <FormContainer />
    </section>
  );
};

export default Register;
