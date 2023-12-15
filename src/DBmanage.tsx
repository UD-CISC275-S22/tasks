//import React from "react";
import {
    CoursePlan,
    SemesterI,
    TotalDB,
    dbMangement,
    seasonT,
    yearI
} from "./interfaces/semester";
import { Course } from "./interfaces/course";
import { v4 as uuidv4 } from "uuid";
import { Year } from "./viewCourseComponents";

// export function CreatCoursePlan(uuid: string, DB: TotalDB) {}
// export function deleteCoursePlan() {}
// export function addToCoursePlan() {}

// export function deleteCourse(rW: dbMangement, courseplan,) {
//     rW.stateSetter({
//         name: rW.dataset.name,
//         firstsemester: {
//             ...rW.dataset.firstsemester,
//             courses: rW.dataset.firstsemester.courses.filter(
//                 (course: Course): boolean => course.ticker !== idticker
//             )
//         },
//         secondsemester: {
//             ...rW.Courseplan.secondsemester,
//             courses: rW.Courseplan.secondsemester.courses.filter(
//                 (course: Course): boolean => course.ticker !== idticker
//             )
//         }
//     });
// }

export function updateCourse(
    dbManager: dbMangement,
    newCourse: Course,
    uuid: string
) {
    const newDB = {
        Courseplans: dbManager.dataset.Courseplans.map(
            (currentCoursePlan: CoursePlan) => {
                // Updating each course plan
                return {
                    ...currentCoursePlan,
                    years: currentCoursePlan.years.map((currentYear: yearI) =>
                        oneYearUpdate(currentYear, uuid, newCourse)
                    )
                };
            }
        )
    };
    dbManager.stateSetter(newDB);
    console.log(newCourse);
    console.log(newDB);
}

export function oneYearUpdate(year: yearI, uuid: string, Ncourse: Course) {
    const updateSemester = (semester: SemesterI | null) => {
        if (semester === null) {
            return null;
        }
        return {
            ...semester,
            courses: semester.courses.map(
                (course: Course): Course =>
                    course.UUID === uuid
                        ? { ...Ncourse, UUID: course.UUID }
                        : course
            )
        };
    };

    return {
        name: year.name,
        winter: updateSemester(year.winter),
        spring: updateSemester(year.spring),
        summer: updateSemester(year.summer),
        fall: updateSemester(year.fall)
    };
}
export function addCoursePlan(dbManager: dbMangement, nCoursePlan: CoursePlan) {
    dbManager.stateSetter({
        Courseplans: [...dbManager.dataset.Courseplans, nCoursePlan]
    });
}
export function removeSemesterYear(year: yearI, rSemester: SemesterI): yearI {
    console.log("looking for old semester" + [rSemester.season]);
    return { ...year, [rSemester.season]: null };
}
export function UpdateCoureplanYear(
    Oyear: yearI,
    Nyear: yearI,
    CoursePlan: CoursePlan
) {
    console.log("looking for old yeat");
    return {
        ...CoursePlan,
        years: CoursePlan.years.map((year: yearI) =>
            year === Oyear ? Nyear : year
        )
    };
}
function InsertCourseplan(CoursePlans: CoursePlan[], nCoursePlan: CoursePlan) {
    return [...CoursePlans, nCoursePlan];
}
export function createFourYearCoursePlan(planName: string): CoursePlan {
    const createEmptySemester = (season: seasonT, year: string): SemesterI => {
        return {
            season,
            name: `${season} ${year}`,
            year,
            courses: []
        };
    };

    const years: yearI[] = [];

    for (let i = 1; i <= 4; i++) {
        years.push({
            name: `Year ${i}`,
            winter: createEmptySemester("winter", `${2023 + i}`),
            spring: createEmptySemester("spring", `${2023 + i}`),
            summer: createEmptySemester("summer", `${2023 + i}`),
            fall: createEmptySemester("fall", `${2023 + i}`)
        });
    }

    return {
        name: planName,
        years
    };
}
function stingBoolean(course: Course, courseArr: Course[]): boolean {
    if (course.prereq === "") return true;
    const arr = courseArr.map((course: Course): string => course.ticker);
    //copied regex from chat gpt
    const normalizedArray = arr.map((item) =>
        item.replace(/[^A-Za-z0-9]/g, "").toUpperCase()
    );
    const normalizedString = course.prereq
        .replace(/[^A-Za-z0-9]/g, "")
        .toUpperCase();
    // Split the string by 'AND' and 'OR'
    const elements = normalizedString.split(/AND|OR/);
    let flag: boolean;
    // Check for 'AND' and 'OR' conditions
    console.log(elements);
    console.log(course.prereq);
    if (normalizedString.includes("AND")) {
        // If 'AND' is present, all elements must be in the array
        flag = elements.every((elem) => normalizedArray.includes(elem));
    } else if (normalizedString.includes("OR")) {
        // If 'OR' is present, at least one element must be in the array
        flag = elements.some((elem) => normalizedArray.includes(elem));
    } else {
        // If neither 'AND' nor 'OR', just check for single element
        flag = normalizedArray.includes(elements[0]);
    }

    return flag;
}

function checkPreReqs(
    selectedSemester: SemesterI,
    NCourses: Course[],
    courseplan: CoursePlan
) {
    const seasons: seasonT[] = ["winter", "spring", "summer", "fall"];
    let allcouser: Course[] = [];
    courseplan.years.forEach((year: yearI) => {
        let run = true;
        seasons.forEach((season: seasonT) => {
            if (year[season]) {
                allcouser = [...allcouser, ...year[season]!.courses];
            }
            if (year[season] == selectedSemester) run = false;
        });
        if (!run) return;
    });
    return NCourses.filter((curCoruse: Course): boolean => {
        if (!stingBoolean(curCoruse, allcouser)) {
            return confirm(
                "You have not yet met the following prereq" +
                    curCoruse.prereq +
                    " for " +
                    curCoruse.ticker +
                    "/n Do you still want to add?"
            );
        }
        return true;
    });
}
function checkPreReqsADD(
    selectedSemester: SemesterI,
    curCoruse: Course,
    courseplan: CoursePlan
) {
    const seasons: seasonT[] = ["winter", "spring", "summer", "fall"];
    let allcouser: Course[] = [];
    courseplan.years.forEach((year: yearI) => {
        let run = true;
        seasons.forEach((season: seasonT) => {
            if (year[season]) {
                allcouser = [...allcouser, ...year[season]!.courses];
            }
            if (year[season] == selectedSemester) run = false;
        });
        if (!run) return;
    });
    return stingBoolean(curCoruse, allcouser);
}
export function AddCourseToSemester(
    selectedSemester: SemesterI,
    NCourses: Course[],
    courseplan: CoursePlan
): CoursePlan {
    return {
        ...courseplan,
        years: courseplan.years.map((year: yearI): yearI => {
            // Map over each season and update the courses
            const updatedSeasons: {
                winter?: SemesterI | null;
                spring?: SemesterI | null;
                summer?: SemesterI | null;
                fall?: SemesterI | null;
            } = {};
            const seasons: seasonT[] = ["winter", "spring", "summer", "fall"];

            seasons.forEach((season) => {
                if (year[season] != null) {
                    updatedSeasons[season] =
                        year[season] === selectedSemester
                            ? ({
                                  ...year[season],
                                  courses: [
                                      ...year[season]!.courses,
                                      ...checkPreReqs(
                                          selectedSemester,
                                          NCourses,
                                          courseplan
                                      )
                                  ]
                              } as SemesterI)
                            : (year[season] as SemesterI);
                } else {
                    updatedSeasons[season] = null;
                }
            });

            return {
                ...year,
                ...updatedSeasons
            };
        })
    };
}
export function clearallsemester(courseplan: CoursePlan): CoursePlan {
    return {
        ...courseplan,
        years: courseplan.years.map((year: yearI): yearI => {
            // Map over each season and update the courses
            const updatedSeasons: {
                winter?: SemesterI | null;
                spring?: SemesterI | null;
                summer?: SemesterI | null;
                fall?: SemesterI | null;
            } = {};
            const seasons: seasonT[] = ["winter", "spring", "summer", "fall"];

            seasons.forEach((season) => {
                if (year[season] != null) {
                    updatedSeasons[season] = { ...year[season]!, courses: [] };
                } else {
                    updatedSeasons[season] = null;
                }
            });

            return {
                ...year,
                ...updatedSeasons
            };
        })
    };
}
