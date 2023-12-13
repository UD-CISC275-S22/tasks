// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dropdown } from "react-bootstrap";
import React from "react";
import { Course } from "../../Interfaces/course";
import { CoreBS } from "../../Interfaces/requirements";

export const RequiredClasses = ({ Course_List }: { Course_List: Course[] }) => {
    const core = CoreBS;

    const filteredClasses = Course_List.filter((aCourse: Course) =>
        core.includes(aCourse.title)
    );

    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown1"
                style={{
                    backgroundColor: "#00FF00",
                    borderColor: "black",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    color: "black"
                }}
            >
                Required Classes:
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {/* eslint-disable-next-line no-extra-parens */}
                {filteredClasses.map((aCourse: Course) => (
                    <Dropdown.Item key={aCourse.id}>
                        {aCourse.title}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
