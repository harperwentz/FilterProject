import React, { ReactElement } from "react";
import { CheckBoxGroupObject } from "../../../state/FiltersFormStore/types";
import Checkbox from "../CheckBox";
import { Form } from '@edx/paragon';



const InputGroup = (props: CheckBoxGroupObject) => {

    const { category, categoryLabel, numVisibleCheckboxes, options } = props;

    return (

        <Form.Group category={category}>
            {categoryLabel ? (<h2><Form.Label>
                {categoryLabel}
            </Form.Label></h2>) : null}
            {options.map((option: string): ReactElement =>
                <Checkbox category={category} option={option} />)}
        </Form.Group>
    )

}

export default InputGroup;