import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";
import styles from "./ProgressControl.module.scss";

const ProgressControlContainer = ({
  onStep,
  onChangeNextStep,
  onChangePrevStep,
}) => {
  return (
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      {onStep === 1 && (
        <section
          className={`${styles.buttonGroup} col col-12`}
          data-phase="address"
        >
          <button className={styles.next} onClick={onChangeNextStep}>
            下一步
            <RightArrow className={styles.svg} />
          </button>
        </section>
      )}
      {onStep === 2 && (
        <section
          className={`${styles.buttonGroup} col col-12`}
          data-phase="shipping"
        >
          <button className={styles.prev} onClick={onChangePrevStep}>
            <LeftArrow className={styles.svg} />
            上一步
          </button>
          <button className={styles.next} onClick={onChangeNextStep}>
            下一步
            <RightArrow className={styles.svg} />
          </button>
        </section>
      )}
      {onStep === 3 && (
        <section
          className={`${styles.buttonGroup} col col-12`}
          data-phase="credit-card"
        >
          <button className={styles.prev} onClick={onChangePrevStep}>
            <LeftArrow className={styles.svg} />
            上一步
          </button>
          <button className={styles.next} onClick={onChangeNextStep}>
            確認下單
          </button>
        </section>
      )}
    </section>
  );
};

export default ProgressControlContainer;
