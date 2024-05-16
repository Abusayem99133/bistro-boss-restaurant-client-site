const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <span
          className="bg-slate-900 text-white absolute right-0 mr-10 py-2
        px-4 my-5"
        >
          ${price}
        </span>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
