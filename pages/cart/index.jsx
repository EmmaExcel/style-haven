import Navbar from "@/components/Navbar";
import styles from "@/styles/cart.module.css";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";
import Link from "next/link";
import axios from 'axios';

function CartItem({data}) {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const {id,name,image,price,quantity} = data;

  /* const removeFromCart = (id) => {
    setCartItem(cartItem.filter((product) => product !== id))
  } */

  function removeFromCart() {
    setCartItem((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  }

  return (
    <div className={styles.cartProductContainer}>
      <div className={styles.cartProduct}>
        <div className={styles.cartProductImageContainer}>
          <Image src={image} alt="" width={124} height={166} />
        </div>

        <div className={styles.cartProductInfo}>
          <p>{name}</p>
          <p>${price}</p>
          <p>Size:s</p>
          <p>QTY: 1{quantity}</p>
        </div>
      </div>
      <div className={styles.cartProductRemoveContainer}>
        <button  onClick={removeFromCart}>Remove item</button>
      </div>
    </div>
  );
}

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price,
    0
  );

  const createCheckoutSession=()=>{
    axios.post('api/checkout_sessions',{cartItem})
    .then(res => {
      console.log(res)
      window.location=res.data.sessionURL
    })

    .catch(err => console.log(err))

  }
  
  return (
    <>
      <Navbar />
      <section className={styles.cartSection}>
        <div className={styles.cartContainer}>
          <div className={styles.cartHeader}>
            <h1>Cart</h1>
          </div>

          {cartItem.length <= 0 ? (
            <h1 className={styles.CartEmpty}>Your Cart is Empty</h1>
          ) : (<>
            <div className={styles.CartListContainer}>
              {cartItem.map((item) => (
                <CartItem key={item.id} data={item}/>
              ))}
            </div>
                
                
            <div className={styles.CartFooterContainer}>
             
                <Link href="/shopAll">Continue shopping</Link>
              

              <div className={styles.PromoContainer}>
                  <input type="text" placeholder="Enter promo code"/>
                  <button>Use</button>
              </div>

              <div className={styles.CartTotalContainer}>
                <div className={styles.CartTotal}>
                Total <p>${totalPrice}</p>
                </div>

                <button onClick={createCheckoutSession}>Proceed</button>

              </div>
            </div>
            </>
          )}
        </div>



      </section>
    </>
  );
};

export default Cart;
