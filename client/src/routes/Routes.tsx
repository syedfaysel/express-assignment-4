import Main from "@/layout/Main";
import AllProducts from "@/pages/allProducts/allProducts/AllProducts";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Dashboard from "@/pages/dashboard/home/Dashboard";
import DashboardHome from "@/pages/dashboard/home/DashboardHome";
import ManageOrder from "@/pages/dashboard/order/ManageOrder";
import ManageProducts from "@/pages/dashboard/product/ManageProducts";
import ManageUsers from "@/pages/dashboard/user/ManageUsers";
import Home from "@/pages/home/home/Home";
import ProductDetails from "@/pages/productDetails/productDetails/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/all-products/:productId",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/manage-orders",
        element: <ManageOrder />,
      },
    ],
  },
]);

export default router;
