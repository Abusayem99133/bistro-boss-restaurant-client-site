import { Helmet } from "react-helmet-async";
import Cover from "../../Shareds/Covers/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import USeMenu from "../../Hooks/USeMenu";
import SectionTitle from "../../Component/SectionTitle";
import MenuCategorys from "./MenuCategory/MenuCategorys";
const OurMenu = () => {
  const [menu] = USeMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | OurMenu</title>
      </Helmet>
      <div>
        <Cover
          img={menuImg}
          title={"Our Menu"}
          description={"Would You Like Try Dish?"}
        ></Cover>
        <SectionTitle
          subHeading={"don't miss"}
          heading={"Today's offer"}
        ></SectionTitle>
        <MenuCategorys items={offered}></MenuCategorys>
        <MenuCategorys
          items={desserts}
          title={"desserts"}
          img={dessertImg}
        ></MenuCategorys>
        <MenuCategorys
          items={pizza}
          title={"Pizza"}
          img={pizzaImg}
        ></MenuCategorys>
        <MenuCategorys
          items={salad}
          title={"salad"}
          img={saladImg}
        ></MenuCategorys>
        <MenuCategorys
          items={soup}
          title={"soup"}
          img={soupImg}
        ></MenuCategorys>
      </div>
    </div>
  );
};

export default OurMenu;
