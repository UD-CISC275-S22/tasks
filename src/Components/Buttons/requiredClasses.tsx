// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../../Interfaces/course";

export const requiredClasses = ({
    requiredClass,
    updateCurrCourse,
    currCourse,
    Course_List,
    targetYear,
    targetSem
}: {
    requiredClass: (targetYear: number, targetSem: string) => void;
    updateCurrCourse: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    currCourse: number;
    Course_List: Course[];
    targetYear: number;
    targetSem: string;
}) => {
    //Dropdown for courses are not treated individually
    return (
        <div>
            <Form.Group controlId="currentCourse">
                <Form.Label>Select A Course</Form.Label>
                <Form.Select value={currCourse} onChange={updateCurrCourse}>
                    {
                        //Needed to disable prettier here because there was an "extra parenths" error that couldn't be resolved by any means. Will need to ask the professor but we wanted to showcase the funcitonality of the dropdown for the MVP
                        // eslint-disable-next-line no-extra-parens
                        Course_List.map((courseName: Course) => (
                            <option key={courseName.id} value={courseName.id}>
                                {courseName.title}
                            </option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Button onClick={() => requiredClass(targetYear, targetSem)}>
                Remove Class
            </Button>
        </div>
    );
};
