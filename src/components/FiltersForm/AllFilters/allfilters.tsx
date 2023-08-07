import React, { ReactElement, useEffect } from 'react';
import FilterList from "../FilterList/filterlist";
import { useFiltersSelector, useFiltersDispatch } from "../../../hooks/hooks";
import { addCategories, setCategory, clearForm } from "../../../state/FiltersFormStore/filters/filter-actions";



const AllFilters = () => {

    const dispatch = useFiltersDispatch();

    const AllFiltersData = useFiltersSelector((state) => state.filters);

    // exampleData = [{category: 'School', options: ['Harvard', 'Princeton', 'Boston University']}, ....]

    const formattedFilterData = Object.keys(AllFiltersData).map(category => {
        const singleFilter = {
            category: AllFiltersData[category].category,
            categoryLabel: AllFiltersData[category].categoryLabel,
            options: Object.keys(AllFiltersData[category].options)
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