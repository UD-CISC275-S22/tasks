import React from "react";
import "./App.css";
import Modal from "react-modal";
import { ModalBody } from "react-bootstrap";
//import { Button } from "react-bootstrap";
//import { data } from "./classData";
function App(): JSX.Element {
    const modal = document.getElementById("myModal") as HTMLElement;
    const btn = document.getElementById("myBtn") as HTMLElement;
    const span = document.getElementsByClassName("close")[0] as HTMLElement;
    btn.onclick = () => {
        modal.style.display = "block";
    };
    span.onclick = () => {
        modal.style.display = "none";
    };
    window.onclick = (event: Event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
    return (
        <div className="App">
            <header className="App-header">UD Course Planner</header>
            <p>
                James Lloyd, Kerry Ferguson, Matthew Conlon, Caleb Sachetti,
                Arnav Baliyan
            </p>
            <button id="myBtn">Show Instructions</button>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Sample Text</p>
                </div>
            </div>
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
