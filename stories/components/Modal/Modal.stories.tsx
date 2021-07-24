import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Modal, ModalProps } from '@design-system/ui';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
  title: '모달 예제',
  description: '모달 테스트입니다.\n줄바꿈 예시입니다.',
  cancellable: true,
};
