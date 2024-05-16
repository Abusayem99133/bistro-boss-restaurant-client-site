import { Helmet } from "react-helmet-async";
import Cover from "../../Shareds/Covers/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu";
const OurMenu = () => {
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
        <PopularMenu></PopularMenu>
        <Cover
          img={menuImg}
          title={"Our Menu"}
          description={"Would You Like Try Dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
          img={menuImg}
          title={"Our Menu"}
          description={"Would You Like Try Dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
          img={menuImg}
          title={"Our Menu"}
          description={"Would You Like Try Dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
        <Cover
          img={menuImg}
          title={"Our Menu"}
          description={"Would You Like Try Dish?"}
        ></Cover>
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default OurMenu;
