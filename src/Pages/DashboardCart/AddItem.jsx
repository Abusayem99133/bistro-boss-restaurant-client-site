import { useForm } from "react-hook-form";
import SectionTitle from "../../Component/SectionTitle";

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
          <input {...register("name")} />

          <select
            className="select select-bordered w-full max-w-xs"
            {...register("category")}
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
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
