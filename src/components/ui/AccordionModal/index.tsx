import React, { ReactElement } from 'react';
import { ModalDialog, Collapsible, ActionRow, Button } from '@edx/paragon';

type IndividualCollapsibleType = {
  id: string;
  title: string;
  content: ReactElement;
};

type ModalPropTypes = {
  isOpen: boolean;
  onClose: Function;
  modalTitle: string;
  currentlyOpenAccordionID: string;
  setOpenAccordionID: Function;
  accordionContentArray: IndividualCollapsibleType[];
};

const AccordionModal = (props: ModalPropTypes) => {
  if (!props.isOpen) return null;



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
        {props.accordionContentArray.map(accordionContent => {
          return (
            <Collapsible.Advanced
              open={accordionContent.id === props.currentlyOpenAccordionID}
              className="collapsible-card-lg"
              onOpen={() => {
                props.setOpenAccordionID(accordionContent.id);
              }}
            >
              <Collapsible.Trigger className="collapsible-trigger">
                <h4 className="flex-grow-1">{accordionContent.title}</h4>

                <Collapsible.Visible whenClosed>+</Collapsible.Visible>

                <Collapsible.Visible whenOpen>-</Collapsible.Visible>
              </Collapsible.Trigger>

              <Collapsible.Body className="collapsible-body">
                {accordionContent.content}
              </Collapsible.Body>
            </Collapsible.Advanced>
          );
        })}
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
  );
};

export default AccordionModal;
