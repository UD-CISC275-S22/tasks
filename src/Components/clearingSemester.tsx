export {}; //just for MVP purposes
/*import React, { useState } from "react";
import { courseList } from "./course";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
import { ViewSemester } from "./Semester";
import { Degree } from "../Interfaces/degree";

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
    const [displayClearSemester, setSemesterCleared] = useState(true);
    const displayedSemester = () => setSemesterCleared(false);
    const clearSemestersModal = () => setSemesterCleared(true);
    function saveEdits() {
        currentSemester.courseList = [] as Course[];
        closed();
    }
    function clearing() {
        if (SemCount === 1 && SemesterType === "Fall") {
            setFallSemester({ ...fallSemester, CourseList: []});
        } else if (SemCount === 1 && SemesterType === "Spring") {
            setSpringSemester({ ...springSemester, courseList: [] });
        } else if (SemCount === 2) {
            setFallSemester({ ...fallSemester, courseList: []});
            setSpringSemester({ ...springSemester, courseList: [] });
        }
    }
    //Collapsable button: Asks for confirmation before deleting semester
    return (
        <div>
            <Modal onClicked={clicked} onClose={closed} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        You are deleting this current semester, do you confirm?
                    </p>
                </Modal.Body>
            </Modal>
            <div>
                {/* handling clearing semester}
                <clearSemester
                    clicked={displayClearSemester}
                    closed={displayedSemester}
                ></clearSemester>
                <Button onClick={clearSemestersModal}> Clear </Button>
            </div>
        </div>
    );
}
*/
