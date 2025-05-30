import { useEffect } from 'react';
import { useDebounce } from 'usehooks-ts';

import { TextInput } from '@contentful/f36-components';

import type { SearchFacet, SearchParams } from './SearchBar.types';
import useSearchReducer from './useSearchReducer';

export interface SearchBarProps {
  groupFilters?: SearchFacet[];
  filterFacets?: SearchFacet[];
  onSearch: (searchParams: SearchParams) => void;
  searchTitle?: string;
  placeholder?: string;
  isDisabled?: boolean;
}

/**
 * This component will generate search parameters based on user input and call the onSearch function.
 * It is up to the parent component to handle the search logic.
 *
 * Group filters are used to filter the search results by a specific group or 'type'.
 * Filter facets will be used to filter the search results by a specific facet
 */
const SearchBar = (props: SearchBarProps) => {
  const {
    groupFilters,
    onSearch,
    searchTitle,
    placeholder,
    isDisabled = false,
  } = props;

  const initialState: SearchParams = {
    selectedGroupFilter: !!groupFilters?.length ? groupFilters[0].value : '',
    searchValue: '',
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
      isDisabled={isDisabled}
      value={searchState.searchValue}
      placeholder={placeholder || 'Search'}
      title={searchTitle || 'Search'}
      aria-label={searchTitle || 'Search'}
      onChange={onSearchInput}></TextInput>
  );
};

export default SearchBar;
