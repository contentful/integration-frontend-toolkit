import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';
import type { SearchParams } from './SearchBar.types';

const meta: Meta<typeof SearchBar> = {
  title: 'General/SearchBar',
  component: SearchBar,
  decorators: [(Story) => <Story />],
};
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

Default.args = {
  groupFilters: [
    { label: 'All', value: 'all' },
    { label: 'GroupFilter 2', value: 'GroupFilter2' },
    { label: 'GroupFilter 3', value: 'GroupFilter3' },
  ],
  filterFacets: [
    {
      label: 'Filter by 1',
      value: '1',
    },
    {
      label: 'Filter by 2',
      value: '2',
    },
  ],
  onSearch: (searchParams: SearchParams) => {
    console.log('searchParams', searchParams);
  },
  searchTitle: '',
  placeholder: 'Search Placeholder Text',
  isDisabled: false,
};

export default meta;
