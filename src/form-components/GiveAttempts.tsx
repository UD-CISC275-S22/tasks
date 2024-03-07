import React, { useState } from "react";
import { setConstantValue } from "typescript";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [reqAttemp, setReqAttempt] = useState(0);
    const [updatedAttempts, setUpdatedAttempts] = useState(attempts);

    function useAttemp() {
        setAttempts((prev) => prev - 1);
    }

    const gainAttempts = (event: React.ChangeEvent<HTMLInputElement>) => {
        const convertToNum = Number(event.target.value);
        setReqAttempt(convertToNum);
    };
    const changeAttempt = () => {
        if (reqAttemp > 0) {
            const newAttempts = attempts + reqAttemp;
            setUpdatedAttempts(newAttempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <button onClick={useAttemp}>use</button>
            <form>
                <input
                    placeholder="Enter a number"
                    type="number"
                    onChange={gainAttempts}
                ></input>
                <button onClick={changeAttempt}>gain</button>
            </form>
            <p>Attemps Left: {updatedAttempts}</p>
        </div>
    );
}
