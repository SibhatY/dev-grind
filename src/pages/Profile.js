import React from 'react';
import { loadProgress } from '../utils/storage';
import './Profile.css';

const Profile = () => {

  const { level, xp, rank, rankProgress } = loadProgress();

  return (
    <div className='profile container'>
      <h2 className='profile-title'>Codex</h2>

      <div className="stat-block">
        <p><strong>Rank:</strong> {rank}</p>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>XP:</strong> {xp}/{level * 100}</p>
        <p><strong>Rank Trials Completed:</strong> {rankProgress.length}</p>
      </div>
    </div>
  );
};

export default Profile;
