import React, { ReactElement } from "react";
import { CheckBoxGroupObject } from "../../../state/FiltersFormStore/types";
import Checkbox from "../CheckBox";
import { Form } from '@edx/paragon';
import ShowMoreButton from "../ShowMoreButton";


const InputGroup = (props: CheckBoxGroupObject) => {

    const { category, categoryLabel, numVisibleCheckboxes, options } = props;

    return (

        <Form.Group category={category}>
            {categoryLabel ? (<h2><Form.Label>
                {categoryLabel}
            </Form.Label></h2>) : null}
            {options.map((option: string, index: number): ReactElement => {
                if (index < numVisibleCheckboxes) {
                    return (
                        <Checkbox category={category} option={option} />
                    )
                }
                else if (index === numVisibleCheckboxes) {
                    return (
                        <ShowMoreButton />
                    )
                }
                else {
                    return
                }


            })}
        </Form.Group>
    )

}

export default InputGroup;