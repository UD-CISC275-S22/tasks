// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Form } from "react-bootstrap";
import { Course } from "../../Interfaces/course";
import React from "react";
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
    requiredClass,
    updateCurrCourse,
    currCourse,
    Course_List
}: {
    requiredClass: () => void;
    updateCurrCourse: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    currCourse: number;
    Course_List: Course[];
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
                        Course_List.map((aCourse: Course) => (
                            <option key={aCourse.id} value={aCourse.id}>
                                {aCourse.title}
                            </option>
                        ))
                    }
                </Form.Select>
            </Form.Group>
            <Button onClick={() => requiredClass()}>Required Classes</Button>
        </div>
    );
};
