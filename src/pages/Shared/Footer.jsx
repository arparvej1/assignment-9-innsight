import { useContext } from "react";
import { FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="footer footer-center mt-10 p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to='/' className="link-hover">Home</Link>
        <Link to='/about' className="link-hover">About us</Link>
        <Link to='/blogs' className="link-hover">Blogs</Link>
        {!user ?
          <Link to='/register' className="link-hover">Register</Link>
          : <Link to='/profile' className="link-hover">Profile</Link>}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-5">
          <Link><FaGithub className="text-2xl" /></Link>
          <Link><FaYoutube className="text-2xl" /></Link>
          <Link><FaTwitter className="text-2xl" /></Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by <Link to='/'><strong>InnSight</strong></Link></p>
      </aside>
    </footer>
  );
};

export default Footer;