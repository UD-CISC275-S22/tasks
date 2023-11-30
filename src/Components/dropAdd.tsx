import React, { useState } from "react";
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
    const [displayCourseCategory, setDisplayCourseCategory] =
        useState<string>("AllCourses");

    //update the state of the dsiplay course categoery
    function updateDisplayCourseCat(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setDisplayCourseCategory(event.target.value);
    }
    return (
        //each button will updtae the displaycourse category state
        //current issue is that you can only select button no matter the plan
        //solution is too move the radio buttons to a different probaly displau fall and dsiplay spring
        //
        <>
            <Form.Group controlId="currentCourse">
                <Form.Label>Select Course Variety</Form.Label>
                <Form.Check
                    type="radio"
                    name="displayCourse"
                    onChange={updateDisplayCourseCat}
                    id="disp-course-all"
                    label="AllCourses"
                    value="AllCourses"
                    checked={displayCourseCategory === "AllCourses"}
                />
                <Form.Check
                    type="radio"
                    name="displayCourse"
                    onChange={updateDisplayCourseCat}
                    id="disp-course-free"
                    label="FreeElective"
                    value="FreeElective"
                    checked={displayCourseCategory === "FreeElective"}
                />
                <Form.Check
                    type="radio"
                    name="displayCourse"
                    onChange={updateDisplayCourseCat}
                    id="disp-course-restricted"
                    label="RestrictiveElective"
                    value="RestrictiveElective"
                    checked={displayCourseCategory === "RestrictiveElective"}
                />
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
