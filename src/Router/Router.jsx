import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Auth/Signup";
import Login from "../Pages/Auth/Login";
import NotFound from "../Pages/404/NotFound";
import Checkout from "../Pages/Checkout/Checkout";
import Orders from "../Pages/Checkout/Orders";
import PrivateRoute from "./PrivateRoute";
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
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout /></PrivateRoute> ,
        loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders/></PrivateRoute>,

      }
    ],
  },
]);

export default router;
