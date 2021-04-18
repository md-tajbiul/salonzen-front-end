import React from 'react';
import Header from './Header/Header';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeAcademy from './HomeAcademy/HomeAcademy';
import HomeReview from './HomeReview/HomeReview';
import Service from './Service/Service';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <HomeAbout></HomeAbout>
            <Team></Team>
            <HomeAcademy></HomeAcademy>
            <HomeReview></HomeReview>
        </div>
    );
};

export default Home;