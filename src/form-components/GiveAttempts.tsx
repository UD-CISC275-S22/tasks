import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [reqAttemp, setReqAttempt] = useState(0);

    function useAttemp() {
        if (attempts > 0) {
            setAttempts((prev) => prev - 1);
        }
    }

    const gainAttempts = (event: React.ChangeEvent<HTMLInputElement>) => {
        const convertToNum = Number(event.target.value);
        setReqAttempt(convertToNum);
    };
    const changeAttempt = (event: React.FormEvent) => {
        event.preventDefault();
        if (reqAttemp > 0) {
            const newAttempts = attempts + reqAttemp;
            setAttempts(newAttempts);
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <button onClick={useAttemp} disabled={attempts === 0}>
                use
            </button>
            <form onSubmit={changeAttempt}>
                <input
                    placeholder="Enter a number"
                    type="number"
                    onChange={gainAttempts}
                ></input>
                <button type="submit">gain</button>
            </form>
            <p>Attempts Left: {attempts}</p>
        </div>
    );
}
