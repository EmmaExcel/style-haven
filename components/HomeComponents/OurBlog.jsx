import styles from "@/styles/Home.module.css";
import Image from "next/image";

const data = [
  {
    id:1,
    img:"/blog/first.png",
    title:"Grammys 2023: Red carpet fashion in pictures",
    info:""
  },
  {
    id:2,
    img:"/blog/second.png",
    title:"The Launch: Fashion News to Know This February",
    info:""
  },
  {
    id:3,
    img:"/blog/third.png",
    title:"Kendall Jenner matches her burgundy tights to her mini-dress in Bottega Veneta",
    info:""
  }
]

const OurBlog = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <div className={styles.blogNavbar}>
          <p>Our Blog</p>
        </div>

        <div className={styles.blogBoxContainer}>
         { data.map((blog)=>(
            <div className={styles.blogBox}>
            <div className={styles.blogBoxImageContainer}>
              <img src={blog.img} />
            </div>
            <div className={styles.blogBoxTextContainer}>
              <p>{blog.title}</p>
              <button>Read</button>
            </div>
          </div>
         )) }
        </div>

        {/* IN MOBILE VIEW IT TURNS INTO A SLIDER */}

        <div className={styles.blogSliderContainer}>
          {/* {
             <div className={styles.blogBoxContainer}>
             <div className={styles.blogBox}>
               <div className={styles.blogBoxImageContainer}>
                 <Image src="/Lookbook/fifth.png" width={271} height={366} />
               </div>
               <div className={styles.blogBoxTextContainer}>
                 <p>Grammys 2023: Red carpet fashion in pictures</p>
                 <button>Read</button>
               </div>
             </div>
           </div>
          } */}
        </div>

        <div className={styles.blogViewall}>
          <button>View all</button>
        </div>
      </div>

      {/* border at the bottom */}
    </section>
  );
};

export default OurBlog;
