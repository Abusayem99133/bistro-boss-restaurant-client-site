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
    </div>
  );
};

export default MenuCategorys;
