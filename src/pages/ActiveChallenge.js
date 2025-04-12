import React from "react";
import { useParams } from "react-router-dom";
import challenges from "../data/challenges";
import CodeRunner from "../components/CodeRunner";

const ActiveChallenge = () => {

  const { id } = useParams();
  const challenge = challenges.find((c) => c.id === parseInt(id));

  return (
    <div>
      <h2>Active Glitch</h2>
      <CodeRunner challenge={challenge} />
    </div>
  );
};

export default ActiveChallenge;
