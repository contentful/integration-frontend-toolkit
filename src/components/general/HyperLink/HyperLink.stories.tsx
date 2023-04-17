import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@contentful/f36-components';

import HyperLink from './HyperLink';

const meta: Meta<typeof HyperLink> = {
  title: 'General/HyperLink',
  component: HyperLink,
  // important that this is wrapped in a Contentful styled component so the rest of the text can inherit the styling
  decorators: [
    (Story) => (
      <Paragraph>
        <Story />
      </Paragraph>
    ),
  ],
};

type Story = StoryObj<typeof HyperLink>;

export const Primary: Story = {};

Primary.args = {
  body: 'Please contact support if you are having issues.',
  substring: 'contact support',
};

export default meta;
