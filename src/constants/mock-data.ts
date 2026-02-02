import { Subject } from "@/types";

// Mock subject data
export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description:
            "Covers fundamental programming concepts, problem-solving techniques, and an overview of computer systems.",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: "ENG205",
        name: "Technical Writing",
        department: "English",
        description:
            "Focuses on writing clear and effective technical documents, reports, and professional communications.",
        createdAt: new Date().toISOString()

    },
    {
        id: 3,
        code: "MATH210",
        name: "Discrete Mathematics",
        department: "Mathematics",
        description:
            "Introduces logic, set theory, combinatorics, graphs, and their applications in computer science.",
        createdAt: new Date().toISOString()

    }
];
