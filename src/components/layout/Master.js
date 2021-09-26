import React from 'react';
import ThemeContainer from '../pages/ThemeContainer';
import Footer from './Footer';
import Header from './Header';

const Master = () => {
    return (
        // this is main layout 
        <div className="md:px-10">
            <Header></Header>
            <ThemeContainer></ThemeContainer>
            <Footer></Footer>
        </div>
    );
};

export default Master;