import React from 'react';
import './Editor.css';
import ButtonBox from '../ButtonBox/ButtonBox';
function Editor() {
  return (
    <div>
      <ButtonBox Text={"Make a responsive grid of 4 rows and 2 columns with appropriate padding and margin"}/>
      <ButtonBox Text={"Code 20 different inputs buttons,and write 4 sentences"} />
      <ButtonBox Text={"Write js functions to change the properties of the sentences when a corresponding button is clicked"}/>
      <ButtonBox Text={"Try to make code modular and don’t reuse the same code, instead try to make a function"}/>
    </div>
  )
}

export default Editor
