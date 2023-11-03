/* eslint-disable no-extra-parens */
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import realData from "../data/camelData.json";
//import { classes } from "../Interface/classes";

//import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";

/*const courses = [
    { courseID: "CISC304", id: 1 },
    { courseID: "MATH242", id: 2 },
    { courseID: "CISC181", id: 3 },
    { courseID: "STAT200", id: 4 },
    { courseID: "ENTR350", id: 5 },
    { courseID: "ACCT207", id: 6 },
    { courseID: "CPEG101", id: 7 },
    { courseID: "MISY260", id: 8 },
    { courseID: "CISC275", id: 9 },
    { courseID: "MATH241", id: 10 },
    { courseID: "CISC372", id: 11 },
    { courseID: "CISC484", id: 12 },
    { courseID: "CISC303", id: 13 },
    { courseID: "MATH243", id: 14 },
    { courseID: "CISC498", id: 15 },
    { courseID: "CISC499", id: 16 },
    { courseID: "BISC207", id: 17 },
    { courseID: "BISC208", id: 18 },
    { courseID: "CHEM104", id: 19 },
    { courseID: "CISC260", id: 20 },
    { courseID: "CISC320", id: 21 },
    { courseID: "ECON101", id: 22 },
    { courseID: "ECON311", id: 23 },
    { courseID: "GEOL107", id: 24 },
    { courseID: "CISC110", id: 25 }
];
*/
export function FilteringSearch(): JSX.Element {
    /*const realData = rawData.map((course: any):classes => {
        return { ...course, code: course.code.replace(" ", "") };
    });
    */
    const [searchAttribute, setSearchAttribute] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(realData);
    const [visible, setVisible] = useState<boolean>(false);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearchAttribute(searchValue);

        const filteredClasses = realData.filter((course) =>
            course.courseCode
                .replace(" ", "")
                .toLowerCase()
                .startsWith(searchValue.toLowerCase())
        );
        setFilteredCourses(filteredClasses);
    };

    const handleClick = (cID: string) => {
        setSearchAttribute(cID);
    };

    const flipVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <Form.Group controlId="formFilterSearch">
                <Form.Control
                    type="text"
                    value={searchAttribute.replace(" ", "")}
                    onChange={inputChange}
                    placeholder="Search by Course Code"
                    onClick={flipVisibility}
                />
            </Form.Group>
            {visible && (
                <div
                    style={{
                        backgroundColor: "gold",
                        height: "auto",
                        overflowY: "scroll",
                        maxHeight: "125px"
                    }}
                >
                    {filteredCourses.map((course) => {
                        return (
                            <div
                                onClick={() => handleClick(course.courseCode)}
                                style={{
                                    cursor: "pointer"
                                }}
                                key={course.courseCode}
                            >
                                {course.courseCode.replace(" ", "")}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
