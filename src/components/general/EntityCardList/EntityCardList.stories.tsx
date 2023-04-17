import type { Meta, StoryObj } from '@storybook/react';

import EntityCardList from './EntityCardList';

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


export default meta;
