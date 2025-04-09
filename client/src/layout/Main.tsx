import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router";
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
