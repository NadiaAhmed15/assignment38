import React, { useState } from "react";

const Input = () => { 
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(value); 
  };

  return (
    <div className="input-logger-container">
      <h2 className="input-logger-title">Input Logger</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        className="input-logger-input"
      />
    </div>
    
  );
};

export default Input;
