import { Link } from "react-router-dom";
import notfound from "../assets/404.gif";
const ErrorPage = () => {
  return (
    <div>
      <img src={notfound} alt="" />
      <Link to="/">
        <button className="btn btn-outline border-b-4 border-0 border-yellow-600  flex mx-auto">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
