import React from "react";
import { Dropdown } from "react-bootstrap";

export const ClearSemester = ({
    clearSemester
}: {
    clearSemester: (option: string, index: number) => void;
}) => {
    const selectedYearsCombined = [
        "Fall Year 1",
        "Winter Year 1",
        "Spring Year 1",
        "Summer Year 1",
        "Fall Year 2",
        "Winter Year 2",
        "Spring Year 2",
        "Summer Year 2",
        "Fall Year 3",
        "Winter Year 3",
        "Spring Year 3",
        "Summer Year 3",
        "Fall Year 4",
        "Winter Year 4",
        "Spring Year 4",
        "Summer Year 4",
        "Fall Year 5",
        "Winter Year 5",
        "Spring Year 5"
    ];

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown10"
                    style={{
                        backgroundColor: "#FFC09F",
                        borderColor: "#7A5643",
                        marginLeft: "5px",
                        marginRight: "5px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "black"
                    }}
                >
                    Clear Semester:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        // eslint-disable-next-line no-extra-parens
                        selectedYearsCombined.map((option, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() =>
                                    confirm("Are you sure") &&
                                    clearSemester(option, index)
                                }
                            >
                                {option}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
