import { useEffect, useState } from "react";
import SectionTitle from "../../Component/SectionTitle";
import MenuItems from "../../Shareds/MenuItems";

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
    </section>
  );
};

export default PopularMenu;
