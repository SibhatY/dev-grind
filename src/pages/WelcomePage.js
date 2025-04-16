import React from 'react';
import {useNavigate} from 'react-router-dom';
import './WelcomePage.css';

const WelcomePage = () => {

    const navigate = useNavigate();

    return (

        <div className='welcome-container'>
            <div className='welcome-box'>
                <h1 className='title'>DEV GRIND</h1>
                <p className='subtitle'>The dungeon is digital, the power is real.</p>
                <button className='enter-button' onClick={() => navigate('/hub')}>Enter The Haven</button>
            </div>
        </div>
    );
};

export default WelcomePage;