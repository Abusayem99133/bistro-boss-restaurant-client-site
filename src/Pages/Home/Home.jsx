import Banner from "./Banner";
import Category from "./Category";
import ChefRec from "./ChefRec";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
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
