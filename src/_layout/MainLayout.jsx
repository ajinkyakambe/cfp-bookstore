import React from 'react';

import {Nav,Footer} from '_layout'
import { Outlet } from 'react-router-dom';

export {MainLayout}

const MainLayout = () => {
    return (
    <>
        <Nav />        
            <div><Outlet/></div>
        <Footer/>        
    </>
    );
};
