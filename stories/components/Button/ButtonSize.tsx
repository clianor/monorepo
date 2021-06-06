import React from 'react';
import { Button } from '@design-system/ui';

const SizeTemplate: React.FC = () => {
  return (
    <div className='space-x-2'>
      <Button label='Small' size='sm' />
      <Button label='Base' size='base' />
      <Button label='Large' size='lg' />
    </div>
  );
};

export default SizeTemplate;
