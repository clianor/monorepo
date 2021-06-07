import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '@design-system/ui';

const LoadingTemplate: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export default LoadingTemplate;
