import React from 'react';

const TogglePrice = ({ onToggleSort, isAccendingSort }) => (
  <button
    className="Btn Btn--toggle"
    onClick={onToggleSort}>Price sorted: {isAccendingSort ? 'asc' : 'desc'}
  </button>
);

export default TogglePrice;
