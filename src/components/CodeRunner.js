import React, { useState } from 'react';
import './CodeRunner.css';
import { addXP, loadProgress, saveProgress } from '../utils/storage';
import '../data/challenges';


const CodeRunner = ({ challenge }) => {

  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;



  const handleSubmit = async () => {

    setLoading(true);
    setOutput("");
    setStatus(null);

    const encodedCode = btoa(code);

    const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      body: JSON.stringify({
        language_id: challenge.language_id,
        source_code: encodedCode,
        expected_output: btoa(challenge.expectedOutput),
      }),
    });

    const result = await response.json();
    setOutput(result.stdout ? atob(result.stdout) : result.stderr || "No output");
    setStatus(result.status?.description || "Unknown");
    setLoading(false);

    if (result.status?.id === 3) {

      addXP(100);

      if (challenge.type === "rankTrial") {
        const progress = loadProgress();

        if (!progress.rankProgress.includes(challenge.id)) {
          
          progress.rankProgress.push(challenge.id);

          if (challenge.id === 3 && progress.rank === "E") {

            progress.rank = "D";
            alert("Rank up! You are now Rank D.");
          }
          if (challenge.id === 6 && progress.rank === "D") {

            progress.rank = "C";
            alert("Rank up! You are now Rank C.");
          }
          saveProgress(progress);
        }
      }
    }
  };


  return (
    <div className='code-runner'>
      <h2>Coding Challenge</h2>
      <p><strong>Challenge:</strong> {challenge.prompt}</p>

      <textarea className='code-textarea'
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={6}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Running..." : "Run Code"}
      </button>

      {status && (
        <div style={{ marginTop: "1rem" }}>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Output:</strong></p>
          <pre className='output-box'>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeRunner;