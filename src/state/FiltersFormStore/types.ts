type BooleanObject = {
  [key: string]: boolean;
};

type SingleFilterType = {
  category: string;
  numOptionsSelected: number;
  label: string;
  options: BooleanObject;
};

type AllFiltersType = {
  partner: SingleFilterType;
  skill: SingleFilterType;
  subject: SingleFilterType;
};

type ModalType = {
  isOpen: boolean;
  currentCategory: string;
};

export type FiltersReduxStoreType = {
  filter: AllFiltersType;
  modal: ModalType;
};
