import React, { useState } from 'react';
import './Dial.css'; 

const Dial = ({ onOptionSelect }) => {
    const options = ["ABOUT ME", "HOME", "PROJECTS", "EXPERIENCE", "COOL THINGS"];
    const reference = ["about", "home", "projects", "experience", "coolthings"];
    const [selectedOption, setSelectedOption] = useState(1);
    const radius = 300;
  
    const handleSelectOption = (index) => {
      setSelectedOption(index);
      onOptionSelect(reference[index]);
    };
  
    return (
      <div className="dial-menu">
        <div className="dial">
          {options.map((option, index) => {
            const angle = 20 * (index - selectedOption);
            const adjustedRadius = index - selectedOption;
            return (
              <button
                key={index}
                className={`dial-option ${index === selectedOption ? 'selected' : ''}`}
                onClick={() => handleSelectOption(index)}
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius - adjustedRadius * .4}px)`,
                  transformOrigin: '0 center'
                }}
              >
                <span className='dot'></span>
                <div className="optionsBtnDiv" style={{ transform: `rotate(${-angle}deg) translateX(${radius-250}px)` }}>
                  {option}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

export default Dial;