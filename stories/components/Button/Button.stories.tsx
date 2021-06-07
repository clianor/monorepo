import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@design-system/ui';
import SizeTemplate from './ButtonSize';
import LoadingTemplate from './ButtonLoading';
import DisabledTemplate from './ButtonDisabled';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Size = SizeTemplate.bind({});

export const Loading = LoadingTemplate.bind({});
Loading.args = {
  label: 'Loading...',
  loading: true,
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  label: 'Disabled...',
  disabled: true,
};
