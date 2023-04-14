import type { Meta, StoryObj } from '@storybook/react';

import EntityCard from './EntityCard';


const meta: Meta<typeof EntityCard> = {
    title: 'General/EntityCard',
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
    title: 'My Awesome Title',
    description: 'My Awesome Description',
    entityType: 'Entry',
    contentType: 'Blog'
}

export const EntityCardLoading: Story = {};

EntityCardLoading.args = {
    title: 'My Awesome Title',
    description: 'My Awesome Description',
    entityType: 'Product',
    contentType: 'Blog',
    loading: true
}

export const EntityCardMissing: Story = {};

EntityCardMissing.args = {
    contentType: 'Blog',
    entityType: 'Product'
}

export const EntityCardWithThumbnail: Story = {};

EntityCardWithThumbnail.args = {
    title: 'My Awesome Title',
    description: 'My Awesome Description',
    entityType: 'Category',
    contentType: 'Blog',
    thumbnail: 'https://fastly.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk'
}



export default meta;
