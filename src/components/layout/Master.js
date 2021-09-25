import React from 'react';
import ThemeContainer from '../pages/ThemeContainer';
import Footer from './Footer';
import Header from './Header';

const Master = () => {
    return (
        <div className="px-10 pt-20">
            <Header></Header>
            <ThemeContainer></ThemeContainer>
            <Footer></Footer>
        </div>
    );
};

export default Master;