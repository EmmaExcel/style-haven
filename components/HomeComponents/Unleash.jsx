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
              <Image src="/unleash/one.png" alt="" width={349} height={524} />
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
                <Image src="/unleash/two.png" alt="" width={274} height={383} />
                <p>
                  Shop the latest styles, trends, and outfits for every occasion
                </p>
              </div>

              <div className={styles.unleashShopContainer}>
                <div className={styles.unleashShop}>
                  <span>
                    <BsArrowUpRight />
                  </span>
                </div>
                <p>SHOP</p>
              </div>
            </div>

            <div className="">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unleash;
