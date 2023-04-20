import { ChangeEvent, useCallback, useReducer } from 'react';
import {
  SearchActionTypes,
  SearchFacet,
  SearchParams,
  SearchReducerAction,
} from './SearchBar.types';

const { SET_SEARCH, SET_FILTER_FACETS, SET_GROUP_FILTER } = SearchActionTypes;

const searchReducer = (state: SearchParams, action: SearchReducerAction): SearchParams => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    case SET_FILTER_FACETS:
      return {
        ...state,
        selectedFilterFacets: action.payload,
      };
    case SET_GROUP_FILTER:
      return {
        ...state,
        selectedGroupFilter: action.payload,
      };
    default:
      return state;
  }
};

const useSearchReducer = (initialState: SearchParams) => {
  const [searchState, dispatch] = useReducer(searchReducer, initialState);

  const onSearchInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: SET_SEARCH, payload: e.target.value });
    },
    [dispatch]
  );

  const onFilterChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const newFacet: SearchFacet = {
        label: event.target.name,
        value: event.target.value,
      };

      const { selectedFilterFacets } = searchState;

      const existingIndex = selectedFilterFacets.findIndex((f) => f.label === newFacet.label);

      if (existingIndex > -1) {
        const updatedFacets = [...selectedFilterFacets];
        updatedFacets.splice(existingIndex, 1);

        dispatch({
          type: SET_FILTER_FACETS,
          payload: updatedFacets,
        });
      } else {
        dispatch({
          type: SET_FILTER_FACETS,
          payload: [...selectedFilterFacets, newFacet],
        });
      }
    },
    [dispatch]
  );

  const onGroupFilterChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      dispatch({ type: SET_GROUP_FILTER, payload: e.target.value });
    },
    [dispatch]
  );

  return {
    searchState,
    onSearchInput,
    onFilterChange,
    onGroupFilterChange,
  };
};

export default useSearchReducer;
