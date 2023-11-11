import React, { useState } from "react";
import "./App.css";

function App(): JSX.Element {
    const [newName, setNewName] = useState<string>("New Name");
    return (
        <div className="App">
            <header className="App-header">Final Project</header>
            <p>James Lloyd, Kerry Ferguson, name3, name4, name5</p>
            <p>Sample Degree Plan</p>
            <p>Fall 2023 Courses: </p>
            <table>
                <tr>
                    <td>Course</td>
                    <td>Credits</td>
                </tr>
                <tr>
                    <td>EGG 101: Introduction to Engineering (FYE)</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>CISC 108: Introduction to Computer Science I</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>MATH 241: Analytic Geomnetry & Calculus A</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>ENGL 110: Seminar in Composition</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Breadth Requirement Elective 1</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Total Number of Credits:</td>
                    <td>15</td>
                </tr>
            </table>
        </div>
    );
}

export default App;
