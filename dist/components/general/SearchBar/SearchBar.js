import { jsx as s } from '../../../_virtual/jsx-runtime.js';
import { useEffect as i } from 'react';
import '../../../node_modules/usehooks-ts/dist/esm/useCopyToClipboard/useCopyToClipboard.js';
import u from '../../../node_modules/usehooks-ts/dist/esm/useDebounce/useDebounce.js';
import '../../../node_modules/usehooks-ts/dist/esm/useFetch/useFetch.js';
import { TextInput as p } from '@contentful/f36-components';
import m from './useSearchReducer.js';
const T = (a) => {
  const { groupFilters: e, filterFacets: S, onSearch: c, searchTitle: r, placeholder: o } = a,
    h = {
      selectedGroupFilter: e != null && e.length ? e[0].value : '',
      searchValue: '',
      selectedFilterFacets: [],
    },
    { searchState: t, onSearchInput: l } = m(h),
    n = u(t, 300);
  return (
    i(() => {
      c(t);
    }, [n]),
    s(p, {
      id: 'search-input',
      type: 'text',
      value: t.searchValue,
      placeholder: o || 'Search',
      title: r || 'Search',
      'aria-label': r || 'Search',
      onChange: l,
    })
  );
};
export { T as default };
