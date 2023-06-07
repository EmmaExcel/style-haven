import { BsHandbag } from 'react-icons/bs';
import Link from 'next/link';
import {useRecoilState} from "recoil";
import { cartState } from '@/atoms/cartState';


const Navbar = () => {

  const [cartItem]=useRecoilState(cartState);

  return (
    <nav className="navContainer">
      <div className="navLogo">
        <Link href="/">STYLE HAVEN</Link>
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
  );
};

export default Navbar;
