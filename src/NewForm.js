import React, {useState} from 'react';

let onChangeName = () =>{
}

function  NewForm(){
    const [textContent, setTextContent] = useState('test');
    
    return <form >
        <input 
        placeholder="Username" 
        value={textContent}
        onChange={onChangeName} 
        /><br />
        <input 
        type="password" 
        placeholder="Password" 
        value={textContent}
        onChange={onChangeName} 
        />
        <br />
        <button type="submit">
            Submit
        </button><br/>
        
      </form>
};

export default NewForm;