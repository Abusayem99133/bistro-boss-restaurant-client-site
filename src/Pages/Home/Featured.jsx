import { Link } from "react-router-dom";
import SectionTitle from "../../Component/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <section className="featured-item bg-fixed">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center  py-20 px-36 bg-slate-500 bg-opacity-60">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 text-white">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where can i get some..?</p>
          <p>
            It is simple: we list your menu and product lists online, help you
            process orders, pick them up, and deliver them to hungry pandas in a
            heartbeat! Interested? Let is start our partnership today!
          </p>
          <Link>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
