import { ReactComponent as PgComplete } from "assets/icons/pg-complete.svg";
import { ReactComponent as StepUndone } from "assets/icons/stepUndone.svg";
import styles from "components/main/register/progress/progress.module.scss";

const ProgressIcon = ({ number, step }) => {
  const isDone = number < step;
  const icon = isDone ? "✓" : <StepUndone className={styles.icon} />;
  return (
    <span className={styles.progressIcon}>
      <span className={styles.text}>{number > step - 1 ? number : icon}</span>
      {number < step ? (
        <PgComplete className={styles.icon} />
      ) : (
        <StepUndone className={styles.icon} />
      )}
    </span>
  );
};

const ProgressLabel = ({ progressLabel }) => {
  return <span className={styles.progressLabel}>{progressLabel}</span>;
};

const ProgressBar = ({ dataOrder }) => {
  return <span className={styles.progressBar} data-order={dataOrder}></span>;
};

const ProgressGroup = ({ dataPhase, children }) => {
  return (
    <span className={styles.progressGroup} data-phase={dataPhase}>
      {children}
    </span>
  );
};

const ProgressContainer = ({ step }) => {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <ProgressGroup dataPhase="address">
        <ProgressIcon number="1" step={step} />
        <ProgressLabel progressLabel="寄送地址" />
      </ProgressGroup>
      <ProgressBar order={1} />
      <ProgressGroup dataPhase="shipping">
        <ProgressIcon number="2" step={step} />
        <ProgressLabel progressLabel="運送方式" />
      </ProgressGroup>
      <ProgressBar order={2} />
      <ProgressGroup dataPhase="credit-card">
        <ProgressIcon number="3" step={step} />
        <ProgressLabel progressLabel="付款資訊" />
      </ProgressGroup>
    </section>
  );
};

export default ProgressContainer;
