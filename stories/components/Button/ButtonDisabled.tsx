import React from 'react';
import { Button } from '@design-system/ui';

const DisabledTemplate: React.FC = () => {
  return (
    <div className='space-x-2'>
      <Button label='Disabled...' disabled />
    </div>
  );
};

export default DisabledTemplate;
