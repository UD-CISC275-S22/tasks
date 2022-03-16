import React from "react";
import appSketch from "../Assets/sketch.jpg";

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <img src={appSketch} alt="App Sketch" />
            <ul>
                <li>Added Sketch</li>
            </ul>
        </div>
    );
}
