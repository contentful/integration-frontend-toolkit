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

export const Primary: Story = {};

Primary.args = {
    title: 'My Awesome Title',
    description: 'My Awesome Description',
    contentType: 'Blog',
}


export default meta;
