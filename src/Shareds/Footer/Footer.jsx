import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" md:flex  ">
        <aside className="bg-gray-800 py-24 px-44 text-white">
          <h3 className="uppercase text-3xl">Contact Us</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <span>+88 123456789</span>
          <span>Mon - Fri: 08:00 - 22:00</span>
          <span>Sat - Sun: 10:00 - 23:00</span>
        </aside>
        <nav className="bg-gray-900 py-24 px-52 text-white">
          <h3 className="text-3xl">Follow US</h3>
          <p>Join us on social media</p>
          <div className="grid grid-flow-col gap-4 my-2">
            <a>
              <FaFacebookF />
            </a>
            <a>
              <CiInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
        </nav>
      </footer>
      <aside className="footer footer-center p-4 bg-black text-base-content">
        <p className="text-white ">
          Copyright © 2024 - All right reserved by Bistro Boss Restaurant
        </p>
      </aside>
    </div>
  );
};

export default Footer;
