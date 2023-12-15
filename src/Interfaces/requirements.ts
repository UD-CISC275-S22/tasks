/*This is the degree requirements for both CSBA and CSBS,
it also includes university and college breadth requirements.
Displayed order is slightly different from catalog, scroll down
to see breadths.*/

/*Core Class Requirements */
/*CSBA*/
export const CoreBA = [
    "CISC108",
    "CISC181",
    "CISC210",
    "CISC220",
    "CISC260",
    "CISC275",
    "MATH210",
    "MATH241",
    "ENGL110"
];

/*CSBS*/
export const CoreBS = [
    "CISC108",
    "CISC181",
    "CISC210",
    "CISC220",
    "CISC260",
    "CISC275",
    "CISC303",
    "CISC320",
    "MATH210",
    "MATH241",
    "CISC355",
    "ENGL110"
];

/*University and College Requirements*/
export const math = ["MATH205", "MATH350"];
export const secondWriting = ["ENGL312", "ENGL410"];
export const capstone = ["CISC498", "CISC499", "UNIV401", "UNIV402"];
export const additionalReqs = ["CISC304", "MATH349"];
export const labSciences = [
    "BISC207",
    "BISC208",
    "CHEM103",
    "CHEM133",
    "CHEM104",
    "CHEM134",
    "GEOL105",
    "GEOL115",
    "GEOL107",
    "GEOL110",
    "PHYS207",
    "PHYS227",
    "PHYS208",
    "PHYS228"
];

/* Concentrations */

export const ArtificialIntelligence = [
    "CISC108",
    "CISC181",
    "CISC210",
    "CISC220",
    "CISC260",
    "CISC275",
    "CISC304",
    "CISC355",
    "CISC372",
    "CISC437",
    "CISC481",
    "CISC483",
    "EGGG101",
    "ENGL11O",
    "MATH205",
    "MATH210",
    "MATH241",
    "MATH242",
    "MATH243",
    "MATH349",
    "MATH350"
];

export const Bioinformatics = [
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
<<<<<<< HEAD
    "MATH349"
    // [
    //     ["CHEM213", "CHEM215"],
    //     ["CHEM321", "CHEM325"]
    // ],
    // ["CISC483", "CISC484"]
=======
    "MATH349",
    "CHEM215",
    "CHEM321",
    "CISC483"
>>>>>>> main
];

export const Cybersecurity = [
    "CISC361",
    "CISC372",
    "CISC450",
    "CISC464",
    "CPEG465",
    "CISC494"
<<<<<<< HEAD
    // ["CPEG472", "CPEG473", "CPEG475", "CPEG476", "CPEG495"]
=======
>>>>>>> main
];

export const DataScience = [
    "CISC108",
    "CISC181",
    "CISC210",
    "CISC220",
    "CISC260",
    "CISC275",
    "CISC304",
    "CISC355",
    "CISC372",
    "CISC437",
    "CISC481",
    "CISC483",
    "EGGG101",
    "ENGL11O",
    "MATH205",
    "MATH210",
    "MATH241",
    "MATH242",
    "MATH243",
<<<<<<< HEAD
    "MATH349"
    // ["CISC483", "CISC484"],
    // ["MATH302", "MATH350", "MATH426"]
=======
    "MATH349",
    "MATH350"
>>>>>>> main
];

export const HighPerformanceComputing = [
    "CISC360",
    "CISC361",
    "CISC372",
    "CISC450",
    "CISC471",
    "MATH242",
    "MATH243",
    "MATH351",
    "MATH428"
<<<<<<< HEAD
    // ["CISC300+", "MATH205", "MATH350", "CISC387", "CISC487"]
];

export const HighPerformanceComputingData = [
    "CISC360",
    "CISC361",
    "CISC372",
    "CISC450",
    "CISC471",
    "MATH242",
    "MATH243",
    "CISC437",
    "MATH350",
    "MATH450"
    // ["CISC483", "CISC484"],
    // [
    //     "CISC300+",
    //     "MATH302",
    //     "MATH349",
    //     "MATH451",
    //     "MATH535",
    //     "CISC387",
    //     "CISC487"
    // ]
=======
>>>>>>> main
];

export const SystemsNetworks = [
    "CISC360",
    "CISC361",
    "CISC372",
    "CISC450",
<<<<<<< HEAD
    "CISC471"
    // [
    //     "CISC464",
    //     "CPEG465",
    //     "CPEG470",
    //     "CPEG476",
    //     "CPEG473",
    //     "CPEG475",
    //     "CPEG497"
    // ],
    // [
    //     "CISC437",
    //     "CISC453",
    //     "CISC459",
    //     "CISC464",
    //     "CISC474",
    //     "CISC475",
    //     "CISC479",
    //     "CPEG473",
    //     "CPEG497"
    // ]
=======
    "CISC471",
    "MATH205",
    "CISC464"
>>>>>>> main
];

export const TheoryComputation = [
    "CISC304",
    "CISC401",
    "MATH242",
<<<<<<< HEAD
    "MATH349"
    // ["CISC4O4", "MATH245", "MATH315", "MATH451"]
];

export const TheoryComputationCont = [
    "CISC304",
    "CISC401",
    "MATH242",
    "MATH349"
    // ["MATH243", "MATH302", "MATH535", "MATH426"]
=======
    "MATH349",
    "CISC4O4",
    "MATH426"
>>>>>>> main
];

export const None = [""];

export const Concentrations = [
    ArtificialIntelligence,
    Bioinformatics,
    Cybersecurity,
    DataScience,
    HighPerformanceComputing,
    SystemsNetworks,
<<<<<<< HEAD
    TheoryComputationDiscrete,
    TheoryComputationCont,
    None
=======
    TheoryComputation
>>>>>>> main
];

export const Degrees = [CoreBA, CoreBS];

/*University FYE Requirement*/
export const FYE = ["ARSC116", "BHAN135"];

/*University DLE Requirement*/
export const DLE = ["ACCT363", "ACCT364"];

/*University Multicultural Requirement*/
export const Multicultural = ["AFRA110", "AFRA193"];

/*University Breadth A Requirement*/
export const BreadthA = ["AFRA206", "AFRA250"];

/*University Breadth B Requirement*/
export const BreadthB = ["AFRA110", "AFRA193"];

/*University Breadth C Requirement*/
export const BreadthC = ["AFRA205", "AFRA223"];

/*University Breadth D Requirement*/
export const BreadthD = ["AGRI100", "ANFS101"];
