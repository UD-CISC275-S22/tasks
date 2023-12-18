import { Dropdown } from "react-bootstrap";
import React from "react";
import { Course } from "../../Interfaces/course";

//VIEW SEMESTER.TSX FOR OTHER CHANGES!!!

/*this function takes in the degree course requirements and the list of courses 
in order to find the required classes for each degree plan*/
export const RequiredClasses = ({
    degreeReq, //the required courses for a specific plan
    Course_List, //list of courses from json file
    totalClasses //all the classes in the plan
}: {
    degreeReq: string[]; //the array of core courses for the selected plan
    Course_List: Course[]; //the list of courses
    totalClasses: string[]; //the list of all of the classes in a single plan
}) => {
    const filteredClasses = Course_List.filter((aCourse: Course) =>
        //filters the course list based on the courses in the degree requirement array
        degreeReq.includes(aCourse.title)
    );

    //creates the dropdown and fills it with the courses
    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown4"
                style={{
                    backgroundColor: "#00FF00", //green
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
                        {console.log(
                            !totalClasses.includes(aCourse.title) &&
                                aCourse.title
                        )}
                        {!totalClasses.includes(aCourse.title)
                            ? aCourse.title + "❌"
                            : aCourse.title + "✅"}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
