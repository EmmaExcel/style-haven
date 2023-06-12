import Image from "next/image";
import styles from "@/styles/Home.module.css";

const HeroSection = () => {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.HeroText}>
        <div className={styles.HeroTextContainer}>
          <div className={styles.HeroMobileText}>
            <p>
              Step up your style game with the hottest fashion trends of the
              season from STYLE HAVEN
            </p>
          </div>
          <div className={styles.HeroBigText}>
            <span>Elevate Your Style </span> <span>With Trend-Setting </span>{" "}
            <span>Fashion.</span>
          </div>

          <div className={styles.HeroSmallText}>
            <p>
              Get ready to turn heads with the latest fashion trends from STYLE
              HAVEN
            </p>
          </div>
        </div>

        <div className={styles.HeroSmallBottomText}>
          <p>
            Stay ahead of the curve with our curated collection of the latest
            fashion must-haves. From statement pieces to timeless classics, we
            have everything you need to create a look that's uniquely you. Shop
            now and experience fashion like never before.
          </p>
        </div>
      </div>

      <div className={styles.HeroSectionCenterImage}>
        <img src="/Hero.png" alt="" />
      </div>

      <div className={styles.HeroSectionSideImageContainer}>
        <div className={styles.HeroSectionSideImage}>
          <Image src="/sideHero.png" alt="" width={229} height={343} />
        </div>
        <p>
          Step up your style game with the hottest fashion trends of the season
          from STYLE HAVEN
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
