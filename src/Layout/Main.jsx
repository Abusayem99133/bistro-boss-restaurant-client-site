import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shareds/NavBar/Navbar";
import Footer from "../Shareds/Footer/Footer";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
