import React from "react";
import { Button } from "react-bootstrap";
import FileSaver from "file-saver";
import { Semester } from "../../Interfaces/semester";
import { Course } from "../../Interfaces/course";
import { Plan } from "../../Interfaces/plan";

interface ValueProps {
    plans: Plan[];
}
const ExportCSV = (props: ValueProps): JSX.Element => {
    //helper function to handle exporting the schedule as a CSV file
    const exportCSV = () => {
        //initialize headers of the CSV
        let csv =
            "Concentration,Semester-Year,Course-Title,Course-Name,Course-Credits\n";
        props.plans.map((plan) => {
            plan.semesters.map((sem: Semester) => {
                /*
                const courses = props.courses.courseList.filter(
                    (course: Course) => {
                        return course.semester === semester.uuid;
                    }
                ); */
                sem.courseList.forEach((course: Course) => {
                    csv += `${plan.concentration},${
                        sem.year
                    },${course.title.replace(/,/g, " ")},${course.name},${
                        course.credits
                    }\n`;
                });
            });
        });
        // Create a blob of the CSV
        const csvFile = new Blob([csv], { type: "text/csv;charset=utf-8;" });

        // Download the file
        FileSaver.saveAs(csvFile, "schedule.csv");
    };
    return (
        <Button as="a" href="#" onClick={exportCSV} className="export-button">
            Export CSV
        </Button>
    );
};

export default ExportCSV;
