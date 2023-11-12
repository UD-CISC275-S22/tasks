import React from "react";
import "./App.css";
///import { Button } from "react-bootstrap";
import { data } from "./classData";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD Course Planner</header>
            <p>
                James Lloyd, Kerry Ferguson, Matthew Conlon, Caleb Sachetti,
                Arnav Baliyan
            </p>
            <p> List of Degree Plans: </p>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Credits</th>
                </tr>
            </table>
        </div>
    );
}

export default App;
