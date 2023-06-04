import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const DiorHero = () => {
  return (
    <section className={styles.DiorSection}>
      <div className={styles.DiorContainer}>
        <div className={styles.DiorHeader}>
          <div className={styles.DiorHeadOne}>
            <p>Sponsored</p>
            <h1>DIOR</h1>
            <span>There is no beauty without happiness</span>
          </div>
          <div className={styles.DiorHeadTwo}>
            <h1>DIOR</h1>
          </div>
        </div>

        <div className={styles.DiorMain}>
          <div className={styles.DiorMainOne}>
            <div className={styles.DiorShopContainer}>
              <div className={styles.unleashShop}>
                <span>
                  <BsArrowUpRight />
                </span>
              </div>
              <p>SHOP</p>
            </div>

            <div className={styles.DiorMainText}>
              <p>
                Discover the latest fashion pieces hand-picked by our experts to
                help you stay ahead of the curve
              </p>
            </div>
          </div>

          <div className="">
            <Image src="/dior.png" alt="" height={467} width={758} />
          </div>
        </div>
      </div>

      {/* BORDER OF 100% WIDTH RIGHT AT THE ENDING */}
    </section>
  );
};

export default DiorHero;
