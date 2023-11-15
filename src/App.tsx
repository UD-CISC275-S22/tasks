import React /*{ useState }*/ from "react";
import "./App.css";
import { ViewSemester } from "./Components/Semester";
//import { Welcome } from "./Components/welcome";
//import { Button } from "react-bootstrap";
//import { clearSemester } from "./Components/clearingSemester";
//import { clearCourse } from "./Components/clearingCourse";

function App(): JSX.Element {
    //constants for welcome message button/modal
    //const [displayWelcomeMessage, displayWelcomeModal] = useState(true);
    //const welcomeMessage = () => displayWelcomeModal(false);
    //const welcomeMessageModal = () => displayWelcomeModal(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 - Degree Planner
                <h6>Matthew Mestre</h6>
                <h6>Bryant Ferguson</h6>
                <h6>Ava West</h6>
                <h6>Malika Iyer</h6>
                <h6>Dina Dawood</h6>
            </header>
            <hr></hr>
            {/*This is the collaspe button*/}
            <button
                type="button"
                className="btn btn-info "
                data-bs-toggle="collapse"
                data-bs-target="#welcome_message"
            >
                Need Help❓
            </button>
            <hr></hr>
            {/*When the button is clicked the message collapses*/}
            <div id="welcome_message" className="collapse">
                <p>
                    Welcome to your personal Degree Planner! Some basic tools
                    have been designed to make your visit accessible to your
                    needs; this includes creating new plans from scratch and/or
                    compiling data from a csv file. You will be able to add,
                    remove, edit, and save various courses/semesters in a
                    multitude of plans. Scroll to the bottom of the page for
                    more instructions (will enhance later by making an
                    expandable/disposable button near the top of the page).
                </p>
            </div>

            <hr></hr>
            <ViewSemester></ViewSemester>
        </div>
    );
}

export default App;
