import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import { IconContext } from "react-icons";

const Unleash = () => {
  return (
    <section className={styles.unleashSection}>
      <div className={styles.unleashContainer}>
        <div className={styles.unleashTopText}>
          <p>
            Shop now and discover the latest fashion trends, expertly crafted
            for the modern woman. From classic pieces to statement accessories,
            our collection is designed to make you feel confident and stylish.
            Upgrade your wardrobe today.
          </p>
        </div>

        <div className={styles.unleashMain}>
          <div className={styles.unleashMainFirst}>
            <div className={styles.unleashImgOne}>
              <img src="/unleash/one.png" alt=""  />
            </div>
            <div className={styles.unleashTEXT}>
              <span>Unleash</span>
              <span>Your Inner</span>
              <span>Fashionista</span>
            </div>
          </div>

          <div className={styles.unleashMainSecond}>
            <div className={styles.unleashImgTwoContainer}>
              <div className={styles.unleashImgTwo}>
                <img src="/unleash/two.png" alt="" />
                <p>
                  Shop the latest styles, trends, and outfits for every occasion
                </p>
              </div>

              <div className={styles.unleashShopContainer}>
                <div className={styles.unleashShop}>
                  <span>
                    <BsArrowUpRight className={styles.BsArrow}/>
                  </span>
                </div>
                <p>SHOP</p>
              </div>
            </div>

            <div className={styles.unleashImgThree}>
              <img src="/unleash/three.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unleash;
