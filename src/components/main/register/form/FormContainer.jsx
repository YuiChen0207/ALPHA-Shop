import FormContainerAddress from "./FormContainerAddress";
import FormContainerShipping from "./FormContainerShipping";
import FormContainerCreditCard from "./FormContainerCreditCard";
import styles from "./form.module.scss";

const FormContainer = ({ step, onHandleShippingPrice }) => {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      {step === 1 && <FormContainerAddress />}
      {step === 2 && (
        <FormContainerShipping
          onHandleShippingPrice={onHandleShippingPrice}
        />
      )}
      {step === 3 && <FormContainerCreditCard />}
    </section>
  );
};

export default FormContainer;
