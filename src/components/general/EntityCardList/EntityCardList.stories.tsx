import type { Meta, StoryObj } from '@storybook/react';

import EntityCardList from './EntityCardList';

const defaultData = {
    title: 'My Awesome Title',
    description: 'My Awesome Description',
    contentType: 'Blog'
}

const defaultList = [
    {
        ...defaultData,
        entityType: 'Entry',
    },
    {
        contentType: 'Blog',
        entityType: 'Product',
    },
    {
        ...defaultData,
        entityType: 'Entry',
        thumbnail: 'https://fastly.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk'
    },
    {
        ...defaultData,
        entityType: 'Page',
    },
]

const meta: Meta<typeof EntityCardList> = {
    title: 'General/EntityCardList',
    component: EntityCardList,
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

type Story = StoryObj<typeof EntityCardList>;

export const EntityCardListDefault: Story = {};

EntityCardListDefault.args = {
    entityType: 'Entry',
    list: defaultList
}

export const EntityCardListLoading: Story = {};

EntityCardListLoading.args = {
    entityType: 'Entry',
    list: defaultList,
    loading: true
}

export const EntityCardListFailed: Story = {};

EntityCardListFailed.args = {
    entityType: 'Product',
    list: defaultList,
    error: true
}

export const EntityCardListNone: Story = {};

EntityCardListNone.args = {
    entityType: 'Card',
    list: []
}

export default meta;
