import React from 'react';
import HomeMenu from "./home/homeMenu";
import HomeHeader from "./home/homeHeader";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return <>
        <HomeHeader />
        <HomeMenu />
        <Outlet />
        {/*<div>Tu będzie kontakt</div>*/}
    </>
}

export default Layout;
