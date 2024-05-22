import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div>
      <div>
        <button onClick={handleGoogleLogin} className="btn ">
          <FaGoogle className="mr-2" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
