import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText]=useState("Enter Text Here");
  const handleUpClick=()=>{
      // console.log("Uppercase was clicked" + text);
      let newText=text.toUpperCase();
      setText(newText);
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
}
const handleClearClick=()=>{
  // console.log("Uppercase was clicked" + text);
  let newText=('');
  setText(newText);
}
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const handleExtraSpace=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(' '));
  }
  return (
    <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="12"></textarea>
          </div>
          <button className='btn btn-primary mx-1' onClick={handleUpClick}>Covert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handleLoClick}>Covert to Uppercase</button>
          <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
          <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
          <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className='container' my-3>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} Words and {text.length}</p>
        <p>{0.005* text.split(" ").length}Time to Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
        

      </div>
    </>
  )
}
