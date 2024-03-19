import { Outlet, useLocation } from "react-router-dom";
import React from "react";

import Header from "../components/Header";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";

const Layout = () => {
    const location = useLocation();
    const isLoading = location.state?.loading;

    return (
        <div>
            <Header />
            <main className="Main">
                {isLoading && <Overlay />}
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;