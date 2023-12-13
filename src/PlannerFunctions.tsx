import { useState } from "react";
import { Plan } from "./interfaces/Plan";
import { Course } from "./interfaces/Course";
import { Semester } from "./interfaces/Semester";
import catalog from "./catalog.json";
import { EmptyPlan } from "./degrees/EmptyPlan";

export const usePlannerFunctions = (initialPlans: Plan) => {
    const [semestersData, setSemestersData] = useState(initialPlans.semesters);
    const [searchTerm, setSearchTerm] = useState("");
    const [showCourseList, setShowCourseList] = useState(false);
    const [allSemestersVisible, setAllSemestersVisible] = useState(true);
    const [coursesVisibility, setCoursesVisibility] = useState(
        Array(semestersData.length).fill(true)
    );
    const [selectedSemester, setSelectedSemester] = useState<string | null>(
        null
    );
    const [moveCourseData, setMoveCourseData] = useState<{
        fromSemesterIndex: number | null;
        courseIndex: number | null;
        toSemesterId: string;
    }>({
        fromSemesterIndex: null,
        courseIndex: null,
        toSemesterId: ""
    });

    const [plans, setPlans] = useState<Plan[]>(
        Array.isArray(initialPlans) ? initialPlans : [initialPlans]
    );
    const [currentPlanIndex, setCurrentPlanIndex] = useState<number>(0);

    const [currentPlan, setCurrentPlan] = useState(plans[currentPlanIndex]);

    const handleResetCourse = (semesterIndex: number, courseIndex: number) => {
        const originalCourse =
            semestersData[semesterIndex].courses[courseIndex].original;

        if (originalCourse) {
            const updatedSemesters = [...semestersData];
            updatedSemesters[semesterIndex].courses[courseIndex] = {
                ...originalCourse
            };
            setSemestersData(updatedSemesters);
        } else {
            alert("Original course details not found. Reset failed.");
        }
    };

    const handleEditCourse = (
        semesterIndex: number,
        courseIndex: number,
        updatedCourse: Course
    ) => {
        const updatedSemesters = [...semestersData];
        updatedSemesters[semesterIndex].courses[courseIndex].original =
            updatedSemesters[semesterIndex].courses[courseIndex].original || {
                ...updatedSemesters[semesterIndex].courses[courseIndex]
            };

        updatedSemesters[semesterIndex].courses[courseIndex] = {
            ...updatedSemesters[semesterIndex].courses[courseIndex],
            ...updatedCourse
        };
        setSemestersData(updatedSemesters);
    };

    // const handlePlanChange = (index: number) => {
    //     setCurrentPlanIndex(index);
    // };

    const handleInsertPlan = () => {
        const newPlan: Plan = {
            id: String(plans.length + 1),
            title: `New Plan ${plans.length + 1}`,
            semesters: [...EmptyPlan.semesters]
        };
        setPlans(prevPlans => [...prevPlans, newPlan]);
        setCurrentPlanIndex(plans.length);
    };

    const handleRemovePlan = () => {
        if (plans.length > 1) {
            const updatedPlans = [...plans];
            updatedPlans.splice(currentPlanIndex, 1);
            setPlans(updatedPlans);

            const newIndex =
                currentPlanIndex === plans.length - 1
                    ? currentPlanIndex - 1
                    : currentPlanIndex;
            setCurrentPlanIndex(newIndex);
        } else {
            alert(
                "Cannot remove the only plan. Please insert a new plan first."
            );
        }
    };

    const handleMoveCourseStart = (
        semesterIndex: number,
        courseIndex: number
    ) => {
        setMoveCourseData({
            fromSemesterIndex: semesterIndex,
            courseIndex,
            toSemesterId: ""
        });
    };

    const handleMoveCourseConfirm = () => {
        const { fromSemesterIndex, courseIndex, toSemesterId } = moveCourseData;

        if (
            fromSemesterIndex !== null &&
            courseIndex !== null &&
            toSemesterId
        ) {
            const toSemesterIndex = semestersData.findIndex(
                semester => semester.id === toSemesterId
            );

            if (toSemesterIndex !== -1) {
                const updatedSemesters = [...semestersData];
                const [course] = updatedSemesters[
                    fromSemesterIndex
                ].courses.splice(courseIndex, 1);
                updatedSemesters[toSemesterIndex].courses.push(course);
                setSemestersData(updatedSemesters);
                setMoveCourseData({
                    fromSemesterIndex: null,
                    courseIndex: null,
                    toSemesterId: ""
                });
                alert("Course moved successfully!");
            } else {
                alert("Invalid destination semester. Course not moved.");
            }
        } else {
            alert("Please select a destination semester.");
        }
    };

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

    const handleCourseSelected = (selectedCourse: Course) => {
        if (selectedSemester) {
            const semesterIndex = semestersData.findIndex(
                semester => semester.id === selectedSemester
            );

            if (semesterIndex !== -1) {
                handleInsertCourse(semesterIndex, selectedCourse);
                alert(
                    selectedCourse.code +
                        " was added successfully to " +
                        selectedSemester
                );
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

    const handleInsertSemester = () => {
        const SecondToLastSemester = semestersData[semestersData.length - 2];
        const lastSemester = semestersData[semestersData.length - 1];
        semestersData.pop();
        const newSemester: Semester = {
            id: getNextSemesterName(SecondToLastSemester),
            season: getNextSeason(SecondToLastSemester),
            year: getNextYear(SecondToLastSemester),
            courses: [],
            skip: false
        };

        setSemestersData(prevSemesters => [
            ...prevSemesters,
            newSemester,
            lastSemester
        ]);
        setCoursesVisibility(prevVisibility => [...prevVisibility, true, true]);
    };

    const getNextSemesterName = (lastSemester: Semester | undefined) => {
        if (!lastSemester) return "Fall 2023";

        return lastSemester.season === "Fall"
            ? `${parseInt(lastSemester.year, 10) + 1}`
            : `Fall ${lastSemester.year}`;
    };

    const getNextSeason = (lastSemester: Semester | undefined) => {
        if (!lastSemester) return "Fall";

        return lastSemester.season === "Fall" ? "Spring" : "Fall";
    };

    const getNextYear = (lastSemester: Semester | undefined) => {
        if (!lastSemester) return "2023";

        return lastSemester.season === "Fall"
            ? (parseInt(lastSemester.year, 10) + 1).toString()
            : lastSemester.year;
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

    const getSeasonsHeaderColor = (semesterId: string | string[]) => {
        if (semesterId.includes("Spring")) {
            return "#cfe2f3";
        } else if (semesterId.includes("Fall")) {
            return "#ffcccb";
        } else {
            return "transparent";
        }
    };

    return {
        semestersData,
        setSemestersData,
        searchTerm,
        setSearchTerm,
        showCourseList,
        setShowCourseList,
        coursesVisibility,
        setCoursesVisibility,
        allSemestersVisible,
        setAllSemestersVisible,
        selectedSemester,
        setSelectedSemester,
        handleSearchTermChange,
        filteredCourses,
        semesterOptions,
        handleCourseSelected,
        handleSkipToggle,
        handleInsertCourse,
        handleInsertSemester,
        handleEditCourse,
        handleClearCourses,
        handleRemoveCourse,
        handleRemoveSemester,
        handleClearAllSemesters,
        handleToggleVisibility,
        handleToggleAllSemestersVisibility,
        moveCourseData,
        handleMoveCourseStart,
        setMoveCourseData,
        handleMoveCourseConfirm,
        plans,
        currentPlanIndex,
        currentPlan,
        // handlePlanChange,
        handleInsertPlan,
        handleRemovePlan,
        handleResetCourse,
        setCurrentPlan,
        getSeasonsHeaderColor
    };
};
