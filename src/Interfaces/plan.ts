//look at cisc udel degree requirement examples
//ex. what does the core need, capstone, options for lab science, etc.
//only need ONE degree interface
//types of degrees will be functions in the requirements.tsx file

export interface Plan {
    /* degree name */
    name: string;
    /* either none or one of the comp sci concentrations */
    concentration: string;
    /* I didn't add univ req because that can be a separate function but let me know what you think */
    /* I didn't add college req because that can be a separate function but let me know what you think */
    //let me know if these are too many types or if there should be an added one
    credits: number;
}
