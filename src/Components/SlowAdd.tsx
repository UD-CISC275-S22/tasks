import React, { useState } from "react";
import { Class } from "../interfaces/class";

//Full Course Form Fillout
interface SlowAddProps {
    onCourseInfo: (courseInfo: Class) => void;
}

function SlowAdd(props: SlowAddProps): JSX.Element {
    const [courseInfo, setCourseInfo] = useState<Class>({
        courseTitle: "",
        courseCode: "",
        numPreReqs: 0,
        preReqs: [],
        credits: 0,
        canEditCredits: true,
        semester: "",
        year: "",
        taken: true,
        note: ""
    });
    const [courseTitle, setCourseTitle] = useState("");
    const [courseCode, setCourseCode] = useState("");
    const [preReqs, setPreReqs] = useState<string[]>([]);
    const [credits, setCredits] = useState(0);
    const [semester, setSemester] = useState("");
    const [year, setYear] = useState("");

    // const handleInputChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    // ) => {
    //     const { name, value } = e.target;

    //     // Update courseInfo based on what is submitted
    //     setCourseInfo((prevCourseInfo) => ({
    //         ...prevCourseInfo,
    //         [name]: name === "credits" ? parseFloat(value) : value
    //     }));
    // };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourseTitle(e.target.value);
    };

    const handleCourseCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourseCode(e.target.value);
    };
    const handlePreReqChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempValue = e.target.value;
        const preReqArray = tempValue.split(",").map((preReq) => preReq.trim());
        setPreReqs(preReqArray);
        //Fix later
    };

    const handleCredits = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredits(parseFloat(e.target.value));
    };
    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    };

    const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSemester(e.target.value);
    };

    const handleAddCourse = (e: React.FormEvent) => {
        e.preventDefault();
        setCourseInfo({
            courseTitle: courseTitle,
            courseCode: courseCode,
            numPreReqs: 0,
            preReqs: preReqs,
            credits: credits,
            canEditCredits: true,
            semester: semester,
            year: year,
            taken: false,
            note: ""
        });
        if (courseInfo) {
            props.onCourseInfo({ ...courseInfo });
        }
    };

    return (
        <form onSubmit={handleAddCourse}>
            <div className="form-group">
                <h3>Full Form</h3>
                <label htmlFor="title">Course Title: </label>
                <input
                    type="text"
                    id="title"
                    name="courseTitle"
                    value={courseTitle}
                    onChange={handleTitleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="courseCode">Course Code: </label>
                <input
                    type="text"
                    id="courseCode"
                    name="courseCode"
                    value={courseCode}
                    onChange={handleCourseCodeChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="preReq">Pre Requisite: </label>
                <input
                    type="text"
                    id="preReq"
                    name="preReqs"
                    value={preReqs.join(", ")}
                    onChange={handlePreReqChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="credits">Credits: </label>
                <input
                    type="number"
                    id="credits"
                    name="credits"
                    value={credits.toString()}
                    onChange={handleCredits}
                    min={1}
                    max={10}
                    defaultValue={0}
                />
            </div>

            <div className="form-group">
                <label htmlFor="semester">Semester:</label>
                <select
                    id="semester"
                    name="semester"
                    value={semester}
                    onChange={handleSemesterChange}
                >
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="year">Year:</label>
                <input
                    id="year"
                    name="year"
                    value={year}
                    onChange={handleYearChange}
                />
            </div>

            <button type="submit">Add Course</button>
        </form>
    );
}

export default SlowAdd;
