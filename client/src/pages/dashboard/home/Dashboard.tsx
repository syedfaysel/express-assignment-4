import { useState } from "react";
import { Menu, UserCircle, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Manage Users", path: "/dashboard/manage-users" },
  { name: "Manage Products", path: "/dashboard/manage-products" },
  { name: "Manage Orders", path: "/dashboard/manage-orders" },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
          <h1 className="text-xl font-bold"><Link to="/">Stationery Shop</Link></h1>
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav>
         
          <ul>
    {menuItems.map((item) => (
      <li key={item.path}>
        <NavLink
          to={item.path}
          end={item.path === "/dashboard"}
          className={({ isActive }) =>
            `block py-2 px-3 rounded transition ${
              isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"
            }`
          }
        >
          {item.name}
        </NavLink>
      </li>
    ))}
    <li className="py-2 px-3 cursor-pointer hover:bg-gray-700">Logout</li>
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
          {/* <h2 className="text-xl font-semibold ml-auto">Dashboard</h2> */}
          <UserCircle size={32} className="ml-auto text-gray-700" />
        </header>
        {/* ========== Main Content Start Here ============ */}
        <main className="p-6">
          <Outlet/>
        </main>
        {/* ========== Main Content End Here ============ */}
      </div>
    </div>
    </div>
  );
};

export default Dashboard;