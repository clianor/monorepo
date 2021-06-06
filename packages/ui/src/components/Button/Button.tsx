import React from 'react';

import { Loading } from '../Loading';

export type ButtonProps = {
  label: string;
  size?: 'sm' | 'base' | 'lg';
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, size, loading }) => {
  return (
    <button
      className={`text-${size} text-white bg-green-500 px-5 py-3 font-medium hover:bg-green-600`}>
      <span className='flex items-center gap-2'>
        {loading && <Loading />}
        {label}
      </span>
    </button>
  );
};

Button.defaultProps = {
  label: 'Button',
  size: 'base',
};

export default Button;
