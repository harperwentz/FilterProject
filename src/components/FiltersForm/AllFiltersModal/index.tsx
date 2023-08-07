import React, { ReactElement } from 'react';
import { useFiltersSelector, useFiltersDispatch } from '../../../hooks/hooks';
import { toggleModal, setModalCategory } from '../../../state/FiltersFormStore/modal/modal-actions';
import { addCategories, setCategory, toggleOption, clearForm } from '../../../state/FiltersFormStore/filters/filter-actions';
import AccordionModal from '../../ui/AccordionModal';

type ModalPropTypes = {
  title: string;
};

const AllFiltersModal = (props: ModalPropTypes) => {
  const [currentCategory, setCurrentCategory] = React.useState('filter');
  const isOpen = useFiltersSelector(state => state.modal.isOpen);
  const dispatch = useFiltersDispatch();

  return (
    <AccordionModal
      isOpen={isOpen}
      onClose={() => {
        dispatch(toggleModal());
        dispatch(clearForm());
      }}
      modalTitle={props.title}
      currentlyOpenAccordionID={currentCategory}
      setOpenAccordionID={setCurrentCategory}
      accordionContentArray={[
        {
          id: 'filter',
          title: 'Filter 1',
          component: <div>filter one content</div>,
        },
        {
          id: 'filter2',
          title: 'Filter 2',
          component: <div>filter two content</div>,
        },
      ]}
    />
  );
};

export default AllFiltersModal;
