import { ChangeEvent } from 'react';
import { SearchParams } from './SearchBar.types';
declare const useSearchReducer: (initialState: SearchParams) => {
  searchState: SearchParams;
  onSearchInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onFilterChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onGroupFilterChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};
export default useSearchReducer;
