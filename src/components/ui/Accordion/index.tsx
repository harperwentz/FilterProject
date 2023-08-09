import React, { ReactElement } from 'react';
import { ModalDialog, Collapsible, ActionRow, Button } from '@edx/paragon';

type IndividualCollapsibleType = {
  categoryToCollapse: string;
  displayLabel: string;
  component: ReactElement; // what shows up when it opens
};

export type AccordionType = {
  currentlyOpenAccordionID: string;
  setOpenAccordionID: Function; //what happens when you click a different accordion than the one you're on
  accordionContentArray: IndividualCollapsibleType[]; // content that goes in each collapsible
};

const Accordion = (props: AccordionType) => {


  return (
    <>
      {props.accordionContentArray.map(accordionContent => {
        console.log("Accordian content", accordionContent);
        return (
          <Collapsible.Advanced
            open={accordionContent.categoryToCollapse === props.currentlyOpenAccordionID}
            className="collapsible-card-lg"
            onOpen={() => {
              props.setOpenAccordionID(accordionContent.categoryToCollapse);
            }}
          >
            <Collapsible.Trigger className="collapsible-trigger">
              <h4 className="flex-grow-1">{accordionContent.displayLabel}</h4>

              <Collapsible.Visible whenClosed>+</Collapsible.Visible>

              <Collapsible.Visible whenOpen>-</Collapsible.Visible>
            </Collapsible.Trigger>

            <Collapsible.Body className="collapsible-body">
              {accordionContent.component}
            </Collapsible.Body>
          </Collapsible.Advanced>
        );
      })}
    </>

  );
};

export default Accordion;
