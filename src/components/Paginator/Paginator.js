import React from 'react';
import './Paginator.scss';

const Paginator = ({ onPrevButtonClick, onNextButtonClick}) => (
  <div className="Paginator">
    <button className="Btn" onClick={onPrevButtonClick}>prev page</button>
    <button className="Btn" onClick={onNextButtonClick}>next page</button>
  </div>
);

export default Paginator;
