import React from "react";
import { Dropdown } from "react-bootstrap";

//this is the file for loading the saved plans that the user has for future use
export const LoadPlan = ({ loadPlan }: { loadPlan: (op: string) => void }) => {
    const planSaveOptions = ["Plan 1", "Plan 2", "Plan 3", "Plan 4"];

    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown2"
                style={{
                    backgroundColor: "#998FC7",
                    borderColor: "#3e3568",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    color: "black"
                }}
            >
                Load:
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    // eslint-disable-next-line no-extra-parens
                    planSaveOptions.map((option, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => loadPlan(option)}
                        >
                            {option}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};
