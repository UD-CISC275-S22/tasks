import React from "react";
import { classes } from "../Interface/classes";
import { Button } from "react-bootstrap";
import { EditClassInfoModal } from "./EditClassInfoModal";
import { useState } from "react";

export function EditClass({
    classToEdit,
    newCode,
    newTitle,
    newCredits
}: {
    classToEdit: classes;
    newCode: string;
    newTitle: string;
    newCredits: string;
}): JSX.Element {
    const [modalView, setModalView] = useState(false);
    const flipModalView = () => {
        setModalView(!modalView);
        console.log("hello");
    };

    function editClass() {
        classToEdit.code = newCode;
        classToEdit.title = newTitle;
        classToEdit.credits.toString = newCredits.toString;
    }
    return (
        <div>
            <Button onClick={editClass}>
                {
                    {
                        /*<EditClassInfoModal
                        handleClose={flipModalView}
                        show={modalView}
                        courseToEdit={classToEdit}
                ></EditClassInfoModal>*/
                    }
                }{" "}
                Edit Course
            </Button>
        </div>
    );
}
