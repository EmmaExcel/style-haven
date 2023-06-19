import Navbar from "@/components/Navbar";
import styled from "@/styles/about.module.css";
import Image from "next/image";
// import React, { useEffect, useState } from 'react';

const About = () => {


  return (
    <>
      <Navbar />
      <section className={styled.aboutContainer}>
        <div className={styled.aboutHeaderContainer}>
          <h1 className={styled.aboutH}>About us</h1>
          <p className={styled.aboutP}>
            Welcome to Style Haven, your go-to destination for all things
            fashion!
          </p>
        </div>

        <div className={styled.aboutSectionImg}>
          <p>STYLED HAVEN</p>
        </div>

        <div className={styled.aboutInfoContainer}>
          <div className={styled.aboutInfoOne}>
            <div className={styled.aboutInfoTextOne}>
              <p>
                At Style Haven, we're passionate about helping our customers
                look and feel their best. Whether you're searching for a trendy
                new outfit or a classic wardrobe staple, our carefully curated
                selection of clothing and accessories has something for
                everyone.
              </p>

              <p>
                We believe that fashion should be accessible and inclusive,
                which is why we offer a wide range of sizes and styles to suit
                all body types and personal preferences. Our team of fashion
                experts carefully selects each item in our collection, ensuring
                that we only offer the highest quality products from ethical and
                responsible suppliers.
              </p>
            </div>
            <div className={ styled.aboutInfoImage }>
              <img src="/about1.png"/>
            </div>
          </div>

          <div className={styled.aboutInfoTwo}>
            <div className={styled.aboutInfoTextTwo}>
              <p>
                But Style Haven is more than just a fashion retailer. We're also
                a community of fashion lovers, who are dedicated to helping each
                other find the perfect look and achieve their style goals. Our
                lookbook showcases a variety of outfit ideas and styles to
                inspire and delight, while our personalized recommendations use
                data and algorithms to suggest products that fit each customer's
                personal style. At Style Haven, we're committed to providing a
                seamless and enjoyable shopping experience, from start to
                finish. Our user-friendly website, fast and reliable shipping
                options, and excellent customer support are all designed to make
                your shopping experience as easy and enjoyable as possible.
                Thank you for choosing Style Haven as your fashion destination.
                We look forward to helping you discover your next favorite
                outfit!
              </p>
            </div>

            <div className={ styled.aboutInfoTwoImg }>
              <div className={styled.aboutInfoTwoImgText}>
                <span />
                <p>STYLE HAVEN</p>
                <span/>
              </div>
              <img src="/about2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
