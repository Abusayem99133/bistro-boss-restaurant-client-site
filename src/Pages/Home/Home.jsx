import Banner from "./Banner";
import Category from "./Category";
import ChefRec from "./ChefRec";
import PopularMenu from "./PopularMenu";

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
    </div>
  );
};

export default Home;
