import type { Meta, StoryObj } from '@storybook/react';

import EntityForm from './EntityForm';

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

const meta: Meta<typeof EntityForm> = {
    title: 'General/EntityForm',
    component: EntityForm,
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

type Story = StoryObj<typeof EntityForm>;

export const EntityFormDefault: Story = {};

EntityFormDefault.args = {
    entityType: 'Entry',
    list: defaultList
}

export default meta;
