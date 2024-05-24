import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div className="flex items-center gap-6">
              {/* Category */}
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full "
                >
                  <option disabled selected>
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="desserts">Desserts</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>
              {/* Price */}
              <div className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="from-control">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>

              <textarea
                {...register("recipe", { required: true })}
                placeholder="Bio"
                className="textarea textarea-bordered textarea-lg w-full "
              ></textarea>
            </div>
            <div className="my-6">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <button className="btn bg-gradient-to-r from-indigo-500 to bg-pink-500">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
