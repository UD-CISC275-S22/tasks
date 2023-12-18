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
): { breadthCredits: Record<string, number>; majorFreeElectives: number } => {
    const breadthCredits: Record<string, number> = {
        TECH: 0,
        ARTS: 0,
        SOCI: 0,
        HIST: 0
    };
    let majorFreeElectives = 0;

    degreePlan.forEach((semester) => {
        semester.classes.forEach((course) => {
            const { breadth, credits } = course;

            if (breadth === "TECH") {
                // Cap TECH credits at 6
                breadthCredits[breadth] = Math.min(
                    breadthCredits[breadth] + credits,
                    6
                );
            } else {
                // Accumulate credits for other breadths
                breadthCredits[breadth] += credits;

                // Cap at 6 and update major free electives for extra credits
                majorFreeElectives += Math.max(0, credits - 6);
            }
        });
    });

    return { breadthCredits, majorFreeElectives };
};

const InformationSystemsRequirements: React.FC<
    InformationSystemsRequirementsProps
> = ({ currentDegreePlan }) => {
    console.log(currentDegreePlan);
    const [labTrack, setLabTrack] = useState<string>("Chose Your Lab Track");
    const [concnetration, setConcentration] = useState<string>(
        "Chose Your Concentration"
    );
    //const [majorFreeElectives, setMajorFreeElectives] = useState<number>(0);
    const [DLE, setDLE] = useState<boolean>(false);
    const [breadthCredits, setBreadthCredits] = useState<
        Record<string, number>
    >({
        TECH: 0,
        ARTS: 0,
        SOCI: 0,
        HIST: 0
    });
    const [degreePlanCourses, setDegreePlanCourses] = useState<string[]>([]);

    const majorCoreRequirements = [
        "CISC108",
        "CISC181",
        "CISC210",
        "CISC220",
        "CISC260",
        "CISC275",
        "CISC303",
        "CISC320",
        "MATH210",
        "MATH241"
    ];

    const CustomConsentrationRequirements = [
        "CISC361",
        "CISC372",
        "(",
        "MATH205",
        "or",
        "MATH350",
        ")",
        "MATH242",
        "[Six additional credits technical electives CISC301 or above (with exceptions)]",
        "[12 credits in approved focus area]"
    ];

    const AIRequirements = [
        "CISC304",
        "CISC442",
        "CISC481",
        "CISC483",
        "CISC484",
        "[",
        "MATH205",
        "or",
        "MATH350",
        "]",
        "[",
        "CISC361",
        "or",
        "CISC372",
        "]",
        "[12 creidts from Restricted Electives List]",
        "[300+ level CISC elective]"
    ];
    const BioinformaticsRequirements = [
        "BISC207",
        "BISC208",
        "BISC401",
        "CHEM103",
        "CHEM133",
        "CHEM104",
        "CHEM134",
        "CISC372",
        "CISC436",
        "MATH242",
        "MATH349",
        "[",
        "(",
        "CHEM213",
        "&",
        "CHEM215",
        ")",
        "or",
        "(",
        "CHEM321",
        "&",
        "CHEM325",
        ")",
        "]",
        "[",
        "MATH205",
        "or",
        "MATH350",
        "]",
        "[",
        "CISC483",
        "or",
        "CISC484",
        "]",
        "[6 creidts from Restricted Electives List]"
    ];
    const CybersecurityRequirements = [
        "CISC361",
        "CISC372",
        "CISC450",
        "CISC464",
        "CPEG465",
        "CISC493",
        "[",
        "MATH205",
        "or",
        "MATH350",
        "]",
        "Two of the Following:",
        "[",
        "CPEG472",
        "CPEG473",
        "CPEG475",
        "CPEG476",
        "CPEG495",
        "]",
        "[6 creidts from Restricted Electives List]",
        "[300+ level CISC elective]"
    ];
    const Data_ScienceRequirements = [
        "CISC304",
        "CISC372",
        "CISC437",
        "CISC481",
        "MATH205",
        "MATH242",
        "MATH243",
        "MATH349",
        "[",
        "CISC483",
        "or",
        "CISC484",
        "]",
        "[",
        "MATH302",
        "or",
        "MATH350",
        "or",
        "MATH426",
        "]",
        "[3 creidts from Restricted Electives List]",
        "[300+ level CISC elective]"
    ];
    const High_Performance_ComputingRequirements = [
        "CISC360",
        "CISC361",
        "CISC372",
        "CISC450",
        "CISC471",
        "MATH242",
        "MATH243",
        "Applied Math Track",
        "or",
        "Data Track"
    ];
    const Systems_and_NetworksRequirements = [
        "CISC360",
        "CISC361",
        "CISC372",
        "CISC450",
        "CISC471",
        "[",
        "MATH205",
        "or",
        "MATH350",
        "]",
        "One of the following:",
        "[",
        "CISC464",
        "CPEG465",
        "CPEG470",
        "CPEG476",
        "CPEG473",
        "CPEG475",
        "CPEG497",
        "]",
        "Two of the following:",
        "[",
        "CISC437",
        "CISC453",
        "CISC459",
        "CISC464",
        "CISC474",
        "CISC475",
        "CISC479",
        "CPEG473",
        "CPEG497",
        "]",
        "[6 creidts from Restricted Electives List]",
        "[300+ level CISC elective]"
    ];
    const Theory_and_ComputationsLabRequirements = [
        "CISC304",
        "CISC401",
        "MATH242",
        "MATH349",
        "[",
        "MATH205",
        "or",
        "MATH350",
        "]",
        "[",
        "Discrete Track",
        "or",
        "Continuous Track",
        "]",
        "[6 creidts from Restricted Electives List]",
        "[300+ level CISC elective]"
    ];

    const capstoneRequirements1 = ["CISC498", "&", "CISC499"];
    const capstoneRequirements2 = ["UNIV401", "&", "UNIV402"];

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
    const writingOptionRequirements = ["ENGL312", "ENGL410"];

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

    const concentrationRequirements: Record<string, string[]> = {
        Custom_Concentration: CustomConsentrationRequirements,
        Artificial_Intelligence_and_Robotics: AIRequirements,
        Bioinformatics: BioinformaticsRequirements,
        Cybersecurity: CybersecurityRequirements,
        Data_Science: Data_ScienceRequirements,
        High_Performance_Computing: High_Performance_ComputingRequirements,
        Systems_and_Networks: Systems_and_NetworksRequirements,
        Theory_and_Computation: Theory_and_ComputationsLabRequirements
    };

    useEffect(() => {
        //useEffect is a hook that runs after component is rendered
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
    //Theory was you'd be able to add classes and the degreePlan would update for the
    //"this class or that class" requirements. I don't think it's possible to do that :(

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
    const handleConcentrationChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setConcentration(e.target.value);
    };
    const handleDLEChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDLE(e.target.checked);
    };

    return (
        <div>
            <br></br>
            <h2>Computer Science BS Degree Requirements</h2>
            <div>
                <h4>CIS Core Requirements:</h4>
                {render(majorCoreRequirements)}
            </div>
            <br></br>
            {/* <div>
                <h4>BUAD Core Requirements:</h4>
                {render(buadCoreRequirements)}
            </div> */}
            {/* <div>
                <h4>Math Core Requirements:</h4>
                {render(mathCoreRequirements)}
            </div> */}
            <div>
                <h4>Concentration Requirements</h4>
                <div>Please choose your concnetration.</div>
                <select
                    onChange={handleConcentrationChange}
                    value={concnetration}
                >
                    <option value="Custom_Concentration">
                        Custom Concentration
                    </option>
                    <option value="Artificial_Intelligence_and_Robotics">
                        Artificial Intelligence and Robotics
                    </option>
                    <option value="Bioinformatics">Bioinformatics</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Data_Science">Data Science</option>
                    <option value="High_Performance_Computing">
                        High Performance Computing
                    </option>
                    <option value="Systems_and_Networks">
                        Systems and Networks
                    </option>
                    <option value="Theory_and_Computation">
                        Theory and Computation
                    </option>
                </select>
                {concnetration && concentrationRequirements[concnetration] && (
                    <div>
                        {/* <h6>Concentration Requirements for {concnetration}:</h6> */}
                        {render(concentrationRequirements[concnetration])}
                        <br></br>
                        <a href="https://www.cis.udel.edu/academics/undergraduate-programs/bscs/">
                            Click here for more information
                        </a>
                    </div>
                )}
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
                <h4>Laboratory Science Requirements:</h4>
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
                        {/* <h6>Lab Requirements for {labTrack}:</h6> */}
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
