import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({ icon }) => {
  return (
    <button className="social-button">
      <div className="circular-icon-container">
        <FontAwesomeIcon icon={icon} className="circular-icon" />
      </div>
    </button>
  );
};

export default SocialButton;
