import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const MenuItems = () => {
  const { user,logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
    .then(console.log('Successfully logout user'))
    .catch(err => console.log(err))
  }

  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user  ? (
        <li>
        <a onClick={handleLogout} className="cursor-pointer" >logOut</a>
      </li>
      )  : (
        <>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
      
    </>
  );
};

export default MenuItems;
