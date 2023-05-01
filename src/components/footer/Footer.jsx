import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/whatsapp.svg";
import styles from "../footer/footer.module.scss";

const FooterSection = ({ sectionTitle, children }) => {
  return (
    <section className={styles.footerSection}>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}
const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <LogoIcon />
        </div>
        <FooterSection sectionTitle="客戶服務">
          <a className={styles.pageLink} href="#">
            運送說明
          </a>
          <a className={styles.pageLink} href="#">
            退換貨相關
          </a>
          <a className={styles.pageLink} href="#">
            付款資訊
          </a>
          <a className={styles.pageLink} href="#">
            FAQ
          </a>
        </FooterSection>
        <FooterSection sectionTitle="關於我們">
          <a className={styles.pageLink} href="#">
            品牌故事
          </a>
          <a className={styles.pageLink} href="#">
            媒體聯繫
          </a>
          <a className={styles.pageLink} href="#">
            Press kit
          </a>
        </FooterSection>
        <FooterSection sectionTitle="資訊">
          <a className={styles.pageLink} href="#">
            隱私權政策
          </a>
          <a className={styles.pageLink} href="#">
            Cookie
          </a>
          <a className={styles.pageLink} href="#">
            GDPR
          </a>
        </FooterSection>
        <FooterSection sectionTitle="追蹤 ALPHA Shop">
          <div className={styles.telInfo}>+886 02123-45678</div>
          <div className={styles.socialIconGroup}>
            <FacebookIcon />
            <InstagramIcon />
            <WhatsappIcon />
          </div>
        </FooterSection>
      </div>
    </footer>
  );
}


export default Footer