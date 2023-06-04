import Navbar from "@/components/Navbar";
import styles from "@/styles/product.module.css";
import Image from "next/image";
import { useState } from "react";

const menCategories = [
  {
    id: 1,
    name: "Clothes",
    data: [
      {
        id: 11,
        name: "Clothes 1",
        price: 10,
        description: "Description for Clothes 1",
        size: "small",
        style: "bold",
      },
      {
        id: 12,
        name: "Clothes 2",
        price: 20,
        description: "Description for Clothes 2",
        size: "large",
        style: "italic",
      },
      {
        id: 13,
        name: "Clothes 3",
        price: 20,
        description: "Description for Clothes 2",
        size: "long",
        style: "italic",
        text: "Indulge in the world of fashion and make heads turn with our hero pieces",
        long: "long",
      },
      {
        id: 14,
        name: "Clothes 4",
        price: 20,
        description: "Description for Clothes 2",
        size: "small",
        style: "italic",
      },
      {
        id: 15,
        name: "Clothes 5",
        price: 20,
        description: "Description for Clothes 2",
        size: "long",
        style: "italic",
        text: "Make a bold statement and embrace your unique style with our fashion picks",
        long: "long",
      },
      {
        id: 16,
        name: "Clothes 6",
        price: 20,
        description: "Description for Clothes 2",
        size: "small",
        style: "italic",
      },
      {
        id: 17,
        name: "Clothes 7",
        price: 20,
        description: "Description for Clothes 2",
        size: "small",
        style: "italic",
      },
      {
        id: 18,
        name: "Clothes 8",
        price: 20,
        description: "Description for Clothes 2",
        size: "large",
        style: "italic",
      },
      {
        id: 19,
        text: "Take charge of your style and embrace the latest fashion trends with us.",
        size: "long",
      },
    ],
  },
  {
    id: 2,
    name: "Bracelets",
    data: [
      {
        id: 21,
        name: "Bracelets 1",
        price: 10,
        description: "Description for Bracelets 1",
        size: "small",
        style: "bold",
      },
      {
        id: 22,
        name: "Bracelets 2",
        price: 20,
        description: "Description for Bracelets 2",
        size: "large",
        style: "italic",
      },
      {
        id: 23,
        name: "Bracelets 3",
        price: 20,
        description: "Description for Bracelets 2",
        size: "long",
        style: "italic",
        text: "Indulge in the world of fashion and make heads turn with our hero pieces",
        long: "long",
      },
      {
        id: 24,
        name: "Bracelets 4",
        price: 20,
        description: "Description for Bracelets 2",
        size: "small",
        style: "italic",
      },
      {
        id: 25,
        name: "Bracelets 5",
        price: 20,
        description: "Description for Bracelets 2",
        size: "long",
        style: "italic",
        text: "Make a bold statement and embrace your unique style with our fashion picks",
        long: "long",
      },
      {
        id: 26,
        name: "Bracelets 6",
        price: 20,
        description: "Description for Bracelets 2",
        size: "small",
        style: "italic",
      },
      {
        id: 27,
        name: "Bracelets 7",
        price: 20,
        description: "Description for Bracelets 2",
        size: "small",
        style: "italic",
      },
      {
        id: 28,
        name: "Bracelets 8",
        price: 20,
        description: "Description for Bracelets 2",
        size: "large",
        style: "italic",
      },
      {
        id: 19,
        text: "Take charge of your style and embrace the latest fashion trends with us.",
        size: "long",
      },
    ],
  },
  {
    id: 3,
    name: "Watches",
    data: [
      {
        id: 31,
        name: "Watches 1",
        price: 10,
        description: "Description for Watches 1",
        size: "small",
        style: "bold",
      },
      {
        id: 32,
        name: "Watches 2",
        price: 20,
        description: "Description for Watches 2",
        size: "large",
        style: "italic",
      },
      {
        id: 33,
        name: "Watches 3",
        price: 20,
        description: "Description for Watches 2",
        size: "long",
        style: "italic",
        text: "Indulge in the world of fashion and make heads turn with our hero pieces",
        long: "long",
      },
      {
        id: 34,
        name: "Watches 4",
        price: 20,
        description: "Description for Watches 2",
        size: "small",
        style: "italic",
      },
      {
        id: 35,
        name: "Watches 5",
        price: 20,
        description: "Description for Watches 2",
        size: "long",
        style: "italic",
        text: "Make a bold statement and embrace your unique style with our fashion picks",
        long: "long",
      },
      {
        id: 36,
        name: "Watches 6",
        price: 20,
        description: "Description for Watches 2",
        size: "small",
        style: "italic",
      },
      {
        id: 37,
        name: "Watches 7",
        price: 20,
        description: "Description for Watches 2",
        size: "small",
        style: "italic",
      },
      {
        id: 38,
        name: "Watches 8",
        price: 20,
        description: "Description for Watches 2",
        size: "large",
        style: "italic",
      },
      {
        id: 39,
        text: "Take charge of your style and embrace the latest fashion trends with us.",
        size: "long",
      },
    ],
  },
  {
    id: 4,
    name: "Bags",
    data: [
      {
        id: 41,
        name: "Bags 1",
        price: 10,
        description: "Description for Bags 1",
        size: "small",
        style: "bold",
      },
      {
        id: 42,
        name: "Bags 2",
        price: 20,
        description: "Description for Bags 2",
        size: "large",
        style: "italic",
      },
      {
        id: 43,
        name: "Bags 3",
        price: 20,
        description: "Description for Bags 2",
        size: "long",
        style: "italic",
        text: "Indulge in the world of fashion and make heads turn with our hero pieces",
        long: "long",
      },
      {
        id: 44,
        name: "Bags 4",
        price: 20,
        description: "Description for Bags 2",
        size: "small",
        style: "italic",
      },
      {
        id: 45,
        name: "Bags 5",
        price: 20,
        description: "Description for Bags 2",
        size: "long",
        style: "italic",
        text: "Make a bold statement and embrace your unique style with our fashion picks",
        long: "long",
      },
      {
        id: 46,
        name: "Bags 6",
        price: 20,
        description: "Description for Bags 2",
        size: "small",
        style: "italic",
      },
      {
        id: 47,
        name: "Bags 7",
        price: 20,
        description: "Description for Bags 2",
        size: "small",
        style: "italic",
      },
      {
        id: 48,
        name: "Bags 8",
        price: 20,
        description: "Description for Bags 2",
        size: "large",
        style: "italic",
      },
      {
        id: 49,
        text: "Take charge of your style and embrace the latest fashion trends with us.",
        size: "long",
      },
    ],
  },
  {
    id: 5,
    name: "Sunglasses",
    data: [
      {
        id: 51,
        name: "Sunglasses 1",
        price: 10,
        description: "Description for Sunglasses 1",
        size: "small",
        style: "bold",
      },
      {
        id: 52,
        name: "Sunglasses 2",
        price: 20,
        description: "Description for Sunglasses 2",
        size: "large",
        style: "italic",
      },
      {
        id: 53,
        name: "Sunglasses 3",
        price: 20,
        description: "Description for Sunglasses 2",
        size: "long",
        style: "italic",
        text: "Indulge in the world of fashion and make heads turn with our hero pieces",
        long: "long",
      },
      {
        id: 54,
        name: "Sunglasses 4",
        price: 20,
        description: "Description for Sunglasses 2",
        size: "small",
        style: "italic",
      },
      {
        id: 55,
        name: "Sunglasses 5",
        price: 20,
        description: "Description for Sunglasses 2",
        size: "long",
        style: "italic",
        text: "Make a bold statement and embrace your unique style with our fashion picks",
        long: "long",
      },
      {
        id: 56,
        name: "Sunglasses 6",
        price: 20,
        description: "Description for Sunglasses 2",
        size: "small",
        style: "italic",
      },
      {
        id: 57,
        name: "Sunglasses 7",
        price: 20,
        description: "Description for Sunglasses 2",
        size: "small",
        style: "italic",
      },
      {
        id: 58,
        name: "Sunglasses 8",
        price: 20,
        description: "Description for Sunglasses 2",
        size: "large",
        style: "italic",
      },
      {
        id: 59,
        text: "Take charge of your style and embrace the latest fashion trends with us.",
        size: "long",
      },
    ],
  },
];

const womenCategories = [
  {
    id: 6,
    name: "Dresses",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
  {
    id: 7,
    name: "Skirts",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
  {
    id: 8,
    name: "Coats",
    data: [
      {
        id: 81,
        name: "Trendy Brown  Coat",
        Image: "/shopAll/Women/Coats/first.png",
        price: 344,
        description: "Description for Coats 1",
        size: "small",
        style: "bold",
      },
      {
        id: 82,
        name: "Trendy Brown  Coat",
        Image: "/shopAll/Women/Coats/second.png",
        price: 344,
        description: "Description for Coats 2",
        size: "large",
        style: "italic",
      },
      {
        id: 83,
        name: "Grey Coat Matchings",
        Image: "/shopAll/Women/Coats/third.png",
        price: 677,
        description: "Description for Coats 2",
        size: "long",
        style: "italic",
        text: "Indulge in the world of fashion and make heads turn with our hero pieces",
        long: "long",
      },
      {
        id: 84,
        name: "Trendy Grey Coat",
        Image: "/shopAll/Women/Coats/fourth.png",
        price: 374,
        description: "Description for Coats 2",
        size: "small",
        style: "italic",
      },
      {
        id: 85,
        name: "Trendy Brown  Coat",
        Image: "/shopAll/Women/Coats/fifth.png",
        price: 344,
        description: "Description for Coats 2",
        size: "long",
        style: "italic",
        text: "Make a bold statement and embrace your unique style with our fashion picks",
        long: "long",
      },
      {
        id: 86,
        name: "Black BU Coat",
        Image: "/shopAll/Women/Coats/sixth.png",
        price: 123,
        description: "Description for Coats 2",
        size: "small",
        style: "italic",
      },
      {
        id: 87,
        name: "Red BU Coat",
        Image: "/shopAll/Women/Coats/seventh.png",
        price: 233,
        description: "Description for Coats 2",
        size: "small",
        style: "italic",
      },
      {
        id: 88,
        name: " Brown  Coat",
        Image: "/shopAll/Women/Coats/eighth.png",
        price: 555,
        description: "Description for Coats 2",
        size: "large",
        style: "italic",
      },
      {
        id: 89,
        text: "Take charge of your style and embrace the latest fashion trends with us.",
        size: "long",
      },
    ],
  },
  {
    id: 9,
    name: "Trousers",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
  {
    id: 10,
    name: "Sweaters",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
  {
    id: 11,
    name: "Jackets",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
  {
    id: 12,
    name: "Leggings",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
  {
    id: 13,
    name: "T-Shirts",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
  {
    id: 14,
    name: "Gowns",
    data: [
      {
        id: "",
        name: "",
        price: "",
        description: "Description for ",
        size: "",
        style: "",
      },
    ],
  },
];

// export const getStaticPaths = async () => {
//     // Fetch paths for menCategories
//     const menPaths = menCategories.flatMap((category) =>
//       category.data.map((product) => ({
//         params: { id: product.id.toString(), category: category.name },
//       }))
//     );

//     // Fetch paths for womenCategories
//     const womenPaths = womenCategories.flatMap((category) =>
//       category.data.map((product) => ({
//         params: { id: product.id.toString(), category: category.name },
//       }))
//     );

//     // Combine the paths
//     const paths = [...menPaths, ...womenPaths];

//     return {
//       paths,
//       fallback: false,
//     };
//   };

//   export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const category = context.params.category;

//     // Find the product based on the category
//     let product;
//     if (category === "Clothes" || category === "Bracelets") {
//       // Search in menCategories
//       const categoryData = menCategories.find((c) => c.name === category);
//       product = categoryData.data.find((p) => p.id.toString() === id);
//     } else {
//       // Search in womenCategories
//       const categoryData = womenCategories.find((c) => c.name === category);
//       product = categoryData.data.find((p) => p.id.toString() === id);
//     }

//     return {
//       props: { product },
//     };
//   };

const Product = () => {
  const [activeSize, setActiveSize] = useState("S");

  const handleButtonClick = (size) => {
    setActiveSize(size);
  };

  return (
    <>
      <Navbar />
      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.productImageContainer}>
            <div className={styles.productLargeImageContainer}>
              <Image src="" alt="" height={542} width={460} />
            </div>
            <div className={styles.productSmallImagesContainer}>
              <Image src="" alt="" height={89} width={81} />
              <Image src="" alt="" height={89} width={81} />
              <Image src="" alt="" height={89} width={81} />
              <Image src="" alt="" height={89} width={81} />
              <Image src="" alt="" height={89} width={81} />
            </div>
          </div>

          <div className={styles.productInfo}>
            <div className={styles.productNameContainer}>
              <p>Name of product</p>
            </div>

            <div className={styles.productPrice}>
              <p>$999</p>
            </div>

            <div className={styles.productSize}>
              <p>Size:</p>
              <button
                onClick={() => handleButtonClick("XS")}
                className={activeSize === "XS" ? "active" : ""}
              >
                XS
              </button>
              <button
                onClick={() => handleButtonClick("S")}
                className={activeSize === "S" ? "active" : ""}
              >
                S
              </button>
              <button
                onClick={() => handleButtonClick("M")}
                className={activeSize === "M" ? "active" : ""}
              >
                M
              </button>
              <button
                onClick={() => handleButtonClick("L")}
                className={activeSize === "L" ? "active" : ""}
              >
                L
              </button>
              <button
                onClick={() => handleButtonClick("XL")}
                className={activeSize === "XL" ? "active" : ""}
              >
                XL
              </button>
            </div>

            <div className={styles.productQuantityContainer}>
              <p>QTY :</p>
              <div className={styles.productQuantitySelectContainer}>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div className={styles.productBuyContainer}>
              <button>Add to cart</button>
              <button>Buy now</button>
            </div>

            <div className={styles.productDescriptionContainer}>
              <h4>Description</h4>

              <div className={styles.productDescriptionText}>
                <p>
                  Introducing the ultimate black coat, designed to keep you warm
                  and stylish in any weather. Made from high-quality materials,
                  this coat features a sleek and sophisticated design that will
                  complement any outfit. The outer shell is crafted from a
                  waterproof and windproof fabric, providing excellent
                  protection against the elements. The interior is lined with a
                  soft and cozy material that will keep you comfortable even in
                  the coldest temperatures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productSectionTwo}>
        <div className={styles.productContainerTwo}>
          <div className="">
            <div className={styles.producttwoHeader}>
              <h1>YOU MAY</h1>
              <h1> ALSO LIKE</h1>
            </div>

            <div className={styles.productYouLikeProductList}>
              <div className={styles.productYouLikeContainer}>

                <div className={styles.productYouLikeImageContainer}>
                  <Image src="" alt="" height={388} width={290}/>
                </div>

                <div className={styles.productYouLikeProductName}>
                  <p>Product Name</p>
                </div>

                <div className={styles.productYouLikePriceContainer}>
                  <p>Price</p>
                  <button>Add to cart</button>
                </div>
              </div>
              <div className={styles.productYouLikeContainer}>

                <div className={styles.productYouLikeImageContainer}>
                  <Image src="" alt="" height={388} width={290}/>
                </div>

               
                <div className={styles.productYouLikeProductName}>
                  <p>Product Name</p>
                </div>

                <div className={styles.productYouLikePriceContainer}>
                  <p>$999</p>
                  <button>Add to cart</button>
                </div>
                
              </div>
              <div className={styles.productYouLikeContainer}>

                <div className={styles.productYouLikeImageContainer}>
                  <Image src="" alt="" height={388} width={290}/>
                </div>

                <div className={styles.productYouLikeProductName}>
                  <p>Product Name</p>
                </div>

                <div className={styles.productYouLikePriceContainer}>
                  <p>Price</p>
                  <button>Add to cart</button>
                </div>
              </div>
              <div className={styles.productYouLikeContainer}>

                <div className={styles.productYouLikeImageContainer}>
                  <Image src="" alt="" height={388} width={290}/>
                </div>

                <div className={styles.productYouLikeProductName}>
                  <p>Product Name</p>
                </div>

                <div className={styles.productYouLikePriceContainer}>
                  <p>Price</p>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.productYouLikeViewAll}>view all</div>
        </div>
      </section>
    </>
  );
};

export default Product;
