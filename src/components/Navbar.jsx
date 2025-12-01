import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative px-3 py-2 text-sm md:text-base font-medium transition ${
        isActive
          ? "text-primary after:w-full"
          : "text-gray-700 hover:text-primary"
      }`
    }
  >
    {({ isActive }) => (
      <span className="relative inline-block group">
        {children}
        {/* Animated gradient underline */}
        <span
          className={`absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full transform transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        ></span>
      </span>
    )}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50 transition-all">
      <div className="section-container flex items-center justify-between h-16 px-6 md:px-20">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent hover:tracking-wide transition-all duration-200"
        >
          Lakshmipriya M
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/skills">Skills</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border rounded-lg text-primary hover:text-white hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`absolute md:hidden right-4 top-16 w-48 bg-white/95 shadow-xl border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 transform origin-top ${
            open ? "max-h-96 scale-y-100 opacity-100" : "max-h-0 scale-y-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col p-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:text-white transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
