import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../sections/index";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
