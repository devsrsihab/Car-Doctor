import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const MenuItems = () => {
  const { user,logout } =useAuth()

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
      <li>
            <NavLink to="/orders">My Orders</NavLink>
          </li>
      {user  ? (
        <>
        <li>
        <a onClick={handleLogout} className="cursor-pointer" >Log Out</a>
      </li>
        <li>
        <a className="text-green-500 text-bold  cursor-pointer" >{user.email}</a>
      </li>
      
      </>
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
