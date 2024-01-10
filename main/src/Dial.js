import React, { useState } from 'react';
import './Dial.css'; 

const Dial = () => {
    const options = ["ABOUT ME", "HOME", "EXPERIENCE", "PROJECTS", "COOL THINGS"];
    const [selectedOption, setSelectedOption] = useState(1);
    // The radius of the semi-circle where the dots will be placed
    const radius = 300;
  
    const handleSelectOption = (index) => {
      setSelectedOption(index);
      // Additional logic for option selection, like navigation, can be added here
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