import React from "react";

import { createBrowserRouter } from "react-router-dom";

// * Pages
import Login from "../pages/Login";

// ? Load
import Overlay from "../components/Overlay";
import NotFound from "../components/NotFound";


// ! Paths Settings
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path : "/...",
        element : <Overlay/>
    },
    {
        path: "*",
        element: <NotFound/>,
    },

]);

export default router;