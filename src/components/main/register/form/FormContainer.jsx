import FormContainerAddress from "./FormContainerAddress";
import FormContainerShipping from "./FormContainerShipping";
import FormContainerCreditCard from "./FormContainerCreditCard";
import styles from "./form.module.scss";

const FormContainer = ({ onStep, onShippingPrice, onHandleClick }) => {
  return (
    <section className={`${styles.formContainer} col col-12`}>
      {onStep === 1 && <FormContainerAddress />}
      {onStep === 2 && (
        <FormContainerShipping
          onShippingPrice={onShippingPrice}
          onHandleClick={onHandleClick}
        />
      )}
      {onStep === 3 && <FormContainerCreditCard />}
    </section>
  );
};

export default FormContainer;
