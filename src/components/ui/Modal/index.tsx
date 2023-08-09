import React from "react";
import { ModalDialog, ActionRow, Button } from '@edx/paragon';
import Accordion from "../Accordion";
import { AccordionType } from "../Accordion";

type ModalPropsType = {
  isOpen: boolean;
  onClose: Function;
  modalTitle: string;
} & AccordionType;

const Modal = (props: ModalPropsType) => {

  console.log("Modal Props.accordian", props.accordionContentArray);
  return (
    <ModalDialog
      title={props.modalTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="lg"
      hasCloseButton
      isFullscreenOnMobile
    >
      <div className="px-4 py-2">
        <ModalDialog.Title as="h2">{props.modalTitle}</ModalDialog.Title>
      </div>

      <ModalDialog.Body>
        <Accordion
          currentlyOpenAccordionID={props.currentlyOpenAccordionID}
          setOpenAccordionID={props.setOpenAccordionID}
          accordionContentArray={props.accordionContentArray}
        />
      </ModalDialog.Body>

      <ModalDialog.Footer>
        <ActionRow>
          <ModalDialog.CloseButton variant="tertiary">
            Close
          </ModalDialog.CloseButton>
          <Button variant="primary">Submit</Button>
        </ActionRow>
      </ModalDialog.Footer>
    </ModalDialog>
  )
}

export default Modal;