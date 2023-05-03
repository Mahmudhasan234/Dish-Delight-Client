import React from 'react';
import Header from './Header';
import NewsLetter from './NewsLetter';
import Pricing from './Pricing';
import ChefsProfile from './Recipe/ChefsProfile';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ChefsProfile></ChefsProfile>
            <Pricing></Pricing>
            
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;