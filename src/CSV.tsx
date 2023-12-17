import React from "react";
import { CSVLink } from "react-csv";
import { CoursePlan, seasonT } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import { Button } from "react-bootstrap";
interface CSVRow {
    planName: string;
    year: string;
    season: string;
    courseTicker: string;
    courseName: string;
    credits: number;
    prereq: string;
    UUID?: string;
    Description?: string;
}

export function ExportToCSV({ coursePlans }: { coursePlans: CoursePlan[] }) {
    const flattenData = (coursePlans: CoursePlan[]): CSVRow[] => {
        const rows: CSVRow[] = [];
        coursePlans.forEach((coursePlan) => {
            coursePlan.years.forEach((year) => {
                ["winter", "spring", "summer", "fall"].forEach((season) => {
                    const semester = year[season as seasonT];
                    if (semester) {
                        semester.courses.forEach((course: Course) => {
                            rows.push({
                                planName: coursePlan.name,
                                year: year.name,
                                season: season,
                                courseTicker: course.ticker,
                                courseName: course.name,
                                credits: course.credits,
                                prereq: course.prereq,
                                UUID: course.UUID || "",
                                Description: course.Description || ""
                            });
                        });
                    }
                });
            });
        });
        return rows;
    };

    const headers = [
        { label: "Plan Name", key: "planName" },
        { label: "Year", key: "year" },
        { label: "Season", key: "season" },
        { label: "Course Ticker", key: "courseTicker" },
        { label: "Course Name", key: "courseName" },
        { label: "Credits", key: "credits" },
        { label: "Prerequisites", key: "prereq" },
        { label: "UUID", key: "UUID" },
        { label: "Description", key: "Description" }
    ];

    const csvData = flattenData(coursePlans);

    return (
        <CSVLink data={csvData} headers={headers} filename="coursePlan.csv">
            <Button className="buttonSpacing">Export to CSV</Button>
        </CSVLink>
    );
}
export function convertCoursePlans(array: string[][]): CoursePlan[] {
    const Courseplans: CoursePlan[] = [];

    array.forEach((item, index) => {
        if (index === 0) return;
        if (item.length !== 9) return; // Skip invalid entries

        const [
            planName,
            yearName,
            season,
            ticker,
            courseName,
            credits,
            prereq,
            UUID,
            description
        ] = item;

        // Find or create the CoursePlan
        let coursePlan = Courseplans.find((cp) => cp.name === planName);
        if (!coursePlan) {
            coursePlan = { name: planName, years: [] };
            Courseplans.push(coursePlan);
        }

        // Find or create the Year
        let year = coursePlan.years.find((y) => y.name === yearName);
        if (!year) {
            year = {
                name: yearName,
                winter: null,
                spring: null,
                summer: null,
                fall: null
            };
            coursePlan.years.push(year);
        }

        // Find or create the Semester
        let semester = year[season as seasonT];
        if (!semester) {
            semester = {
                season,
                name: season.charAt(0).toUpperCase() + season.slice(1),
                year: yearName,
                courses: []
            };
            year[season as seasonT] = semester;
        }

        // Create and add the Course
        const course = {
            ticker,
            name: courseName,
            credits: parseInt(credits),
            prereq,
            UUID,
            Description: description
        };
        semester.courses.push(course);
    });
    Courseplans.forEach((coursePlan) => {
        const requiredYears = ["Year 1", "Year 2", "Year 3", "Year 4"];
        requiredYears.forEach((yearName) => {
            if (!coursePlan.years.some((y) => y.name === yearName)) {
                coursePlan.years.push({
                    name: yearName,
                    winter: null,
                    spring: null,
                    summer: null,
                    fall: null
                });
            }
        });
    });
    return Courseplans;
}
