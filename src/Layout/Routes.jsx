import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "./ErrorPage";
import OurMenu from "../Pages/Menu/OurMenu";
import Order from "../Pages/Oreders/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/shop",
        element: <Order></Order>,
      },
    ],
  },
]);
