import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";
import type { SearchParams } from "./SearchBar.types";

export default {
  title: "Stacks/Common/SearchBar",
  component: SearchBar,
} as Meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

Default.args = {
  contentTypes: [
    { label: "All", value: "all" },
    { label: "ContentType 2", value: "contentType2" },
    { label: "ContentType 3", value: "contentType3" },
  ],
  filterFacets: [
    {
      label: "Filter by 1",
      value: "1",
    },
    {
      label: "Filter by 2",
      value: "2",
    },
  ],
  onSearch: (searchParams: SearchParams) => {
    console.log("searchParams", searchParams);
  },
  searchTitle: "",
  placeholder: "Search Placeholder Text",
};
