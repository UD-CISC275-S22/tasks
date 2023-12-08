/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const majors: string[] = [
    "Artificial Intelligence and Robotics Concentration",
    "Bioinformatics Concentration",
    "Cybersecurity Concentration",
    "Data Science Concentration",
    "High Performance Computing Concentration",
    "Systems and Networks Concentration",
    "Theory and Computation Concentration",
    "Traditional Program with Custom Focus Area"
];

export const generalClasses: string[] = [
    "English 110",
    "First Year Seminar",
    "Discovery Learning Experience",
    "Creative Arts and Humanities",
    "History and Cultural Change",
    "Social and Behavioral Sciences",
    "Mathematics, Natural Sciences, and Technology",
    "Capstone Experience",
    "Introduction to Computer Science I",
    "Introduction to Computer Science II",
    "Introduction to Systems Programming",
    "Data Structures",
    "Machine Organization and Assembly Language",
    "Introduction to Software Engineering",
    "Automata Theory",
    "Introduction to Algorithms",
    "Discrete Mathematics I",
    "Analytic Geometry and Calculus A",
    "Computers, Ethics and Society",
    "Lab Science Path",
    "Written Communications in Business or Technical Writing"
];

export const generalCredits: number[] = [
    3, 3, 3, 3, 3, 3, 3, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 8, 3
];
// will be many arrays with specific lists of classes needed
const fix: string[] = ["added from fix"];

//List of all classes for each major needed in seperate constants

export function ChosenMajor({
    handleClose,
    show,
    majorPageView,
    reqList,
    newMajor
}: {
    handleClose: () => void;
    show: boolean;
    majorPageView: () => void;
    reqList: (finalList: string[]) => void;
    newMajor: (newString: string) => void;
}) {
    const [selectedMajor, setSelectedMajor] = useState<string>(" ");
    const [totalClasses, setTotalClasses] = useState<string[]>(generalClasses);

    function updateMajor(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedMajor(event.target.value);
    }

    //Currently not working and causes indent error, will need to change function
    function setFinalList() {
        const words: string[] = [...generalClasses];
        switch (selectedMajor) {
            case "Artificial Intelligence and Robotics Concentration":
                setTotalClasses(words.concat(fix));
                break;
            case "Bioinformatics Concentration":
                setTotalClasses(words.concat(fix));
                break;
            case "Cybersecurity Concentration":
                setTotalClasses(words.concat(fix));
                break;
            case "Data Science Concentration":
                setTotalClasses(words.concat(fix));
                break;
            case "High Performance Computing Concentration":
                setTotalClasses(words.concat(fix));
                break;
            case "Systems and Networks Concentration":
                setTotalClasses(words.concat(fix));
                break;
            case "Theory and Computation Concentration":
                setTotalClasses(words.concat(fix));
                break;
            case "Traditional Program with Custom Focus Area":
                setTotalClasses(["dumb major that screws up my idea"]);
                break;
            default:
                setTotalClasses([""]);
                break;
        }
    }

    function handleSubmit(): void {
        newMajor(selectedMajor);
        setFinalList();
        reqList(totalClasses);
        majorPageView();
        handleClose();
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Major</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Select
                            value={selectedMajor}
                            onChange={updateMajor}
                            style={{ textAlign: "center" }}
                        >
                            {majors.map(
                                (option: string): JSX.Element => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                )
                            )}
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
