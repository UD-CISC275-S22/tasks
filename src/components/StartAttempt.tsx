import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inprogress, setInprogress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    // function progress(): void {
    //     setInprogress(inprogress ? false : true);
    // }

    function startQuiz(): void {
        setAttempts(attempts - 1);
        setInprogress(inprogress ? false : true);
    }

    function stopQuiz(): void {
        setInprogress(inprogress ? false : true);
    }

    function Mulligan(): void {
        setAttempts(4 - attempts);
    }
    return (
        <div>
            {attempts > 0 ? (
                inprogress ? (
                    <div>
                        <Button onClick={stopQuiz}>stop Quiz</Button>
                    </div>
                ) : (
                    <div>
                        <Button onClick={startQuiz}>start Quiz</Button>{" "}
                        {attempts}
                        <Button onClick={Mulligan}>Mulligan</Button>{" "}
                        {4 - attempts}
                    </div>
                )
            ) : inprogress ? (
                <div>
                    <Button onClick={stopQuiz}>stop Quiz</Button>
                </div>
            ) : (
                <div>
                    <Button onClick={Mulligan}>Mulligan</Button> 4
                </div>
            )}
        </div>
    );

    // return (
    //     <div>
    //         <Button onClick={progress}>
    //             {inprogress ? "stop Quiz" : "start Quiz"}
    //         </Button>
    //         {!inprogress && (
    //             <div>
    //                 {startQuiz} {() => setAttempts(attempts - 1)} {attempts}
    //             </div>
    //         )}
    //         {inprogress && <div>{stopQuiz}</div>};
    //         <Button onClick={progress}>Mulligan</Button>
    //         {inprogress && <div>{() => setAttempts(4 - attempts)}</div>}
    //     </div>
    // );

    // const [counter, setCounter] = useState<number>(0);
    // const [visible, setVisible] = useState<boolean>(true);
    // const [times, setTimes] = useState<number>(4);
    // const [type, setType] = useState<string>("start Quiz");
    // function startStop(): void {
    //     setTimes(times - 1);
    //     setType(type == "start Quiz" ? "stop Quiz" : "start Quiz");
    //     if (times <= 0) {
    //         setVisible(!visible);
    //     }
    // }
    // function Mulligan(): void {
    //     setCounter(counter + 1);
    //     if (type == "stop Quiz") {
    //         setVisible(!visible);
    //     }
    // }
}
