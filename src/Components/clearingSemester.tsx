import React from "react";
import { Modal } from "react-bootstrap";

// import React, { useState } from "react";
// // import { courseList } from "./course";
import "./Semester.css";
import { Course } from "../Interfaces/course";
// import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
// import { Degree } from "../Interfaces/degree";

// export function clearAddButtons({
//     semester,
//     clearSemester,
// }: {
//     semester: Semester;
//     clearSemester: (id: string) => void;
// }): JSX.Element {
//     const [buttons, setButtons] = useState<boolean>(false);
//     const [displayAddCourse, setcourseClicked] = useState(false);
//     const closedAddCourse = () => setcourseClicked(false);
//     const courseClicked = () => setcourseClicked(true);
//     const closedDisplayedCourses = () => setcourseCleared(false);
//     const clearDisplayedCourses = () => setcourseCleared(true);
//     const [clearCourses, setcourseCleared] = useState(false);

//     function changeSaved() {
//         setButtons(!buttons);
//     }

//     return buttons ? (
//         <Container>
//             <Row>
//                 <Col>
//                     <Button
//                         onClick={courseClicked}
//                         variant="primary"
//                     >
//                         Add Course
//                     </Button>
//                     {"  "}

//                     <Button
//                         onClick={clearDisplayedCourses}
//                         variant="warning"
//                     >
//                         Clear Courses
//                     </Button>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

//function that clears all courses in the listed semester
export function clearSemester({
    clicked,
    closed,
    currentSemester
}: {
    clicked: boolean;
    closed: () => void;
    currentSemester: Semester;
}): JSX.Element {
    function saveEdits() {
        currentSemester.courseList = [] as Course[];
        closed();
    }
    //Collapsable button: Asks for confirmation before deleting semester
    return (
        <Modal onClicked={clicked} onClose={closed} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>You are deleting this current semester, do you confirm?</p>
            </Modal.Body>
        </Modal>
    );
}

// function clearSemesterCourses() {
//     //function to clear all courses within a semester
//     if (SemesterType === "Fall") {
//         fallSemester.courseList = [];
//     } else if (SemesterType === "Spring") {
//         springSemester.courseList = [];
//     } else {
//         //setting both course list to empty
//         fallSemester.courseList = [];
//         springSemester.courseList = [];
//     }
// }
