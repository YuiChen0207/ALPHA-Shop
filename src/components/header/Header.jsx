import { ReactComponent as ToggleIcon } from "assets/icons/toggle.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as MoonIcon } from "assets/icons/moon.svg";
import { ReactComponent as SunIcon } from "assets/icons/sun.svg";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import styles from "components/header/header.module.scss";

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.headerContainer} mx-auto`}>
        <input
          id="navbar-toggle"
          className={styles.navbarToggle}
          type="checkbox"
        />
        <label htmlFor="navbar-toggle" className={styles.burgerContainer}>
          <ToggleIcon />
        </label>
        <nav className={styles.navbarMenu}>
          <ul className={`${styles.navList} ${styles.siteMenuList} mr-auto`}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                男款
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                女款
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                最新消息
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                客製商品
              </a>
            </li>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className={`${styles.navList} ${styles.siteActionList}`}>
            <li className={styles.navItem}>
              <SearchIcon />
            </li>
            <li className={styles.navItem}>
              <CartIcon />
            </li>
            <li id="theme-toggle" className={styles.navItem}>
              <MoonIcon />
              <SunIcon style={{ display: "none" }} />
            </li>
          </ul>
        </nav>
        <a className={styles.headerLogoContainer} href="#">
          <LogoIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
