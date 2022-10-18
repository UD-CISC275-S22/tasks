import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { StartAttempt } from "./components/StartAttempt";

function App(): JSX.Element {
    // Make a variable based on some State. No problem!
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Alejandro Silva
            </header>
            <hr></hr>
            <StartAttempt></StartAttempt>
        </div>
    );
}

export default App;
