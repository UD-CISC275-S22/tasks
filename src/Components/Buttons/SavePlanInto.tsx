import React from "react";
import { Dropdown } from "react-bootstrap";

export const SavePlanInto = ({
    savePlan
}: {
    savePlan: (op: string) => void;
}) => {
    const planSaveOptions = ["Plan 1", "Plan 2", "Plan 3", "Plan 4"];

    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown1"
                style={{
                    backgroundColor: "#FFBA49",
                    borderColor: "darkgoldenrod",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    color: "black"
                }}
            >
                Save Plan Into:
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    // eslint-disable-next-line no-extra-parens
                    planSaveOptions.map((option, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => savePlan(option)}
                        >
                            {option}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};
