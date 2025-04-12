import React from 'react';
import { useNavigate } from 'react-router-dom';
import challenges from '../data/challenges';
import './ChallengeList.css';


const ChallengeList = () => {

    const navigate = useNavigate();

    return (
        <div className='challenge-list'>
            <h2>Glitch Board</h2>
            <p>Select a Gate to enter and prove your strength.</p>

            {challenges.map((challenge) => (

                <div key={challenge.id} className='glitch-card'>
                    <h3>{challenge.prompt}</h3>
                    <p>Difficulty: {challenge.difficulty}</p>
                    <button onClick={() => navigate(`/challenge/${challenge.id}`)}>Enter Glitch</button>
                </div>
            ))}
        </div>
    );
};

export default ChallengeList;
