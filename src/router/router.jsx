import { createBrowserRouter } from "react-router-dom";

// * Pages
import Login from "../pages/Login";
import Calendar from "../pages/Calendar";
import Factura from "../pages/Factura";

// ? Load
import Layout from "../layout/layout";
import NotFound from "../components/NotFound";
import Home from "../pages/Home";
import Overlay from "../components/Overlay";

import PrivateRoute from "./PrivateRouter";

// ! Paths Settings
const routes = [
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Overlay />,
  },
  {
    path: "/test",
    element: <Home />,
  },
  {
    path: "/home",
    element: <PrivateRoute><Layout /></PrivateRoute>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,  
        element: <Home />,
      },
      {
        path: "cal",
        element: <Calendar />,
      },
      {
        path: "fac",
        element: <Factura />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;