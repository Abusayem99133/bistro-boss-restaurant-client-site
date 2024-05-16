import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shareds/Covers/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import USeMenu from "../../Hooks/USeMenu";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = USeMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <div>
        <Cover
          img={orderCover}
          title={"Our Shop"}
          description={"Would You Like To Try A Dish?"}
        ></Cover>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
