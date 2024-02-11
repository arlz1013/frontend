import { createBrowserRouter } from "react-router-dom";

// * Pages
import Login from "../pages/Login";
import Notifi from "../pages/Notif"

// ? Load
import Layout from "../layout/layout"
import NotFound from "../components/NotFound"

// ! Paths Settings
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <NotFound />,
      },
      {
        path: "/home",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
          {
            index: true, // Para indicar que esta es la ruta predeterminada dentro de /home
            element: <Notifi />,
          },
        ],
      },
]);

export default router;