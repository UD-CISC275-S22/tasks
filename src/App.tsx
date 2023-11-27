// import React /*{ useState }*/ from "react";
// import "./App.css";
// import { ViewSemester } from "./Components/Semester";
// //import { Welcome } from "./Components/welcome";
// //import { Button } from "react-bootstrap";
// //import { clearSemester } from "./Components/clearingSemester";
// //import { clearCourse } from "./Components/clearingCourse";

// function App(): JSX.Element {
//     //constants for welcome message button/modal
//     //const [displayWelcomeMessage, displayWelcomeModal] = useState(true);
//     //const welcomeMessage = () => displayWelcomeModal(false);
//     //const welcomeMessageModal = () => displayWelcomeModal(true);

//     return (
//         <div className="App">
//             <header className="App-header">
//                 UD CISC275 - Degree Planner
//                 <h6>Matthew Mestre</h6>
//                 <h6>Bryant Ferguson</h6>
//                 <h6>Ava West</h6>
//                 <h6>Malika Iyer</h6>
//                 <h6>Dina Dawood</h6>
//             </header>
//             <hr></hr>
//             {/*This is the collaspe button*/}
//             <button
//                 type="button"
//                 className="btn btn-info "
//                 data-bs-toggle="collapse"
//                 data-bs-target="#welcome_message"
//             >
//                 Need Help❓
//             </button>
//             <hr></hr>
//             {/*When the button is clicked the message collapses*/}
//             <div id="welcome_message" className="collapse">
//                 <p>
//                     Welcome to your personal Degree Planner! Some basic tools
//                     have been designed to make your visit accessible to your
//                     needs; this includes creating new plans from scratch and/or
//                     compiling data from a csv file. You will be able to add,
//                     remove, edit, and save various courses/semesters in a
//                     multitude of plans. Scroll to the bottom of the page for
//                     more instructions (will enhance later by making an
//                     expandable/disposable button near the top of the page).
//                 </p>
//             </div>

//             <hr></hr>
//             <ViewSemester></ViewSemester>
//         </div>
//     );
// }

// export default App;

import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./App.css";

import AllCoursesList from "./data/AllCourseList.json";
import degreeList from "./data/degreeList.json";

import { Welcome } from "./Components/welcome";
import { AddingCourse } from "./Components/addingCourse";
import { AddingSemester } from "./Components/addingSemester";
import { AddingPlan } from "./Components/plan";
import { ClearCourse } from "./Components/clearingCourse";
import { ClearSemester } from "./Components/clearingSemester";
import { ClearingPlan } from "./Components/clearingPlan";
import { ViewCourses } from "./Components/course";
import { ViewSemester } from "./Components/Semester";
import { courseOrigin } from "./Components/courseOrigin";

import { Course } from "./Interfaces/course";
import { Semester } from "./Interfaces/semester";
import { Plan } from "./Interfaces/plan";

const SemesterFinal = ViewSemester.map(
    (semester: Semester): Semester => ({
        ...semester,
        courseList: semester.courseList.map(
            (course): Course => ({
                id: course.id,
                title: course.title,
                name: course.name,
                description: course.description,
                credits: course.credits,
                semester: course.semester,
                department: course.department,
                prereq: course.prereq,
                coreq: course.coreq,
                requirements: course.requirements
            })
        )
    })
);

function App(): JSX.Element {
    const [planList, settingPlanList] = useState<Plan[]>([
        {
            id: 1,
            title: "Plan #1",
            concentration: "Artificial Intelligence",
            semesters: SemesterFinal,
            credits: 0
        },
        {
            id: 2,
            title: "Plan #2",
            concentration: "Cybersecurity",
            semesters: SemesterFinal,
            credits: 0
        }
    ]);

    const [plan, settingPlan] = useState<Plan>(planList[0]);
    const [addingMod, settingAddingMod] = useState(false);
    function addingSemester(newSemester: Semester) {
        const origin = plan.semesters.find(
            (semester: Semester): boolean => semester.id === newSemester.id
        );
        if (origin === undefined) {
            plan.semesters.push(newSemester);
            settingPlan(plan);
        }
    }

    function clearingSemester(id: number) {
        const newPlan: Plan = {
            ...plan,
            semesters: plan.semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        };
        settingPlan(newPlan);
        settingPlanList(
            planList.map((p: Plan): Plan => (p.id === newPlan.id ? newPlan : p))
        );
    }
    //constants for welcome message button/modal
    //const [displayWelcomeMessage, displayWelcomeModal] = useState(true);
    //const welcomeMessage = () => displayWelcomeModal(false);
    //const welcomeMessageModal = () => displayWelcomeModal(true);

    type CourseRecord = Record<string, Record<string, Course>>;
    const AllCourseLst: CourseRecord = AllCoursesList;

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
        </div>
    );
}

export default App;
