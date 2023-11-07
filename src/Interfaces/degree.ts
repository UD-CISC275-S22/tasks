//look at cisc udel degree requirement examples
//ex. what does the core need, capstone, options for lab science, etc.
//only need ONE degree interface
//types of degrees will be functions in the requirements.tsx file

export interface Degree {
    /* degree name */
    name: string;
    /* either none or one of the comp sci concentrations */
    concentration: string;
    /* I didn't add univ req because that can be a separate function but let me know what you think */
    /* I didn't add college req because that can be a separate function but let me know what you think */
    //let me know if these are too many types or if there should be an added one
    ciscoreReq: string[];
    capstoneReq: string[];
    labReq: string[];
    additionalReq: string[];
    concentrationReq: string[];
    probabilityReq: string[];
    systemsReq: string[];
    restrictedReq: string[];
    /* 
    semesterSchedule is kind of like a plan - can change later
    semesterSchedule: Semester[];
    */
    //number of total credits needed in the degree
    credits: number;
}
