/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState, useEffect } from "react";
//import { Class } from "../interfaces/class";
//import { degreePlan } from "../interfaces/degreePlan";
import { semester } from "../interfaces/semster";

interface InformationSystemsRequirementsProps {
    currentDegreePlan: semester[];
}

//man, why did the breadthCredits have to be the most complicated part?
const calculateBreadthCredits = (
    degreePlan: semester[]
): { breadthCredits: Record<string, number> } => {
    const breadthCredits: Record<string, number> = {
        TECH: 0,
        ARTS: 0,
        SOCI: 0,
        HIST: 0
    };

    degreePlan.forEach((semester) => {
        semester.classes.forEach((course) => {
            const { breadth, credits } = course;

            // Accumulate credits for other breadths
            breadthCredits[breadth] += credits;
        });
    });

    return { breadthCredits };
};

const InformationSystemsRequirements: React.FC<
    InformationSystemsRequirementsProps
> = ({ currentDegreePlan }) => {
    console.log(currentDegreePlan);
    const [labTrack, setLabTrack] = useState<string>("Chose Your Lab Track");
    //const [majorFreeElectives, setMajorFreeElectives] = useState<number>(0);
    const [breadthCredits, setBreadthCredits] = useState<
        Record<string, number>
    >({
        TECH: 0,
        ARTS: 0,
        SOCI: 0,
        HIST: 0
    });
    const [degreePlanCourses, setDegreePlanCourses] = useState<string[]>([]);
    const [DLE, setDLE] = useState<boolean>(false);
    const majorCoreRequirements = [
        "CISC108",
        "CISC181",
        "CISC210",
        "CISC220",
        "CISC250",
        "CISC275",
        "CISC437",
        "CISC498",
        "MISY430",
        "MISY431",
        "MISY432"
    ];

    const buadCoreRequirements = [
        "ACCT207",
        "ACCT208",
        "[",
        "BUAD301",
        "or",
        "FINC311",
        "]",
        "BUAD306",
        "BUAD309"
    ];
    const mathCoreRequirements = ["MATH241", "MATH210", "MATH205"];

    const capstoneRequirements1 = ["CISC498", "CISC499"];
    const capstoneRequirements2 = ["UNIV401", "UNIV402"];

    const universityRequirements = ["ENGL110", "EGGG101", "CISC355"];
    const nonMajorRequirements = [
        "[",
        "ENGL312",
        "or",
        "ENGL410",
        "]",
        "COMM212",
        "CISC355"
    ];
    const writingOptionRequirements = ["ENGL312 or ENGL410"];

    const biologyLabRequirements = ["BISC207", "BISC208"];
    const chemistryLabRequirements = [
        "CHEM103",
        "CHEM133",
        "CHEM104",
        "CHEM134"
    ];
    const geology1LabRequirements = ["GEOL105", "GEOL115", "GEOL107"];
    const geology2LabRequirements = ["GEOL107", "GEOL110"];
    const physicsLabRequirements = ["PHYS207", "PHYS227", "PHYS208", "PHYS228"];

    const labTrackRequirements: Record<string, string[]> = {
        Biology: biologyLabRequirements,
        Chemistry: chemistryLabRequirements,
        Geology1: geology1LabRequirements,
        Geology2: geology2LabRequirements,
        Physics: physicsLabRequirements
    };

    useEffect(() => {
        //useEffect is a hook that runs after component is rendered
        {
            /*I used ChatGPT for help with this section.
            I did not know how to continiously update the screen,
            so i asked ChatGPT for options, and it explained how to use the useEffect hook*/
        }
        const newDegreePlanCourses: string[] = [];
        currentDegreePlan.forEach((semester) => {
            semester.classes.forEach((course) => {
                newDegreePlanCourses.push(course.courseCode);
            });
        }); //runs through the given semester[] and pushes courseCode to newDegreePlanCourses array
        setDegreePlanCourses(newDegreePlanCourses);
        const { breadthCredits } = calculateBreadthCredits(currentDegreePlan);
        setBreadthCredits(breadthCredits); //set both the breadthRequirements and degreePlanCourses
        //setMajorFreeElectives(majorFreeElectives); //sets the major free electives
    }, [currentDegreePlan]);

    const contains = (strArr: string[], str: string): boolean => {
        return strArr.includes(str.toUpperCase());
    };
    const isClassInDegreePlan = (courseCode: string): boolean => {
        return contains(degreePlanCourses, courseCode);
    };

    const render = (requirement: string[]) => {
        //creates a dropdown of the given requirement
        const coursesString = requirement.map((courseCode) => {
            const isInDegreePlan = isClassInDegreePlan(courseCode);
            return (
                <span
                    key={courseCode}
                    style={{
                        color: isInDegreePlan ? "green" : "black", //green if isInDegreePlan, black if not
                        marginRight: "8px"
                    }}
                >
                    {courseCode}
                </span>
            );
        });

        return <div>{coursesString}</div>;
    };

    const handleLabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLabTrack(e.target.value);
    };
    const handleDLEChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDLE(e.target.checked);
    };

    return (
        <div>
            <br></br>
            <h2>Information Systems Degree Requirements</h2>
            <div>
                <h4>CIS Core Requirements:</h4>
                {render(majorCoreRequirements)}
            </div>
            <br></br>
            <div>
                <h4>BUAD Core Requirements:</h4>
                {render(buadCoreRequirements)}
            </div>
            <br></br>
            <div>
                <h4>Math Core Requirements:</h4>
                {render(mathCoreRequirements)}
            </div>
            <br></br>
            <div>
                <h4>Non Major Requirements:</h4>
                {render(nonMajorRequirements)}
            </div>
            <br></br>
            <div>
                <h4>Capstone Requirements:</h4>
                <u>Pick one of pairs</u>
                {render(capstoneRequirements1)}
                {render(capstoneRequirements2)}
            </div>
            <br></br>
            <div>
                <h4>University Requirements:</h4>
                {render(universityRequirements)}
            </div>
            <br></br>
            <div>
                <h4>Writing Requirement:</h4>
                <u>Pick one</u>
                {render(writingOptionRequirements)}
            </div>
            <br></br>
            <div>
                <h4>Laboratory Science:</h4>
                <div>Please choose your science track.</div>
                <select onChange={handleLabChange} value={labTrack}>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Geology1">Geology (Option 1)</option>
                    <option value="Geology2">Geology (Option 2)</option>
                    <option value="Physics">Physics</option>
                </select>
                {labTrack && labTrackRequirements[labTrack] && (
                    <div>
                        <h5>Lab Requirements for {labTrack}:</h5>
                        {render(labTrackRequirements[labTrack])}
                    </div>
                )}
            </div>
            <br></br>
            <div>
                <h4>Breadth Requirements:</h4>
                {Object.entries(breadthCredits).map(([breadth, credits]) => (
                    <div key={breadth}>
                        {breadth}: {credits} Credits
                        {breadth === "TECH" ? (
                            credits < 6 ? (
                                <span style={{ color: "red" }}>
                                    {" "}
                                    (Incomplete)
                                </span>
                            ) : (
                                <span style={{ color: "green" }}>
                                    {" "}
                                    (Complete)
                                </span>
                            )
                        ) : breadth === "ARTS" ||
                          breadth === "SOCI" ||
                          breadth === "HIST" ? (
                            credits >= 6 ? (
                                <span style={{ color: "green" }}>
                                    {" "}
                                    (Complete)
                                </span>
                            ) : (
                                <span style={{ color: "red" }}>
                                    {" "}
                                    (Incomplete)
                                </span>
                            )
                        ) : (
                            <span style={{ color: "green" }}> (Complete)</span>
                        )}
                    </div>
                ))}
                <div>
                    <p>
                        Note: The University requires 6 credits for each
                        breadth. After that, the remaining 9 credits MUST be
                        something other than TECH.
                    </p>
                </div>
            </div>
            <div>
                <p>
                    <input
                        type="checkbox"
                        id="DLE"
                        checked={DLE}
                        onChange={handleDLEChange}
                    />
                    <label>Discovery Learning Experience (DLE)</label>
                </p>
                <p>
                    If you are unsure about DLE classes, please check the UD
                    Course Search.
                </p>
            </div>
        </div>
    );
};
//From my understanding each student takes 3 credits for the university breadth,
//and 3 more for COE breadth. So 6 credits total for each breadth. Additionally,
//each student must take 9 random credits that are not related to their field.
//For our purposes, students must take 9 credits, of something other than TECH.

export default InformationSystemsRequirements;
