import React from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import './Hub.css';
import { loadProgress } from "../utils/storage";

const Hub = () => {

    const navigate = useNavigate();
    const {level, xp, rank} = loadProgress();

    return (

        <div className="haven-container">
            <h2 className="haven-title">The Haven</h2>
            <p className="haven-subtitle">Your digital sanctuary</p>
            <button className="portal-button" onClick={() => navigate("/challenges")}>Hunt Glitches</button>

            <button className="portal-button" onClick={() => navigate("/profile")}>View Codex</button>

            <div className="codex-badge" onClick={() => navigate("/profile")}>Rank: {rank} | Lv. {level} - {xp}/{level*100} XP </div>

        </div>
    );
};

export default Hub;