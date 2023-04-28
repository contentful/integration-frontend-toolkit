import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import EntityCard from './EntityCard';

const defaultData = {
  title: 'My Awesome Title',
  description: 'My Awesome Description',
};

const meta: Meta<typeof EntityCard> = {
  title: 'Stacks/Ecommerce/ProductPicker/EntityCard',
  component: EntityCard,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof EntityCard>;

export const EntityCardDefault: Story = {};

EntityCardDefault.args = {
  ...defaultData,
  entityType: 'Entry',
};

export const EntityCardLoading: Story = {};

EntityCardLoading.args = {
  ...defaultData,
  entityType: 'Product',
  loading: true,
};

export const EntityCardMissing: Story = {};

EntityCardMissing.args = {
  entityType: 'Product',
};

export const EntityCardWithThumbnail: Story = {};

EntityCardWithThumbnail.args = {
  ...defaultData,
  entityType: 'Category',
  thumbnail:
    'https://fastly.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk',
};

export default meta;
