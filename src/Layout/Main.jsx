import { Outlet } from "react-router-dom";
import Navbar from "../Shareds/NavBar/Navbar";
import Footer from "../Shareds/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
