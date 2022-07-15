import React from 'react';
import './NotFoud.css';
import PushCar from './KidPushingCar.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>404 Not Found!</h2>
            <div className='error'>
                <img srcSet={PushCar} alt="Kid Pushing Car" style={{width:'80%'}} />
            </div>
            <p>The page you are looking for does not exist.</p>
            <Link className='go-back' style={{width:'100%'}} to='/'>Go Back to Home</Link>
        </div>
    );
};

export default NotFound;