import { useState } from "react";
import { Menu, UserCircle, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { logoutUser, selectUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
  { name: "Manage Users", path: "/dashboard/manage-users", icon: <FaUser /> },
  {
    name: "Manage Products",
    path: "/dashboard/manage-products",
    icon: <MdProductionQuantityLimits />,
  },
  {
    name: "Manage Orders",
    path: "/dashboard/manage-orders",
    icon: <FaCartArrowDown />,
  },
];

const userMenuItems = [
  { name: "Profile", path: "/dashboard/profile", icon: <FaUser /> },
  { name: "Settings", path: "/dashboard/settings", icon: <FaUser /> },
  { name: "View Orders", path: "/dashboard/view-orders", icon: <FaUser /> },
  
]

const Dashboard = () => {
  const user = useAppSelector(selectUser);
  const isAdmin = user?.role === "admin";
  const sidebarMenuItems = isAdmin ? menuItems : userMenuItems;
  const dispatch = useAppDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    const toastId =  toast.loading("Logging out...")
    try {
      dispatch(logoutUser());
      toast.success("Logout successful!", { id: toastId });

    } catch (error) {
      toast.error("Logout failed!", { id: toastId });
      console.error("Logout failed:", error);
    }
  }
  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 bg-gray-900 text-white w-64 p-5 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-64"
          } transition-transform lg:relative lg:translate-x-0`}
        >
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl font-bold">
              <Link to="/">Stationery Shop</Link>
            </h1>
            <button
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <nav>
            <ul>
              {sidebarMenuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard"} // Fixes active issue
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-2 px-3 rounded transition ${
                        isActive
                          ? "bg-gray-700 text-white"
                          : "hover:bg-gray-700"
                      }`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li
                className="flex items-center gap-2 py-2 px-3 cursor-pointer hover:bg-gray-700"
                onClick={handleLogout}
              >
                <LuLogOut />
                Logout
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-100">
          <header className="bg-white shadow p-4 flex justify-between items-center">
            <button
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            {/* ===================== Dashboard avater start =================== */}
            {/* <h2 className="text-xl font-semibold ml-auto">Dashboard</h2> */}
            <UserCircle
              size={32}
              className="ml-auto text-gray-700"
            />
            {/* ===================== Dashboard avater end =================== */}
          </header>
          {/* ========== Main Content Start Here ============ */}
          <main className="p-6">
            <Outlet />
          </main>
          {/* ========== Main Content End Here ============ */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
