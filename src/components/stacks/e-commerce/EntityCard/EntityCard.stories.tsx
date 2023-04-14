import type { Meta, StoryObj } from '@storybook/react';

import EntityCard from './EntityCard';


const meta: Meta<typeof EntityCard> = {
    title: 'Stacks/Ecommerce/EntityCard',
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

}

Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
};

export default meta;
