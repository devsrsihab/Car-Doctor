import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import NotFound from "../Pages/404/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement:<NotFound/> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
