export interface Degree {
    degreeName: string;
    coreCourses: string[];
    electives: Electives;
    generalRequirements: string[];
    prerequisites: Prerequisites;
}

export interface Electives {
    requiredNumber: number;
    courseOptions: string[];
}

export interface Prerequisites {
    [Ticker: string]: string[];
}
