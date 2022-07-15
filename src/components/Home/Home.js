import React from 'react';
import { Link } from 'react-router-dom';
import Car from './images/bugatti.jpg';
import './Home.css';

const Home = () => {
    return (

        <div className='home'>
            <div className='home-text reverse'>
                <h1>BUGATTI CHIRON SUPER SPORT</h1>
                <p>THE ULTIMATE GRAND TOURISME,
                    DELIVERING BRUTAL PERFORMANCE
                    IN TOTAL COMFORT.
                </p>
                <a href='https://www.bugatti.com/chiron/' className='home-btn' target={'_blank'}>Live Demo</a>
            </div>
            <div className='home-img'>
                <img src={Car} alt="" />
            </div>
        </div>
    );
};

export default Home;