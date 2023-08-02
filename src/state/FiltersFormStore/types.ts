type BooleanObject = {
  [key: string]: boolean;
};

type SingleFilterType = {
  category: string;
  numOptionsSelected: number;
  categoryNameText: string;
  options: BooleanObject;
};

type AllFiltersType = {
  partner: SingleFilterType;
  skills: SingleFilterType;
  subject: SingleFilterType;
};

type ModalType = {
  isOpen: boolean;
  currentCategory: string;
};

export type FiltersReduxStoreType = {
  filters: AllFiltersType;
  modal: ModalType;
};
