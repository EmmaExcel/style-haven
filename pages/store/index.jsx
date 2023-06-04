

import Navbar from "@/components/Navbar";
import { useState } from "react";
import styled from "styled-components";

const StoreContainer = styled.div`
  height: 100%;
  width: 100%;
`;



const StoreListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StoreList = styled.div`
  border-top: 2px solid white;
  width: 100%;
  cursor: pointer;

`;
const StoreListP = styled.p`

    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 137px;
    padding-left: 90px;
    text-transform: capitalize;
    color:white;

    &:hover {
    cursor: pointer;
  }

  
  &:not(:hover)::after {
    content: attr(data-value);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all 0.3s ease-in-out;
    transform: translateX(100%);
  }
`;

const H3 = styled.div`
  color: black;
  font-size: 20px;
`;


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const data = ["GUCCI", "LOUIS VUITTON", "PRADA", "DIOR", "FENDI", "VERSACE","DIMA"];


const Store = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [work, setWork] = useState("DIOR");

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(intervalId);

    const id = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(id);
      }

      iteration += 1 / 3;
    }, 10);

    setIntervalId(id);
  };

  const [fadeOut, setFadeOut] = useState(false);

  const handleStoreClick = (store) => {
    setWork(store);
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
    }, 300);
  };

  return (
    <StoreContainer >
      <Navbar/>

      <StoreListContainer >
        {data.map((store, index) => (
          <StoreList  key={index}>
            <StoreListP
              
              data-value={store}
              onMouseOver={handleMouseOver}
              href=""
              onMouseEnter={() => setWork(store)}
            >
              {store}
            </StoreListP>
          </StoreList>
        ))}
      </StoreListContainer>
      {/* <ConImage currentStore={work} className={fadeOut ? "fade-out" : ""}>
        {work === "DIOR" ? (
          <Dior />
        ) : work === "DIMA" ? (
          <Dima />
        ) : work === "PRADA" ? (
          <Prada />
        ) : work === "GUCCI" ? (
          <Gucci />
        ) : work === "FENDI" ? (
          <Fendi />
        ) : work === "LOUIS VUITTON" ? (
          <Louis />
        ) : (
          <Versace />
        )}
      </ConImage> */}
    </StoreContainer>
  );
};

export default Store;

// const ConImage = styled.div`
//   transform: ${(props) => {
//     switch (props.currentStore) {
//       case "DIOR":
//         return "rotate(0deg)";
//       case "DIMA":
//         return "rotate(10deg)";
//       case "PRADA":
//         return "rotate(-20deg)";
//       case "FENDI":
//         return "rotate(10deg)";
//       case "GUCCI":
//         return "rotate(-20deg)";
//       case "LOUIS VUITTON":
//         return "rotate(10deg)";
//       case "VERSACE":
//         return "rotate(-20deg)";

//       default:
//         return "rotate(0deg)";
//     }
//   }};

//   position: fixed;
//   top: 100px;
//   right: 150px;
//   height: 600px;
//   width: 500px;

//   transition: all 2s ease-in-out;
//   opacity: ${(props) => (props.currentStore ? 1 : 0)};

//   animation: animate 5s infinite ease alternate;

//   animation-delay: 1s;

//   @keyframes animate {
//     to {
//       transform: translateY(20px);
//     }
//   }
//   background-image: ${(props) => {
//     switch (props.currentStore) {
//       case "DIOR":
//         return "url(https://images.unsplash.com/photo-1618436917338-6e27b04c828d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)";
//       case "DIMA":
//         return "url(https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGltYSUyMGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)";
//       case "PRADA":
//         return "url(https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJhZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)";
//       case "FENDI":
//         return "url(https://images.pexels.com/photos/12369786/pexels-photo-12369786.jpeg?auto=compress&cs=tinysrgb&w=600)";
//       case "GUCCI":
//         return "url(https://images.unsplash.com/photo-1576608648778-dc30935c9463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3VjY2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)";
//       case "LOUIS VUITTON":
//         return "url(https://images.unsplash.com/photo-1583623733237-4d5764a9dc82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bG91aXMlMjB2dWl0dG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)";
//       case "VERSACE":
//         return "url(https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVyc2FjZSUyMHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)";

//       default:
//         return "url(https://images.pexels.com/photos/13308450/pexels-photo-13308450.jpeg?auto=compress&cs=tinysrgb&w=600)";
//     }
//   }};
//   object-fit: cover;
//   background-size: cover;
//   overflow: hidden;
// `;
