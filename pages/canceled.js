import Navbar from "@/components/Navbar";
import styles from "@/styles/cart.module.css";
import Image from "next/image";
import Link from "next/link";

const canceled = () => {
  return (
    <>
      <Navbar />
      <section className={styles.FailedSection}>
        <div className={styles.FailedContainer}>
          <div className={styles.FailedInfo}>
            <p>Unfortunately your order failed</p>

            <p>Please resolve the issue and get back to shopping with us</p>

            <Link href="/shopAll">Continue Shopping</Link>
          </div>
        </div>
      </section>
    </>
  )
};

export default canceled;
