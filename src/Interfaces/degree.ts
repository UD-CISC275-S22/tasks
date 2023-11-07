//look at cisc udel degree requirement examples
//ex. what does the core need, capstone, options for lab science, etc.
import { Semester } from "./semester";

export interface Degree {
    /* degree name */
    name: string;
    /* either none or one of the comp sci concentrations */
    concentration: string;
    /* I didn't add univ req because that can be a separate function but let me know what you think */
    /* I didn't add college req because that can be a separate function but let me know what you think */
    //this list shouldn't change so if there is a section that you need for a particular degree let me know
    //have to be strings for parsing errors with json
    ciscoreReq: number[];
    capstoneReq: number[];
    labReq: number[];
    additionalReq: number[];
    concentrationReq: number[];
    probabilityReq: number[];
    systemsReq: number[];
    restrictedReq: number[];
    semesterSchedule: Semester[];
    /* List of courses required within the degree */
    credits: number;
}
