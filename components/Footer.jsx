import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.footerSection}>
        <div className={styles.footerContainer}>
          <div className={styles.footerHeader}>
            <h1 className={styles.footerH1}>Subscribe</h1>
            <form action="" className={styles.footerFormContainer}>
              <div className={styles.footerInputbox}>
                <input type="text" className={styles.footerInput}/>
                <button className={styles.footerEnter}>Enter</button>
              </div>
            </form>
          </div>

          <div className={styles.footerNavContainer}>
            <div className={styles.footerNav}>
              <li>
                <p>Address</p>
              </li>
              <li>
                <p>Phone Number</p>
              </li>
              <li>
                <p>Stylehavenofficial@gmail.com</p>
              </li>
            </div>
            <div className={styles.footerNav}>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
            </div>
            <div className={styles.footerNav}>
              <li>
                <p>FAQs</p>
              </li>
              <li>
                <p>Contact form</p>
              </li>
              <li>
                <p>Customer help</p>
              </li>
            </div>
            <div className={styles.footerNav}>
              <li>
                <p>Privacy policy</p>
              </li>
              <li>
                <p>Term of use</p>
              </li>
              <li>
                <p>Legal information</p>
              </li>
            </div>
          </div>

          <div className={styles.footerCopyright}>
            <p>STYLE HAVEN</p>

            <p>Copyright © stylehaven 2023</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
