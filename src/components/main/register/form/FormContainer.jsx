import FormContainerAddress from "./FormContainerAddress";
import FormContainerShipping from "./FormContainerShipping";
import FormContainerCreditCard from "./FormContainerCreditCard";
import styles from "./form.module.scss";

const FormContainer = ({ step, onShippingPrice, onHandleClick }) => {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      {step === 1 && <FormContainerAddress />}
      {step === 2 && (
        <FormContainerShipping
          onShippingPrice={onShippingPrice}
          onHandleClick={onHandleClick}
        />
      )}
      {step === 3 && <FormContainerCreditCard />}
    </section>
  );
};

export default FormContainer;
