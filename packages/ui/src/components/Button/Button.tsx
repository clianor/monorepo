import React from 'react';
import { Loading } from '../Loading';
import './styles/index.scss';

export type ButtonProps = {
  label: string;
  size?: 'sm' | 'base' | 'lg';
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, size, disabled, loading }) => {
  return (
    <button
      className={`es-button text-${size} text-white bg-green-500 px-5 py-3 font-medium hover:bg-green-600 disabled:bg-green-200 disabled:cursor-not-allowed`}
      disabled={disabled}>
      <span className='flex items-center gap-2'>
        {loading && <Loading />}
        {label}
      </span>
    </button>
  );
};

Button.defaultProps = {
  size: 'base',
  disabled: false,
};

export default Button;
