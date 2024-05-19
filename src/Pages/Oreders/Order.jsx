import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shareds/Covers/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import USeMenu from "../../Hooks/USeMenu";

import OrdersTab from "./OrdersTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = USeMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | OurShop</title>
      </Helmet>
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
          <TabPanel>
            <OrdersTab items={salad}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={pizza}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={soup}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={desserts}></OrdersTab>
          </TabPanel>
          <TabPanel>
            <OrdersTab items={drinks}></OrdersTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
