import { useFiltersDispatch, useFiltersSelector } from '../../../hooks/hooks';
import { toggleOption } from "../../../state/FiltersFormStore/filters/filter-actions";
//import './checkbox.css';
import { Form } from '@edx/paragon';

interface checkBoxProps {
  category: string;
  option: string;
}

const Checkbox = (props: checkBoxProps) => {

  const dispatch = useFiltersDispatch();
  const isChecked = useFiltersSelector((state) => state.filters[props.category].options?.[props.option]);


  return (
    <Form.Checkbox className="w-100" checked={isChecked} onChange={() =>
      dispatch(toggleOption({ category: props.category, option: props.option }))}>
      {props.option}
    </Form.Checkbox>
  );
};

export default Checkbox;
