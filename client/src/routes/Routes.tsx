import ErrorPage from "@/components/ErrorPage";
import Main from "@/layout/Main";
import ProtectedRoute from "@/layout/ProtectedRoute";
import AllProducts from "@/pages/allProducts/allProducts/AllProducts";
import About from "@/pages/about/about/About";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Dashboard from "@/pages/dashboard/home/Dashboard";
import DashboardHome from "@/pages/dashboard/home/DashboardHome";
import ManageOrder from "@/pages/dashboard/order/ManageOrder";
import ManageProducts from "@/pages/dashboard/product/ManageProducts";
import ManageUsers from "@/pages/dashboard/user/ManageUsers";
import Home from "@/pages/home/home/Home";
import ProductDetails from "@/pages/productDetails/productDetails/ProductDetails";
import Payment from "@/pages/payment/Payment";
import PaymentSuccess from "@/pages/payment/PaymentSuccess";


import { createBrowserRouter } from "react-router-dom";
import Cart from "@/pages/cart/cart";
import Checkout from "@/pages/cart/checkOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/products/:productId",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/payment_page",
        element: <Payment/>,
      },
      {
        path: "/api/v1/ssl/payment/success/:tranid",
        element: <PaymentSuccess/>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      // private routes in main
      {
        path: "/cart",
        element: <ProtectedRoute><Cart/></ProtectedRoute>,
      },
      {
        path: "/checkout",
        element: <ProtectedRoute><Checkout/></ProtectedRoute>,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
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
