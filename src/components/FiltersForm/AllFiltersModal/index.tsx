import React, { ReactElement } from 'react';
import { useFiltersSelector, useFiltersDispatch } from '../../../hooks/hooks';
import {
  toggleModal,
  setModalCategory,
} from '../../../state/FiltersFormStore/modal/modal-actions';
import {
  addCategories,
  setCategory,
  toggleOption,
  clearForm,
} from '../../../state/FiltersFormStore/filters/filter-actions';
import { default as Modal } from '../../ui/AccordionModal';
import Checkbox from '../CheckBox';

type ModalPropTypes = {
  title: string;
};

const AllFiltersModal = (props: ModalPropTypes) => {
  const filters = useFiltersSelector(state => state.filters);
  const [currentCategory, setCurrentCategory] = React.useState('filter');
  const isOpen = useFiltersSelector(state => state.modal.isOpen);
  const dispatch = useFiltersDispatch();

  const formattedAccordionData = Object.keys(filters).map((category, index) => {

    const collapsibleData = 
    return {
      category: category,
      options: Object.keys(filters[category].options),
    };
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        dispatch(toggleModal());
        dispatch(clearForm());
      }}
      modalTitle={props.title}
      currentlyOpenAccordionID={currentCategory}
      setOpenAccordionID={setCurrentCategory}
      accordionContentArray={formattedModalData.map(filter => {
        return {
          id: filter.category,
          title: filter.category,
          content: (
            <div>
              hi
            </div>
          ),
        };
      })}
    />
  );
};

export default AllFiltersModal;
