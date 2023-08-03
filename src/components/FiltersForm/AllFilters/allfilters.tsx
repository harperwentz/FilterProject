import React, { ReactElement, useEffect } from 'react';
import FilterList from "../FilterList/filterlist";
import { useFiltersSelector, useFiltersDispatch } from "../../../hooks/hooks";
import { addCategories, setCategory, clearForm } from "../../../state/FiltersFormStore/filters/filter-actions";

/*const FilterList = (props: FilterListDataType) => {
    //use Form component

    return (
        <Form onSubmit={event => { event.preventDefault(); }}>
            {props.filters.map((checkBoxGroupObject: CheckBoxGroupObject): ReactElement =>
                <InputGroup category={checkBoxGroupObject.category} options={checkBoxGroupObject.options} />)}
        </Form>
    )

}

export default FilterList;*/

const AllFilters = () => {

    const dispatch = useFiltersDispatch();

    const AllFiltersData = useFiltersSelector((state) => state.filters);

    // exampleData = [{category: 'School', options: ['Harvard', 'Princeton', 'Boston University']}, ....]

    const formattedFilterData = Object.keys(AllFiltersData).map(category => {
        const singleFilter = {
            category: AllFiltersData[category].category,
            options: AllFiltersData[category].options
        }
        return singleFilter;
    })


    console.log("AllFiltersProps", AllFiltersData);
    console.log("FormattedFilterData", formattedFilterData);


    return (
        <FilterList filters={formattedFilterData} />

    )
}

export default AllFilters;