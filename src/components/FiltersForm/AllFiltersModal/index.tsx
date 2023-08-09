import React, { ReactElement } from 'react';
import { useFiltersSelector, useFiltersDispatch } from '../../../hooks/hooks';
import { toggleModal, setModalCategory } from '../../../state/FiltersFormStore/modal/modal-actions';
import { addCategories, setCategory, toggleOption, clearForm } from '../../../state/FiltersFormStore/filters/filter-actions';
import Accordion from '../../ui/Accordion';
import Modal from '../../ui/Modal';
import InputGroup from '../InputGroup/inputgroup';



const AllFiltersModal = () => {

  const currentCategory = useFiltersSelector(state => state.modal.currentCategory);
  const isOpen = useFiltersSelector(state => state.modal.isOpen);
  const dispatch = useFiltersDispatch();
  const AllModalData = useFiltersSelector((state) => state.modal);
  const AllFiltersData = useFiltersSelector((state) => state.filters);
  const setNewCategory = (newCategory) => { dispatch(setModalCategory({ category: newCategory })) }



  const formattedAccordianData = Object.keys(AllFiltersData).map(category => {

    const categoryToCollapse = AllFiltersData[category].category;
    const displayLabel = AllFiltersData[category].categoryLabel;


    const singleAccordian = {
      categoryToCollapse: categoryToCollapse,
      displayLabel: displayLabel,
      component: (<InputGroup
        category={categoryToCollapse}
        options={Object.keys(AllFiltersData[category].options)}
      />)

    }

    return singleAccordian;
  })


  console.log("Formatted Accordian Data", formattedAccordianData);
  console.log("Currently Selected Category", currentCategory);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        dispatch(toggleModal());
      }}
      modalTitle="All filters"
      currentlyOpenAccordionID={currentCategory}
      setOpenAccordionID={setNewCategory} //use setModalCategory dispatch here 

      // map over the data here
      accordionContentArray={formattedAccordianData}
    />
  );
};

export default AllFiltersModal;
