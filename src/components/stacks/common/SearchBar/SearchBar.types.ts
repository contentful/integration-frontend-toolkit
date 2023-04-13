export enum SearchActionTypes {
  SET_SEARCH,
  SET_CONTENT_TYPE,
  SET_FILTER_FACETS,
}

export interface SearchFacet {
  label: string;
  value: string;
}

export interface SearchParams {
  selectedContentType: string;
  searchValue: string;
  selectedFilterFacets: SearchFacet[];
}

export interface SetSearchAction {
  type: SearchActionTypes.SET_SEARCH;
  payload: string;
}

export interface SetContentTypeAction {
  type: SearchActionTypes.SET_CONTENT_TYPE;
  payload: string;
}

export interface SetFilterFacetsAction {
  type: SearchActionTypes.SET_FILTER_FACETS;
  payload: SearchFacet[];
}

export type SearchReducerAction =
  | SetSearchAction
  | SetContentTypeAction
  | SetFilterFacetsAction;
