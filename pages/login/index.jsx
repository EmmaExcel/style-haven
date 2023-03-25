import Image from "next/image";
import styles from "../../styles/login.module.css"
import Link from "next/link"
const Login = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className="loginInfo">
          <div className={styles.loginHeader}>
            <p className={styles.loginHead}>Welcome Back</p>
            <div className={styles.redirect}>
              <p>Don't have an account?</p>
              <Link href="/register">Sign up</Link>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form action="" className={styles.formContainer}>
                <label className={styles.label} htmlFor="email">
                    Email
                    <input className={styles.input} type="text" name="email"/>
                </label>
                <label className={styles.label} htmlFor="password">
                    Password
                    <input  className={styles.input} type="text" name="password"/>
                </label>

                <button className={styles.loginButton}>Login</button>
            </form>
          </div>
        </div>


        <div className={styles.loginImage}>
          <Image src="/loginImage.png" height={870} width={581}/>
        </div>
      </div>
    </>
  );
};

export default Login;
