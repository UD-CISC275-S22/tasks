//look at cisc udel degree requirement examples
//ex. what does the core need, capstone, options for lab science, etc.
import { Course } from "./course";

export interface Degree {
    /* degree name */
    name: string;
    /* degree length */
    length: number;
    /* degree type, eg: masters, associates etc */
    type: string;
    /* concentration type */
    concetration: string;
    /*List of University wide requirements */
    UniversityRequirements: Course[];
    /*list of college specific requirements*/
    CollegeRequirements: string;
    CISCore: string;
    LabScienceRequirements: string;
    CapstoneRequirements: string;
    AdditionalRequirements: string;
    ConcentrationRequirements: string;
    CISCElective: string[];
}
