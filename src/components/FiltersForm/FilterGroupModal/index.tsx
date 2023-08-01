import React, { ReactElement } from 'react';
import CheckBox  from '../CheckBox'
import {Form, Button, ModalDialog } from '@edx/paragon';
import 'bootstrap/js/dist/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { useDispatch, useSelector, Provider } from 'react-redux';
import store from '../FilterFormsStore/filterform-store';
import { toggleModal, setModalCategory } from '../FilterFormsStore/modal-actions';
import { addCategories, setCategory, toggleOption, clearForm } from '../FilterFormsStore/filter-actions';
import { selectCategoryByName, selectNumOptionsSelected, selectOptionsForCategory } from '../FilterFormsStore/filter-selectors';
import { FormInputObject } from '../FilterFormsStore/types';

type ModalPropTypes = {
    modalObjectArray: FormInputObject[]; //category and options
    formStateObjectArray: boolean;
}



const FilterGroupModal = (props: ModalPropTypes) => {

    const dispatch = useDispatch();

    return (
      //<Provider store={store}>
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
                {props.modalObjectArray.map ((modalObject: FormInputObject) : ReactElement => {
                    return (
                        <Form.CheckboxSet category={modalObject.category}>
                            {modalObject.options.map ((option: string) : ReactElement => 
                            <Form.Checkbox onChange={() => 
                                {dispatch(toggleOption({category: modalObject.category, option: option}))}}>
                                {option}
                            </Form.Checkbox>)}
                        </Form.CheckboxSet>
                    )
                })}
              </Form.Label>
            </Form.Group>
            
          </ModalDialog.Body>
  
          <ModalDialog.Footer>
          </ModalDialog.Footer>
        </ModalDialog>
      </>
      //</Provider>
    );
    }

export default FilterGroupModal;







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
