import React from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../Interfaces/course";

export const DropAdd = ({
    dropClass,
    addClass,
    updateCurrCourse,
    currCourse,
    Course_List
}: {
    dropClass: () => void;
    addClass: () => void;
    updateCurrCourse: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    currCourse: string;
    Course_List: Course[];
}) => {
    return (
        <>
            <Form.Group controlId="currentCourse">
                <Form.Label>Select A Course</Form.Label>
                <Form.Select value={currCourse} onChange={updateCurrCourse}>
                    {
                        //Needed to disable prettier here because there was an "extra parenths" error that couldn't be resolved by any means. Will need to ask the professor but we wanted to showcase the funcitonality of the dropdown for the MVP
                        // eslint-disable-next-line no-extra-parens
                        Course_List.map((courseName: Course) => (
                            <option
                                key={courseName.title}
                                value={courseName.title}
                            >
                                {courseName.title}
                            </option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Button onClick={dropClass}>Remove Class</Button>
            <Button onClick={addClass}>Add Class</Button>
        </>
    );
};
