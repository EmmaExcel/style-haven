import Navbar from "@/components/Navbar";
import styles from "@/styles/cart.module.css";
import Image from "next/image";
import Link from "next/link";

const success = () => {
  return (
    <>
      <Navbar />
      <section className={styles.SuccessSection}>
        <div className={styles.SuccessContainer}>
          <div className={styles.SuccessInfo}>
            <p>Congratulations!!!. Your order is completed</p>

            <p>Get ready to enjoy your new product in no time</p>

            <Link href="/shopAll">Continue Shopping</Link>
          </div>
          <div className={styles.SuccessImageContainer}>
            <Image src="/success.png" width={688} height={770}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default success;
