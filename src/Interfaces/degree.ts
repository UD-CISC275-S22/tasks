//look at cisc udel degree requirement examples
//ex. what does the core need, capstone, options for lab science, etc.
import { Course } from "./course";

export interface Degree {
    /* degree name */
    name: string;
    /* concentration type */
    concentration: string;
    /* List of courses required within the degree */
    RequiredCourseList: Course[];
    /*List of University wide requirements */
    // UniversityRequirements: Course[];
    /*list of college specific requirements*/
    // CollegeRequirements: string;
    // CISCore: string;
    // LabScienceRequirements: string;
    // CapstoneRequirements: string;
    // AdditionalRequirements: string;
    // ConcentrationRequirements: string;
    // CISCElective: string[];
}
