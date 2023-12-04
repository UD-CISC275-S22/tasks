/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
//I needed to download the package using "npm install @types/react-csv"
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import { DegreePlan } from "./interfaces/degreeplan";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";

/*  GenerateCSV
Params:
    data: string[][]
        The data to export into the csv
    filename: string
        filename to save as
*/
export function GenerateCSV({
    data,
    filename
}: {
    data: string[][];
    filename: string;
}): JSX.Element {
    return (
        <CSVLink data={data} filename={filename}>
            <Button>Download CSV</Button>
        </CSVLink>
    );
}

/* separateString
    Params:
        input: string[]
            all string data copied from parsed CSV file
*/
function separateString(input: string): string[] {
    const result: string[] = [];
    let currentPart = "";
    let insideSquareBrackets = false;

    for (const char of input) {
        if (char === "[") {
            insideSquareBrackets = true;
        } else if (char === "]") {
            insideSquareBrackets = false;
        }

        if (char === "," && !insideSquareBrackets) {
            result.push(currentPart.trim());
            currentPart = "";
        } else {
            currentPart += char;
        }
    }
    result.push(currentPart.trim());
    return result;
}

function split(input: string): string[] {
    const result: string[] = [];
    let currentWord = "";

    for (const char of input) {
        if (char === ",") {
            result.push(currentWord.trim());
            currentWord = "";
        } else {
            currentWord += char;
        }
    }
    result.push(currentWord.trim());
    return result;
}

/* importDegree
    Params: 
        input: string[]
            all string data parsed from CSV file arranged into an array

*/
function importDegree(input: string[]): DegreePlan {
    if (input[0].startsWith("D.")) {
        const semList: Semester[] = [];
        let j = 0;

        while (j < input.length) {
            if (input[j].startsWith("S.")) {
                const newSem: Semester = {
                    title: input[j].substring(2),
                    id: 0,
                    totalCredits: parseInt(input[j + 1]),
                    courses: []
                };

                let i = j + 2; // Skip Semester Title and Total Credits

                while (i < input.length && input[i].startsWith("C.")) {
                    const newClass: Course = {
                        title: input[i].substring(2),
                        courseCode: input[i + 1],
                        credits: parseInt(input[i + 2]),
                        degreeRequirements: split(input[i + 3]),
                        coursePrereq: split(input[i + 4]),
                        courseCoreq: split(input[i + 5]),
                        courseDescription: input[i + 6]
                    };
                    newSem.courses.push(newClass);
                    i += 7; // Move to the next Course
                }

                semList.push(newSem);
                j = i; // Move to the next Semester
            } else {
                j++; // Skip non-"S." lines
            }
        }

        const newDegree: DegreePlan = {
            id: 0,
            title: input[0].substring(2),
            totalCredits: parseInt(input[1]),
            semestersList: semList
        };
        return newDegree;
    }

    return {
        id: 0,
        title: "BAD",
        totalCredits: 0,
        semestersList: []
    };
}

/*  Import
Params:
    importData: string
        The state hook containing any imported data
    setImportData: (newData: string) => void
        State setter for imported data
*/

export function Import({
    importData,
    setImportData,
    addDp
}: {
    importData: string;
    setImportData: (newData: string) => void;
    addDp: (newDp: DegreePlan) => void;
}) {
    const [isImported, setIsImported] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target?.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const content = e.target?.result;
                setImportData(content as string);
            };
            fileReader.readAsText(file);
            setIsImported(false);
        }
    };

    const handleImportClick = () => {
        setIsImported(true);
        addDp(newDegree);
    };

    const madeArray = separateString(importData);

    const newDegree = importDegree(madeArray);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>CSV Degree Plan Import:</h1>
            <form>
                {" "}
                <div>{isImported}</div>
                <input type="file" accept=".csv" onChange={handleFileChange} />
                <button type="button" onClick={handleImportClick}>
                    Import
                </button>
            </form>
        </div>
    );
}
