// import courseListAll from "../data/AllCourseList.json";
// import { Course, Department } from "../Interfaces/course";

// /*
// making a Course[] constant of the AllCourses json file
// DON'T remake this courseList in another file. Just import this constant and you can copy it into a const if you want
// then work on that list in that file (this acts more like an interface)
// */

// export const courseList: Course[] = courseListAll.map(
//     //remember you only need to deep copy data structures over
//     (course): Course => ({
//         ...course,
//         semester: course.semester,
//         department: course.department as Department,
//         prereq: course.prereq,
//         coreq: course.coreq,
//         requirements: course.requirements
//     })
// );

// //sees if an id (passed in as a paramtetr) is in the total courseList - based on json file
// export function findCourse(courseList: Course[], id: number): Course | number {
//     const filteredList = courseList.filter((course) => course.id === id);
//     if (filteredList.length > 1) {
//         return 0;
//     } else if (filteredList.length == 0) {
//         return 0;
//     } else {
//         return filteredList[0];
//     }
// }

// //Students can edit the course code, course title, and credits of a course in the plan
// export function editCourse(
//     course: Course,
//     newTitle: string,
//     newName: string,
//     newCredits: number
// ): Course {
//     const newCourse: Course = {
//         ...course,
//         title: newTitle,
//         name: newName,
//         credits: newCredits
//     };
//     return newCourse;
// }

import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import { ClearCourse } from "./clearingCourse";
import "../App.css";

export function ViewCourses({
    course,
    courseSemester,
    currentPlan,
    settingPlan
}: {
    course: Course;
    courseSemester: Semester;
    currentPlan: Plan;
    settingPlan: (t: Plan) => void;
}): JSX.Element {
    const [title] = useState(course.title);
    const [name] = useState(course.name);
    const [description] = useState(course.description);
    const [credits] = useState(course.credits);
    const [offering] = useState(course.semester);
    const [department] = useState(course.department);
    const [prereq] = useState(course.prereq);
    const [coreq] = useState(course.coreq);
    const [requirements] = useState(course.requirements);
    //const [editing, settingEditing] = useState<boolean>(false);
    //const [addingMod, setAddingMod] = useState(false);
    //const handleCloseAddMod = () => setAddingMod(false);
    //const handleAddingMod = () => setAddingMod(true);
    //const [visible, settingVisibility] = useState<boolean>(false);

    // function isVisibile(): void {
    //     settingVisibility(!visible);

    // }
    return (
        <div>
            {courseSemester.courseList.findIndex(
                (c: Course): boolean => c.title === course.title
            ) != -1 && (
                <div>
                    <Form.Group controlId="courseTitle">
                        <Form.Label>Course ID: </Form.Label>
                        <Form.Control value={title} />
                    </Form.Group>
                    <Form.Group controlId="courseName">
                        <Form.Label>Course Name: </Form.Label>
                        <Form.Control value={name} />
                    </Form.Group>
                    <Form.Group controlId="courseDescription">
                        <Form.Label>Description: </Form.Label>
                        <Form.Control value={description} />
                    </Form.Group>
                    <Form.Group controlId="courseCredits">
                        <Form.Label>Credits: </Form.Label>
                        <Form.Control value={credits} />
                    </Form.Group>
                    <Form.Group controlId="courseOffering">
                        <Form.Label>Offering: </Form.Label>
                        <Form.Control value={offering} />
                    </Form.Group>
                    <Form.Group controlId="courseDepartment">
                        <Form.Label>Department: </Form.Label>
                        <Form.Control value={department} />
                    </Form.Group>
                    <Form.Group controlId="coursePrereq">
                        <Form.Label>Prereqs: </Form.Label>
                        <Form.Control value={prereq} />
                    </Form.Group>
                    <Form.Group controlId="courseCoreq">
                        <Form.Label>Coreqs: </Form.Label>
                        <Form.Control value={coreq} />
                    </Form.Group>
                    <Form.Group controlId="courseRequirements">
                        <Form.Label>Requirements: </Form.Label>
                        <Form.Control value={requirements} />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
