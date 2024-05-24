import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../Component/SectionTitle";
import USeMenu from "../../Hooks/USeMenu";

const ManageItems = () => {
  const [menu] = USeMenu();
  const handleDeleteItem = (item) => {};
  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>
                    <button className="btn  bg-orange-500">
                      {" "}
                      <FaEdit className=" text-white text-2xl"></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
