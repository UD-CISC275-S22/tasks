import React, { useState } from "react";
import { Class } from "../interfaces/class";
import QuickAdd from "./QuickAdd";
import SlowAdd from "./SlowAdd";

import { Button, Row, Col, Form /*Button*/ } from "react-bootstrap";
// import { degreePlan } from "../interfaces/degreePlan";
import { semester } from "../interfaces/semster";

//UNCOMMENT SLOW, QUICK, CLASS WHEN READY TO WORK ON THEM
// TRY TO MAKE (SET) SEMARR FROM SEM LABELS WITH FUNCTION, ASSIGN EACH SEM WITH THE NAME FROM LABLES WITH MAP
export function SingleMultipleSemester(): JSX.Element {
    const [semester1, setSemester1] = useState<string>("");
    const [year1, setYear1] = useState<string>("");
    const [semArr, setSemArr] = useState<semester[]>([]);
    const [semLabels, setSemLabels] = useState<string[]>([]);
    const [semArrClicked, setSemArrClicked] = useState<semester[]>(semArr);
    const [clicked, setClicked] = useState<boolean>(false);
    //const [degreePlan, setDegreePlan] = useState<degreePlan>();
    const [, /*semesterClasses*/ setSemesterClasses] = useState<Class[]>([]);
    function addRowPerClass(semClasses: Class[]) {
        const tableCell = semClasses.map(
            // eslint-disable-next-line no-extra-parens
            (course: Class): JSX.Element => (
                <Row key={course.semester}>
                    <Col>
                        {course.courseCode}
                        {": "}
                        {course.courseTitle}
                    </Col>
                    <Col>{course.credits}</Col>
                </Row>
            )
        );
        return tableCell;
    }
    function addClasstoTable(semesters: semester[]) {
        const finalTable = semesters.map((sem: semester): JSX.Element[] =>
            addRowPerClass(sem.classes)
        );
        return finalTable;
    }
    // function addRowPerClass(semClasses: Class[]) {
    //     const tableCell = semClasses.map(
    //         // eslint-disable-next-line no-extra-parens
    //         (course: Class): JSX.Element => (
    //             <Row key={course.semester}>
    //                 <Col>
    //                     {course.courseCode}
    //                     {": "}
    //                     {course.courseTitle}
    //                 </Col>
    //                 <Col>{course.credits}</Col>
    //             </Row>
    //         )
    //     );
    //     return tableCell;
    // }
    // function addRowPerClass(semester00: semester) {
    //     const semClasses = semester00.classes;
    //     const tableCell = semClasses.map(
    //         // eslint-disable-next-line no-extra-parens
    //         (course: Class): JSX.Element => (
    //             <Row key={course.semester}>
    //                 <Col>
    //                     {course.courseCode}
    //                     {": "}
    //                     {course.courseTitle}
    //                 </Col>
    //                 <Col>{course.credits}</Col>
    //             </Row>
    //         )
    //     );
    //     console.log("semClasses --------------");
    //     console.log(semClasses);
    //     return tableCell;
    // }
    function addtable(semester: semester) {
        return (
            <div>
                {/* github is not letting me push it when this is active, uncomment when ready to work */}
                <div>
                    <Col>
                        <h4>
                            <u>{semester.name}</u>
                        </h4>
                        <div></div>
                        <Row>
                            <Col>Course</Col>
                            <Col>Number of Credits</Col>
                        </Row>
                        {addClasstoTable(semArr)}
                        {/* {<div>{addRowPerClass(semester)}</div>} */}
                        {/* <Row>
                            <Col>{testClass.courseTitle}</Col>
                            <Col>{testClass.credits}</Col>
                        </Row> */}
                        {/* <Row>
                            <Col>{semester.classes[1].courseTitle}</Col>
                            <Col>{semester.classes[1].credits}</Col>
                        </Row> */}
                        {/* <Row>
                            <Col>{semesterClasses[2].courseTitle}</Col>
                            <Col>{semesterClasses[2].credits}</Col>
                        </Row>
                        <Row>
                            <Col>{semesterClasses[3].courseTitle}</Col>
                            <Col>{semesterClasses[3].credits}</Col>
                        </Row>
                        <Row>
                            <Col>{semesterClasses[4].courseTitle}</Col>
                            <Col>{semesterClasses[4].credits}</Col>
                        </Row> */}
                        {/* <Row>
                            <Col>6</Col>
                            <Col>6.1</Col>
                        </Row>
                        <Row>
                            <Col>7</Col>
                            <Col>7.1</Col>
                        </Row>
                        <Row>
                            <Col>8</Col>
                            <Col>8.1</Col>
                        </Row> */}
                    </Col>
                </div>
            </div>
        );
    }
    function createSemester(name: string, classes: Class[]) {
        return { name: name, classes: classes };
    }
    // function extractClasses(semArr1: semester[]){
    //     const classesArr = semArr1.map((sem: semester): Class[] => sem.classes);
    //     return classesArr;
    // }
    // ADD TO SEMESTER CLASSES USING A FUNCTION W/ SPREAD OPERATOR TO ADD TO ARRAY
    // function addClassToSem(course: Class) {
    //     if (!semesterClasses.includes(course)) {
    //         const classArr = [...semesterClasses, course];
    //         setSemesterClasses(classArr);
    //         semesterClasses.length++;
    //     }
    // }
    function addToCorrectSem(course: Class, semArr0: semester[]) {
        //const classYearSem = course.semester + " " + course.year;
        // if (semArr.includes(classYearSem)) {
        //     addClassToSem(course);
        // }
        // setSemArr([...semArr, { name: classYearSem, classes: [testClass] }]);
        const updatedSem = semArr0.map((sem: semester): semester => {
            // console.log(sem.name);
            // console.log(course.semester);
            //console.log(classYearSem);
            if (sem.name === course.semester) {
                sem.classes.push(course);
                addClasstoTable(semArr);
                //addRowPerClass(course);
            }
            // if (sem.name === classYearSem) {
            //     // const sems = [
            //     //     ...semArr,
            //     //     { name: classYearSem, classes: [...sem.classes, course] }
            //     // ];
            //     sem.classes.push(course);
            //     console.log("Hello 1");
            //     //setSemArr(sems);
            //     // const OGclasses = extractClasses(sem);
            //     // const updatedClasses = [...sem.classes, {}];
            // }
            return sem;
        });
        //addRowPerClass(testClass);
        setSemArr(updatedSem);
        console.log("Hello 2");
        addClasstoTable(semArr);
        console.log(semArr);
    }
    function addCourse(): JSX.Element {
        //console.log(semesterClasses);
        return (
            <div>
                <h4>Search for your course, or manually input your course.</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ marginRight: "5px" }}>
                        <QuickAdd
                            onCourseInfo={(
                                courseInfo: Class & {
                                    semester: string;
                                    year: string;
                                }
                            ): void => {
                                // {
                                //     console.log(courseInfo);
                                // }
                                // setSemesterClasses((prevState) => [
                                //     ...prevState,
                                //     courseInfo
                                // ]);
                                //setSemester1(courseInfo.semester);
                                //setYear1(courseInfo.year);
                                //addSemLabel(semester1, year1);
                                //addClassToSem(courseInfo);
                                addToCorrectSem(courseInfo, semArr);
                                //addRowPerClass(courseInfo);
                            }}
                        />
                    </div>
                    <div className="separator"></div>
                    <div style={{ marginLeft: "5px" }}>
                        <SlowAdd
                            onCourseInfo={function (courseInfo: Class): void {
                                setSemesterClasses((prevState) => [
                                    ...prevState,
                                    courseInfo
                                ]);
                                setSemester1(courseInfo.semester);
                                setYear1(courseInfo.year);
                                addSemLabel(semester1, year1);
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Make a helper function to add information to the table.(Add/Remove from array?)
    function addForClicked(clickedArr: semester[]) {
        const tables = clickedArr.map(
            (clickedSem: semester): JSX.Element => {
                if (clickedSem) {
                    addtable(clickedSem);
                }
                //console.log("Hello 3");
                return addtable(clickedSem);
            }
            //clickedSem ? addtable(clickedSem) : addtable(clickedSem)
        );
        //console.log("Hello 4");
        return tables;
    }
    function updateSemester1(event: React.ChangeEvent<HTMLInputElement>) {
        setSemester1(event.target.value);
    }
    function updateYear1(event: React.ChangeEvent<HTMLInputElement>) {
        setYear1(event.target.value);
    }
    function toLabels(semArr1: semester[]) {
        const labelArr = semArr1.map((sem: semester): string => sem.name);
        return labelArr;
    }
    function updateSemClicked(event: React.ChangeEvent<HTMLInputElement>) {
        setClicked(true);
        const sem = event.target.value;
        const labelArr = toLabels(semArrClicked);
        if (!labelArr.includes(sem)) {
            //semArrClicked.push(createSemester(sem));
            setSemArrClicked([...semArrClicked, createSemester(sem, [])]);
        } else {
            setSemArrClicked(semArrClicked.filter((e) => e.name !== sem));
        }
        // console.log(semLabels);
        // console.log(semArrClicked);
    }
    function toSemester(strArr: string[]) {
        const semesters = strArr.map((semStr: string) =>
            createSemester(semStr, [])
        );
        setSemArr(semesters);
    }
    function addSemLabel(sem1: string, year1: string) {
        const semYearCombined = sem1 + " " + year1;
        if (!semLabels.includes(semYearCombined)) {
            const sems = [...semLabels, semYearCombined];
            setSemLabels(sems);
        }
        toSemester(semLabels);
    }
    return (
        <div>
            {addCourse()}
            <h3>Single Semester</h3>
            <Form.Group controlId="formCreateSemester">
                <Form.Label>Input Semester:</Form.Label>
                <Button onClick={() => addSemLabel(semester1, year1)}>
                    Enter
                </Button>
                <Form.Control value={semester1} onChange={updateSemester1} />
                Semester
                <Form.Control value={year1} onChange={updateYear1} />
                Year
                <Col>
                    {semLabels.map((sem: string) => {
                        return (
                            <div key={sem} style={{ marginBottom: "4px" }}>
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    name="semesters"
                                    onChange={updateSemClicked}
                                    id="semseter-buttons"
                                    label={sem}
                                    value={sem}
                                />
                            </div>
                        );
                    })}
                    <div></div>
                </Col>
            </Form.Group>
            <div>
                {clicked
                    ? addForClicked(semArrClicked)
                    : "Enter and Click semester(s) to view classes"}
            </div>
            {/* <div>{RemoveSemester()}</div> */}
        </div>
    );
}
//     const [semester1, setSemester1] = useState<string>("");
//     const [year1, setYear1] = useState<string>("");
//     const [semArr, setSemArr] = useState<semester[]>([]);
//     const [semLabels, setSemLabels] = useState<string[]>([]);
//     const [semArrClicked, setSemArrClicked] = useState<semester[]>(semArr);
//     const [clicked, setClicked] = useState<boolean>(false);
//     //const [degreePlan, setDegreePlan] = useState<degreePlan>();
//     const [semesterClasses, setSemesterClasses] = useState<Class[]>([]);
//     function addRowPerClass(semClasses: Class[]) {
//         const tableCell = semClasses.map(
//             // eslint-disable-next-line no-extra-parens
//             (course: Class): JSX.Element => (
//                 <Row key={course.semester}>
//                     <Col>
//                         {course.courseCode}
//                         {": "}
//                         {course.courseTitle}
//                     </Col>
//                     <Col>{course.credits}</Col>
//                 </Row>
//             )
//         );
//         return tableCell;
//     }
//     function addTable(semester: string) {
//         return (
//             <div>
//                 {/* github is not letting me push it when this is active, uncomment when ready to work */}
//                 <div>
//                     <Col>
//                         <h4>
//                             <u>{semester}</u>
//                         </h4>
//                         <div></div>
//                         <Row>
//                             <Col>Course</Col>
//                             <Col>Number of Credits</Col>
//                         </Row>
//                         <div>{addRowPerClass(semesterClasses)}</div>
//                         {/* <Row>
//                             <Col>{semesterClasses[0].courseTitle}</Col>
//                             <Col>{semesterClasses[0].credits}</Col>
//                         </Row>
//                         <Row>
//                             <Col>{semesterClasses[1].courseTitle}</Col>
//                             <Col>{semesterClasses[1].credits}</Col>
//                         </Row>
//                         <Row>
//                             <Col>{semesterClasses[2].courseTitle}</Col>
//                             <Col>{semesterClasses[2].credits}</Col>
//                         </Row>
//                         <Row>
//                             <Col>{semesterClasses[3].courseTitle}</Col>
//                             <Col>{semesterClasses[3].credits}</Col>
//                         </Row>
//                         <Row>
//                             <Col>{semesterClasses[4].courseTitle}</Col>
//                             <Col>{semesterClasses[4].credits}</Col>
//                         </Row>
//                         <Row>
//                             <Col>6</Col>
//                             <Col>6.1</Col>
//                         </Row>
//                         <Row>
//                             <Col>7</Col>
//                             <Col>7.1</Col>
//                         </Row>
//                         <Row>
//                             <Col>8</Col>
//                             <Col>8.1</Col>
//                         </Row> */}
//                     </Col>
//                 </div>
//             </div>
//         );
//     }
//     // ADD TO SEMESTER CLASSES USING A FUNCTION W/ SPREAD OPERATOR TO ADD TO ARRAY
//     function addClassToSem(course: Class) {
//         if (!semesterClasses.includes(course)) {
//             const classArr = [...semesterClasses, course];
//             setSemesterClasses(classArr);
//             semesterClasses.length++;
//         }
//     }
//     function addToCorrectSem(course: Class, semArr: semester[]) {
//         const classYearSem = course.semester + " " + course.year;
//         //Map through semArr and comapere to sem name, when they equal add the class to the semester
//         const semArrWithClasses = semArr.map((sem: semester) => {
//             if (sem.name === classYearSem) {
//                 addClassToSem(course);
//             }
//         });
//         return semArrWithClasses;
//         // if (semArr.includes(classYearSem)) {
//         //     addClassToSem(course);
//         // }
//     }
//     function addCourse(): JSX.Element {
//         //console.log(semesterClasses);
//         return (
//             <div>
//                 <h4>Search for your course, or manually input your course.</h4>
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                     <div style={{ marginRight: "5px" }}>
//                         <QuickAdd
//                             onCourseInfo={(
//                                 courseInfo: Class & {
//                                     semester: string;
//                                     year: string;
//                                 }
//                             ): void => {
//                                 {
//                                     console.log(courseInfo);
//                                 }
//                                 // setSemesterClasses((prevState) => [
//                                 //     ...prevState,
//                                 //     courseInfo
//                                 // ]);
//                                 //setSemester1(courseInfo.semester);
//                                 //setYear1(courseInfo.year);
//                                 // addSemLabel(semester1, year1);
//                                 addClassToSem(courseInfo);
//                                 addToCorrectSem(courseInfo, semArr);
//                                 {
//                                     console.log(semesterClasses);
//                                 }
//                             }}
//                         />
//                     </div>
//                     <div className="separator"></div>
//                     <div style={{ marginLeft: "5px" }}>
//                         <SlowAdd
//                             onCourseInfo={function (courseInfo: Class): void {
//                                 setSemesterClasses((prevState) => [
//                                     ...prevState,
//                                     courseInfo
//                                 ]);
//                                 setSemester1(courseInfo.semester);
//                                 setYear1(courseInfo.year);
//                                 //addSemLabel(semester1, year1);
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Make a helper function to add information to the table.(Add/Remove from array?)
//     function addForClicked(clickedArr: semester[]) {
//         const tables = clickedArr.map(
//             (clickedSem: semester): void => {
//                 if (clickedSem) {
//                     addTable(clickedSem.name);
//                 }
//             }
//             // do an if statement here (curly braces??)
//             // clickedSem ? addtable(clickedSem.name) : addtable(clickedSem)
//         );
//         return tables;
//     }
//     function updateSemester1(event: React.ChangeEvent<HTMLInputElement>) {
//         setSemester1(event.target.value);
//     }
//     function updateYear1(event: React.ChangeEvent<HTMLInputElement>) {
//         setYear1(event.target.value);
//     }
//     function updateSemClicked(event: React.ChangeEvent<HTMLInputElement>) {
//         setClicked(true);
//         const sem = event.target.value;
//         const newClickedArr = semArrClicked.map(
//             (clickedSem: semester): void => {
//                 if (semArrClicked.includes(clickedSem)) {
//                     setSemArrClicked(
//                         semArrClicked.filter((e) => e.name !== sem)
//                     );
//                 } else {
//                     setSemArrClicked([...semArrClicked, clickedSem]);
//                 }
//             }
//         );
//         return newClickedArr;
//         // if (semArrClicked.includes(sem)) {
//         //     setSemArrClicked(semArrClicked.filter((e) => e !== sem));
//         // } else {
//         //     setSemArrClicked([...semArrClicked, sem]);
//         // }
//     }
//     // THIS BELOW IS THE MAIN PROBLEM, IT IS A DISASTER
//     function addSemLabel(sem1: string, year1: string, semArrOG: semester[]) {
//         const semYearCombined = sem1 + " " + year1;
//         const semNames = semArrOG.map((sem: semester): string => sem.name);
//         const semWithLabels = [...semNames, semYearCombined];
//         //semArrOG.push({ name: semYearCombined, classes: [] });
//         setSemLabels(semWithLabels);
//         // semArrOG.map(
//         //     (sem: semester): void => {
//         //         if (!semArr.includes(sem)) {
//         //             const sems = [
//         //                 ...semArr,
//         //                 { name: semYearCombined, classes: [] }
//         //             ];
//         //             setSemArr(sems);
//         //         }
//         //     }
//         //     // do an if statement here (curly braces??)
//         //     // clickedSem ? addtable(clickedSem.name) : addtable(clickedSem)
//         // );
//         // const semArrOG = [{ name: semYearCombined, classes: [] }];
//         //setSemArr(semArrOG);
//         console.log(semLabels);
//         //return semArr;
//         //Filter for the name
//         // if (!semArr.includes(semYearCombined)) {
//         //     const sems = [...semArr, { name: semYearCombined, classes: [] }];
//         //     setSemArr(sems);
//         // }
//     }
//     return (
//         <div>
//             {addCourse()}
//             <h3>Single Semester</h3>
//             <Form.Group controlId="formCreateSemester">
//                 <Form.Label>Input Semester:</Form.Label>
//                 <Button onClick={() => addSemLabel(semester1, year1, semArr)}>
//                     Enter
//                 </Button>
//                 <Form.Control value={semester1} onChange={updateSemester1} />
//                 Semester
//                 <Form.Control value={year1} onChange={updateYear1} />
//                 Year
//                 <Col>
//                     {/* mapping through semester until name is in clicked semester */}
//                     {semArr.map((sem: semester) => {
//                         return (
//                             <div key={sem.name} style={{ marginBottom: "4px" }}>
//                                 <Form.Check
//                                     inline
//                                     type="checkbox"
//                                     name="semesters"
//                                     onChange={updateSemClicked}
//                                     id="semseter-buttons"
//                                     label={sem}
//                                     value={sem.name}
//                                 />
//                             </div>
//                         );
//                     })}
//                     <div></div>
//                 </Col>
//             </Form.Group>
//             <div>
//                 {clicked
//                     ? addForClicked(semArrClicked)
//                     : "Enter and Click semester(s) to view classes"}
//             </div>
//             {/* <div>{RemoveSemester()}</div> */}
//         </div>
//     );
// }
