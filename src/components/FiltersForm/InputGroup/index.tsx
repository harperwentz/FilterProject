import React, {useState} from 'react';
import CheckBox  from '../CheckBox'

interface InputGroupProps {
   category: string; 
}

const InputGroup: React.FC<InputGroupProps> = ( props ) => {

    const [isChecked, setChecked] = useState(false);
    //pass all 4 states here

    return (
      <div className="checkBoxContainer">
        <h3>{props.category}</h3>
        //change states here
        <CheckBox isChecked={isChecked} option="Genre" setChecked={setChecked}/>
        <CheckBox isChecked={isChecked} option="Title" setChecked={setChecked}/>
        <CheckBox isChecked={isChecked} option="Date" setChecked={setChecked}/>
        <CheckBox isChecked={isChecked} option="Category" setChecked={setChecked}/>
      </div>
    );
  };
  
  export default InputGroup;
