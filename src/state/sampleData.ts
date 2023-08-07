import { AllFiltersType } from "./FiltersFormStore/types";

const filtersData: AllFiltersType = {
    availability: {
        category: 'availability',
        numOptionsSelected: 0,
        categoryLabel: 'Availability',
        options: {
            'Available Now': false,
            'Coming Soon': false,
            // Add more availability options as needed
        },
    },
    level: {
        category: 'level',
        numOptionsSelected: 0,
        categoryLabel: 'Level',
        options: {
            'Introductory': false,
            'Intermediate': false,
            'Advanced': false,
        },
    },
    language: {
        category: 'language',
        numOptionsSelected: 0,
        categoryLabel: 'Language',
        options: {
            'English': false,
            'Spanish': false,
            'French': false,
            'German': false,
            // Add more language options as needed
        },
    },
    partner: {
        category: 'partner',
        numOptionsSelected: 0,
        categoryLabel: 'Partner',
        options: {
            'Harvard': false,
            'UT Austin': false,
            'The Linux Foundation': false,
            // Add more partner options as needed
        },
    },
    programType: {
        category: 'programType',
        numOptionsSelected: 0,
        categoryLabel: 'Program Type',
        options: {
            'Full-Time': false,
            'Part-Time': false,
            'Self-Paced': false,
            // Add more program type options as needed
        },
    },
    skill: {
        category: 'skill',
        numOptionsSelected: 0,
        categoryLabel: 'Skills',
        options: {
            'Programming': false,
            'Data Analysis': false,
            'Machine Learning': false,
            // Add up to 20 skill options as needed
        },
    },
    subject: {
        category: 'subject',
        numOptionsSelected: 0,
        categoryLabel: 'Subject',
        options: {
            'Mathematics': false,
            'Science': false,
            'History': false,
            // Add more subject options as needed
        },
    },
    learningType: {
        category: 'learningType',
        numOptionsSelected: 0,
        categoryLabel: 'Learning Type',
        options: {
            'Courses': false,
            'Degrees': false,
            'Boot Camps': false,
        },
    },
};

export default filtersData;