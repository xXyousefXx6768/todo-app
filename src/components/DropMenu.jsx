import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../styles/dropmenu.css';

function DropdownSelect({ register, errors }) {
  const [selectedOption, setSelectedOption] = useState('');

  const categories = ['work', 'skills', 'housework', 'social', 'learning'];

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <DropdownButton
        id="dropdown-basic-button"
        title={selectedOption || 'Select Category'}
        onSelect={handleSelect}
      >
        {categories.map((category, index) => (
          <Dropdown.Item key={index} eventKey={category}>
            {category}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {/* Hidden input to store the selected value */}
      <input
        type="hidden"
        value={selectedOption}
        {...register('taskCategory', { required: 'Task category is required' })}
      />
      {errors.taskCategory && (
        <span className="text-danger">
          {errors.taskCategory.message}
        </span>
      )}
    </div>
  );
}

export default DropdownSelect;
