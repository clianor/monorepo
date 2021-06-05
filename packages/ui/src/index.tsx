import React from 'react';
import { roll } from '@design-system/utils';
import './styles/styles.css';

export interface MonorepoButtonProps {
  label: string;
  roll?: true;
}

export const MonorepoButton = (props: MonorepoButtonProps): JSX.Element => {
  return (
    <button className='bg-green-500 px-5 py-3 font-medium tracking-wider border text-white hover:bg-green-600'>
      {props.label} {props.roll ? roll('1d20') : ''}
    </button>
  );
};

MonorepoButton.displayName = 'MonorepoButton';
