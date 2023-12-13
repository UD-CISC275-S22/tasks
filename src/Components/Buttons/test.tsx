// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Dropdown, Form } from "react-bootstrap";
import { Course } from "../../Interfaces/course";
import React from "react";
import { CoreBS } from "../../Interfaces/requirements";
/*MATT and/or MALIKA READ THIS
As I discussed with malika earlier, I decided to make a button to incorperate the degree requirements. 
This is the file that creates the button.
I followed a similar format to the dropAdd.tsx file.
I got the button and the dropDown to display but that's about it. 
I made the changes in semester.tsx
In semester.tsx I imported CoreBS from the requirements.ts interface so that I could compare the classes 
in that array to the class in each plan as a starting point because if we can get that to work we can get the rest to work
I think i'm close to getting the courses to display got I got a little lost so that is where I am currently at atm
Please feel free to continue where I left off and add or remove whatever you need to
PLEASE DOCUMENT THE CHANGES THAT YOU DO*/

export const RequiredClasses = ({
    //requiredClass,
    //currCourse,
    Course_List
}: {
    //requiredClass: () => void;
    //updateCurrCourse: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    currCourse: number;
    Course_List: Course[];
}) => {
    //Dropdown for courses are not treated individually
    const core = CoreBS;

    const filteredClasses = Course_List.filter((aCourse: Course) =>
        core.includes(aCourse.title)
    );

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
                Required Classes:
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    // eslint-disable-next-line no-extra-parens
                    filteredClasses.map((aCourse: Course) => (
                        <Dropdown.Item key={aCourse.id}></Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};
