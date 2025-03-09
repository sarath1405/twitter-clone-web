import React, { useEffect, useState } from "react";
import "./dialog.scss";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (selectedOption: string | null) => void;
  optionProp: string | null;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, onSave, optionProp }) => {
  const options = ["Option 1", "Option 2", "Option 3"];  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    setSelectedOption(optionProp);
  }, [optionProp]);

  const handleClose = () => {
    setSelectedOption(optionProp);
    onClose();
  }

  const handleSelectOption = (option: string) => {
    if(selectedOption === option) {
      setSelectedOption(null);
    }
    else setSelectedOption(option);
  }

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-header">Select an option</div>
        <div className="options">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="dialog-actions">
          <button className="cancel-btn" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="save-btn"
            onClick={() => onSave(selectedOption)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
