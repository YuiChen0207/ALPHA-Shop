import Register from "./register/Register";
import CartContainer from "./cart/CartContainer";
import ProgressControlContainer from "./progressControl/ProgressControlContainer";
import styles from "../../components/main/main.module.scss";

const Main = () => {
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        <Register />
        <CartContainer />
        <ProgressControlContainer />
      </div>
    </main>
  );
};

export default Main;
