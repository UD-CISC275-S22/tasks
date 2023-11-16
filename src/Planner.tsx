/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./Planner.css";
import CourseList from "./CourseList";
import catalog from "./catalog.json";

interface Course {
    code: string;
    name: string;
    descr: string;
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}

interface Semester {
    id: string;
    season: string;
    year: string;
    courses: Course[];
    skip: boolean;
}

interface Plan {
    id: string;
    title: string;
    semesters: Semester[];
}

interface Planner {
    plan: Plan;
}

const Planner: React.FC<Planner> = ({ plan }) => {
    const [semestersData, setSemestersData] = useState(plan.semesters);
    const [searchTerm, setSearchTerm] = useState("");
    const [showCourseList, setShowCourseList] = useState(false);
    const [coursesVisibility, setCoursesVisibility] = useState(
        Array(semestersData.length).fill(true)
    );
    const [allSemestersVisible, setAllSemestersVisible] = useState(true);

    const filteredCourses = Object.values(catalog)
        .flatMap(department => Object.values(department))
        .filter(course => {
            const normalizedSearchTerm = searchTerm.toLowerCase();
            const matchesSearchTerm =
                course.code.toLowerCase().includes(normalizedSearchTerm) ||
                course.code.split(" ")[1].includes(normalizedSearchTerm);

            return matchesSearchTerm;
        });
    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setShowCourseList(e.target.value.trim().length > 0);
    };

    const semesterOptions = semestersData.map(semester => ({
        value: semester.id,
        label: semester.season + " " + semester.year
    }));
    const [selectedSemester, setSelectedSemester] = useState<string | null>(
        null
    );

    const handleCourseSelected = (selectedCourse: Course) => {
        if (selectedSemester) {
            const semesterIndex = semestersData.findIndex(
                semester => semester.id === selectedSemester
            );

            if (semesterIndex !== -1) {
                handleInsertCourse(semesterIndex, selectedCourse);
            } else {
                alert("Invalid semester selection. Course not added.");
            }
        } else {
            alert("Please select a semester before adding a course.");
        }
    };

    const handleSkipToggle = (index: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].skip = !updatedSemesters[index].skip;
        setSemestersData(updatedSemesters);
    };

    const handleClearCourses = (index: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].courses = [];
        setSemestersData(updatedSemesters);
    };

    const handleInsertCourse = (index: number, newCourse: Course) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].courses.push(newCourse);
        setSemestersData(updatedSemesters);
    };

    const handleRemoveCourse = (index: number, courseIndex: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[index].courses.splice(courseIndex, 1);
        setSemestersData(updatedSemesters);
    };
    const handleEditCourse = (
        semesterIndex: number,
        courseIndex: number,
        updatedCourse: Course
    ) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[semesterIndex].courses[courseIndex] = updatedCourse;
        setSemestersData(updatedSemesters);
    };
    const handleInsertSemester = () => {
        const lastSemester = semestersData[semestersData.length - 1];
        const newSemester: Semester = {
            id: getNextSemesterName(lastSemester),
            season: getNextSeason(lastSemester),
            year: getNextYear(lastSemester),
            courses: [],
            skip: false
        };

        setSemestersData(prevSemesters => [...prevSemesters, newSemester]);
        setCoursesVisibility(prevVisibility => [...prevVisibility, true]);
    };

    const getNextSemesterName = (lastSemester: Semester | undefined) => {
        if (!lastSemester) return "Fall 2023";

        return lastSemester.season === "Fall"
            ? `Spring ${lastSemester.year}`
            : `Fall ${parseInt(lastSemester.year, 10) + 1}`;
    };

    const getNextSeason = (lastSemester: Semester | undefined) => {
        if (!lastSemester) return "Fall";

        return lastSemester.season === "Fall" ? "Spring" : "Fall";
    };

    const getNextYear = (lastSemester: Semester | undefined) => {
        if (!lastSemester) return "2023";

        return lastSemester.season === "Fall"
            ? lastSemester.year
            : (parseInt(lastSemester.year, 10) + 1).toString();
    };

    const handleRemoveSemester = (index: number) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters.splice(index, 1);
        setSemestersData(updatedSemesters);
    };
    const handleClearAllSemesters = () => {
        setSemestersData([]);
    };
    const handleToggleVisibility = (index: number) => {
        const updatedVisibility = [...coursesVisibility];
        updatedVisibility[index] = !updatedVisibility[index];
        setCoursesVisibility(updatedVisibility);
    };
    const handleToggleAllSemestersVisibility = () => {
        setAllSemestersVisible(!allSemestersVisible);
        setCoursesVisibility(
            Array(semestersData.length).fill(!allSemestersVisible)
        );
    };
    return (
        <div className="semester-courses">
            <select
                value={selectedSemester || ""}
                onChange={e => setSelectedSemester(e.target.value || null)}
            >
                <option value="" disabled>
                    Selected Semester
                </option>
                {semesterOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Search by Course Code"
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
            {showCourseList && (
                <CourseList
                    courses={filteredCourses}
                    onCourseSelected={handleCourseSelected}
                />
            )}
            <h1 onClick={handleToggleAllSemestersVisibility}>{plan.title}</h1>
            {allSemestersVisible && (
                <>
                    <button onClick={handleInsertSemester}>
                        Insert New Semester
                    </button>
                    <button onClick={handleClearAllSemesters}>
                        Clear All Semesters
                    </button>
                </>
            )}
            {semestersData.map((semester, semesterIndex) => (
                <div
                    key={semesterIndex}
                    style={{ display: allSemestersVisible ? "block" : "none" }}
                >
                    {semester.skip ? (
                        <h2>{semester.id}(Skipped)</h2>
                    ) : (
                        <h2
                            onClick={() =>
                                handleToggleVisibility(semesterIndex)
                            }
                        >
                            {semester.id}
                        </h2>
                    )}
                    <div className="semester-buttons">
                        <button onClick={() => handleSkipToggle(semesterIndex)}>
                            {semester.skip ? "Unskip" : "Skip"}
                        </button>
                        {coursesVisibility[semesterIndex] && (
                            <div>
                                <button
                                    onClick={() =>
                                        handleClearCourses(semesterIndex)
                                    }
                                >
                                    Clear Courses in Semester
                                </button>
                                <button
                                    onClick={() =>
                                        handleInsertCourse(semesterIndex, {
                                            code: "NEWCOURSE Code",
                                            name: "New Course",
                                            descr: "New Descr",
                                            credits: "3",
                                            preReq: "New PreReq",
                                            restrict: "New Restrict",
                                            breadth: "New Breadth",
                                            typ: "New Typ"
                                        })
                                    }
                                >
                                    Insert New Course
                                </button>
                            </div>
                        )}
                        <button
                            onClick={() => handleRemoveSemester(semesterIndex)}
                        >
                            Remove Semester
                        </button>
                    </div>
                    {coursesVisibility[semesterIndex] && !semester.skip ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Course Name</th>
                                    <th>Credits</th>
                                    <th>Description</th>
                                    <th>Prerequisites</th>
                                    <th>Restrictions</th>
                                    <th>Breadth</th>
                                    <th>Typically Offered</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semester.courses.map((course, courseIndex) => (
                                    <tr key={courseIndex}>
                                        <td>{course.code}</td>
                                        <td>{course.name}</td>
                                        <td>{course.credits}</td>
                                        <td>{course.descr}</td>
                                        <td>{course.preReq}</td>
                                        <td>{course.restrict}</td>
                                        <td>{course.breadth}</td>
                                        <td>{course.typ}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleEditCourse(
                                                        semesterIndex,
                                                        courseIndex,
                                                        {
                                                            code:
                                                                prompt(
                                                                    "Enter new code",
                                                                    course.code
                                                                ) ||
                                                                course.code,
                                                            name:
                                                                prompt(
                                                                    "Enter new name",
                                                                    course.name
                                                                ) ||
                                                                course.name,
                                                            descr:
                                                                prompt(
                                                                    "Enter new description",
                                                                    course.descr
                                                                ) ||
                                                                course.descr,
                                                            credits:
                                                                prompt(
                                                                    "Enter new credits",
                                                                    course.credits
                                                                ) ||
                                                                course.credits,
                                                            preReq:
                                                                prompt(
                                                                    "Enter new prerequisites",
                                                                    course.preReq
                                                                ) ||
                                                                course.preReq,
                                                            restrict:
                                                                prompt(
                                                                    "Enter new restrictions",
                                                                    course.restrict
                                                                ) ||
                                                                course.restrict,
                                                            breadth:
                                                                prompt(
                                                                    "Enter new breadth",
                                                                    course.breadth
                                                                ) ||
                                                                course.breadth,
                                                            typ:
                                                                prompt(
                                                                    "Enter new typically offered",
                                                                    course.typ
                                                                ) || course.typ
                                                        }
                                                    )
                                                }
                                            >
                                                Edit Course
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleRemoveCourse(
                                                        semesterIndex,
                                                        courseIndex
                                                    )
                                                }
                                            >
                                                Remove Course
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : null}
                </div>
            ))}
        </div>
    );
};

export { Planner };
export type { Course };
