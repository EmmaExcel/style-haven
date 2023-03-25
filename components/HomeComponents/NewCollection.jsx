import styles from '@/styles/Home.module.css'

const NewCollection = () => {
  return (
    <section className={styles.newCollectionSection}>
      <div className={styles.newCollectionContainer}>
        <div className={styles.newCollectionHeader}>
          <span>NEW</span>
          <span>2023</span>
          <span>COLLECTION</span>
        </div>
        <div className={styles.newCollectionMain}>
          <div className={styles.newCollectionSidebar}>
            <ul>
              <li>All</li>
              <li><a href="">Men</a></li>
              <li><a href="">Woman</a></li>
              <li><a href="">Clothes</a></li>
              <li><a href="">Kicks</a></li>
            </ul>
          </div>

          <div className={styles.newCollectionCenter}>
            <p>Step Up Your Style Game with the Latest Fashion Trends</p>
          </div>

          <div className={styles.newCollectionSideText}>
            Discover a Wide Selection of Chic and Trendy Outfits, Accessories,
            and Shoes. Elevate Your Wardrobe Today!
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default NewCollection;
