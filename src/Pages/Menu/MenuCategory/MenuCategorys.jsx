import { Link } from "react-router-dom";
import Cover from "../../../Shareds/Covers/Cover";
import MenuItems from "../../../Shareds/MenuItems";

const MenuCategorys = ({ items, title, img }) => {
  return (
    <div>
      <div>{title && <Cover img={img} title={title}></Cover>}</div>
      <div className="grid md:grid-cols-2 gap-8 my-12">
        {items?.map((item) => (
          <MenuItems key={item?._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/shop/${title}`}>
        <button className="uppercase btn btn-outline border-0 border-b-4 border-yellow-500 my-4 mx-auto flex">
          Order Your Favorite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategorys;
