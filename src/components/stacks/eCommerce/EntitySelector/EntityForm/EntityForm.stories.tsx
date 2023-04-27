import type { Meta, StoryObj } from '@storybook/react';

import EntityForm from './EntityForm';
import { Entity, SELECT_TYPE } from '../Entity.types';

interface Product extends Entity {
    sku?: 'someSkuId'
}

interface ProductVariant extends Entity {
    variant_id?: 'someVariantId'
}

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

const defaultProductVariantList: ProductVariant[] = [
    {
        ...defaultProductVariant,
    },
    {
        title: '',
        description: '',
        entityType: 'Product Variant',
    },
    {
        title: 'My Awesome Grey Sweats',
        description: 'My Awesome Grey Sweats Description',
        entityType: 'Product Variant',
        thumbnail: 'https://fastly.picsum.photos/id/666/200/200.jpg?hmac=keuaJ7nJC5hkHIEyee1b6jdEMbHBZbozYQ9NClt2_lk'
    },
    {
        title: 'My Awesome Red Hat',
        description: 'My Awesome Red Hat Description',
        entityType: 'Product Variant',
    },
]

const meta: Meta<typeof EntityForm> = {
    title: 'Stacks/Ecommerce/EntitySelector/EntityForm',
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
    selectType: SELECT_TYPE.MULTIPLE,
    onCancel: () => { console.log('cancelled') },
    onSubmit: () => { console.log('submitted') }
}

export const EntityFormVariants: Story = {};

EntityFormVariants.args = {
    entityType: 'Product Variant',
    list: defaultProductVariantList,
    selectType: SELECT_TYPE.MULTIPLE,
    onCancel: () => { console.log('cancelled') },
    onSubmit: (selected) => { console.log(selected) }
}

export const EntityFormSingleSelect: Story = {};

EntityFormSingleSelect.args = {
    entityType: 'Product',
    list: defaultProductVariantList,
    selectType: SELECT_TYPE.MULTIPLE,
    onCancel: () => { console.log('cancelled') },
    onSubmit: (selected) => { console.log(selected) }
}

export default meta;
