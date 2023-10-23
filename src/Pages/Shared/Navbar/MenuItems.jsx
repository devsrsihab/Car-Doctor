import { Link } from "react-router-dom";

const MenuItems = () => {
  return (
    <>
                                            
      <li>
      <Link to='/' >Home</Link>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <Link to='/signup' >Sign Up</Link>
      </li>
      <li>
        <Link to='/login' >Login</Link>
      </li>
    </>
  );
};

export default MenuItems;
