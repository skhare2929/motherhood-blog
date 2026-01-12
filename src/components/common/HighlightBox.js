import React from 'react';

const HighlightBox = ({ children, variant = 'info' }) => {
  return (
    <div className={`highlight-box ${variant}`}>
      {children}
    </div>
  );
};

export default HighlightBox;
