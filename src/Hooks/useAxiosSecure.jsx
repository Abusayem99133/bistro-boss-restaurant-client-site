import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:9133",
});
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
