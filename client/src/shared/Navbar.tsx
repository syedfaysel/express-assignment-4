import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icon library, install via `npm install lucide-react`
import logo from "../assets/store-logo.png";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Product", href: "/all-products" },
  { name: "About Us", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-2 font-[space-grotesk] bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">
            <img className="w-16" src={logo} alt="" />
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-gray-700 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.href} className="hover:text-black">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-[#1E2525] text-[blue-600] rounded hover:bg-blue-50 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-[#1E2525] text-white rounded hover:bg-[#1E2525] transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <NavLink to={link.href} className="block text-gray-700">
              {link.name}
            </NavLink>
          ))}
          <div className="space-y-2 pt-2">
            <button className="w-full px-4 py-2 border border-[#1E2525] text-[#1E2525] rounded hover:bg-blue-50 transition">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-[#1E2525] text-white rounded hover:bg-[#1E2525] transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
