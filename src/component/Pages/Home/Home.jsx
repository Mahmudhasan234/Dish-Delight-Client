import React from 'react';
import Header from './Header';
import NewsLetter from './NewsLetter';
import Pricing from './Pricing';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Pricing></Pricing>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;