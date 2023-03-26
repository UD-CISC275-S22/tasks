import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import styled from "styled-components";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz() {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    function stopQuiz() {
        setProgress(false);
    }
    function mulligan() {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <div style={{ fontSize: "x-large" }}>Start Attempt</div>
            <div style={{ textAlign: "center" }}>
                {" "}
                attempts left: {attempts}
                <div>
                    <Button
                        disabled={progress || attempts === 0}
                        onClick={startQuiz}
                        variant={"outline-dark"}
                    >
                        Start Quiz
                    </Button>
                </div>
                <div>
                    <Button
                        disabled={!progress}
                        onClick={stopQuiz}
                        variant={"outline-dark"}
                    >
                        Stop Quiz
                    </Button>
                </div>
                <div>
                    <Button
                        disabled={progress}
                        onClick={mulligan}
                        variant={"outline-dark"}
                    >
                        Mulligan
                    </Button>
                </div>
            </div>
        </div>
    );
}
