export declare enum SearchActionTypes {
  SET_SEARCH = 0,
  SET_GROUP_FILTER = 1,
  SET_FILTER_FACETS = 2,
}
export interface SearchFacet {
  label: string;
  value: string;
}
export interface SearchParams {
  selectedGroupFilter: string;
  searchValue: string;
  selectedFilterFacets: SearchFacet[];
}
export interface SetSearchAction {
  type: SearchActionTypes.SET_SEARCH;
  payload: string;
}
export interface SetGroupFilterAction {
  type: SearchActionTypes.SET_GROUP_FILTER;
  payload: string;
}
export interface SetFilterFacetsAction {
  type: SearchActionTypes.SET_FILTER_FACETS;
  payload: SearchFacet[];
}
export type SearchReducerAction = SetSearchAction | SetGroupFilterAction | SetFilterFacetsAction;
//# sourceMappingURL=SearchBar.types.d.ts.map
