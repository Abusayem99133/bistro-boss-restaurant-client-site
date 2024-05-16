import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import ChefRec from "./ChefRec";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import CallUs from "./CallUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Category></Category>
      </div>
      <div>
        <PopularMenu></PopularMenu>
      </div>
      <div>
        <CallUs></CallUs>
      </div>
      <div>
        <ChefRec></ChefRec>
      </div>
      <div>
        <Featured></Featured>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
