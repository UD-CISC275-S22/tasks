import { Plan } from "../Planner";
import catalog from "../catalog.json";

export const computerSciencePlan: Plan = {
    id: "123",
    title: "Computer Science Degree",
    semesters: [
        {
            id: "Fall 2022",
            season: "Fall",
            year: "2022",
            skip: false,
            courses: [
                catalog.CISC["CISC 108"],
                catalog.EGGG["EGGG 101"],
                catalog.ENGL["ENGL 110"],
                catalog.MATH["MATH 241"],
                catalog.UNIV["UNIV 166"]
            ]
        },
        {
            id: "Spring 2023",
            season: "Spring",
            year: "2023",
            skip: false,
            courses: [
                catalog.CISC["CISC 181"],
                catalog.CISC["CISC 210"],
                catalog.MATH["MATH 210"],
                catalog.UNIV["UNIV 167"],
                catalog.GEOL["GEOL 107"]
            ]
        },
        {
            id: "Fall 2023",
            season: "Fall",
            year: "2023",
            skip: false,
            courses: [
                catalog.CISC["CISC 220"],
                catalog.CISC["CISC 260"],
                catalog.PHIL["PHIL 100"],
                catalog.HIST["HIST 103"],
                catalog.GEOL["GEOL 105"],
                catalog.GEOL["GEOL 115"]
            ]
        },
        {
            id: "Spring 2024",
            season: "Spring",
            year: "2024",
            skip: false,
            courses: [
                catalog.CISC["CISC 275"],
                catalog.CISC["CISC 355"],
                catalog.ENWC["ENWC 201"],
                catalog.SOCI["SOCI 201"],
                catalog.CISC["CISC 320"]
            ]
        },
        {
            id: "Fall 2024",
            season: "Fall",
            year: "2024",
            skip: false,
            courses: [
                catalog.CISC["CISC 303"],
                catalog.ENGL["ENGL 410"],
                catalog.CISC["CISC 437"],
                catalog.PSYC["PSYC 100"],
                catalog.NTDT["NTDT 200"]
            ]
        },
        {
            id: "Spring 2025",
            season: "Spring",
            year: "2025",
            skip: false,
            courses: [
                catalog.CISC["CISC 304"],
                catalog.CISC["CISC 361"],
                catalog.SPAN["SPAN 105"],
                catalog.ANTH["ANTH 205"],
                catalog.WOMS["WOMS 201"]
            ]
        },
        {
            id: "Fall 2025",
            season: "Fall",
            year: "2025",
            skip: false,
            courses: [
                catalog.CISC["CISC 481"],
                catalog.LLCU["LLCU 338"],
                catalog.CISC["CISC 498"],
                catalog.HIST["HIST 104"],
                catalog.PHYS["PHYS 145"]
            ]
        },
        {
            id: "Spring 2026",
            season: "Spring",
            year: "2026",
            skip: false,
            courses: [
                catalog.CISC["CISC 499"],
                catalog.CISC["CISC 484"],
                catalog.CISC["CISC 489"],
                catalog.UNIV["UNIV 367"],
                catalog.UNIV["UNIV 114"]
            ]
        }
    ]
};
