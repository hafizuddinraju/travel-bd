import React from 'react';
import About from '../../components/About/About';
import Statistic from '../../components/Statistic/Statistic';
import useTitle from '../../costomHooks/hooks';
import Content from '../Content/Content';
import Header from '../Header/Header';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <About></About>
            <Content></Content>
            <Statistic></Statistic>
            
        </div>
    );
};

export default Home;