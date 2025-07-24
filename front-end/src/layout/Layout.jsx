import React from 'react'
import Header from '../components/Header';

const Layout = ({children}) => {

    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <div>{children}</div>
            </main>
        </div>
    );
}

export default Layout