import { BsHandbag } from 'react-icons/bs';
import Link from 'next/link';
import {useRecoilState} from "recoil";
import { cartState } from '@/atoms/cartState';
import { useState } from 'react';


const Navbar = () => {

  const [cartItem]=useRecoilState(cartState);
  const [open,setOpen]=useState(false);


  const ToggleNav =()=>{
    setOpen(!open)
  }


  return (
    <>
     <main className='navMainMobile'>
     <nav className="navContainer">
      <div className="navLogo">
        <Link href="/">STYLE HAVEN</Link>
      </div>

      <div className="navLogoMobile">
        <img src="/navbar/navLogo.png" onClick={ToggleNav}/>
      </div>

      
      <div className="navLink">
        <Link href="/store" className="navLinkP">Stores</Link>
        <Link href="/shopAll" className="navLinkP">Categories</Link>
        <Link href="/about_us" className="navLinkP">About us</Link>
      </div>

      <div className="navExtra">
        <Link href="/cart">
        <div className="navExtraP">
          <BsHandbag />
          <span>{cartItem.length}</span>
        </div>
        </Link>
        <Link href="/login" className="navExtraP">Sign in</Link>
      </div>
    </nav>

      { open==true &&<div className={open ? "navLinkMobile open" : "navLinkMObile"}>
        <Link href="/store" className="navLinkP">Stores</Link>
        <Link href="/shopAll" className="navLinkP">Categories</Link>
        <Link href="/about_us" className="navLinkP">About us</Link>
      </div>}
     </main>
    </>
  );
};

export default Navbar;
