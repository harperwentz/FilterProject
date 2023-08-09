type SingleCheckbox = {
    [key: string]: boolean;
};

export type CheckBoxGroupObject = { //inputGroup.tsx
    category: string;
    categoryLabel?: string;
    numVisibleCheckboxes?: number;
    options: string[];
    isOpen?: boolean;
};

export type ModalDataObject = {
    category: string;
    options: string[];
    //FilterInputObject: 
};

//type for FilterList

export type SingleFilterType = { //For redux use
    category?: string;
    numOptionsSelected: number;
    categoryLabel: string;
    options: SingleCheckbox;
};

export type AllFiltersType = {
    availability: SingleFilterType;
    level: SingleFilterType;
    language: SingleFilterType;
    partner: SingleFilterType;
    programType: SingleFilterType;
    skill: SingleFilterType;
    subject: SingleFilterType;
    learningType: SingleFilterType;
}

export type ModalType = {
    isOpen: boolean;
    currentCategory: string;
}


export type FiltersReduxStoreType = {
    filters: AllFiltersType;
    modal: ModalType;
};
