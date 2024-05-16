import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import MenuItems from "../../Shareds/MenuItems";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");

        console.log(data);
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {menu?.map((item) => (
          <MenuItems key={item?._id} item={item}></MenuItems>
        ))}
      </div>
      <div className=" mt-4  text-center">
        <Link>
          <button className="uppercase border-b-4 border-black btn btn-outline">
            View full menu
          </button>
        </Link>
      </div>
      <div className="bg-black max-h-screen mt-12">
        <div>
          <h3 className="font-bold text-3xl text-white py-12 text-center">
            Call Us: +88 0192345678910
          </h3>
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
