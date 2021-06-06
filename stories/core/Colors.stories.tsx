import React from 'react';
import { Story, Meta } from '@storybook/react';

import Colors from '../components/Colors';

export default {
  title: 'Core/Colors',
  component: Colors,
} as Meta;

const Template: Story = () => <Colors />;

export const Default = Template.bind({});
