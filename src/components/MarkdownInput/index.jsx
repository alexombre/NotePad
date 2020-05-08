import React, { useState } from 'react';



const MarkdownInput = (props) => {
	
	

  	return (
    <div>
      <div>
        <label>title:</label>
        <input type="text" name="title" onChange={props.onChange} />
      </div>
      <div>
        <textarea type="text" name="content" onChange={props.onChange} />
      </div>
      <button onClick={props.onClick}>Save !</button>
    </div>
    );


  
};

export default MarkdownInput;