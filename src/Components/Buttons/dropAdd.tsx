/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-extra-parens */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../../Interfaces/course";

export const DropAdd = ({
    dropClass,
    addClass,
    updateCurrCourse,
    handleEditShow,
    currCourse,
    Course_List,
    targetYear,
    targetSem
}: {
    dropClass: (targetYear: number, targetSem: string) => void;
    addClass: (targetYear: number, targetSem: string) => void;
    updateCurrCourse: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleEditShow: (course: Course | undefined) => void;
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
            <Button onClick={() => dropClass(targetYear, targetSem)}>
                Remove Class
            </Button>
            <Button onClick={() => addClass(targetYear, targetSem)}>
                Add Class
            </Button>
            <Button
                onClick={() =>
                    handleEditShow(
                        Course_List.find((course) => course.id === currCourse)
                    )
                }
            >
                Edit Course
            </Button>
        </div>
    );
};
