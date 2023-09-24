import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
        <nav className=" flex justify-between items-center max-w-7xl mx-auto py-6">
              
            <Logo></Logo>
              
            <div className=" flex gap-5 font-bold">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 underline"
                : " text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 underline"
                : " text-black"
            }
          >
            Donation
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 underline"
                : " text-black"
            }
          >
            Statistics
          </NavLink>
            </div>
              
        </nav>
    </div>
  );
};

export default Navbar;
