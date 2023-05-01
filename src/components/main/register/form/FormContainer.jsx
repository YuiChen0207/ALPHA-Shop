import FormContainerAddress from "./FormContainerAddress";
//import FormContainerShipping from "./FormContainerShipping";
//import FormContainerCreditCard from "./FormContainerCreditCard";
import styles from "./form.module.scss"

const FormContainer = () => {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      <FormContainerAddress />
      {/*<FormContainerShipping />*/}
      {/*<FormContainerCreditCard />*/}
    </section>
  );
};

export default FormContainer;
