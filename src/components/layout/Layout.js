import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className='h-min-screen'>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;