import React, { ReactElement } from 'react';
import CheckBox  from '../CheckBox';
import {Form, Button, ModalDialog } from '@edx/paragon';
import { useFiltersSelector, useFiltersDispatch } from '../../../hooks/hooks';
import { toggleModal, setModalCategory } from '../../../state/FiltersFormStore/modal/modal-actions';
import { addCategories, setCategory, toggleOption, clearForm } from '../../../state/FiltersFormStore/filters/filter-actions';

type ModalPropTypes = {
    // modalObjectArray: FormInputObject[]; //category and options
}

const AllFiltersModal = (props: ModalPropTypes) => {
    const isOpen = useFiltersSelector((state) => state.modal.isOpen);

    const dispatch = useFiltersDispatch();

    console.log("is Open", isOpen);

    if (!isOpen)
      return null;

    return (
      <>
        <div className="d-flex">
          <Button variant="outline-primary" onClick={() => 
            dispatch(toggleModal())}>
              Show More
          </Button>
        </div>
        <ModalDialog
          title="All filters"
          onClose={() => 
            dispatch(toggleModal())}
          hasCloseButton
          isFullscreenOnMobile
        >
          <ModalDialog.Header>
            <ModalDialog.Title>
              All filters
            </ModalDialog.Title>
          </ModalDialog.Header>
  
          <ModalDialog.Body>
            <Form.Group>
                
              <Form.Label>
                {/* {[].map((modalObject: FormInputObject) : ReactElement => {
                    return (
                        <Form.CheckboxSet category={modalObject.category}>
                            {modalObject.options.map ((option: string) : ReactElement => 
                            <Form.Checkbox onChange={() => 
                                {dispatch(toggleOption({category: modalObject.category, option: option}))}}>
                                {option}
                            </Form.Checkbox>)}
                        </Form.CheckboxSet>
                    )
                })} */}
              </Form.Label>
            </Form.Group>
            
          </ModalDialog.Body>
  
          <ModalDialog.Footer>
          </ModalDialog.Footer>
        </ModalDialog>
      </>
    );
    }

export default AllFiltersModal;







/*{interface InputGroupProps {
   category: string; 
}

const InputGroup: React.FC<InputGroupProps> = ( props ) => {

    const dispatch = useDispatch();

    return (
      <div className="checkBoxContainer">
        <h3>{props.category}</h3>
        <CheckBox onChange={() => 
            {dispatch(toggleOption({category: modalObject.category, option: option}))}}>
        </CheckBox>
        <CheckBox isChecked={isChecked} option="Title" setChecked={setChecked}/>
        <CheckBox isChecked={isChecked} option="Date" setChecked={setChecked}/>
        <CheckBox isChecked={isChecked} option="Category" setChecked={setChecked}/>
      </div>
    );
  };
  
export default InputGroup;*/
