import React, { ReactElement } from "react";
import { CheckBoxGroupObject } from "../../../state/FiltersFormStore/types";
import Checkbox from "../CheckBox";
import { Form } from '@edx/paragon';



const InputGroup = (props: CheckBoxGroupObject) => {

    const { category, categoryLabel, options } = props;

    return (

        <Form.CheckboxSet category={category}>
            <h2><Form.Label>
                {categoryLabel}
            </Form.Label></h2>
            {options.map((option: string): ReactElement =>
                <Checkbox category={category} option={option} />)}
        </Form.CheckboxSet>
    )

}

export default InputGroup;