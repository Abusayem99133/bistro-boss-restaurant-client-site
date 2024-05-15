import Banner from "./Banner";
import Category from "./Category";
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
    </div>
  );
};

export default Home;
