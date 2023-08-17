import { jsxs as o, jsx as C } from '../../../../../_virtual/jsx-runtime.js';
import { Note as l } from '@contentful/f36-components';
import { styles as c } from './EntityCardList.styles.js';
import E from '../EntityCard/EntityCard.js';
import { SELECT_TYPE as m } from '../Entity.types.js';
const v = (y) => {
  const {
      entityType: i,
      list: r,
      loading: p,
      error: n,
      selected: a,
      selectType: s,
      onSelect: d,
    } = y,
    u = (t) => a.findIndex((e) => e.title === t.title) > -1,
    f = () => (s === m.SINGLE ? !a[0].title : s === m.MULTIPLE);
  return o('div', {
    className: c.root,
    id: 'EntityCardList',
    children: [
      n &&
        o(l, {
          variant: 'negative',
          'date-test-id': 'cards-error',
          children: ["We're sorry, but no ", i.toLowerCase(), 's could be loaded.'],
        }),
      r.length === 0 &&
        o(l, {
          variant: 'negative',
          'data-test-id': 'no-cards',
          children: ['There are no ', i.toLowerCase(), 's to show.'],
        }),
      !n &&
        r.length > 0 &&
        r.map((t, e) =>
          C(
            E,
            {
              className: `${c.entityCard} entity-card-${e}`,
              'data-test-id': 'entity-card',
              onClick: () => (f() ? d && d(t) : null),
              isSelected: u(t),
              loading: p,
              ...t,
            },
            e
          )
        ),
    ],
  });
};
export { v as default };
