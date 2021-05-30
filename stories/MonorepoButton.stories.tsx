import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MonorepoButton, MonorepoButtonProps } from '@design-system/ui';

export default {
  title: 'Example/MonorepoButton',
  component: MonorepoButton,
} as Meta;

const Template: Story<MonorepoButtonProps> = (args) => (
  <MonorepoButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'label ->',
  roll: true,
};
