import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:9133",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
