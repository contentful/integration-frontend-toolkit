import { useEffect } from "react";
import { useDebounce } from "usehooks-ts";

import { TextInput } from "@contentful/f36-components";

import type { SearchFacet, SearchParams } from "./SearchBar.types";
import useSearchReducer from "./useSearchReducer";

export interface SearchBarProps {
  contentTypes: SearchFacet[];
  filterFacets: SearchFacet[];
  onSearch: (searchParams: SearchParams) => void;
  searchTitle: string;
  placeholder: string;
}

const SearchBar = ({
  contentTypes,
  filterFacets,
  onSearch,
  searchTitle,
  placeholder,
}: SearchBarProps) => {
  const initialState: SearchParams = {
    selectedContentType: contentTypes[0].value,
    searchValue: "",
    selectedFilterFacets: [] as SearchFacet[],
  };

  const { searchState, onSearchInput } = useSearchReducer(initialState);

  const searchDebounce = useDebounce(searchState, 300);

  const handleSearch = () => {
    onSearch(searchState);
  };

  useEffect(handleSearch, [searchDebounce]);
  return (
    <TextInput
      id="search-input"
      type="text"
      value={searchState.searchValue}
      placeholder={placeholder}
      title={searchTitle || "Search"}
      aria-label={searchTitle || "Search"}
      onChange={onSearchInput}
    ></TextInput>
  );
};

export default SearchBar;
