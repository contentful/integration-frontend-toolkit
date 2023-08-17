import { jsx as i } from '../../../../../_virtual/jsx-runtime.js';
import { EntryCard as a } from '@contentful/f36-components';
import { styles as d } from './EntityCard.styles.js';
import m from './assets/placeholder.png.js';
const c = (t) => !t,
  f = (t) => {
    const { title: r, loading: e, entityType: s, thumbnail: n, className: o } = t,
      l = c(r)
        ? i(a, {
            status: 'deleted',
            title: `${s} Missing`,
            description: `This ${s} is missing. It may have been deleted or moved.`,
            isLoading: e,
            role: 'article',
            'data-test-id': 'missing',
          })
        : i(a, {
            ...t,
            isLoading: e,
            thumbnailElement: i('img', { alt: 'Thumbnail', src: n || m }),
            role: 'article',
          });
    return i('div', {
      className: `${d.root} ${o}`,
      'data-test-id': 'entity-card-single',
      children: l,
    });
  };
export { f as default };
