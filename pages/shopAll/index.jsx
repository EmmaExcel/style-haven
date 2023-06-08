import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import styles from "@/styles/shop.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";

function ProductItem(props) {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [changeAddtoCart, setChangeAddToCart] = useState(true);
  
  const addItemToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === props.product.id) === -1) {
      setCartItem((prevState) => [...prevState, props.product]);
      setChangeAddToCart(false);
    } else {
      /*  setCartItem((prevState) => {
        return prevState.filter((item) => item.id !== props.id);
      }); */
      setCartItem((prevState) => {
        return prevState.filter((item) => item.id !== props.product.id);
      });
    
      setChangeAddToCart(true);
    }
  };



  return (
    <div className={`product ${props.product?.size} ${props.product?.style}`}>
      {props.product.text && (
        <div className="productText">
          <p>{props.product.text}</p>
        </div>
      )}

      {props.product?.image && (
        <Link
          href={"/" + props.product.id}
          className={`productImageContainer ${props.product?.size} ${props.product?.style}`}
        >
          <img
            className={`productImage ${props.product?.size} ${props.product?.style}`}
            src={props.product?.image}
          />
        </Link>
      )}

      <div className={`productNameContainer `}>
        <p>{props.product?.name}</p>
        {props.product?.price && (
          <div className="productPriceContainer">
            <p>Price: ${props.product?.price}</p>
            {changeAddtoCart == true ? (
              <button onClick={addItemToCart}>Add to cart</button>
            ) : (
              <button onClick={addItemToCart}>Remove</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const ShopAll = () => {
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
          image: "/shopAll/Women/Coats/first.png",
          price: 344,
          description: "Description for Coats 1",
          size: "small",
          style: "bold",
        },
        {
          id: 82,
          name: "Trendy Brown  Coat",
          image: "/shopAll/Women/Coats/second.png",
          price: 344,
          description: "Description for Coats 2",
          size: "large",
          style: "italic",
        },
        {
          id: 83,
          name: "Grey Coat Matchings",
          image: "/shopAll/Women/Coats/third.png",
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
          image: "/shopAll/Women/Coats/fourth.png",
          price: 374,
          description: "Description for Coats 2",
          size: "small",
          style: "italic",
        },
        {
          id: 85,
          name: "Trendy Brown  Coat",
          image: "/shopAll/Women/Coats/fifth.png",
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
          image: "/shopAll/Women/Coats/sixth.png",
          price: 123,
          description: "Description for Coats 2",
          size: "small",
          style: "italic",
        },
        {
          id: 87,
          name: "Red BU Coat",
          image: "/shopAll/Women/Coats/seventh.png",
          price: 233,
          description: "Description for Coats 2",
          size: "small",
          style: "italic",
        },
        {
          id: 88,
          name: " Brown  Coat",
          image: "/shopAll/Women/Coats/eighth.png",
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

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState("Women");
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);

  const handleCategorySelect = (categoryId, categoryData) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryData(categoryData);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setSelectedCategory(null);
    setSelectedCategoryData(null);
  };

  return (
    <>
      <Navbar />
      <section className={styles.shopAllSection}>
        <div className={styles.shopAllContainer}>
          <div className={styles.shopAllNavbar}>
            <h1>SHOP ALL</h1>
            <p>Categories</p>
          </div>

          <div className="gender">
            <button
              onClick={() => handleGenderSelect("Men")}
              className={selectedGender === "Men" ? "active" : ""}
            >
              Men
            </button>
            <button
              onClick={() => handleGenderSelect("Women")}
              className={selectedGender === "Women" ? "active" : ""}
            >
              Women
            </button>
          </div>

          <div className="product-list">
            <ul>
              {selectedGender === "Men" &&
                menCategories.map((category) => (
                  <li
                    key={category?.id}
                    onClick={() =>
                      handleCategorySelect(category?.id, category?.data)
                    }
                    className={`category-item ${
                      category?.id === selectedCategory ? "active" : ""
                    }`}
                  >
                    {category?.name}
                  </li>
                ))}
              {selectedGender === "Women" &&
                womenCategories.map((category) => (
                  <li
                    key={category?.id}
                    onClick={() =>
                      handleCategorySelect(category?.id, category?.data)
                    }
                    className={`category-item ${
                      category?.id === selectedCategory ? "active" : ""
                    }`}
                  >
                    {category?.name}
                  </li>
                ))}
            </ul>

            <button onClick={() => setSelectedCategory(null)}>x</button>
          </div>

          {selectedCategoryData && (
            <div className={styles.productList}>
              {selectedCategoryData?.map((product) => (
                <ProductItem key={product.id} product={product}></ProductItem>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShopAll;
