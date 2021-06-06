import React, { useMemo } from 'react';

export type ButtonProps = {
  label: string;
  size?: 'sm' | 'base' | 'lg';
};

const Button: React.FC<ButtonProps> = ({ label, size }) => {
  return (
    <button
      className={`text-${size} text-white bg-green-500 px-5 py-3 font-medium hover:bg-green-600`}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Button',
  size: 'base',
};

export default Button;
