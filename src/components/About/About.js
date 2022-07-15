import React from 'react';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    return (
        <>
            <div className='about'>
                <h2>About</h2>
                <p> We don't really need to explain Bugatti to you, do we? 🙃 <br /> <br />
                We sell essentially one car, the Chiron. As a follow-up to the poster-car Veyron, it's even more poster-car worthy thanks to its 200-plus-mph top speed and multi-million-dollar price tag. The Chiron boasts a top speed of 261 mph 🔥
                </p>
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;