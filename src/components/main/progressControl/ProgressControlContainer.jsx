import { ReactComponent as RightArrow } from "assets/right-arrow.svg";
//import { ReactComponent as LeftArrow } from "assets/left-arrow.svg";
import styles from "./ProgressControl.module.scss";

const ProgressControlContainer = () => {
  return (
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      <section
        className={`${styles.buttonGroup} col col-12`}
        data-phase="address"
      >
        <button className={styles.next}>
          下一步
          <RightArrow className={styles.svg}/>
        </button>
      </section>
      {/* <section
          className={`${styles.buttonGroup} col col-12`}
          data-phase="shipping"
          style={{ display: "none" }}
        >
          <button className="prev">
            <LeftArrow />
            上一步
          </button>
          <button className="next">
            下一步
            <RightArrow />
          </button>
        </section>*/}
      {/* <section
          className={`${styles.buttonGroup} col col-12`}
          data-phase="credit-card"
          style={{ display: "none" }}
        >
          <button className="prev">
            <LeftArrow />
            上一步
          </button>
          <button className="next">確認下單</button>
        </section>*/}
    </section>
  );
};

export default ProgressControlContainer;
