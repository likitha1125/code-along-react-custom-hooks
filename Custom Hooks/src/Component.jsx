import React from 'react';
import useStorage from './Storage'; 
import './App.css'
const YourComponent = () => {
  const [inputValue, setInputValue] = useStorage('textInput', ''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
    </div>
  );
};

export default YourComponent;
