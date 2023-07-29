import { clear } from "@testing-library/user-event/dist/clear";
import React ,{useState}from "react";

export default function TextForm(props) {
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed","success")
  }
    const clearClick=()=>{
        setText("")
        props.showAlert("Text has been cleared","success");
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const[text,setText]=useState("")
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        
        <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="8"

        ></textarea>

       
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearClick}>clear the textarea</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} mintues to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
      
   
    
    
  );
}
