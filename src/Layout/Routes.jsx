import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "./ErrorPage";
import OurMenu from "../Pages/Menu/OurMenu";
import Order from "../Pages/Oreders/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "./Dashboard";
import Cart from "../Pages/DashboardCart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashboardCart/AllUsers";
import AddItem from "../Pages/DashboardCart/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashboardCart/ManageItems";
import UpdateItem from "../Pages/DashboardCart/UpdateItem/UpdateItem";
import Payment from "../Pages/DashboardCart/Payment";
import PaymentHistory from "../Pages/DashboardCart/PaymentHistory";

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
        path: "/shop/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes
      {
        path: "addItems",
        element: (
          <AdminRoute>
            {" "}
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:9133/menu/${params?.id}`),
      },
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
