import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState,useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const data = [
  {
    id: 1,
    img: "/Lookbook/third.png",
  },
  {
    id: 2,
    img: "/Lookbook/fourth.png",
  },
  {
    id: 3,
    img: "/Lookbook/fifth.png",
  },
];

const LookBook = () => {
  const [shopId, setShopId] = useState(null);
  const timerRef = useRef(null);

  const onHover = (id) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShopId(id);
    }, 200); 
  };

  const onMouseOut = () => {
    clearTimeout(timerRef.current);
    setShopId(null);
  };

  return (
    <>
      <section className={styles.LookbookSection}>
        <div className={styles.LookbookContainer}>
          <div className={styles.LookbookNavbar}>
            <div className={styles.LookbookLine}></div>
            <h1 className={styles.LookbookNavbarHeader}>LookBook</h1>
            <div className={styles.LookbookLine}></div>
          </div>

          <div className={styles.LookbookMainOne}>
            <div className={styles.Lookbookone}>
              <div className={styles.LookFirstimgContainer}>
                <Image
                  className={styles.LookFirstimg}
                  src="/Lookbook/first.png"
                  width={398}
                  height={559}
                />
                <div className={styles.LookFirstTextContainer}>
                  <p>
                    Get ready to be inspired and fall in love with fashion all
                    over again! Our lookbook is a visual feast of style and
                    creativity, offering endless outfit ideas and fashion
                    inspiration. From casual to formal, office to weekend, our
                    lookbook has it all. So why wait? Start browsing now and
                    discover the perfect look for you!
                  </p>

                  <button>View LookBook</button>
                </div>
              </div>

              <div className={styles.LookSecondTextContainer}>
                <p>
                  Step into the world of style inspiration with our Lookbook!
                  Browse through pages of chic and trendy outfits, discover new
                  ways to mix and match, and find the perfect look for any
                  occasion. Get ready to fall in love with fashion all over
                  again!
                </p>
                <Image
                  src="/Lookbook/second.png"
                  alt=""
                  width={269}
                  height={404}
                />
              </div>
            </div>
          </div>

          <div className={styles.Lookbooktwo}>
            <div className={styles.LookbooktwoHeader}>
              <h1>YOU MAY</h1>
              <h1> ALSO LIKE</h1>
            </div>

            <div className={styles.YoumayProductContainer}>
              {data.map((product) => (
                <div className={styles.YoumayProduct} key={product.id} onMouseOver={() => onHover(product.id)} onMouseOut={onMouseOut}>
                  <Image  src={product.img} width={440} height={390} />

                  
                    {shopId === product.id  &&    <div className={styles.LookbookshopContainer}>
                      <div className={styles.LookbookShop}>
                        <span>
                          <BsArrowUpRight
                            style={{ backgroundColor: "transparent" }}
                          />
                        </span>
                      </div>
                      <p>SHOP</p>
                    </div>}
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LookBook;
