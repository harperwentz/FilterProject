import React, { ReactElement } from "react";
import { CheckBoxGroupObject } from "../../../state/FiltersFormStore/types";
import Checkbox from "../CheckBox";
import { Form } from '@edx/paragon';



const InputGroup = (props: CheckBoxGroupObject) => {

    const { category, options } = props;

    return (

        <Form.CheckboxSet category={category}>
            {options.map((option: string): ReactElement =>
                <Checkbox option={option} />)}
        </Form.CheckboxSet>
    )

}

export default InputGroup;