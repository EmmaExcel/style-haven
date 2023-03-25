import styled from "styled-components";
import {BsHandbag} from "react-icons/bs"
import Link from 'next/link';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px 50px 100px;
  position: relative;
`;
const NavLogo = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande","Lucida Sans", Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: -0.04em;
  color: #FFFFFF;
`;
const NavLink = styled.div`
  display: flex;
  gap: 50px;
  `;
const NavLinkP=styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-transform: capitalize;
  color: white;
  `
const NavExtra = styled.div`
  display: flex;
  gap: 20px;
`;
const NavExtraP = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #fff;
`;


const Navbar = () => {
  return (
    <NavContainer >
        <NavLogo >
          STYLE HAVEN
        </NavLogo>

        <NavLink >
          <Link href="/store"><NavLinkP>Stores</NavLinkP></Link>
          <Link href="/"><NavLinkP >Categories</NavLinkP></Link>
          <Link href="/about_us"><NavLinkP>About us</NavLinkP></Link>
        </NavLink>

        <NavExtra>
          <NavExtraP ><BsHandbag/></NavExtraP>
          <Link href="/login"><NavExtraP>Sign in</NavExtraP></Link>
        </NavExtra>
      </NavContainer>
  )
}

export default Navbar
