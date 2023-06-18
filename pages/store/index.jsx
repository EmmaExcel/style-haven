import Navbar from "@/components/Navbar";
import { useState } from "react";
import styled from "styled-components";

const size = {
  mobileS: "0px",
  mobileL: "600px",
  tablet: "601px",
  laptop: "901px",
  laptopL: "1200px",
  desktop: "1201px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

const StoreContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StoreListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;

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
  width: 100%;
  text-transform: capitalize;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media ${device.mobileS} {
    font-size: 20px;
    line-height: 50px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
    line-height: 70px;
  }

  @media ${device.tablet} {
    font-size: 40px;
    line-height: 80px;
  }

  @media ${device.laptop} {
    font-size: 70px;
    line-height: 90px;
  }

  @media ${device.desktop} {
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 137px;
    width: 100%;
    text-transform: capitalize;
    color: white;
  }
`;

const H3 = styled.div`
  color: black;
  font-size: 20px;
`;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const data = [
  "GUCCI",
  "LOUIS VUITTON",
  "PRADA",
  "DIOR",
  "FENDI",
  "VERSACE",
  "DIMA",
];

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
    <>
      <Navbar />

      <StoreContainer>
        <StoreListContainer>
          {data.map((store, index) => (
            <StoreList key={index}>
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
      </StoreContainer>
    </>
  );
};

export default Store;
