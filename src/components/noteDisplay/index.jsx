import React, { useState, useEffect } from 'react';
import Showdown from "showdown";


const NoteDisplay = (props) => { 
  const converter = new Showdown.Converter();
  const {title , content} = props.value ;
  const h = converter.makeHtml(title);
  const p = converter.makeHtml(content);

  const createMarkup = (html) => {
    return {__html: html};
  }

  return (
    <>
      <div dangerouslySetInnerHTML={createMarkup(h)} />
      <hr/>
      <div dangerouslySetInnerHTML={createMarkup(p)} />
    </>


  );  
    
  
};

export default NoteDisplay;