import { jsx as s, jsxs as o } from '../../../../../_virtual/jsx-runtime.js';
import {
  Form as M,
  Flex as a,
  Text as B,
  TextLink as L,
  Button as b,
} from '@contentful/f36-components';
import { styles as n } from './EntityForm.styles.js';
import $ from '../../../../general/SearchBar/SearchBar.js';
import v from '../EntityCardList/EntityCardList.js';
import { SELECT_TYPE as D } from '../Entity.types.js';
import { useState as h } from 'react';
const z = (w) => {
  const { entityType: i, selectType: S, list: p, onCancel: C, onSubmit: m } = w,
    [x, T] = h(p),
    [c, f] = h({}),
    [e, d] = h([]),
    [u, g] = h(!1),
    E = (t) => {
      const y = t.searchValue
        ? x.filter((r) => r.title.toLowerCase().includes(t.searchValue.toLowerCase()))
        : p;
      T(y);
    },
    l = () => S === D.MULTIPLE,
    N = () => (l() ? e.length === 0 : !c.title),
    j = (t) => {
      if (!l()) {
        c.title === t.title ? f({}) : f(t);
        return;
      }
      if (e.length !== 0) {
        if (e.findIndex((r) => r.title === t.title) > -1) {
          const r = e.filter((F) => F.title !== t.title);
          d(r);
        } else d([...e, t]);
        return;
      }
      d([t]);
    },
    I = () => {
      l() ? d([]) : f({});
    },
    k = u ? (l() ? e : [c]) : x;
  return s('div', {
    className: n.root,
    id: 'EntityForm',
    children: o(M, {
      onSubmit: () => m && m(l() ? e : c),
      children: [
        s(a, {
          className: n.heading,
          alignItems: 'center',
          justifyContent: 'space-between',
          children: o(B, { id: 'search-input-helptext', children: ['Search for a ', i, ': '] }),
        }),
        s(a, {
          className: n.searchBox,
          'data-test-id': 'search-bar',
          children: s($, {
            onSearch: E,
            placeholder: `Type to search for ${i}s`,
            searchTitle: `Search for ${i}s`,
          }),
        }),
        o(a, {
          className: n.controls,
          alignItems: 'center',
          justifyContent: 'space-between',
          children: [
            s(L, {
              onClick: () => g(!u),
              children: u ? 'Show all' : `Show Selected ${l() ? '(' + e.length + ')' : ''}`,
            }),
            s(L, { onClick: I, children: 'Clear Selected' }),
          ],
        }),
        s(a, {
          className: n.searchResults,
          children: s(v, {
            entityType: i,
            list: k,
            selected: l() ? e : [c],
            onSelect: j,
            selectType: S,
          }),
        }),
        o(a, {
          className: n.actions,
          alignItems: 'center',
          justifyContent: 'flex-end',
          children: [
            C && s(b, { onClick: C, children: 'Cancel' }),
            m &&
              o(b, {
                variant: 'primary',
                type: 'submit',
                isDisabled: N(),
                children: ['Select ', i, 's'],
              }),
          ],
        }),
      ],
    }),
  });
};
export { z as default };
