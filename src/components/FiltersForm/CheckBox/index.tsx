import { useFiltersDispatch, useFiltersSelector } from '../../../hooks/hooks';
import { toggleOption } from "../../../state/FiltersFormStore/filters/filter-actions";
import './checkbox.css';
import { Form } from '@edx/paragon';

interface checkBoxProps {
  option: string;
}

// Do i need props?
const Checkbox = (props: checkBoxProps) => {

  const dispatch = useFiltersDispatch();
  const isChecked = useFiltersSelector((state) => state.filters.partner.options?.[props.option]);
  console.log("isChecked", isChecked);

  return (
    <Form.Checkbox checked={isChecked} onChange={() =>
      dispatch(toggleOption())}>
      {props.option}
    </Form.Checkbox>
  );
};

export default Checkbox;
