import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@contentful/f36-components';

import LocalHostWarning from './LocalHostWarning.js';

const meta: Meta<typeof LocalHostWarning> = {
  title: 'General/LocalHostWarning',
  component: LocalHostWarning,
  decorators: [
    (Story) => (
      <Paragraph>
        <Story />
      </Paragraph>
    ),
  ],
};

type Story = StoryObj<typeof LocalHostWarning>;

export const Primary: Story = {};

export default meta;
