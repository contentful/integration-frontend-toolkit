import { useReducer as h, useCallback as s } from 'react';
import { SearchActionTypes as S } from './SearchBar.types.js';
const { SET_SEARCH: u, SET_FILTER_FACETS: o, SET_GROUP_FILTER: d } = S,
  g = (t, e) => {
    switch (e.type) {
      case u:
        return { ...t, searchValue: e.payload };
      case o:
        return { ...t, selectedFilterFacets: e.payload };
      case d:
        return { ...t, selectedGroupFilter: e.payload };
      default:
        return t;
    }
  },
  T = (t) => {
    const [e, a] = h(g, t),
      y = s(
        (r) => {
          a({ type: u, payload: r.target.value });
        },
        [a]
      ),
      i = s(
        (r) => {
          const n = { label: r.target.name, value: r.target.value },
            { selectedFilterFacets: l } = e,
            p = l.findIndex((c) => c.label === n.label);
          if (p > -1) {
            const c = [...l];
            c.splice(p, 1), a({ type: o, payload: c });
          } else a({ type: o, payload: [...l, n] });
        },
        [a]
      ),
      F = s(
        (r) => {
          a({ type: d, payload: r.target.value });
        },
        [a]
      );
    return { searchState: e, onSearchInput: y, onFilterChange: i, onGroupFilterChange: F };
  };
export { T as default };
