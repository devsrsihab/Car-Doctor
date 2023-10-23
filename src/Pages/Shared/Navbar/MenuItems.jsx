import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
                                            
      <li>
      <NavLink to='/' >
        Home
      </NavLink>
      </li>
      <li>
      <NavLink to='/about' >
      About
      </NavLink>

      </li>
      <li>
      <NavLink to='/services' >
        Services
      </NavLink>
        
      </li>
      <li>
      <NavLink to='/blog' >
        Blog
      </NavLink>
        
      </li>
      <li>
      <NavLink to='/contact' >
        Contact
      </NavLink>

      </li>
      <li>
      <NavLink to='/signup' >
        Sign Up
      </NavLink>
      </li>
      <li>
      <NavLink to='/login' >
        Login
      </NavLink>
      </li>
    </>
  );
};

export default MenuItems;
