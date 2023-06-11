import styles from "@/styles/Home.module.css";

const Data = [
  {
    id: 1,
    name: "Trendy Grey Leather Jacket",
    price: "328",
    img: "/featured/one.png",
    clas: "img",
    add: "Add to Cart",
    style: "sm",
  },
  {
    id: 2,
    name: "Louis Vuitton Leather Bag",
    price: "290",
    img: "/featured/two.png",
    clas: "img",
    add: "Add to Cart",
    style: "bg",
  },
  {
    id: 3,
    name: "Stylish African attire",
    price: "454",
    img: "/featured/three.png",
    clas: "img",
    add: "Add to Cart",
    style: "sm",
  },
];

const Data2 = [
  {
    id: 4,
    name: "Trendy Brown Leather Jacket",
    price: "328",
    img: "/featured/four.png",
    clas: "img",
    add: "Add to Cart",
    style: "sm",
data:"two"
  },
  {
    id: 5,
    clas: "img",
    texts: "Effortlessly chic, just for you.",
    style: "bg",
    data:"two"
  },
  {
    id: 6,
    name: "Trendy Black coat",
    price: "454",
    img: "/featured/five.png",
    clas: "img",
    add: "Add to Cart",
    style: "sm",
    data:"two"
  },
];

const Featured = () => {
  return (
    <section className={styles.FeaturedSection}>
      <div className={styles.FeaturedContainer}>
        <div className={styles.FeaturedHeader}>
          <p>Featured Products </p>
        </div>

        <div className={styles.FeaturedProductContainer}>
          <div className={styles.FeatureProducts}>
            {/* MAP THROUGH THIS COMPONENT CREATE A DATA WHILE FOR 3FR1 COLUMN */}

            {Data.map((product) => (
              <div className={`featureProductContainer ${product.style}`}>
                <img src={product?.img} />
                <p>{product?.name}</p>
                <div className="featureProductPriceContainer">
                  <p>${product?.price}</p>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}

            {Data2.map((product) => (
              <div className={`featureProductContainer ${product.style} ${product.data}`}>
                {product.img && (
                  <img
                    src={product?.img}
                    className={`featureProductImage ${product.style}`}
                  />
                )}
                {product.name && <p className="featureProductName">{product?.name}</p>}
                {product.price && (
                  <div className="featureProductPriceContainer">
                    <p>${product?.price}</p>
                    <button>Add to cart</button>
                  </div>
                )}

                {product.texts && (
                  <p className="featureProductText">{product.texts}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mobileViewAll">
          <button>view all</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
