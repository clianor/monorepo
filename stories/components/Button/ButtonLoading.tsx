import React from 'react';
import { Button } from '@design-system/ui';

const LoadingTemplate: React.FC = () => {
  return (
    <div className='space-x-2'>
      <Button label='Loading...' loading />
    </div>
  );
};

export default LoadingTemplate;
