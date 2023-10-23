import MenuItems from "./MenuItems";
import doctorLogo from "../../../assets/logo.svg";
import { AiOutlineSearch,AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {/* menu items */}
            <MenuItems />
          </ul>
        </div>
        {/* desktop  logo */}
        <div className="doctor-logo hidden lg:block w-24 ">
          <Link to='/'>
          <img src={doctorLogo} className=" w-full h-full " />
          </Link>
          
        </div>
      </div>
      <div className="navbar-center items-center   lg:flex">
        {/* mobile logo logo */}
        <div className="doctor-logo lg:hidden w-16 ">
          <Link to='/'>
          <img src={doctorLogo} className=" w-full h-full " />
          </Link>
          
        </div>

        <ul className="menu hidden text-lg font-semibold lg:flex menu-horizontal px-1">
          {/* menu items */}
          <MenuItems />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="text-2xl flex gap-4 items-center justify-center ">
          <AiOutlineShopping/>
          <AiOutlineSearch/>
        <button className="btn">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
