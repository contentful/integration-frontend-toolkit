import type { SearchFacet, SearchParams } from './SearchBar.types';
export interface SearchBarProps {
  groupFilters?: SearchFacet[];
  filterFacets?: SearchFacet[];
  onSearch: (searchParams: SearchParams) => void;
  searchTitle?: string;
  placeholder?: string;
}
/**
 * This component will generate search parameters based on user input and call the onSearch function.
 * It is up to the parent component to handle the search logic.
 *
 * Group filters are used to filter the search results by a specific group or 'type'.
 * Filter facets will be used to filter the search results by a specific facet
 */
declare const SearchBar: (props: SearchBarProps) => import('react/jsx-runtime').JSX.Element;
export default SearchBar;
//# sourceMappingURL=SearchBar.d.ts.map
