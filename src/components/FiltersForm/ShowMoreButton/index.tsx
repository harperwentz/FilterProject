import { Button } from '@edx/paragon';
import { useFiltersDispatch } from '../../../hooks/hooks';
import { openModalToCategory } from '../../../state/FiltersFormStore/modal/modal-actions';

type ShowMoreButtonProps = {
    category: string;
    isOpen: boolean;
}

//call OPEN_MODAL_TO_CATEGORY action
const ShowMoreButton = (props: ShowMoreButtonProps) => {
    const dispatch = useFiltersDispatch();


    return (
        <Button onClick={() => dispatch(openModalToCategory({ isOpen: props.isOpen, category: props.category }))}
            variant="link"
            size="inline">
            Show More
        </Button>
    )
};

export default ShowMoreButton;