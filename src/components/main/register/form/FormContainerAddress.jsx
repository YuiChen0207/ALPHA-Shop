import FormItem from "./FormItem";
import cityList from "../form/data/cityList.js";
import styles from "./FormContainerAddress.module.scss";

const FormContainerAddress = () => {
  return (
    <form className="col col-12" data-phase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className="form-body col col-12">
        <div className={`${styles.row} col col-12`}>
          <div className={`${styles.selectGroup} lg-2 sm-s1`}>
            <div className={styles.selectLabel}>稱謂</div>
            <div className={styles.selectContainer}>
              <select>
                <option value="mr" defaultValue>
                  先生
                </option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <FormItem
            selectLabel="姓名"
            type="input"
            placeholder="請輸入姓名"
            classList="lg-4 sm-s1"
          />
        </div>
        <div className={`${styles.row} col col-12`}>
          <FormItem
            selectLabel="電話"
            type="tel"
            placeholder="請輸入行動電話"
            classList="lg-3 sm-full"
          />
          <FormItem
            selectLabel="Email"
            type="Email"
            placeholder="請輸入電子郵件"
            classList="lg-3 sm-full"
          />
        </div>
        <div className={`${styles.row} col col-12`}>
          <div className={`${styles.selectGroup} lg-2 sm-full`}>
            <div className={styles.selectLabel}>縣市</div>
            <div className={styles.selectContainer}>
              <select required>
                <option value="" defaultValue>
                  請選擇縣市
                </option>
                {cityList.map(({ id, city }) => (
                  <option key={id} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <FormItem
            selectLabel="地址"
            type="text"
            placeholder="請輸入地址"
            classList="lg-4 sm-full"
          />
        </div>
      </section>
    </form>
  );
};

export default FormContainerAddress;
