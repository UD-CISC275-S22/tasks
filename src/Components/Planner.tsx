/* eslint-disable no-extra-parens */
import React, { /*useEffect,*/ useState } from "react";
import { Class } from "../interfaces/class";
import QuickAdd from "./QuickAdd";
import SlowAdd from "./SlowAdd";
import EditCourse from "./EditCourses";
import allClasses from "../data/allClasses.json";
//import DeleteCourses from "./DeleteCourses";

// ------------add this
import { degreePlan } from "../interfaces/degreePlan";
import { Views } from "../interfaces/viewProps";
//------------------------------------------------

import { Button, Row, Col, Form /*Button*/ } from "react-bootstrap";
import { semester } from "../interfaces/semster";

//-------------------------------------------------------------------------edit
export function Planner({
    CurrentdegreePlan,
    setCurrentView,
    setCurrentDegreePlan,
    setDegreePlanList,
    DegreePlanList
}: {
    CurrentdegreePlan: degreePlan;
    setCurrentView: (view: Views) => void;
    setCurrentDegreePlan: (degreePlan: degreePlan) => void;
    setDegreePlanList: (degreePlan: degreePlan[]) => void;
    DegreePlanList: degreePlan[];
}): JSX.Element {
    //export function SingleMultipleSemester(): JSX.Element { ----------------adding to DegreePlan
    const [semester1, setSemester1] = useState<string>("");
    const [semArr, setSemArr] = useState<semester[]>([]);
    //const [courses, setCourses] = useState<Class[]>([]); // State for courses

    // useEffect(() => {
    //     setSemArr(CurrentdegreePlan.semesters || []);
    // }, [CurrentdegreePlan]);

    function saveToLocalStorage(degreePlan: degreePlan, showMessage = true) {
        try {
            const storedValue = localStorage.getItem("degreePlans");
            const savedDegreePlans = storedValue ? JSON.parse(storedValue) : [];
            const existingIndex = savedDegreePlans.findIndex(
                (plan: { name: string }) => plan.name === degreePlan.name
            );

            if (existingIndex !== -1) {
                savedDegreePlans[existingIndex] = degreePlan;
            } else {
                savedDegreePlans.push(degreePlan);
            }

            localStorage.setItem(
                "degreePlans",
                JSON.stringify(savedDegreePlans)
            );

            if (showMessage) {
                alert("Degree Plan saved successfully!");
            }
        } catch (error) {
            console.error("Error handling localStorage:", error);
            alert("Error handling localStorage. Please try again.");
        }
    }

    function saveDegreePlan() {
        const updatedDegreePlan: degreePlan = {
            ...CurrentdegreePlan,
            semesters: semArr
        };
        setCurrentDegreePlan(updatedDegreePlan);
        saveToLocalStorage(updatedDegreePlan);
    }

    function loadFromLocalStorage(planName: string): degreePlan | null {
        try {
            const storedValue = localStorage.getItem("degreePlans");
            const savedDegreePlans = storedValue ? JSON.parse(storedValue) : [];

            const loadedDegreePlan = savedDegreePlans.find(
                (plan: degreePlan) => plan.name === planName
            );

            return loadedDegreePlan || null;
        } catch (error) {
            console.error(
                "Error loading degree plan from localStorage:",
                error
            );
            return null;
        }
    }

    const handleEditFormSubmit = (
        OGcourseCode: string,
        updatedCourse: Class
    ) => {
        // Assuming you have an array of courses in state
        // const updatedCourses = semArr.map((course: Class) =>
        //     course.courseCode === updatedCourse.courseCode
        //         ? updatedCourse
        //         : course
        // );
        //const deepCopy = semArr.map((sem: semester): semester => ({ ...sem }));
        console.log(updatedCourse, OGcourseCode);
        const updatedCourses = semArr.map((sem: semester): semester => {
            return {
                name: sem.name,
                classes: [
                    ...sem.classes.map(
                        (course: Class): Class =>
                            OGcourseCode === course.courseCode
                                ? updatedCourse
                                : course
                    )
                ]
            };
        });
        // Update your state with the new array of courses
        console.log(OGcourseCode);
        setSemArr(updatedCourses);
        console.log(semArr);

        // Clear the editing state
        // setEditingCourse(null);
    };

    const [semArrClicked, setSemArrClicked] = useState<semester[]>(semArr);
    const [clicked, setClicked] = useState<boolean>(false);

    //add clear Semester here-----------------------------------------------------EDIT
    function clear() {
        setSemArr([]); //clears semester array, one issue: when wanting to go back, we need to save all the changes made,
        //back to the degreePlanList and currentDegreePlan
        //saveDegreePlan();
    }
    function goBackClick() {
        const newDegreePlan: degreePlan = {
            ...CurrentdegreePlan,
            semesters: semArr
        };

        // Save the current degree plan to local storage without showing the message
        saveToLocalStorage(newDegreePlan, false);

        const newDegreePlanList: degreePlan[] = DegreePlanList.map(
            (degreePlan: degreePlan): degreePlan =>
                degreePlan.name === CurrentdegreePlan.name
                    ? newDegreePlan
                    : degreePlan
        );

        // Load the saved degree plan from local storage
        const loadedDegreePlan = loadFromLocalStorage(CurrentdegreePlan.name);

        if (loadedDegreePlan) {
            setCurrentView(Views.degreePlanView);
            setCurrentDegreePlan(loadedDegreePlan);
            setDegreePlanList(newDegreePlanList);
        } else {
            // Handle the case where loading from local storage fails
            alert("Error loading degree plan. Please try again.");
        }
    }
    function revertCourse(course: Class) {
        const revertTo = allClasses.find(
            (course0: Class): boolean => course0.courseCode === course.OGcode
        );
        if (revertTo) {
            const newSemArr = semArr.map((sem: semester): semester => {
                return {
                    name: sem.name,
                    classes: [
                        ...sem.classes.map(
                            (course1: Class): Class =>
                                course.OGcode === course1.OGcode
                                    ? revertTo
                                    : course1
                        )
                    ]
                };
            });
            setSemArr(newSemArr);
        }
    }

    //----------------------------------------------------IMPORT/EXPORT
    const handleExportSemesters = () => {
        const fileName = prompt(
            "Please enter a name for your file: ",
            "semester.json"
        );
        //Default filename is semester.json
        if (fileName === null) return; //If user clicks cancel, do nothing
        const allSemesters = [...semArr, ...CurrentdegreePlan.semesters];
        const jsonContent = JSON.stringify(allSemesters); //Convet the array of semesters to a json string
        const blob = new Blob([jsonContent], { type: "application/json" }); //Create a blob of the json content

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const fileRef = React.createRef<HTMLInputElement>();

    const handleImportClick = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };
    const handleImportSemesters = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target;
        if (file.files && file.files[0]) {
            const reader = new FileReader(); //FileReader reads through the JSON file

            reader.onload = (e) => {
                try {
                    const importedSemesters = JSON.parse(
                        e.target?.result as string
                    );

                    setSemArr(importedSemesters); //update semArr state with imported semesters
                } catch (err) {
                    window.alert("Invalid file. Please try again");
                    file.value = "";
                } //Used ChatGPT to help out here. I was unsure of how to check for invalid file formats, so I had ChatGPT explain some options, and this seemed like the best one.
                // Before the file is read, the file input is checked to see if it is a valid file. If it is not, the file input is cleared and the user is alerted.
            };
            reader.readAsText(file.files[0]);
        }
    };
    //----------------------------------------------------EDIT

    //const [degreePlan, setDegreePlan] = useState<degreePlan>();
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
                    <Col>
                        <Button
                            onClick={() =>
                                removeClass(course.courseCode, semArr)
                            }
                        >
                            Remove
                        </Button>
                    </Col>
                    <Col>
                        <EditCourse
                            course={course}
                            onEditFormSubmit={handleEditFormSubmit}
                        />
                        <Button onClick={() => revertCourse(course)}>
                            Revert
                        </Button>
                    </Col>
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
    function addtable(semester: semester) {
        // console.log(semester.classes);
        return (
            <div>
                <div>
                    <Col>
                        <h4>
                            <u>{semester.name}</u>
                        </h4>
                        <div></div>
                        <Row>
                            <Col>Course</Col>
                            <Col>Number of Credits</Col>
                            <Col>Remove Course</Col>
                            <Col>Edit Course</Col>
                        </Row>
                        {addClasstoTable([semester])}
                        <Button
                            onClick={() => clearAllClasses(semester)}
                            disabled={semester.classes.length === 0}
                        >
                            Clear All Classes in {semester.name}
                        </Button>
                        <br></br>
                        <Button
                            onClick={() => removeSemester(semester, semArr)}
                        >
                            Remove {semester.name}
                        </Button>
                    </Col>
                    <br></br>
                </div>
            </div>
        );
    }
    function removeClass(courseCode: string, semsArr: semester[]) {
        const removedClassArr = semsArr.map((sem: semester): semester => {
            return {
                name: sem.name,
                classes: [
                    ...sem.classes.filter(
                        (course: Class): boolean =>
                            course.courseCode !== courseCode
                    )
                ]
            };
        });
        setSemArr(removedClassArr);
        setSemArrClicked(semArr);
    }
    function createSemester(name: string, classes: Class[]) {
        return { name: name, classes: classes };
    }
    function addToCorrectSem(course: Class, semArr0: semester[]) {
        const updatedSem = semArr0.map((sem: semester): semester => {
            if (sem.name === course.semester) {
                sem.classes.push(course);
                setSemArr([...semArr]);
            }
            return sem;
        });
        setSemArr(updatedSem);
        // console.log(semArr);
    }
    function addCourse(): JSX.Element {
        //console.log(semesterClasses);
        return (
            <div>
                <h3 style={{ color: "#1348e7" }}>
                    First, add your semester at the bottom of the page. Next add
                    your courses.
                </h3>
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
                                addToCorrectSem(courseInfo, semArr);
                            }}
                        />
                    </div>
                    <div className="separator"></div>
                    <div style={{ marginRight: "5px" }}>
                        <SlowAdd
                            onCourseInfo={(
                                courseInfo: Class & {
                                    semester: string;
                                    //year: string;
                                }
                            ): void => {
                                addToCorrectSem(courseInfo, semArr);
                                // console.log(semArr);
                            }}
                        />
                    </div>
                    {/* <div style={{ marginLeft: "5px" }}>
                        <SlowAdd
                            onCourseInfo={function (courseInfo: Class): void {
                                // setSemester1(courseInfo.semester);
                                // setYear1(courseInfo.year);
                                // addSemLabel(semester1, year1);
                                addToCorrectSem(courseInfo, semArr);
                                console.log(semArr);
                            }}
                        />
                    </div> */}
                </div>
            </div>
        );
    }
    function clearClasses(semester: semester) {
        semester.classes = [];
        return semester;
    }
    function clearAllClasses(sem: semester) {
        //Im thinking make a button to clear semesters and then add that to the add table function
        //when clicked update it so classes is an empty array or if that doesn't work create a new semester
        // Make a deep copy, check for the name, and then change it from there
        const deepCopy = semArr.map((sem: semester): semester => ({ ...sem }));
        const emptySemArr = deepCopy.map(
            (semester: semester): semester =>
                semester.name === sem.name ? clearClasses(semester) : semester
        );
        //sem.classes = [];
        setSemArr(emptySemArr);
        //return sem;
    }

    function addForClickedSem(clickedArr: semester[]) {
        // console.log(semArr.map((e) => e.name));
        const tables = clickedArr.map((clickedSem: semester): JSX.Element => {
            const semester = semArr.find(
                (element) => element.name === clickedSem.name
            );
            if (semester) {
                return addtable(semester);
            }
            return <></>;
        });
        return tables;
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
            setSemArrClicked([...semArrClicked, createSemester(sem, [])]);
        } else {
            setSemArrClicked(semArrClicked.filter((e) => e.name !== sem));
        }
    }
    function addSemLabel(sem1: string) {
        if (!semArr.map((e) => e.name).includes(sem1)) {
            const sems = [...semArr, createSemester(sem1, [])];
            setSemArr(sems);
        }
    }
    function updateSemester1(event: React.ChangeEvent<HTMLInputElement>) {
        setSemester1(event.target.value);
    }
    function removeSemester(sem0: semester, semsArr: semester[]) {
        const removedClassArr = semsArr.filter(
            (sem: semester): boolean => sem.name !== sem0.name
        );
        setSemArr(removedClassArr);
        setClicked(!clicked);
        setSemArrClicked(removedClassArr);
    }
    return (
        <div>
            <div>
                <Button onClick={handleExportSemesters}>Export</Button>
                <Button onClick={handleImportClick}>Import</Button>
                <input
                    type="file"
                    accept=".json"
                    ref={fileRef}
                    style={{ display: "none" }}
                    onChange={handleImportSemesters}
                />
            </div>
            <div>
                {/* Display your courses */}
                {/* {courses.map((course) => (
                    <div key={course.courseCode}>
                        <p>{course.courseTitle}</p>
                        <p>{course.courseCode}</p>
                        <p>{course.credits}</p>
                        <Button onClick={() => handleEditClick(course)}>
                            Edit
                        </Button>
                    </div>
                ))} */}
                {/* Render the EditCourse component when editing */}
                {/* {editingCourse && (
                    <EditCourse
                        course={editingCourse}
                        onEditFormSubmit={handleEditFormSubmit}
                    />
                )} */}
            </div>
            {addCourse()}
            {/* add Clear Semesters and goBack button */}
            <Form.Group controlId="formCreateSemester">
                <Form.Label>Input Semester:</Form.Label>
                <Button onClick={() => addSemLabel(semester1)}>Enter</Button>
                <Form.Control value={semester1} onChange={updateSemester1} />
                Semester
                <Col>
                    {semArr.map((sem: semester) => {
                        return (
                            <div key={sem.name} style={{ marginBottom: "4px" }}>
                                <Form.Check
                                    inline
                                    type="checkbox"
                                    name="semesters"
                                    onChange={updateSemClicked}
                                    id="semseter-buttons"
                                    data-testid="semesters"
                                    label={sem.name}
                                    value={sem.name}
                                />
                            </div>
                        );
                    })}
                    <div></div>
                </Col>
            </Form.Group>
            {/* {isCoursesAdded && (
                <DeleteCourses onDeleteCourse={onDeleteCourse} />
            )} */}
            <div>
                {clicked
                    ? addForClickedSem(semArrClicked)
                    : "Enter and Click semester(s) to view classes"}
            </div>
            <br></br>
            <div>
                <Button onClick={clear}> Clear Existing Semesters </Button>
                <Button onClick={goBackClick}>Go Back to Degree Plans</Button>
                <Button onClick={saveDegreePlan}>Save Degree Plan</Button>
            </div>
        </div>
    );
}
