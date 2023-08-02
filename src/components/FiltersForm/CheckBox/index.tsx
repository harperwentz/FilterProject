import React from 'react';
import { Form } from '@edx/paragon';
import { toggleOption } from '../../../state/FiltersFormStore/filters/filter-actions';
import { useFiltersDispatch, useFiltersSelector } from '../../../hooks/hooks';

interface checkBoxProps {
  title: string;
}

const Checkbox = (props: checkBoxProps) => {
  const isChecked = useFiltersSelector(
    state => state.filters.partner.options?.[props.title]
  );

  const dispatch = useFiltersDispatch();

  const updateSingleFilter = (option: string) => {
    dispatch(toggleOption({ category: 'partner', option: option }));
  };

  return (
    <Form.Checkbox
      name="checkbox"
      checked={isChecked}
      onChange={() => updateSingleFilter(props.title)}
    >{`Select ${props.title}`}</Form.Checkbox>
  );
};

export default Checkbox;
