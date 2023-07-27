import React, { ChangeEventHandler, useState } from 'react';
import './checkbox.css';

interface checkBoxProps {
    isChecked: boolean;
    option: string;
    setChecked: Function;
}

const Checkbox = (props: checkBoxProps) => {



  return (
    <div>
      <input type="checkbox" checked={props.isChecked} onChange={(e) => props.setChecked(!props.isChecked)} />
      <label>{props.option}</label>
    </div>
  );
};

export default Checkbox;
