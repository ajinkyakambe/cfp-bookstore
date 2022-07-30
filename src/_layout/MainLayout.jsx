import React from 'react';

import {Nav,Footer} from '_layout'
import { Outlet } from 'react-router-dom';

export {MainLayout}

const MainLayout = ({isLogin}) => {
    return (
    <>
        <Nav isLogin = {isLogin} />        
            <div><Outlet/></div>
        <Footer/>        
    </>
    );
};
