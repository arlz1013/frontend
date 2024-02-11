import React from "react";

import { createBrowserRouter } from "react-router-dom";

// * Pages
import Login from "../pages/Login";
import Start from "../pages/Start"

// ? Load
import Layout from "../layout/layout"
import NotFound from "../components/NotFound"

// ! Paths Settings
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <NotFound/>
    },
    {
        path: "/home",
        element: <Layout/>,
        errorElement: <NotFound/>
    },
]);

export default router;