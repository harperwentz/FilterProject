import { Button } from '@edx/paragon';
import { useFiltersDispatch } from '../../../hooks/hooks';
import { toggleModal } from '../../../state/FiltersFormStore/modal/modal-actions';

const OpenModalButton = props => {
  const dispatch = useFiltersDispatch();

  return <Button onClick={() => dispatch(toggleModal())}>{props.title}</Button>;
};

export default OpenModalButton;
