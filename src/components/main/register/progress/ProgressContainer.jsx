import { ReactComponent as PgComplete } from "assets/icons/pg-complete.svg";
import { ReactComponent as StepUndone } from "assets/icons/stepUndone.svg";
import styles from "components/main/register/progress/progress.module.scss";

const ProgressGroupAndBar = ({ dataPhase, progressLabel, text, onStep }) => {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <span
          className={`${styles.text} ${
            text <= onStep ? styles.done : styles.undone
          }`}
        >
          {text > (onStep - 1) ? text : "✓"}
        </span>
        {text < onStep ? <PgComplete /> : <StepUndone />}
      </span>
      <span className={styles.progressLabel}>{progressLabel}</span>
    </span>
  );
};

const ProgressContainer = ({ onStep }) => {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <ProgressGroupAndBar
        dataPhase="address"
        progressLabel="寄送地址"
        text="1"
        onStep={onStep}
      />
      <span className={styles.progressBar} data-order="1"></span>
      <ProgressGroupAndBar
        dataPhase="shipping"
        progressLabel="運送方式"
        text="2"
        onStep={onStep}
      />
      <span className={styles.progressBar} data-order="2"></span>
      <ProgressGroupAndBar
        dataPhase="credit-card"
        progressLabel="付款資訊"
        text="3"
        onStep={onStep}
      />
    </section>
  );
};

export default ProgressContainer;
