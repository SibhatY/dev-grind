import React, { useEffect, useState } from "react";
import { loadProgress } from "../utils/storage";
import "./PlayerStats.css";

const PlayerStats = () => {
  const [level, setLevel] = useState(1);
  const [xp, setXP] = useState(0);

  useEffect(() => {
    const { level, xp } = loadProgress();
    setLevel(level);
    setXP(xp);
  }, []);

  return (
    <div className="player-stats">
      <p>Level: <strong>{level}</strong></p>
      <p>XP: <strong>{xp}/{level * 100}</strong></p>
    </div>
  );
};

export default PlayerStats;
