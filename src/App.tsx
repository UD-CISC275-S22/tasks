import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div
            style={{
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                padding: "20px",
            }}
        >
            <header style={{ marginBottom: "20px" }}>
                <h1
                    style={{
                        backgroundColor: "#f0a500",
                        color: "white",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        padding: "20px",
                        borderRadius: "8px",
                        margin: 0,
                    }}
                >
                    UD CISC275 with React Hooks and TypeScript
                </h1>
                {/* Adding this to pass text.test.tsx */}
                <p>Hello World</p>
            </header>

            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
            <hr />
            <CycleHoliday />
        </div>
    );
}

export default App;
