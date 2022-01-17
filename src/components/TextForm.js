import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");

  const calculateWords=(sentence)=>{
    let words=0,cnt=0;
    for(let i=0; i<sentence.length; i++){
      if(sentence.charAt(i)===' '){
        if(cnt>0)
          words+=1;
      }
      else{
        cnt+=1;
      }
    }
    if(cnt>0)
      words+=1;
    return words;
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  const handleUpChange = () => {
    let newText = text.toUpperCase();
    settext(newText);
    props.changeAlert("success","Converted to Upper Case!");
  };

  const handleLoChange = () => {
    let newText = text.toLowerCase();
    settext(newText);
    props.changeAlert("success","Converted to Lower Case!");
  };

  const handleClearText=()=>{
    let newText="";
    settext(newText);
    props.changeAlert("success","Cleared Text!");
  };

  const handleCopyText=()=>{
    navigator.clipboard.writeText(text);
    props.changeAlert("success","Text copied to Clipboard!");
  };

  const handleInvChange=()=>{
    let newText="";
    for(let i=0; i<text.length; i++)
    {
      if(text[i]===text[i].toUpperCase())
        newText=newText.concat(text[i].toLowerCase());
      else
      newText=newText.concat(text[i].toUpperCase());
    }
    settext(newText);
    props.changeAlert("success","Converted to Inverse Case!");
  }

  return (
    <>
      <div className="container my-3" style={{color: props.mode==='light'?"black":"white"}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?"#423F3E":props.mode==='primary'?"#406882":"white", color: props.mode==='light'?"black":"white"}}
          ></textarea>
        </div>
        <button disabled={text.length===0}
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`}
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button disabled={text.length===0}
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`}
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button disabled={text.length===0}
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`}
          onClick={handleUpChange}
        >
          Convert to Upper Case
        </button>
        <button disabled={text.length===0}
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`}
          onClick={handleLoChange}
        >
          Convert to Lower Case
        </button>
        <button disabled={text.length===0}
          type="button"
          className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1`}
          onClick={handleInvChange}
        >
          Convert to Inverse Case
        </button>
      </div>
      <div className="container my-3"  style={{color: props.mode==='light'?"black":"white"}}>
        <h3>Your Text Summary</h3>
        <p>
          {calculateWords(text)} words and {text.length} characters
        </p>
        <p>{0.008 * calculateWords(text)} minutes to read the entire text</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
