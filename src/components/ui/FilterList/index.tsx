import Checkbox from "../../FiltersForm/CheckBox";

const FilterList = (props) => {
  return props.options.map(option => (
    <div key={option.value}>
      <Checkbox title={option} />
    </div>
  ));
};

export default FilterList;
