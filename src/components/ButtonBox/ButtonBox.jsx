import React from 'react';
import './ButtonBox.css';
import { useState} from 'react';

function ButtonBox({Text}) {
  const [isBold,SetBold]=useState(false);
  const [isItalian, SetItalian]=useState(false)
  const [isUnder,SetUnder]=useState(false)
  const [Size, setSize] = useState(12);
  const [Color, setColor] = useState("");

  const bolded = () => {
    SetBold((prev)=>!prev)
  }
  

  const italic = () => {
    SetItalian((prev)=>!prev)
  }

  const underline = () => {
    SetUnder((prev)=>!prev)
  }

  const changeColor = (e) => {
    setColor(e.target.value);
  }

  const changeFont = (e) => {
    setSize(e.target.value);
  }
  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalian ? 'italic' : 'normal',
    textDecoration: isUnder ? 'underline' : 'none',
    fontSize: `${Size}px`,
    color:Color
    };
  return (
    <div className='Section'>
      <div className='Inputs'>
        <button onClick={bolded}>Bold</button>
        <button onClick={italic}>Italic</button>
        <button onClick={underline}>Underline</button>
        <input placeholder='enter the font size' type='number' value={Size} onChange={changeFont}></input>
        <input placeholder='enter the color' type='color' value={Color} onChange={changeColor}></input>
      </div>
      <div className='TextField'>
        <p style={textStyle}>
          {Text}
        </p>
      </div>
    </div>
  );
}

export default ButtonBox;


