import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const loacation = useLocation();

  const handleAdd = (food) => {
    if (user && user?.email) {
      // kfdkfd
      console.log(food, user?.email);
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //  send the user to the login page
          navigate("/login");
        }
      });
    }
  };
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
            <button onClick={() => handleAdd(item)} className="btn btn-primary">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
