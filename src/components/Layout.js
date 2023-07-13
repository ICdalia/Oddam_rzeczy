import React from 'react';
import HomeMenu from "./home/homeMenu";
import HomeHeader from "./home/homeHeader";
import {Outlet} from "react-router-dom";
import ContactSection from "./contact/contactSection";

const Layout = () => {
    return <>
        <HomeHeader />
        <HomeMenu />
        <Outlet />
        <ContactSection/>
    </>
}

export default Layout;
