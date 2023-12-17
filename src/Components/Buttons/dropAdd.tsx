/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-extra-parens */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../../Interfaces/course";
//this file is for dropping and adding and deleting courses
export const DropAdd = ({
    dropClass,
    addClass,
    updateCurrCourse,
    handleEditShow,
    currCourse,
    Course_List,
    targetYear,
    targetSem,
    containsPrereq
}: {
    dropClass: (targetYear: number, targetSem: string) => void;
    addClass: (targetYear: number, targetSem: string) => void;
    updateCurrCourse: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleEditShow: (course: Course | undefined) => void;
    currCourse: number;
    Course_List: Course[];
    targetYear: number;
    targetSem: string;
    containsPrereq: boolean;
}) => {
    //If the prereq is not fulfilled create a pop-up that warns the user that the prereq is not in their course list.
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
            <Button
                onClick={() => {
                    containsPrereq
                        ? addClass(targetYear, targetSem)
                        : confirm(
                              "You do not meet the prerequisite for this course!"
                          ) && addClass(targetYear, targetSem);
                }}
            >
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
