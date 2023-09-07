import React from 'react';

const Alert = ({ type, message }) => {
  const alertColor = type === 'success' ? 'success' : 'danger';

  return (
    <div className={`alert alert-${alertColor} mb-3 mx-3`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
