import React, {useState} from 'react';
import './CodeRunner.css';


const CodeRunner = () => {

    const [code, setCode] = useState(`print('Hello World')`);
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
                language_id: 71,
                source_code: encodedCode,
                expected_output: btoa("Hello World\n"),
            }),
        });

        const result = await response.json();
        setOutput(result.stdout ? atob(result.stdout) : result.stderr || "No output");
        setStatus(result.status?.description || "Unknown");
        setLoading(false);

    };


    return (
        <div className='code-runner'>
          <h2>Coding Challenge</h2>
          <p><strong>Challenge:</strong> Write a program that prints "Hello World"</p>
    
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