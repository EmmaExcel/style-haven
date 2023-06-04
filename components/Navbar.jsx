import { BsHandbag } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
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
        <div className="navExtraP"><BsHandbag /></div>
        <Link href="/login" className="navExtraP">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
