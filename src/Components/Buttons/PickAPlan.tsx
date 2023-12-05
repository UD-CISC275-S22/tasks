import React from "react";
import { Dropdown } from "react-bootstrap";

export const PickAPlan = ({
    handlePlans
}: {
    handlePlans: (op: string) => void;
}) => {
    const planOptions = [
        "Artificial Intelligence",
        "Cybersecurity",
        "Systems and Networks",
        "Data Science",
        "Theory and Computation",
        "High Performance Computing",
        "Bioinformatics",
        "Blank Plan"
    ];

    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown3"
                style={{
                    backgroundColor: "#D8DBE2",
                    borderColor: "#2c4d9b",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    color: "black"
                }}
            >
                Pick a Plan:
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    // eslint-disable-next-line no-extra-parens
                    planOptions.map((option, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => handlePlans(option)}
                        >
                            {option}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};
