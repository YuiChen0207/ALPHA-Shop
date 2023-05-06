import styles from "./formItem.module.scss";
import "./FormContainerAddress.module.scss";

const FormItem = ({ selectLabel, type, placeholder, classList }) => {
  return (
    <div className={`${styles.selectGroup} ${classList}`}>
      <div className={styles.selectLabel}>{selectLabel}</div>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormItem;
