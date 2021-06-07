import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '@design-system/ui';

const SizeTemplate: Story<ButtonProps> = (args) => {
  return (
    <div className='space-x-2'>
      <Button label='Small' size='sm' />
      <Button label='Base' size='base' />
      <Button label='Large' size='lg' />
    </div>
  );
};

export default SizeTemplate;
