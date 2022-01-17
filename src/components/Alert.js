import React from "react";

export default function Alert(props) {

  const capitalise=(word)=>{
      let finalWord=word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();
      return finalWord;
  }

  return (
    <div style={{height: "50px"}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalise(props.alert.type)}!</strong> {props.alert.message}
    </div>}
    </div>
  );
}
