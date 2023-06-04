import styles from "@/styles/Home.module.css";

const Data = [
  {
    id: 1,
    name: "Trendy Grey Leather Jacket",
    price: "$328",
    img: "/featured/one.png",
    clas: "img",
    add: "Add to Cart",
  },
  {
    id: 2,
    name: "Louis Vuitton Leather Bag",
    price: "$290",
    img: "/featured/two.png",
    clas: "bigImg",
    add: "Add to Cart",
  },
  {
    id: 3,
    name: "Stylish African attire",
    price: "$454",
    img: "/featured/three.png",
    clas: "img",
    add: "Add to Cart",
  },
  
];


const Data2 =[
  {
    id: 4,
    name: "Trendy Brown Leather Jacket",
    price: "$328",
    img: "/featured/four.png",
    clas: "img",
    add: "Add to Cart",
  },
  {
    id: 5,
    clas: "bigImg",
    texts: "Effortlessly chic, just for you.",
  },
  {
    id: 6,
    name: "Trendy Black coat",
    price: "$454",
    img: "/featured/five.png",
    clas: "img",
    add: "Add to Cart",
  },
]

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
             
              
                <div className>
                  <div className="">
                    <img src={product.img} />
                  </div>
                  <div className="">
                    {<p className={styles.ProductText }>{product.name || product.texts}</p>}
                  </div>
                  <div className={styles.productPriceCon}>
                    <p>{product.price}</p>

                    <p className={styles.productAdd}>{product.add}</p>
                  </div>
                </div>
              )
            )}
            {Data2.map((product) => (
             
              
                <div className="bigImg img" >
                  <div className="">
                    <img src={product.img} />
                  </div>
                  <div className="">
                    {<p className={styles.ProductText }>{product.name || product.texts}</p>}
                  </div>
                  <div className={styles.productPriceCon}>
                    <p>{product.price}</p>

                    <p className={styles.productAdd}>{product.add}</p>
                  </div>
                </div>
              )
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}



export default Featured;
