type BooleanObject = {
  [key: string]: boolean;
};

type SingleFilterType = {
  category: string;
  categoryLabel: string;
  numOptionsSelected: number;
  options: BooleanObject;
};

export type AllFiltersType = {
  availability: SingleFilterType;
  level: SingleFilterType;
  language: SingleFilterType;
  partner: SingleFilterType;
  skill: SingleFilterType;
  subject: SingleFilterType;
  programType: SingleFilterType;
  learningType: SingleFilterType;
};

type ModalType = {
  isOpen: boolean;
  currentCategory: string;
};

export type FiltersReduxStoreType = {
  filters: AllFiltersType;
  modal: ModalType;
};
