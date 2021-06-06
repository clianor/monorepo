import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@design-system/ui';
import SizeTemplate from './ButtonSize';
import LoadingTemplate from './ButtonLoading';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'button',
};

export const Size = SizeTemplate.bind({});
export const Loading = LoadingTemplate.bind({});
