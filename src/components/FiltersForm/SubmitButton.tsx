import { Form, Button, ModalDialog } from "@edx/paragon";
import { useFiltersDispatch, useFiltersSelector } from "../../hooks/hooks";
import { toggleModal } from "../../state/FiltersFormStore/modal/modal-actions";


const SubmitButton = () => {
    const dispatch = useFiltersDispatch();
    // UseSelector here to get state
    return (
        <div className='d-flex'>
            <Button variant="outline-primary" onClick={() =>
                dispatch(toggleModal())}>
                Open Modal
            </Button>
        </div>
    )
}

export default SubmitButton;
