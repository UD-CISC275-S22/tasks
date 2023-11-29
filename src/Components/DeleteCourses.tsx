import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DeleteCourseProps {
    onDeleteCourse: (courseCode: string) => void;
}

function DeleteCourse(props: DeleteCourseProps): JSX.Element {
    const [courseCode, setCourseCode] = useState("");

    const handleCourseCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCourseCode(e.target.value);
    };

    const handleDeleteCourse = () => {
        props.onDeleteCourse(courseCode);
        setCourseCode("");
    };

    return (
        <div>
            <h3>Delete Course</h3>
            <label htmlFor="deleteCourseCode">Course Code: </label>
            <input
                type="text"
                id="deleteCourseCode"
                name="deleteCourseCode"
                value={courseCode}
                onChange={handleCourseCodeChange}
            />
            <Button onClick={handleDeleteCourse}>Delete Course</Button>
        </div>
    );
}

export default DeleteCourse;
