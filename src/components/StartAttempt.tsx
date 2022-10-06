import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //return <div>Start Attempt</div>;
    const [attemptNum, setNum] = useState<number>(4);
    const [quiz, setQuiz] = useState<boolean>(false);
    function addOne(): void {
        //make a clicks variable that checks how many time mulligan was clicked
        setNum(attemptNum + 1);
        setQuiz(false);
    }
    function minusOne(): void {
        //make a check for if there are no attempts left, then dont allow to start quiz.
        //see if you can disable both buttons in your return
        //change this so that it checks if attempt num -1 = 0,then set checkattempt to false
        //if (attemptNum != 0) {
        setQuiz(true);
        setNum(attemptNum - 1);
        //}
    }
    return (
        <div>
            <div>
                Current Attempt: <span>{attemptNum}</span>
                <Button onClick={() => addOne()} disabled={quiz}>
                    Mulligan
                </Button>
            </div>
            <Button
                onClick={() => minusOne()}
                disabled={quiz || attemptNum === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setQuiz(false)} disabled={!quiz}>
                Stop Quiz
            </Button>
        </div>
    );
}
