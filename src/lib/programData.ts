export interface ProgramRoadmap {
  semester: number;
  courses: {
    code: string;
    title: string;
    creditHours: number;
    type: string;
  }[];
}

export interface ProgramStructure {
  totalCreditHours: number;
  totalCourses: number;
  semesters: number;
  duration: string;
  breakdown: {
    particulars: string;
    noOfCourses: number;
    creditHours: number;
  }[];
}

export interface ProgramDetail {
  id: string;
  title: string;
  introduction: string;
  objective: string;
  careerProspects: string[];
  duration: string;
  entryRequirements: string;
  programType: string;
  structure: ProgramStructure;
  roadmap: ProgramRoadmap[];
}

export const programDetails: Record<string, ProgramDetail> = {
  "adp-af": {
    id: "adp-af",
    title: "Associate Degree in Accounting & Finance",
    introduction: "Accounting and Finance profession is ever demanding profession all around the globe. Keeping in view the latest development in the corporate sector through the introduction and implementation of code of corporate governance the better record keeping and reporting has gained more importance. Two years degree in Accounting and Finance is intended assimilate the key areas of accounting and finance within a business environment.",
    objective: "Accounting and Finance profession is ever demanding profession all around the globe. Keeping in view the latest development in the corporate sector through the introduction and implementation of code of corporate governance the better record keeping and reporting has gained more importance. Two years degree in Accounting and Finance is intended assimilate the key areas of accounting and finance within a business environment.",
    careerProspects: [
      "Auditor",
      "Bank Examiner",
      "Certified Public Accountant",
      "Finance Manager"
    ],
    duration: "2 Years",
    entryRequirements: "Intermediate or equivalent (12 years) qualification with minimum (35%) marks.",
    programType: "Morning/ Evening",
    structure: {
      totalCreditHours: 66,
      totalCourses: 22,
      semesters: 4,
      duration: "2 years",
      breakdown: [
        { particulars: "Compulsory courses", noOfCourses: 6, creditHours: 18 },
        { particulars: "Foundation courses", noOfCourses: 4, creditHours: 12 },
        { particulars: "Content courses", noOfCourses: 10, creditHours: 30 },
        { particulars: "Electives", noOfCourses: 2, creditHours: 6 }
      ]
    },
    roadmap: [
      {
        semester: 1,
        courses: [
          { code: "EN-114", title: "English Grammar and Composition -I", creditHours: 3, type: "General Education Compulsory" },
          { code: "ISL-112", title: "Islamic Thought and Perspectives", creditHours: 3, type: "General Education Compulsory" },
          { code: "QM-110", title: "Business Mathematics", creditHours: 3, type: "General Education Compulsory" },
          { code: "IS-135", title: "Computer Applications (Theory & Lab)", creditHours: 3, type: "General Education Compulsory" },
          { code: "AC-103", title: "Accounting Principles-I", creditHours: 3, type: "Foundation Course" },
          { code: "MG-201", title: "Introduction to Business", creditHours: 3, type: "Foundation Course" }
        ]
      },
      {
        semester: 2,
        courses: [
          { code: "EN-221", title: "English Grammar and Composition II", creditHours: 3, type: "General Education Compulsory" },
          { code: "POL-121", title: "Pakistan: Ideology, Constitution and Society", creditHours: 3, type: "General Education Compulsory" },
          { code: "QM-230", title: "Business Statistics", creditHours: 3, type: "General Education Compulsory" },
          { code: "AC-205", title: "Accounting Principles - II", creditHours: 3, type: "Major Course" },
          { code: "MG-354", title: "Introduction to Management", creditHours: 3, type: "Foundation Course" },
          { code: "EC-213", title: "Fundamentals of Economics", creditHours: 3, type: "Foundation Course" }
        ]
      },
      {
        semester: 3,
        courses: [
          { code: "AC-352", title: "Principles of Auditing", creditHours: 3, type: "Major Course" },
          { code: "LT-231", title: "Business Law", creditHours: 3, type: "Major Course" },
          { code: "EN-326", title: "Business Communication & Report Writing", creditHours: 3, type: "Major Course" },
          { code: "MK-351", title: "Introduction to Marketing", creditHours: 3, type: "Major Course" },
          { code: "FN-285", title: "Business Finance - I", creditHours: 3, type: "Major Course" },
          { code: "AC-301", title: "Financial Accounting", creditHours: 3, type: "Major Course" }
        ]
      },
      {
        semester: 4,
        courses: [
          { code: "MG-224", title: "Innovation and Entrepreneurship", creditHours: 3, type: "General Education Compulsory" },
          { code: "LT-341", title: "Principles of Taxation", creditHours: 3, type: "Major Course" },
          { code: "EC-316", title: "Economy of Pakistan", creditHours: 3, type: "Major Course" },
          { code: "FN-349", title: "Business Finance - II", creditHours: 3, type: "Major Course" },
          { code: "AC-320", title: "Fundamentals of Cost & Management Accounting", creditHours: 3, type: "Major Course" }
        ]
      }
    ]
  }
};
