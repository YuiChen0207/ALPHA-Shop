import { ReactComponent as PgComplete } from "assets/icons/pg-complete.svg";
import styles from "components/main/register/progress/progress.module.scss";

const ProgressGroupAndBar = ({ dataPhase, progressLabel, text }) => {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      <span className={styles.progressIcon}>
        <span className={styles.text}>{text}</span>
        <PgComplete />
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
      />
      <span className={styles.progressBar} data-order="1"></span>
      <ProgressGroupAndBar
        dataPhase="shipping"
        progressLabel="運送方式"
        text="2"
      />
      <span className={styles.progressBar} data-order="2"></span>
      <ProgressGroupAndBar
        dataPhase="credit-card"
        progressLabel="付款資訊"
        text="3"
      />
    </section>
  );
};

export default ProgressContainer;
