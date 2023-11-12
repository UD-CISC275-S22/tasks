import React, { useState } from "react";

interface Course {
    code: string;
    title: string;
    credits: number;
}

interface Semester {
    id: number;
    name: string;
    courses: Course[];
}

export function App() {
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const [selectedSemester, setSelectedSemester] = useState<string>("Fall");
    const [newCourse, setNewCourse] = useState<Course>({
        code: "",
        title: "",
        credits: 0
    });

    const addSemester = () => {
        const newSemesterObj: Semester = {
            id: semesters.length + 1,
            name: selectedSemester,
            courses: []
        };
        setSemesters([...semesters, newSemesterObj]);
    };

    const addCourse = (semesterId: number) => {
        if (newCourse.code && newCourse.title && newCourse.credits > 0) {
            setSemesters((prevSemesters) =>
                prevSemesters.map((semester) =>
                    semester.id === semesterId
                        ? {
                              ...semester,
                              // eslint-disable-next-line indent
                              courses: [...semester.courses, newCourse]
                          }
                        : semester
                )
            );
            setNewCourse({ code: "", title: "", credits: 0 });
        }
    };

    const deleteSemester = (id: number) => {
        const updatedSemesters = semesters.filter(
            (semester) => semester.id !== id
        );
        setSemesters(updatedSemesters);
    };

    const deleteCourse = (semesterId: number, courseIndex: number) => {
        setSemesters((prevSemesters) =>
            prevSemesters.map((semester) =>
                semester.id === semesterId
                    ? {
                          ...semester,
                          courses: semester.courses.filter(
                              (_, index) => index !== courseIndex
                          )
                      }
                    : semester
            )
        );
    };

    const semesterOptions = ["Fall", "Winter", "Spring", "Summer"];

    return (
        <div>
            <h1>Semester Tracker</h1>
            <div>
                <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
                >
                    {semesterOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <button onClick={addSemester}>Add Semester</button>
            </div>
            <ul>
                {semesters.map((semester) => (
                    <li key={semester.id}>
                        <div>
                            Semester: {semester.name}
                            <button onClick={() => deleteSemester(semester.id)}>
                                Delete Semester
                            </button>
                        </div>
                        <div className="courses">
                            {semester.courses.map((course, courseIndex) => (
                                <div key={courseIndex} className="course">
                                    <span>
                                        Course Code: {course.code}
                                        <br />
                                        Course Title: {course.title}
                                        <br />
                                        Credits: {course.credits}
                                    </span>
                                    <button
                                        onClick={() =>
                                            deleteCourse(
                                                semester.id,
                                                courseIndex
                                            )
                                        }
                                    >
                                        Delete Course
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div>
                            <input
                                type="text"
                                value={newCourse.code}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        code: e.target.value
                                    })
                                }
                                placeholder="Course Code"
                            />
                            <input
                                type="text"
                                value={newCourse.title}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        title: e.target.value
                                    })
                                }
                                placeholder="Course Title"
                            />
                            <input
                                type="number"
                                value={newCourse.credits}
                                onChange={(e) =>
                                    setNewCourse({
                                        ...newCourse,
                                        credits: +e.target.value
                                    })
                                }
                                placeholder="Credits"
                            />
                            <button onClick={() => addCourse(semester.id)}>
                                Add Course
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
=======
import "./App.css";
import { GenerateCSV, Import } from "./CSV";
import { WelcomeMessage } from "./Name";
import { DegreePlan } from "./interfaces/degreeplan";
import degreeplan_json from "./dummy_data.json";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    //load in json data
    const DEGREEPLANS: DegreePlan[] = degreeplan_json.map(
        (dp: DegreePlan): DegreePlan => ({ ...dp }) //dp = degreeplan
    );
    //this is the initial data that every user starts with
    let loaded_data = DEGREEPLANS;
    //this will be the key we use to access previous data
    const SAVE_KEY = "MY-PAGE-DEGREEPLANS";
    const previousData = localStorage.getItem(SAVE_KEY);
    //load data into loaded_data (will either overwrite loaded_data with previous data if user is not new or keep initial loaded data if user it new)
    if (previousData !== null) {
        loaded_data = JSON.parse(previousData);
    }

    const [importData, setImportData] = useState<string>("");
    //degreePlans will store and maintain the users degree plans, whenever they save their work it will be stored here
    const [degreePlans, setdegreePlans] = useState<DegreePlan[]>(loaded_data);

    function saveData() {
        localStorage.setItem(SAVE_KEY, JSON.stringify(degreePlans));
        console.log(setdegreePlans); //will delete only here to satisfy typescript
    }

    return (
        <div className="App">
            <header className="App-header">
                University of Delaware Computer Science Degree Plan
                <p>
                    <WelcomeMessage></WelcomeMessage>
                </p>
                <p>
                    <ul className="horizontal-list">
                        <li> Aidan Bell </li>
                        <li>Lawrence Collins </li>
                        <li>Nicky Reigel</li>
                        <li>Melvin Rau</li>
                        <li>Victor Vasquez</li>
                    </ul>
                </p>
            </header>
            <div />
            <GenerateCSV
                data={[
                    ["First Name", "Last Name"],
                    ["Nicky", "Reigel"],
                    ["Aidan", "Bell"]
                ]}
                filename="testexport"
            />
            <div />
            <Import importData={importData} setImportData={setImportData} />
            <div className="div-alightleft">
                <div className="App-blockleft">
                    <p>sample block left</p>
                </div>
            </div>
            <div className="div-alignright">
                <div className="App-blockright">
                    <p>sample block right</p>
                </div>
            </div>
            <Button onClick={saveData}>Save Degree Plans</Button>
        </div>
    );
}

export default App;
