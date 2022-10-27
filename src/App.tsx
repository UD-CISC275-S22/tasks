import React, { useState } from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { Button } from "react-bootstrap";
//import { ShowHideTasks } from "./tasks/ShowHideTasks";

function App(): JSX.Element {
    const [quizzer, setQuizzer] = useState<boolean>(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <Button
                    onClick={() => {
                        setQuizzer(!quizzer);
                    }}
                >
                    {quizzer ? "Quizzer" : "Tasks"}
                </Button>
            </header>
            <div style={{ display: quizzer ? "block" : "none" }}>
                <Quizzer></Quizzer>
            </div>
        </div>
    );
}

export default App;
