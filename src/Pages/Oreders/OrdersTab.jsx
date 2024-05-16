import FoodCard from "../../Shareds/Foods/FoodCard";

const OrdersTab = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        {items?.map((item) => (
          <FoodCard key={item?._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrdersTab;
