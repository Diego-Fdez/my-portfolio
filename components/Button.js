import React from 'react';

const Button = ({ title, marginTop }) => {
  return (
    <button className={`button-53 bg-custom text-custom2 ${marginTop} z-10`}>
      {title}
    </button>
  );
};

export default Button;
