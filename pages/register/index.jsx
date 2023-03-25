import Image from "next/image";
import styles from "../../styles/login.module.css"
import Link from "next/link"
const Register = () => {
    return ( <>
             <div className={styles.loginContainer}>
        <div className="loginInfo">
          <div className={styles.loginHeader}>
            <p className={styles.loginHead}>Create an Account</p>
            <div className={styles.redirect}>
              <p>Already have an account?</p>
              <Link href="/login">Login</Link>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form action="" className={styles.formContainer}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" className={styles.input} name="email"/>
                </label>
                <label htmlFor="phone" className={styles.label}>
                    Phone number
                    <input type="text" className={styles.input} name="phone"/>
                </label>
                <label htmlFor="password" className={styles.label}>
                    Password
                    <input type="text" className={styles.input} name="password"/>
                </label>
                <label htmlFor="Cpassword" className={styles.label}>
                    Confirm password
                    <input type="text" className={styles.input} name="Cpassword"/>
                </label>

                <button className={styles.loginButton}>Create account</button>
            </form>
          </div>
        </div>


        <div className={styles.loginImage}>
          <Image src="/loginImage.png" height={806} width={655}/>
        </div>
      </div>
    </> );
}
 
export default Register;