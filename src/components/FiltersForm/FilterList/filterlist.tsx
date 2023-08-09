import React, { ReactElement } from "react";
import InputGroup from "../InputGroup/inputgroup";
import { Form } from '@edx/paragon';
import { CheckBoxGroupObject } from "../../../state/FiltersFormStore/types";

export type FilterListPropType = { //array of checkBoxGroup objects
    filters: CheckBoxGroupObject[];
}

const FilterList = (props: FilterListPropType) => {
    //use Form component

    return (
        <Form onSubmit={event => { event.preventDefault(); }}>
            {props.filters.map((checkBoxGroup: CheckBoxGroupObject): ReactElement =>
                <InputGroup
                    category={checkBoxGroup.category}
                    categoryLabel={checkBoxGroup.categoryLabel}
                    options={checkBoxGroup.options}
                    numVisibleCheckboxes={2}
                />)}
        </Form>
    )

}

export default FilterList;