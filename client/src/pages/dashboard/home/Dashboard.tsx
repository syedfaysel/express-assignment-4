import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

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
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul>
            <li className="py-2 hover:bg-gray-700 rounded px-3"><Link to="/dashboard">Dashboard</Link></li>
            <li className="py-2 hover:bg-gray-700 rounded px-3"><Link to="/dashboard/manage-users">Manage User</Link></li>
            <li className="py-2 hover:bg-gray-700 rounded px-3"><Link to="/dashboard/manage-products">Manage Product</Link></li>
            <li className="py-2 hover:bg-gray-700 rounded px-3"><Link to="/dashboard/manage-orders">Manage Order</Link></li>
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
          <h2 className="text-xl font-semibold">Dashboard</h2>
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