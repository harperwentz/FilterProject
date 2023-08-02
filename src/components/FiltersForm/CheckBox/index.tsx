import { useFiltersDispatch, useFiltersSelector } from '../../../hooks/hooks';
import { toggleOption } from "../../../state/FiltersFormStore/filters/filter-actions";
import './checkbox.css';

interface checkBoxProps {
  isChecked: boolean;
  option: string;
  setChecked: Function;
}

// Do i need props?
const Checkbox = (props: checkBoxProps) => {

  const dispatch = useFiltersDispatch();
  const isChecked = useFiltersSelector((state) => state.filters.isChecked);
  console.log("isChecked", isChecked);

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={() =>
        dispatch(toggleOption())} />
      <label>Option</label>
    </div>
  );
};

export default Checkbox;
