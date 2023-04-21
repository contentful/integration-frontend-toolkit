import type { Meta, StoryObj } from '@storybook/react';

import EntityForm from './EntityForm';
import { Entity } from '../Entity.types';

interface Product extends Entity { }

interface ProductVariant extends Entity { }

interface Collection extends Entity { }

const defaultProduct: Product = {
    entityType: 'Product',
    title: 'My Awesome T-Shirt',
    description: 'My Awesome Product Description',
}

const defaultProductVariant: ProductVariant = {
    entityType: 'Product Variant',
    title: 'My Awesome Blue T-Shirt',
    description: 'My Awesome Shirt',
}

const defaultCollection: Collection = {
    entityType: 'Collection',
    title: 'Shirts',
    description: 'My Awesome Shirts'
}

const defaultList: Product[] = [
    {
        ...defaultProduct,
    },
    {
        title: '',
        description: '',
        entityType: 'Product',
    },
    {
        title: 'My Awesome Sweats',
        description: 'My Awesome Sweats Description',
        entityType: 'Product',
        thumbnail: 'https://fastly.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk'
    },
    {
        title: 'My Awesome Hat',
        description: 'My Awesome Hat Description',
        entityType: 'Product',
    },
]

const meta: Meta<typeof EntityForm> = {
    title: 'General/EntityForm',
    component: EntityForm,
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

type Story = StoryObj<typeof EntityForm>;

export const EntityFormDefault: Story = {};

EntityFormDefault.args = {
    entityType: 'Product',
    list: defaultList,
    onCancel: () => { console.log('cancelled') },
    onSubmit: () => { console.log('submitted') }
}

export default meta;
