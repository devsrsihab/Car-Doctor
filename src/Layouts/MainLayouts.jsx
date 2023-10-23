import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <>    
        <div className="doctor-navbar">
          <Navbar/>
        </div>
        <div className="outlet ">          
          <Outlet />
        </div>
        <div className="doctor-footer">
          <Footer/>
        </div>
   
    </>
  );
};

export default MainLayouts;
