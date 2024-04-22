import React, { useState } from 'react';
import './load-more-button.styles.css'

const InputDisplayButton = () => {
  const [inputText, setInputText] = useState(''); // State to hold the input text
  const [displayedString, setDisplayedString] = useState(''); // State to hold the displayed string

  const handleInputChange = (event) => {
    // Update inputText state when input field changes
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    // Set displayedString state to the current inputText when button is clicked

    const favoriteCharacterSentence = `${inputText} is saved as your favorite character`;
    setDisplayedString(favoriteCharacterSentence);
  };

  return (
    <div>
      <input
        className='loadbar'
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter favorite character name..."
      />
      <button className='loadbutton' onClick={handleButtonClick}>Save Character</button>
      <p>{displayedString}</p>
    </div>
  );
};

export default InputDisplayButton;