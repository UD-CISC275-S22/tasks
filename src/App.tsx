import React from "react";
import "./App.css";
//import { ModalBody } from "react-bootstrap";
//import { Button } from "react-bootstrap";
//import { data } from "./classData";
function App(): JSX.Element {
    /*const modal = document.getElementById("myModal") as HTMLElement;
    const btn = document.getElementById("myBtn") as HTMLElement;
    const span = document.getElementsByClassName("close")[0] as HTMLElement;
    btn.onclick = () => {
        modal.style.display = "block";
    };
    span.onclick = () => {
        modal.style.display = "none";
    };*/
    //caleb pushing again cause he accidently was working in main
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
                    <p>
                        <b>Getting Started:</b>
                    </p>
                    <p>
                        Click the button labeled <b>Add New Plan</b> to create a
                        plan. You can rename it by clicking the apropriate icon
                        that pops up next to the button. Use the{" "}
                        <b>Save Plan Changes</b> button to have the plan show up
                        in the dropdown that contains all plans (including
                        samples).
                    </p>
                    <p>
                        You can use the buttons labeled <b>Add Semester</b> to
                        (you guessed it) add a semester. You can name the
                        semester with the same icon as earlier. To add a course,
                        use the <b>Add Course</b> button.
                    </p>
                    <p>
                        In the dropdown menu, type your course code and click on
                        the course to confirm your selection. You can then use
                        the <b>Add Course</b> button to add it to your semester.
                        You can use the <b>Edit Course</b> button at any point
                        to change these courses. To save your changes, use the{" "}
                        <b>Save Plan Changes</b> button.
                    </p>
                    <p>
                        To delete a course, semseter, or plan, click the
                        associated button. There will be a special delete button
                        for each associated element.
                    </p>
                    <p>
                        The website additionally features degree requirements,
                        which can be accessed from the{" "}
                        <b>Degree Requirements</b> button. This section shows
                        all required courses, as well as some breadth
                        requirements, for a standard bachelors in Computer
                        Science at UD. Courses already taken, including
                        breadths, will have a check mark next to them. Any
                        classes not taken will have an x next to them.
                    </p>
                    <p>
                        Never forget to save plans! Use the{" "}
                        <b>Save Plan Changes</b> button frequently. Feel free to
                        play around with the different tools available as much
                        as you deem necessary.
                    </p>
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
