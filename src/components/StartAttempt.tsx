import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    //return <div>Start Attempt</div>;
    //const [progress, setProgress] = useState<QuestionType>("short_answer_question");
    const [value, setValue] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    //updating value to true
    function progressOpp(): void {
        setProgress(!progress);
    }

    function allPro(): void {
        setValue(value - 1);
        setProgress(!progress);
    }
    //attempts are 0 disbale
    return (
        <div>
            <span>
                <Button
                    onClick={() => allPro()}
                    disabled={progress || value === 0}
                >
                    Start Quiz
                </Button>
            </span>
            <span>
                <Button onClick={() => setValue(value + 1)} disabled={progress}>
                    Mulligan
                </Button>
            </span>
            <span>
                <Button onClick={() => progressOpp()} disabled={!progress}>
                    {" "}
                    Stop Quiz{" "}
                </Button>
                to {value}.
            </span>
        </div>
    );
}
