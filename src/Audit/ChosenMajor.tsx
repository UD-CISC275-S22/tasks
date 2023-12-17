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
// Lists of specific requirement for degree and credits
const AIREQ: string[] = [
    "Logic for Programming",
    "Introduction to Computer Vision",
    "Artificial Intelligence",
    "Introduction to Data Mining",
    "Introduction to Machine Learning",
    "Statistical Methods or Probability Theory and Simulation Methods",
    "Operating Systems or Parallel Computing",
    "Restricted Electives (12 credits)",
    "Elective"
];
const AIREQnum: number[] = [3, 3, 3, 3, 3, 3, 3, 12, 3];
const BIOREQ: string[] = [
    "Introductory Biology I",
    "Introductory Biology II",
    "Molecular Biology of the Cell",
    "General Chemistry (103)",
    "General Chemistry Laboratory (133)",
    "General Chemistry (104)",
    "General Chemistry Laboratory (134)",
    "Parallel Computing",
    "Computational Biology and Bioinformatics",
    "Analytic Geometry and Calculus B",
    "Elementary Linear Algebra",
    "Organic Chemistry Sequence",
    "Statistical Methods or Probability Theory and Simulation Methods",
    "Introduction to Data Mining or Introduction to Machine Learning",
    "Restricted Electives",
    "Elective"
];
const BIOREQnum: number[] = [4, 4, 3, 3, 1, 3, 1, 3, 3, 4, 3, 4, 3, 3, 6, 3];
const CYBERREQ: string[] = [
    "Operating Systems",
    "Parallel Computing",
    "Computer Networks I",
    "Introduction to Network Security",
    "Introduction to Cybersecurity",
    "System Hardening and Protection",
    "Probability/Statistics",
    "Advanced Cybersecurity",
    "Restricted Electives",
    "Elective"
];
const CYBERREQnum: number[] = [3, 3, 3, 3, 3, 3, 3, 6, 6, 3];
const DATAREQ: string[] = [
    "Logic for Programming",
    "Parallel Computing",
    "Database Systems",
    "Artificial Intelligence",
    "Statistical Methods",
    "Analytic Geometry and Calculus B",
    "Analytic Geometry and Calculus C",
    "Elementary Linear Algebra",
    "Introduction to Data Mining or Introduction to Machine Learning",
    "Advanced Math",
    "Restricted Electives",
    "Elective"
];
const DATAREQnum: number[] = [3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3];
const HPCREQ: string[] = [
    "Computer Architecture",
    "Operating Systems",
    "Parallel Computing",
    "Computer Networks I",
    "Compiler Design",
    "Analytic Geometry and Calculus B",
    "Analytic Geometry and Calculus C",
    "Math Track or Data Track Cources",
    "Elective"
];
const HPCREQnum: number[] = [3, 3, 3, 3, 3, 4, 4, 14, 3];
const SNREQ: string[] = [
    "Computer Architecture",
    "Operating Systems",
    "Parallel Computing",
    "Computer Networks I",
    "Compiler Design",
    "Statistical Methods or Probability Theory and Simulation Methods",
    "Security Requirement",
    "Advanced Systems Requirement",
    "Restricted Electives",
    "Elective"
];
const SNREQnum: number[] = [3, 3, 3, 3, 3, 3, 3, 6, 6, 3];
const TACREQ: string[] = [
    "Logic for Programming",
    "Elements of the Theory of Computation",
    "Analytic Geometry and Calculus B",
    "Elementary Linear Algebra",
    "Statistical Methods or Probability Theory and Simulation Methods",
    "Discrete Track or Continuous Track",
    "Restricted Electives",
    "Elective"
];
const TACREQnum: number[] = [3, 3, 4, 3, 3, 12, 6, 3];

export function ChosenMajor({
    handleClose,
    show,
    majorPageView,
    reqList,
    newMajor,
    creditList
}: {
    handleClose: () => void;
    show: boolean;
    majorPageView: () => void;
    reqList: (finalList: string[]) => void;
    newMajor: (newString: string) => void;
    creditList: (allNums: number[]) => void;
}) {
    const [selectedMajor, setSelectedMajor] = useState<string>(" ");

    function updateMajor(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedMajor(event.target.value);
    }

    function setFinalList() {
        //check which major you chose and generates the list of total classes and credits to send back to main
        let credits: number[] = [...generalCredits];
        switch (selectedMajor) {
            case "Artificial Intelligence and Robotics Concentration":
                credits = [...generalCredits, ...AIREQnum];
                reqList([...generalClasses, ...AIREQ]);
                break;
            case "Bioinformatics Concentration":
                credits = [...generalCredits, ...BIOREQnum];
                reqList([...generalClasses, ...BIOREQ]);
                break;
            case "Cybersecurity Concentration":
                credits = [...generalCredits, ...CYBERREQnum];
                reqList([...generalClasses, ...CYBERREQ]);
                break;
            case "Data Science Concentration":
                credits = [...generalCredits, ...DATAREQnum];
                reqList([...generalClasses, ...DATAREQ]);
                break;
            case "High Performance Computing Concentration":
                credits = [...generalCredits, ...HPCREQnum];
                reqList([...generalClasses, ...HPCREQ]);
                break;
            case "Systems and Networks Concentration":
                credits = [...generalCredits, ...SNREQnum];
                reqList([...generalClasses, ...SNREQ]);
                break;
            case "Theory and Computation Concentration":
                credits = [...generalCredits, ...TACREQnum];
                reqList([...generalClasses, ...TACREQ]);
                break;
            case "Traditional Program with Custom Focus Area":
                credits = [...generalCredits];
                reqList([...generalClasses]);
                break;
            default:
                credits = [...generalCredits];
                reqList([...generalClasses]);
                break;
        }

        creditList(credits);
    }

    function handleSubmit(): void {
        //functions handeled once you attempt to close the modal
        newMajor(selectedMajor);
        setFinalList();
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
