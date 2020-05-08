import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import MarkdownInput from "./components/MarkdownInput/index";
import NoteDisplay from "./components/noteDisplay/index";


const App = () => {
  //State
  const [input, setInput] = useState({});

  const handleInputChange = (e) => setInput({
  	...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const savingData = () => {
  	localStorage[input.title] = input.content;
  	console.log(localStorage.length)
   }
  

  

  return (
  	<>
	  	<NoteDisplay value={input} />
	  	<MarkdownInput onChange={handleInputChange} onClick={savingData} />
  	</>
  	);
};

ReactDOM.render(<App />, document.querySelector("#root"));