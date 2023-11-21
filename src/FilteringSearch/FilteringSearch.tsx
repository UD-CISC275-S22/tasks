/*eslint-disable no-extra-parens*/
/* Lint disabled for extra parenthases in order to work around issue and view our changes.
Will need to be fixed for final submission*/
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import realData from "../data/final_data.json";

export function FilteringSearch(): JSX.Element {
    const [searchAttribute, setSearchAttribute] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(realData);
    const [visible, setVisible] = useState<boolean>(false);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearchAttribute(searchValue);

        const filteredClasses = realData.filter((course) =>
            course.code.toLowerCase().startsWith(searchValue.toLowerCase())
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
                    value={searchAttribute}
                    onChange={inputChange}
                    placeholder="Search by Course Code"
                    onClick={flipVisibility}
                />
            </Form.Group>
            {visible && (
                <div
                    className="FilterMainDiv"
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
                                onClick={() => handleClick(course.code)}
                                style={{
                                    cursor: "pointer"
                                }}
                                key={course.code}
                            >
                                {course.code}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

/*
The filtering search component provides users with a way to select a course from an actively filtering list of courses,
based on the input of the user. For example, If the user enters "CISC", the list of courses that appears will only have
courses begining with "CISC" as it filters out other course codes.
*/
