import React, { useState } from "react";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    return (
        <div>
            <div>{attempts}</div>
            <button 
                onClick={() => {setProgress(true); setAttempts(attempts - 1);}} 
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </button>
            <button onClick={() => setProgress(false)} disabled={!progress}>
                Stop Quiz
            </button>
            <button onClick={() => setAttempts(attempts + 1)} disabled={progress}>
                Mulligan
            </button>
        </div>
    );
}
